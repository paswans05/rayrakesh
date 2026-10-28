import sharp from "sharp";

export interface RunnerPassData {
  registrationId: string;
  fullName: string;
  age: number | string;
  gender?: string;
  tshirtSize?: string;
  address: string;
  date?: string;
}

function escapeXml(unsafe: string): string {
  return String(unsafe || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Generates an official high-resolution PNG Runner Pass Card (900x520) using sharp.
 */
export async function generateRunnerPassPng(data: RunnerPassData): Promise<Buffer> {
  const regId = escapeXml(data.registrationId);
  const fullName = escapeXml(data.fullName);
  const age = escapeXml(String(data.age));
  const gender = escapeXml(data.gender || "Not specified");
  const tshirtSize = escapeXml(data.tshirtSize || "M");
  const address = escapeXml(data.address);
  const dateStr = escapeXml(data.date || new Date().toISOString().split("T")[0]);

  // Generate a mock vector barcode pattern
  const barcodeBars: string[] = [];
  const barWidths = [2, 4, 1, 3, 5, 2, 4, 1, 3, 2, 5, 1, 4, 2, 3, 1, 5, 2, 3, 4, 2, 1, 4, 3, 2, 5, 1, 3, 4, 2];
  let currentX = 520;
  for (let i = 0; i < barWidths.length; i++) {
    const w = barWidths[i];
    barcodeBars.push(`<rect x="${currentX}" y="295" width="${w}" height="42" fill="#CAA05C" opacity="0.85" />`);
    currentX += w + 3;
  }

  const svg = `
  <svg width="900" height="520" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Linear Gradient -->
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f1720" />
        <stop offset="40%" stop-color="#162330" />
        <stop offset="100%" stop-color="#0a1017" />
      </linearGradient>

      <!-- Gold Gradient -->
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#DFCD95" />
        <stop offset="50%" stop-color="#CAA05C" />
        <stop offset="100%" stop-color="#9A7B3E" />
      </linearGradient>

      <!-- Badge Red Gradient -->
      <linearGradient id="badgeRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#DC2626" />
        <stop offset="100%" stop-color="#991B1B" />
      </linearGradient>

      <!-- Bib Box Gradient -->
      <linearGradient id="bibBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#141E28" />
        <stop offset="100%" stop-color="#0B1117" />
      </linearGradient>
    </defs>

    <!-- Outer Card Shell -->
    <rect x="8" y="8" width="884" height="504" rx="28" fill="url(#cardBg)" stroke="#CAA05C" stroke-width="2.5" />
    <rect x="16" y="16" width="868" height="488" rx="20" fill="none" stroke="#CAA05C" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="6,4" />

    <!-- Top Header Bar -->
    <path d="M 18 42 Q 18 18 42 18 L 858 18 Q 882 18 882 42 L 882 92 L 18 92 Z" fill="#1C2B3A" />
    <line x1="18" y1="92" x2="882" y2="92" stroke="#CAA05C" stroke-width="2" />

    <!-- Event Title & Subhead -->
    <text x="46" y="54" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="26" fill="url(#goldGradient)" letter-spacing="3">RAKESH MARATHON</text>
    <text x="46" y="78" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="#E5E7EB" letter-spacing="2">OFFICIAL PARTICIPANT BIB PASS • 15 KM RACE</text>

    <!-- Race Badge -->
    <rect x="710" y="32" width="145" height="40" rx="20" fill="url(#badgeRed)" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3" />
    <text x="782" y="58" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="15" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">15 KM RACE</text>

    <!-- Left Content Section -->
    <!-- Participant Name -->
    <text x="46" y="135" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#CAA05C" letter-spacing="2">REGISTERED RUNNER</text>
    <text x="46" y="175" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="900" fill="#FFFFFF">${fullName}</text>

    <!-- Details Grid -->
    <g transform="translate(46, 205)">
      <!-- Row 1: Category & T-Shirt Size -->
      <text x="0" y="20" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#9CA3AF" letter-spacing="1.5">RACE CATEGORY</text>
      <text x="0" y="44" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">15 KM Single Distance</text>

      <text x="240" y="20" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#9CA3AF" letter-spacing="1.5">T-SHIRT SIZE</text>
      <text x="240" y="44" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#DFCD95">${tshirtSize} (Official Kit)</text>

      <!-- Row 2: Age/Gender & City -->
      <text x="0" y="96" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#9CA3AF" letter-spacing="1.5">AGE &amp; GENDER</text>
      <text x="0" y="120" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">${age} Yrs • ${gender}</text>

      <text x="240" y="96" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#9CA3AF" letter-spacing="1.5">CITY / LOCATION</text>
      <text x="240" y="120" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">${address}</text>

      <!-- Row 3: Registered Date -->
      <text x="0" y="168" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#9CA3AF" letter-spacing="1.5">REGISTRATION DATE</text>
      <text x="0" y="190" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#CAA05C">${dateStr}</text>
    </g>

    <!-- Vertical Perforated Separator -->
    <line x1="500" y1="110" x2="500" y2="420" stroke="#CAA05C" stroke-width="1.5" stroke-dasharray="6,6" stroke-opacity="0.35" />

    <!-- Right Content: BIB / Registration Box -->
    <rect x="525" y="125" width="330" height="150" rx="18" fill="url(#bibBg)" stroke="#CAA05C" stroke-width="2" />
    <text x="690" y="156" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="900" fill="#CAA05C" text-anchor="middle" letter-spacing="2">BIB / REGISTRATION NUMBER</text>
    
    <!-- Big Monospace BIB Number -->
    <text x="690" y="210" font-family="'Courier New', Courier, monospace" font-size="34" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">${regId}</text>
    
    <!-- Status Pill -->
    <rect x="590" y="235" width="200" height="28" rx="14" fill="#CAA05C" fill-opacity="0.18" stroke="#CAA05C" stroke-width="1.2" />
    <text x="690" y="254" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="bold" fill="#DFCD95" text-anchor="middle" letter-spacing="1">STATUS: CONFIRMED</text>

    <!-- Barcode Visual Area -->
    ${barcodeBars.join("\n    ")}
    <text x="670" y="354" font-family="'Courier New', Courier, monospace" font-size="11" fill="#9CA3AF" text-anchor="middle" letter-spacing="3">* ${regId} *</text>

    <!-- Collection Notice Box -->
    <rect x="525" y="375" width="330" height="48" rx="10" fill="#FFFFFF" fill-opacity="0.04" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1" />
    <text x="540" y="396" font-family="Arial, Helvetica, sans-serif" font-size="11" fill="#D1D5DB">✓ Present this digital pass or BIB ID</text>
    <text x="540" y="413" font-family="Arial, Helvetica, sans-serif" font-size="11" fill="#D1D5DB">  during race-kit and bib collection.</text>

    <!-- Bottom Footer Bar -->
    <line x1="30" y1="450" x2="870" y2="450" stroke="#CAA05C" stroke-width="1" stroke-opacity="0.25" />
    <text x="46" y="485" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#CAA05C">“Run Together. Build a Better Tomorrow.”</text>
    <text x="854" y="485" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="600" fill="#9CA3AF" text-anchor="end">Rakesh Ray Community Initiative • Parsa, Nepal</text>
  </svg>
  `;

  return sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();
}

