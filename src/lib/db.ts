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
  address: string;
  emergency_name: string;
  emergency_phone: string;
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
      address TEXT NOT NULL,
      emergency_name TEXT NOT NULL,
      emergency_phone TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
    CREATE INDEX IF NOT EXISTS idx_registrations_reg_id ON registrations(registration_id);
  `);

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
      address,
      emergency_name,
      emergency_phone
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    record.registration_id,
    record.full_name,
    record.email,
    record.phone,
    record.age,
    record.gender || "prefer-not-to-say",
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

export function getAllRegistrations(): RegistrationRecord[] {
  const db = getDb();
  const stmt = db.prepare(`SELECT * FROM registrations ORDER BY id DESC`);
  return stmt.all() as RegistrationRecord[];
}
