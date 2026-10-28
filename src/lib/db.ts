import { createClient, type Client } from "@libsql/client";
import crypto from "node:crypto";

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

export interface AdminUserRecord {
  id?: number;
  username: string;
  password_hash?: string;
  salt?: string;
  email?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
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

// ── PASSWORD HASHING UTILITIES ──
export function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const generatedSalt = salt || crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, generatedSalt, 100000, 64, "sha512").toString("hex");
  return { hash, salt: generatedSalt };
}

export function verifyPassword(password: string, hash: string, salt: string): boolean {
  try {
    const computedHash = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
    const bufA = Buffer.from(computedHash);
    const bufB = Buffer.from(hash);
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

// ── SCHEMA INITIALIZATION ──
let tableInitialized = false;

export async function ensureTable(): Promise<void> {
  if (tableInitialized) return;
  const client = getTursoClient();

  // 1. Registrations table
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
    // Indexes already exist
  }

  // 2. Admin Users table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      salt TEXT NOT NULL,
      email TEXT,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Auto-seed initial admin user if table is empty
  try {
    const countRes = await client.execute(`SELECT COUNT(*) as count FROM admin_users;`);
    const count = Number(countRes.rows[0]?.count || 0);
    if (count === 0) {
      const defaultUser = (process.env.ADMIN_USERNAME || "admin").trim();
      const defaultPass = (process.env.ADMIN_PASSWORD || "admin@rakesh15k").trim();
      const { hash, salt } = hashPassword(defaultPass);
      await client.execute({
        sql: `INSERT INTO admin_users (username, password_hash, salt, email, role) VALUES (?, ?, ?, ?, ?)`,
        args: [defaultUser, hash, salt, "erakesh.ray@gmail.com", "superadmin"],
      });
    }
  } catch (err) {
    console.warn("Could not check/seed default admin user:", err);
  }

  tableInitialized = true;
}

// ── ADMIN USER OPERATIONS ──

export async function getAdminUserByUsername(username: string): Promise<AdminUserRecord | null> {
  try {
    await ensureTable();
    const client = getTursoClient();
    const result = await client.execute({
      sql: `SELECT * FROM admin_users WHERE LOWER(username) = LOWER(?) LIMIT 1`,
      args: [username.trim()],
    });

    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return {
      id: Number(row.id),
      username: String(row.username),
      password_hash: String(row.password_hash),
      salt: String(row.salt),
      email: row.email ? String(row.email) : undefined,
      role: row.role ? String(row.role) : "admin",
      created_at: row.created_at ? String(row.created_at) : undefined,
      updated_at: row.updated_at ? String(row.updated_at) : undefined,
    };
  } catch (err) {
    console.error("Error in getAdminUserByUsername:", err);
    return null;
  }
}

export async function verifyAdminCredentialsFromDb(username?: string, password?: string): Promise<boolean> {
  if (!username || !password) return false;
  const cleanUser = username.trim();
  const cleanPass = password.trim();

  try {
    const user = await getAdminUserByUsername(cleanUser);
    if (user && user.password_hash && user.salt) {
      return verifyPassword(cleanPass, user.password_hash, user.salt);
    }

    // Fallback to environment variables if user is not yet in DB
    const expectedUser = (process.env.ADMIN_USERNAME || "admin").trim();
    const expectedPass = (process.env.ADMIN_PASSWORD || "admin@rakesh15k").trim();

    if (cleanUser.toLowerCase() === expectedUser.toLowerCase() && cleanPass === expectedPass) {
      // Auto-insert this admin into the database
      await createAdminUser({
        username: cleanUser,
        password: cleanPass,
        email: "erakesh.ray@gmail.com",
        role: "superadmin",
      });
      return true;
    }

    return false;
  } catch (err) {
    console.error("Error in verifyAdminCredentialsFromDb:", err);
    // Final fallback in case of network issue
    const expectedUser = (process.env.ADMIN_USERNAME || "admin").trim();
    const expectedPass = (process.env.ADMIN_PASSWORD || "admin@rakesh15k").trim();
    return cleanUser.toLowerCase() === expectedUser.toLowerCase() && cleanPass === expectedPass;
  }
}

export async function createAdminUser({
  username,
  password,
  email,
  role = "admin",
}: {
  username: string;
  password: string;
  email?: string;
  role?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    await ensureTable();
    const client = getTursoClient();

    const cleanUser = username.trim();
    if (!cleanUser || cleanUser.length < 3) {
      return { success: false, error: "Username must be at least 3 characters." };
    }
    if (!password || password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters." };
    }

    const existing = await getAdminUserByUsername(cleanUser);
    if (existing) {
      return { success: false, error: `Username "${cleanUser}" already exists.` };
    }

    const { hash, salt } = hashPassword(password);
    await client.execute({
      sql: `INSERT INTO admin_users (username, password_hash, salt, email, role) VALUES (?, ?, ?, ?, ?)`,
      args: [cleanUser, hash, salt, email?.trim() || null, role],
    });

    return { success: true };
  } catch (err) {
    console.error("Error in createAdminUser:", err);
    return { success: false, error: err instanceof Error ? err.message : "Failed to create admin user." };
  }
}

export async function updateAdminUserPassword(
  username: string,
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await ensureTable();
    const client = getTursoClient();

    const cleanUser = username.trim();
    if (!newPassword || newPassword.length < 6) {
      return { success: false, error: "New password must be at least 6 characters." };
    }

    const user = await getAdminUserByUsername(cleanUser);
    const { hash, salt } = hashPassword(newPassword);

    if (user) {
      await client.execute({
        sql: `UPDATE admin_users SET password_hash = ?, salt = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        args: [hash, salt, user.id!],
      });
      return { success: true };
    } else {
      // User wasn't in DB yet; insert them with new password
      await client.execute({
        sql: `INSERT INTO admin_users (username, password_hash, salt, email, role) VALUES (?, ?, ?, ?, ?)`,
        args: [cleanUser, hash, salt, "erakesh.ray@gmail.com", "admin"],
      });
      return { success: true };
    }
  } catch (err) {
    console.error("Error in updateAdminUserPassword:", err);
    return { success: false, error: err instanceof Error ? err.message : "Failed to update password." };
  }
}

export async function getAllAdminUsers(): Promise<
  Array<{ id: number; username: string; email?: string; role: string; created_at?: string }>
> {
  try {
    await ensureTable();
    const client = getTursoClient();
    const res = await client.execute(`SELECT id, username, email, role, created_at FROM admin_users ORDER BY id ASC`);
    return res.rows.map((r) => ({
      id: Number(r.id),
      username: String(r.username || ""),
      email: r.email ? String(r.email) : undefined,
      role: String(r.role || "admin"),
      created_at: r.created_at ? String(r.created_at) : undefined,
    }));
  } catch (err) {
    console.error("Error in getAllAdminUsers:", err);
    return [];
  }
}

export async function deleteAdminUser(idOrUsername: number | string): Promise<{ success: boolean; error?: string }> {
  try {
    await ensureTable();
    const client = getTursoClient();

    // Prevent deleting the default master admin account
    const res = await client.execute({
      sql: `SELECT username FROM admin_users WHERE id = ? OR username = ?`,
      args: [idOrUsername, String(idOrUsername)],
    });
    if (res.rows.length === 0) {
      return { success: false, error: "User not found." };
    }

    const username = String(res.rows[0].username);
    if (username.toLowerCase() === "admin") {
      return { success: false, error: "The primary 'admin' account cannot be deleted." };
    }

    await client.execute({
      sql: `DELETE FROM admin_users WHERE id = ? OR username = ?`,
      args: [idOrUsername, String(idOrUsername)],
    });
    return { success: true };
  } catch (err) {
    console.error("Error in deleteAdminUser:", err);
    return { success: false, error: "Failed to delete user." };
  }
}

// ── REGISTRATION RUNNER OPERATIONS ──

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
