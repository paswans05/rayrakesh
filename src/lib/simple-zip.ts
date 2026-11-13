/**
 * Pure TypeScript ZIP file builder using standard Node.js Buffer
 * No third-party packages needed (works on Vercel Serverless, Node.js runtime).
 * Format: PKZip specification with uncompressed (STORE) entries.
 */

export interface ZipFileInput {
  name: string;
  data: Buffer | Uint8Array;
}

// Precomputed CRC32 table
const crcTable = new Int32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[i] = c;
}

function calculateCrc32(buf: Uint8Array): number {
  let crc = ~0;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return ~crc >>> 0;
}

export function createZipArchive(files: ZipFileInput[]): Buffer {
  const localHeaders: Buffer[] = [];
  const centralHeaders: Buffer[] = [];
  let offset = 0;

  for (const file of files) {
    const nameBuf = Buffer.from(file.name, "utf8");
    const dataBuf = Buffer.isBuffer(file.data) ? file.data : Buffer.from(file.data);
    const fileCrc = calculateCrc32(dataBuf);

    // Current DOS date/time
    const now = new Date();
    const dosTime =
      ((now.getHours() & 0x1f) << 11) |
      ((now.getMinutes() & 0x3f) << 5) |
      ((now.getSeconds() >> 1) & 0x1f);
    const dosDate =
      (((now.getFullYear() - 1980) & 0x7f) << 9) |
      (((now.getMonth() + 1) & 0x0f) << 5) |
      (now.getDate() & 0x1f);

    // ── Local File Header (30 bytes + filename + data) ──
    const localHeader = Buffer.alloc(30 + nameBuf.length);
    localHeader.writeUInt32LE(0x04034b50, 0); // Local file header signature
    localHeader.writeUInt16LE(20, 4); // Minimum version needed to extract (2.0)
    localHeader.writeUInt16LE(0x0800, 6); // General purpose bit flag (UTF-8 filename)
    localHeader.writeUInt16LE(0, 8); // Compression method: 0 = Store (no compression)
    localHeader.writeUInt16LE(dosTime, 10); // File last modification time
    localHeader.writeUInt16LE(dosDate, 12); // File last modification date
    localHeader.writeUInt32LE(fileCrc, 14); // CRC-32 of uncompressed data
    localHeader.writeUInt32LE(dataBuf.length, 18); // Compressed size
    localHeader.writeUInt32LE(dataBuf.length, 22); // Uncompressed size
    localHeader.writeUInt16LE(nameBuf.length, 26); // File name length
    localHeader.writeUInt16LE(0, 28); // Extra field length
    nameBuf.copy(localHeader, 30);

    localHeaders.push(localHeader, dataBuf);

    // ── Central Directory File Header (46 bytes + filename) ──
    const centralHeader = Buffer.alloc(46 + nameBuf.length);
    centralHeader.writeUInt32LE(0x02014b50, 0); // Central directory header signature
    centralHeader.writeUInt16LE(20, 4); // Version made by (2.0)
    centralHeader.writeUInt16LE(20, 6); // Version needed to extract (2.0)
    centralHeader.writeUInt16LE(0x0800, 8); // UTF-8 filename flag
    centralHeader.writeUInt16LE(0, 10); // Compression method: 0 = Store
    centralHeader.writeUInt16LE(dosTime, 12);
    centralHeader.writeUInt16LE(dosDate, 14);
    centralHeader.writeUInt32LE(fileCrc, 16);
    centralHeader.writeUInt32LE(dataBuf.length, 20); // Compressed size
    centralHeader.writeUInt32LE(dataBuf.length, 24); // Uncompressed size
    centralHeader.writeUInt16LE(nameBuf.length, 28); // File name length
    centralHeader.writeUInt16LE(0, 30); // Extra field length
    centralHeader.writeUInt16LE(0, 32); // File comment length
    centralHeader.writeUInt16LE(0, 34); // Disk number where file starts
    centralHeader.writeUInt16LE(0, 36); // Internal file attributes
    centralHeader.writeUInt32LE(0, 38); // External file attributes
    centralHeader.writeUInt32LE(offset, 42); // Relative offset of local file header
    nameBuf.copy(centralHeader, 46);

    centralHeaders.push(centralHeader);

    offset += localHeader.length + dataBuf.length;
  }

  const centralDirOffset = offset;
  let centralDirSize = 0;
  for (const ch of centralHeaders) {
    centralDirSize += ch.length;
  }

  // ── End of Central Directory Record (22 bytes) ──
  const endRecord = Buffer.alloc(22);
  endRecord.writeUInt32LE(0x06054b50, 0); // End of central directory signature
  endRecord.writeUInt16LE(0, 4); // Number of this disk
  endRecord.writeUInt16LE(0, 6); // Disk where central directory starts
  endRecord.writeUInt16LE(files.length, 8); // Number of central directory records on this disk
  endRecord.writeUInt16LE(files.length, 10); // Total number of central directory records
  endRecord.writeUInt32LE(centralDirSize, 12); // Size of central directory
  endRecord.writeUInt32LE(centralDirOffset, 16); // Offset of start of central directory
  endRecord.writeUInt16LE(0, 20); // Comment length

  return Buffer.concat([...localHeaders, ...centralHeaders, endRecord]);
}
