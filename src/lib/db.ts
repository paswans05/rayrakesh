import { createClient, type Client } from "@libsql/client";

// Global singleton to reuse client connection across Next.js invocations / hot-reloads
const globalForDb = globalThis as unknown as {
  tursoClient?: Client;
};

export interface RegistrationRecord {
  id?: number;
  registration_id: string;
  full_name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  tshirt_size?: string;
  address: string;
  emergency_name?: string;
  emergency_phone?: string;
  created_at?: string;
}

export function getTursoClient(): Client {
  if (!globalForDb.tursoClient) {
    const url = (process.env.TURSO_DATABASE_URL || "").trim();
    if (!url) {
      throw new Error("Missing TURSO_DATABASE_URL environment variable. Please configure Turso database.");
    }
    const authToken = (process.env.TURSO_AUTH_TOKEN || "").trim();

    globalForDb.tursoClient = createClient({
      url,
      authToken: authToken || undefined,
    });
  }
  return globalForDb.tursoClient;
}

let tableInitialized = false;

export async function ensureTable(): Promise<void> {
  if (tableInitialized) return;
  const client = getTursoClient();

  await client.execute(`
    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      registration_id TEXT UNIQUE NOT NULL,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      age INTEGER NOT NULL,
      gender TEXT,
      tshirt_size TEXT DEFAULT 'M',
      address TEXT NOT NULL,
      emergency_name TEXT,
      emergency_phone TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  try {
    await client.execute(`CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);`);
    await client.execute(`CREATE INDEX IF NOT EXISTS idx_registrations_reg_id ON registrations(registration_id);`);
  } catch {
    // Indexes already exist or unsupported
  }

  tableInitialized = true;
}

export async function saveRegistration(record: RegistrationRecord): Promise<{ success: boolean; id: string }> {
  await ensureTable();
  const client = getTursoClient();

  await client.execute({
    sql: `
      INSERT INTO registrations (
        registration_id,
        full_name,
        email,
        phone,
        age,
        gender,
        tshirt_size,
        address,
        emergency_name,
        emergency_phone
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    args: [
      record.registration_id,
      record.full_name,
      record.email,
      record.phone,
      record.age,
      record.gender || "prefer-not-to-say",
      record.tshirt_size || "M",
      record.address,
      record.emergency_name || "",
      record.emergency_phone || "",
    ],
  });

  return { success: true, id: record.registration_id };
}

export async function getRegistrationByEmail(email: string): Promise<RegistrationRecord | null> {
  try {
    await ensureTable();
    const client = getTursoClient();
    const result = await client.execute({
      sql: `SELECT * FROM registrations WHERE LOWER(email) = LOWER(?) LIMIT 1`,
      args: [email.trim()],
    });

    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return {
      id: Number(row.id),
      registration_id: String(row.registration_id || ""),
      full_name: String(row.full_name || ""),
      email: String(row.email || ""),
      phone: String(row.phone || ""),
      age: Number(row.age || 0),
      gender: String(row.gender || ""),
      tshirt_size: String(row.tshirt_size || "M"),
      address: String(row.address || ""),
      emergency_name: row.emergency_name ? String(row.emergency_name) : undefined,
      emergency_phone: row.emergency_phone ? String(row.emergency_phone) : undefined,
      created_at: row.created_at ? String(row.created_at) : undefined,
    };
  } catch (err) {
    console.error("Error in getRegistrationByEmail:", err);
    return null;
  }
}

export async function getRegistrationById(registrationId: string): Promise<RegistrationRecord | null> {
  try {
    await ensureTable();
    const client = getTursoClient();
    const result = await client.execute({
      sql: `SELECT * FROM registrations WHERE registration_id = ? LIMIT 1`,
      args: [registrationId],
    });

    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return {
      id: Number(row.id),
      registration_id: String(row.registration_id || ""),
      full_name: String(row.full_name || ""),
      email: String(row.email || ""),
      phone: String(row.phone || ""),
      age: Number(row.age || 0),
      gender: String(row.gender || ""),
      tshirt_size: String(row.tshirt_size || "M"),
      address: String(row.address || ""),
      emergency_name: row.emergency_name ? String(row.emergency_name) : undefined,
      emergency_phone: row.emergency_phone ? String(row.emergency_phone) : undefined,
      created_at: row.created_at ? String(row.created_at) : undefined,
    };
  } catch (err) {
    console.error("Error in getRegistrationById:", err);
    return null;
  }
}

