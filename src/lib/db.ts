import path from "node:path";
import fs from "node:fs";
import Database from "better-sqlite3";

// Create database directory if it doesn't exist
const dbDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, "marathon.db");

let dbInstance: Database.Database | null = null;

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

function initDb(): Database.Database {
  const db = new Database(dbPath);

  // Enable WAL mode for high performance and concurrency
  db.pragma("journal_mode = WAL");

  // Create registrations table if not exists
  db.exec(`
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
      emergency_name TEXT NOT NULL,
      emergency_phone TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
    CREATE INDEX IF NOT EXISTS idx_registrations_reg_id ON registrations(registration_id);
  `);

  // Migration: Ensure tshirt_size column exists for existing databases
  try {
    db.exec(`ALTER TABLE registrations ADD COLUMN tshirt_size TEXT DEFAULT 'M'`);
  } catch {
    // Column already exists
  }

  return db;
}

export function getDb(): Database.Database {
  if (!dbInstance) {
    dbInstance = initDb();
  }
  return dbInstance;
}

export function saveRegistration(record: RegistrationRecord): { success: boolean; id: string } {
  const db = getDb();

  const stmt = db.prepare(`
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
  `);

  stmt.run(
    record.registration_id,
    record.full_name,
    record.email,
    record.phone,
    record.age,
    record.gender || "prefer-not-to-say",
    record.tshirt_size || "M",
    record.address,
    record.emergency_name,
    record.emergency_phone
  );

  return { success: true, id: record.registration_id };
}

export function getRegistrationByEmail(email: string): RegistrationRecord | null {
  const db = getDb();
  const stmt = db.prepare(`SELECT * FROM registrations WHERE LOWER(email) = LOWER(?) LIMIT 1`);
  const row = stmt.get(email);
  return (row as RegistrationRecord) || null;
}

export function getRegistrationById(registrationId: string): RegistrationRecord | null {
  const db = getDb();
  const stmt = db.prepare(`SELECT * FROM registrations WHERE registration_id = ? LIMIT 1`);
  const row = stmt.get(registrationId);
  return (row as RegistrationRecord) || null;
}

export function upsertRegistration(record: RegistrationRecord): { success: boolean; id: string; isNew: boolean } {
  const db = getDb();
  const existing = getRegistrationByEmail(record.email);

  if (existing) {
    const stmt = db.prepare(`
      UPDATE registrations SET
        full_name = ?,
        phone = ?,
        age = ?,
        gender = ?,
        tshirt_size = ?,
        address = ?,
        emergency_name = ?,
        emergency_phone = ?
      WHERE id = ?
    `);

    stmt.run(
      record.full_name,
      record.phone,
      record.age,
      record.gender || "prefer-not-to-say",
      record.tshirt_size || existing.tshirt_size || "M",
      record.address,
      record.emergency_name,
      record.emergency_phone,
      existing.id
    );

    return { success: true, id: existing.registration_id, isNew: false };
  }

  saveRegistration(record);
  return { success: true, id: record.registration_id, isNew: true };
}

export function deleteRegistrationByEmail(email: string): boolean {
  const db = getDb();
  const stmt = db.prepare(`DELETE FROM registrations WHERE LOWER(email) = LOWER(?)`);
  const result = stmt.run(email);
  return result.changes > 0;
}

export function deleteRegistrationById(id: number | string): boolean {
  const db = getDb();
  const stmt = db.prepare(`DELETE FROM registrations WHERE id = ? OR registration_id = ?`);
  const result = stmt.run(id, String(id));
  return result.changes > 0;
}

export function getRegistrationStats() {
  const db = getDb();
  const totalRow = db.prepare(`SELECT COUNT(*) as count FROM registrations`).get() as { count: number } | undefined;
  const tshirtRows = db.prepare(`
    SELECT COALESCE(tshirt_size, 'M') as size, COUNT(*) as count 
    FROM registrations 
    GROUP BY tshirt_size 
    ORDER BY count DESC
  `).all() as Array<{ size: string; count: number }>;
  const genderRows = db.prepare(`
    SELECT COALESCE(gender, 'prefer-not-to-say') as gender, COUNT(*) as count 
    FROM registrations 
    GROUP BY gender
  `).all() as Array<{ gender: string; count: number }>;
  const avgAgeRow = db.prepare(`SELECT ROUND(AVG(age), 1) as avgAge FROM registrations`).get() as { avgAge: number | null } | undefined;

  return {
    total: totalRow?.count || 0,
    tshirtSizes: tshirtRows,
    genders: genderRows,
    avgAge: avgAgeRow?.avgAge || 0,
  };
}

export function getAllRegistrations(): RegistrationRecord[] {
  const db = getDb();
  const stmt = db.prepare(`SELECT * FROM registrations ORDER BY id DESC`);
  return stmt.all() as RegistrationRecord[];
}
