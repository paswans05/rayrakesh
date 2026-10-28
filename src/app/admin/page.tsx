"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { Button } from "@/components/ui/button";

interface RegistrationItem {
  id: number;
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

interface RegistrationStats {
  total: number;
  tshirtSizes: Array<{ size: string; count: number }>;
  genders: Array<{ gender: string; count: number }>;
  avgAge: number;
}

export default function AdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Data state
  const [registrations, setRegistrations] = useState<RegistrationItem[]>([]);
  const [stats, setStats] = useState<RegistrationStats | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sizeFilter, setSizeFilter] = useState("ALL");
  const [genderFilter, setGenderFilter] = useState("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<RegistrationItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Check existing session on mount
  const fetchRegistrations = useCallback(async () => {
    setIsLoadingData(true);
    try {
      const res = await fetch("/api/admin/registrations");
      if (res.status === 401) {
        setIsAuthenticated(false);
        setIsLoadingData(false);
        return;
      }
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        setRegistrations(data.registrations || []);
        setStats(data.stats || null);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoadingData(false);
    }
  }, []);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!username.trim() || !password.trim()) {
      setLoginError("Please enter both username and password.");
      return;
    }

    setIsLoggingIn(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || "Invalid username or password.");
        return;
      }

      setIsAuthenticated(true);
      fetchRegistrations();
    } catch {
      setLoginError("Failed to connect to authentication server.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      setIsAuthenticated(false);
      setRegistrations([]);
      setStats(null);
    }
  };

  const confirmDelete = async () => {
    if (!deleteCandidate) return;
    setIsDeleting(true);
    try {
      const res = await fetch("/api/admin/registrations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteCandidate.id || deleteCandidate.registration_id }),
      });

      const data = await res.json();
      if (data.success) {
        setRegistrations((prev) =>
          prev.filter(
            (r) =>
              r.id !== deleteCandidate.id &&
              r.registration_id !== deleteCandidate.registration_id
          )
        );
        if (data.stats) setStats(data.stats);
        setDeleteCandidate(null);
      } else {
        alert(data.error || "Failed to delete registration.");
      }
    } catch {
      alert("Failed to delete registration. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered registrations
  const filteredRegistrations = useMemo(() => {
    return registrations.filter((r) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        r.full_name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.phone.toLowerCase().includes(q) ||
        r.registration_id.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q);

      const matchesSize = sizeFilter === "ALL" || (r.tshirt_size || "M") === sizeFilter;
      const matchesGender =
        genderFilter === "ALL" ||
        (r.gender || "prefer-not-to-say").toLowerCase() === genderFilter.toLowerCase();

      return matchesSearch && matchesSize && matchesGender;
    });
  }, [registrations, searchQuery, sizeFilter, genderFilter]);

  // Sizes tally
  const sizeBreakdown = useMemo(() => {
    const counts: Record<string, number> = { S: 0, M: 0, L: 0, XL: 0, XXL: 0 };
    registrations.forEach((r) => {
      const size = (r.tshirt_size || "M").toUpperCase();
      counts[size] = (counts[size] || 0) + 1;
    });
    return counts;
  }, [registrations]);

  // Gender tally
  const genderBreakdown = useMemo(() => {
    let male = 0;
    let female = 0;
    let other = 0;
    registrations.forEach((r) => {
      const g = (r.gender || "").toLowerCase();
      if (g === "male") male++;
      else if (g === "female") female++;
      else other++;
    });
    return { male, female, other };
  }, [registrations]);

  // Export to CSV
  const handleExportCSV = () => {
    if (filteredRegistrations.length === 0) {
      alert("No registrations available to export.");
      return;
    }

    const headers = [
      "BIB ID",
      "Full Name",
      "Email Address",
      "Phone Number",
      "Age",
      "Gender",
      "T-Shirt Size",
      "City / Address",
      "Registration Date",
    ];

    const rows = filteredRegistrations.map((r) => [
      `"${r.registration_id}"`,
      `"${r.full_name.replace(/"/g, '""')}"`,
      `"${r.email}"`,
      `"${r.phone}"`,
      r.age,
      `"${r.gender}"`,
      `"${r.tshirt_size || "M"}"`,
      `"${r.address.replace(/"/g, '""')}"`,
      `"${r.created_at || ""}"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((row) => row.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `rakesh-marathon-registrations-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // ── LOADING STATE ──
  if (isAuthenticated === null && isLoadingData) {
    return (
      <div className="min-h-screen bg-[#070b12] flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <div className="size-12 border-3 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-mono text-slate-400">Loading Marathon Admin Portal...</p>
        </div>
      </div>
    );
  }

  // ── LOGIN VIEW ──
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070b12] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-4 transition-transform hover:scale-105">
              <Image src={logo} alt="Logo" width={170} height={42} className="h-10 w-auto mx-auto" priority />
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-3">
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Race Control Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Marathon Admin Login
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Sign in to manage runner registrations & T-shirt distribution
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[#0e1626]/80 border border-slate-800 rounded-3xl p-7 sm:p-9 backdrop-blur-xl shadow-2xl shadow-black/80">
            {loginError && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-3">
                <svg className="size-5 shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div className="flex-1 font-medium">{loginError}</div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Admin Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin"
                  autoFocus
                  required
                  className="w-full px-4 py-3 bg-[#080d16] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    className="w-full px-4 py-3 bg-[#080d16] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm pr-16 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer px-2 py-1"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  full
                  disabled={isLoggingIn}
                  className="font-bold shadow-lg shadow-amber-500/20 cursor-pointer bg-amber-500 hover:bg-amber-400 text-black"
                >
                  {isLoggingIn ? "Authenticating..." : "Sign In to Dashboard"}
                </Button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-800 text-center flex items-center justify-between text-xs text-slate-400">
              <Link href="/marathon" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                <span>← Public Marathon Page</span>
              </Link>
              <span className="font-mono text-[11px] text-slate-500">SQLite v3</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── DASHBOARD VIEW ──
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col font-sans">
      {/* ── TOP ADMIN NAV ── */}
      <header className="border-b border-slate-800/90 bg-[#0b121e]/95 backdrop-blur-xl sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Brand & DB Status */}
          <div className="flex items-center gap-3.5">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image src={logo} alt="Logo" width={130} height={32} className="h-7 w-auto" />
            </Link>
            <div className="h-5 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-white">
                Admin Control
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono font-semibold text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Turso libSQL
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/marathon"
              target="_blank"
              className="text-xs text-slate-400 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors hidden md:inline-flex items-center gap-1.5"
            >
              <span>View Public Page</span>
              <svg className="size-3 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>

            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={fetchRegistrations}
              disabled={isLoadingData}
              className="text-xs border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 cursor-pointer h-9 px-3.5"
            >
              <svg
                className={`size-3.5 mr-1.5 text-amber-400 ${isLoadingData ? "animate-spin" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              {isLoadingData ? "Syncing..." : "Sync DB"}
            </Button>

            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={handleExportCSV}
              className="text-xs bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25 cursor-pointer h-9 px-3.5 font-bold"
            >
              <svg className="size-3.5 mr-1.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export CSV ({filteredRegistrations.length})
            </Button>

            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={handleLogout}
              className="text-xs border-red-500/30 text-red-400 hover:bg-red-500/15 hover:border-red-500/50 cursor-pointer h-9 px-3"
            >
              <svg className="size-3.5 sm:mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* Title Banner */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-black uppercase tracking-wider">
                15 KM Edition
              </span>
              <span className="text-xs text-slate-400">Parsa, Madhesh Province, Nepal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              Runner Registrations & Kit Management
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Real-time organizer metrics, T-shirt inventory counts, and bib roster.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-[#0c1422] border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
              <span className="text-slate-500">Database:</span>
              <span className="text-amber-400 font-bold">Turso Cloud libSQL</span>
            </div>
          </div>
        </div>

        {/* ── 4 STAT CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Total Runners */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#0e1726] to-[#0a101a] border border-slate-800/80 shadow-lg overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Total Registrations</span>
              <div className="size-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-black text-white mt-3 font-mono">
              {stats?.total ?? registrations.length}
            </div>
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
              15 KM Verified Entries
            </p>
          </div>

          {/* Card 2: T-Shirt Kit Inventory */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#0e1726] to-[#0a101a] border border-slate-800/80 shadow-lg group hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>T-Shirt Kit Orders</span>
              <div className="size-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {(["S", "M", "L", "XL", "XXL"] as const).map((sz) => (
                <div
                  key={sz}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/70 text-xs font-mono flex items-center gap-1.5"
                >
                  <span className="font-black text-amber-400">{sz}</span>
                  <span className="text-white font-bold">{sizeBreakdown[sz] || 0}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Total kits required: <strong className="text-white font-mono">{registrations.length}</strong>
            </p>
          </div>

          {/* Card 3: Gender Split */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#0e1726] to-[#0a101a] border border-slate-800/80 shadow-lg group hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Gender Split</span>
              <div className="size-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
                  <path d="M12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 text-xs">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Male</div>
                <div className="text-lg font-black text-white font-mono">{genderBreakdown.male}</div>
              </div>
              <div className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 text-xs">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Female</div>
                <div className="text-lg font-black text-white font-mono">{genderBreakdown.female}</div>
              </div>
              {genderBreakdown.other > 0 && (
                <div className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 text-xs">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Other</div>
                  <div className="text-lg font-black text-white font-mono">{genderBreakdown.other}</div>
                </div>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-3">Participant demographics</p>
          </div>

          {/* Card 4: Age Demographics */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#0e1726] to-[#0a101a] border border-slate-800/80 shadow-lg group hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Average Age</span>
              <div className="size-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-black text-white mt-3 font-mono">
              {stats?.avgAge ? `${stats.avgAge} yrs` : "—"}
            </div>
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">Eligibility:</span> 16+ years single category
            </p>
          </div>

        </div>

        {/* ── SEARCH & FILTER CONTROLS ── */}
        <div className="p-4 rounded-2xl bg-[#0b121e] border border-slate-800 shadow-md space-y-3">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <svg className="size-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search by Runner Name, Email, Phone, BIB ID, or City..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-[#070b12] border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {/* T-Shirt Filter */}
              <div className="flex items-center gap-1 bg-[#070b12] p-1 rounded-xl border border-slate-800 text-xs">
                <span className="text-[11px] font-bold text-slate-400 px-2 uppercase">Size:</span>
                {(["ALL", "S", "M", "L", "XL", "XXL"] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSizeFilter(sz)}
                    className={`px-2 py-1 rounded-lg font-mono text-xs font-bold transition-colors cursor-pointer ${
                      sizeFilter === sz
                        ? "bg-amber-500 text-black shadow"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              {/* Gender Filter */}
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="px-3 py-2 bg-[#070b12] border border-slate-800 rounded-xl text-xs font-medium text-slate-300 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="ALL">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {(searchQuery || sizeFilter !== "ALL" || genderFilter !== "ALL") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSizeFilter("ALL");
                    setGenderFilter("ALL");
                  }}
                  className="text-xs text-amber-400 hover:text-amber-300 underline px-2 cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ── REGISTRATIONS TABLE ── */}
        <div className="bg-[#0b121e] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Table Header Bar */}
          <div className="px-5 py-4 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-black uppercase tracking-wide text-white">
                Registered Runners
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold">
                {filteredRegistrations.length}
              </span>
            </div>
            <span className="text-xs text-slate-400">
              Showing {filteredRegistrations.length} of {registrations.length} total
            </span>
          </div>

          {/* Table Element */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#080d16] text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 font-bold">BIB ID</th>
                  <th className="py-3.5 px-4 font-bold">Runner Name</th>
                  <th className="py-3.5 px-4 font-bold">Contact</th>
                  <th className="py-3.5 px-4 font-bold">Age & Gender</th>
                  <th className="py-3.5 px-4 font-bold">T-Shirt</th>
                  <th className="py-3.5 px-4 font-bold">Address / City</th>
                  <th className="py-3.5 px-4 font-bold">Registered On</th>
                  <th className="py-3.5 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-16 text-center text-slate-400">
                      <div className="max-w-sm mx-auto space-y-3">
                        <div className="size-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-slate-300">
                          {registrations.length === 0
                            ? "No runner registrations in database yet."
                            : "No registrations match your search/filter criteria."}
                        </p>
                        <p className="text-xs text-slate-500">
                          {registrations.length === 0
                            ? "Registrations submitted from the public marathon page will appear here immediately."
                            : "Try clearing your search query or changing filter pills above."}
                        </p>
                        {registrations.length === 0 && (
                          <div className="pt-2">
                            <Link
                              href="/marathon"
                              target="_blank"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold hover:bg-amber-500/25 transition-colors"
                            >
                              Open Marathon Registration Form →
                            </Link>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((runner) => {
                    const isCopied = copiedId === runner.registration_id;
                    const initials = runner.full_name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase();

                    return (
                      <tr
                        key={runner.id || runner.registration_id}
                        className="hover:bg-slate-900/60 transition-colors group"
                      >
                        {/* BIB ID */}
                        <td className="py-3.5 px-4 font-mono font-bold text-amber-400 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-black tracking-wider">
                              {runner.registration_id}
                            </span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(runner.registration_id)}
                              title="Copy BIB ID"
                              className="opacity-40 group-hover:opacity-100 hover:text-white transition-opacity cursor-pointer"
                            >
                              {isCopied ? (
                                <span className="text-[10px] text-emerald-400 font-bold">✓ Copied</span>
                              ) : (
                                <svg className="size-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </td>

                        {/* RUNNER NAME */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2.5">
                            <div className="size-8 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-600/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0">
                              {initials}
                            </div>
                            <div>
                              <div className="font-bold text-white leading-tight">
                                {runner.full_name}
                              </div>
                              <div className="text-[11px] text-slate-400 capitalize">
                                15 KM Single Distance
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* CONTACT */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-0.5">
                            <a
                              href={`mailto:${runner.email}`}
                              className="text-slate-300 hover:text-amber-400 hover:underline block truncate max-w-[200px]"
                            >
                              {runner.email}
                            </a>
                            <a
                              href={`tel:${runner.phone}`}
                              className="text-[11px] font-mono text-slate-400 hover:text-white block"
                            >
                              {runner.phone}
                            </a>
                          </div>
                        </td>

                        {/* AGE & GENDER */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="font-mono text-xs text-slate-200">
                            <strong>{runner.age}</strong> yrs
                          </div>
                          <div className="text-[11px] text-slate-400 capitalize">
                            {runner.gender || "Not specified"}
                          </div>
                        </td>

                        {/* T-SHIRT SIZE */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono font-bold text-xs">
                            {runner.tshirt_size || "M"}
                          </span>
                        </td>

                        {/* ADDRESS */}
                        <td className="py-3.5 px-4">
                          <span className="text-xs text-slate-300 truncate max-w-[180px] block" title={runner.address}>
                            {runner.address}
                          </span>
                        </td>

                        {/* REGISTERED AT */}
                        <td className="py-3.5 px-4 whitespace-nowrap text-xs font-mono text-slate-400">
                          {runner.created_at
                            ? new Date(runner.created_at).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "—"}
                        </td>

                        {/* ACTIONS */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => setDeleteCandidate(runner)}
                            className="text-xs text-red-400/80 hover:text-red-400 hover:bg-red-500/10 px-2.5 py-1.5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* ── DELETE CONFIRMATION MODAL ── */}
      {deleteCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[#0e1626] border border-red-500/30 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <div className="size-10 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-black text-white">Delete Registration</h3>
                <p className="text-xs text-slate-400">This action cannot be undone.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080d16] border border-slate-800 text-xs space-y-1">
              <div>
                <span className="text-slate-500">Runner:</span>{" "}
                <strong className="text-white">{deleteCandidate.full_name}</strong>
              </div>
              <div>
                <span className="text-slate-500">BIB ID:</span>{" "}
                <strong className="text-amber-400 font-mono">{deleteCandidate.registration_id}</strong>
              </div>
              <div>
                <span className="text-slate-500">Email:</span>{" "}
                <span className="text-slate-300">{deleteCandidate.email}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                size="default"
                disabled={isDeleting}
                onClick={() => setDeleteCandidate(null)}
                className="text-xs border-slate-700 hover:bg-slate-800 text-slate-300 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="default"
                size="default"
                disabled={isDeleting}
                onClick={confirmDelete}
                className="text-xs bg-red-600 hover:bg-red-500 text-white cursor-pointer font-bold"
              >
                {isDeleting ? "Deleting..." : "Confirm & Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER BAR ── */}
      <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500">
        Rakesh Ray Marathon 15K Administration Portal • Powered by Turso Cloud Database • Parsa, Nepal
      </footer>
    </div>
  );
}