export async function upsertRegistration(record: RegistrationRecord): Promise<{ success: boolean; id: string; isNew: boolean }> {
  await ensureTable();
  const client = getTursoClient();
  const existing = await getRegistrationByEmail(record.email);

  if (existing) {
    await client.execute({
      sql: `
        UPDATE registrations SET
          full_name = ?,
          phone = ?,
          age = ?,
          gender = ?,
          tshirt_size = ?,
          address = ?,
          emergency_name = ?,
          emergency_phone = ?
        WHERE id = ? OR registration_id = ?
      `,
      args: [
        record.full_name,
        record.phone,
        record.age,
        record.gender || "prefer-not-to-say",
        record.tshirt_size || existing.tshirt_size || "M",
        record.address,
        record.emergency_name || existing.emergency_name || "",
        record.emergency_phone || existing.emergency_phone || "",
        existing.id ?? 0,
        existing.registration_id,
      ],
    });

    return { success: true, id: existing.registration_id, isNew: false };
  }

  await saveRegistration(record);
  return { success: true, id: record.registration_id, isNew: true };
}

export async function deleteRegistrationById(id: number | string): Promise<boolean> {
  try {
    await ensureTable();
    const client = getTursoClient();
    const result = await client.execute({
      sql: `DELETE FROM registrations WHERE id = ? OR registration_id = ?`,
      args: [id, String(id)],
    });
    return (result.rowsAffected || 0) > 0;
  } catch (err) {
    console.error("Error in deleteRegistrationById:", err);
    return false;
  }
}

export async function getRegistrationStats() {
  try {
    await ensureTable();
    const client = getTursoClient();

    const [totalRes, tshirtRes, genderRes, avgAgeRes] = await Promise.all([
      client.execute(`SELECT COUNT(*) as count FROM registrations`),
      client.execute(`
        SELECT COALESCE(tshirt_size, 'M') as size, COUNT(*) as count 
        FROM registrations 
        GROUP BY tshirt_size 
        ORDER BY count DESC
      `),
      client.execute(`
        SELECT COALESCE(gender, 'prefer-not-to-say') as gender, COUNT(*) as count 
        FROM registrations 
        GROUP BY gender
      `),
      client.execute(`SELECT ROUND(AVG(age), 1) as avgAge FROM registrations`),
    ]);

    const total = Number(totalRes.rows[0]?.count || 0);
    const tshirtSizes = tshirtRes.rows.map((r) => ({
      size: String(r.size || "M"),
      count: Number(r.count || 0),
    }));
    const genders = genderRes.rows.map((r) => ({
      gender: String(r.gender || "prefer-not-to-say"),
      count: Number(r.count || 0),
    }));
    const avgAge = Number(avgAgeRes.rows[0]?.avgAge || 0);

    return {
      total,
      tshirtSizes,
      genders,
      avgAge,
    };
  } catch (err) {
    console.error("Error in getRegistrationStats:", err);
    return {
      total: 0,
      tshirtSizes: [],
      genders: [],
      avgAge: 0,
    };
  }
}

export async function getAllRegistrations(): Promise<RegistrationRecord[]> {
  try {
    await ensureTable();
    const client = getTursoClient();
    const res = await client.execute(`SELECT * FROM registrations ORDER BY id DESC`);
    return res.rows.map((r) => ({
      id: Number(r.id),
      registration_id: String(r.registration_id || ""),
      full_name: String(r.full_name || ""),
      email: String(r.email || ""),
      phone: String(r.phone || ""),
      age: Number(r.age || 0),
      gender: String(r.gender || ""),
      tshirt_size: String(r.tshirt_size || "M"),
      address: String(r.address || ""),
      emergency_name: r.emergency_name ? String(r.emergency_name) : undefined,
      emergency_phone: r.emergency_phone ? String(r.emergency_phone) : undefined,
      created_at: r.created_at ? String(r.created_at) : undefined,
    }));
  } catch (err) {
    console.error("Error in getAllRegistrations:", err);
    return [];
  }
}
