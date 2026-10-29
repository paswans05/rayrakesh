"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface RangoliAdminEntry {
  id: number;
  entry_id: string;
  full_name: string;
  email?: string;
  phone: string;
  address: string;
  title: string;
  description?: string;
  image_url: string;
  votes_count: number;
  status: "pending" | "approved" | "rejected";
  created_at?: string;
}

export interface RangoliAdminStats {
  totalEntries: number;
  totalVotes: number;
  topVoted: { title: string; votes: number; artist: string; entry_id: string } | null;
}

export default function AdminRangoliTab() {
  const [entries, setEntries] = useState<RangoliAdminEntry[]>([]);
  const [stats, setStats] = useState<RangoliAdminStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"votes" | "latest">("votes");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewEntry, setPreviewEntry] = useState<RangoliAdminEntry | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<RangoliAdminEntry | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const fetchRangoliData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/rangoli");
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setEntries(data.entries || []);
          setStats(data.stats || null);
        }
      }
    } catch (err) {
      console.error("Failed to fetch rangoli entries:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRangoliData();
  }, [fetchRangoliData]);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async () => {
    if (!deleteCandidate) return;
    setIsDeleting(true);
    try {
      const res = await fetch("/api/admin/rangoli", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteCandidate.id || deleteCandidate.entry_id }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setEntries((prev) => prev.filter((item) => item.entry_id !== deleteCandidate.entry_id));
        if (data.stats) setStats(data.stats);
        showNotification("success", `Entry #${deleteCandidate.entry_id} deleted successfully.`);
        setDeleteCandidate(null);
      } else {
        showNotification("error", data.error || "Failed to delete entry.");
      }
    } catch {
      showNotification("error", "Network error while deleting entry.");
    } finally {
      setIsDeleting(false);
    }
  };

  // Filter and sort entries
  const filteredEntries = useMemo(() => {
    let result = [...entries];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (e) =>
          e.full_name.toLowerCase().includes(q) ||
          e.title.toLowerCase().includes(q) ||
          e.address.toLowerCase().includes(q) ||
          e.phone.toLowerCase().includes(q) ||
          e.entry_id.toLowerCase().includes(q)
      );
    }

    if (sortBy === "votes") {
      result.sort((a, b) => b.votes_count - a.votes_count);
    } else {
      result.sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateB - dateA;
      });
    }

    return result;
  }, [entries, searchQuery, sortBy]);

  // Export CSV
  const handleExportCSV = () => {
    if (filteredEntries.length === 0) return;

    const headers = ["Rank", "Entry ID", "Artwork Title", "Artist Name", "Phone", "Email", "Address", "Votes Count", "Status", "Submitted At"];
    const rows = filteredEntries.map((e, idx) => [
      idx + 1,
      e.entry_id,
      `"${e.title.replace(/"/g, '""')}"`,
      `"${e.full_name.replace(/"/g, '""')}"`,
      e.phone,
      e.email || "",
      `"${e.address.replace(/"/g, '""')}"`,
      e.votes_count,
      e.status,
      e.created_at ? new Date(e.created_at).toISOString() : "",
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Rangoli-Festival-Entries-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3 text-sm animate-in fade-in slide-in-from-bottom duration-300 ${
            notification.type === "success"
              ? "bg-emerald-500 text-slate-950"
              : "bg-rose-500 text-white"
          }`}
        >
          <span>{notification.type === "success" ? "✓" : "⚠"}</span>
          <span>{notification.message}</span>
        </div>
      )}

      {/* Title & Actions Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 border-b border-slate-800/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-linear-to-r from-amber-500/20 to-rose-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
              <span>🪔</span>
              Diwali 2026 Special
            </span>
            <span className="text-xs text-slate-400">Parsa, Madhesh Province, Nepal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            Rangoli Festival Submissions &amp; Live Votes
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Public submissions, real-time vote rankings, photo verification, and prize standings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/rangoli"
            target="_blank"
            className="text-xs text-amber-300 hover:text-white px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors inline-flex items-center gap-1.5 font-bold"
          >
            <span>Public Rangoli Page</span>
            <svg className="size-3 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>

          <Button
            type="button"
            variant="outline"
            size="default"
            onClick={fetchRangoliData}
            disabled={isLoading}
            className="text-xs border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 cursor-pointer h-9 px-3.5"
          >
            <svg
              className={`size-3.5 mr-1.5 text-amber-400 ${isLoading ? "animate-spin" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
            {isLoading ? "Syncing..." : "Sync DB"}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="default"
            onClick={handleExportCSV}
            disabled={filteredEntries.length === 0}
            className="text-xs bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25 cursor-pointer h-9 px-3.5 font-bold"
          >
            <svg className="size-3.5 mr-1.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export CSV ({filteredEntries.length})
          </Button>
        </div>
      </div>

      {/* ── 3 STATS CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1: Total Entries */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#0e1726] to-[#0a101a] border border-slate-800/80 shadow-lg overflow-hidden group hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Total Rangoli Entries</span>
            <div className="size-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-lg">
              🎨
            </div>
          </div>
          <div className="text-4xl font-black text-white mt-3 font-mono">
            {stats?.totalEntries ?? entries.length}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
            <span className="text-amber-400 font-bold">100% Free Entry</span>
            <span>• Parsa Community</span>
          </div>
        </div>

        {/* Card 2: Total Votes */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#180d24] to-[#0a101a] border border-rose-500/30 shadow-lg overflow-hidden group hover:border-rose-400/50 transition-colors">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Total Public Votes</span>
            <div className="size-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-lg">
              ❤️
            </div>
          </div>
          <div className="text-4xl font-black text-rose-300 mt-3 font-mono">
            {stats?.totalVotes ?? entries.reduce((acc, curr) => acc + curr.votes_count, 0)}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
            <span className="text-rose-400 font-bold">Verified Votes</span>
            <span>• Live Anti-bot Tracking</span>
          </div>
        </div>

        {/* Card 3: Leading Rangoli (Rank 1) */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#241708] to-[#0a101a] border border-amber-400/40 shadow-lg overflow-hidden group hover:border-amber-300 transition-colors">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Current 1st Rank (Leader)</span>
            <div className="size-8 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-lg">
              👑
            </div>
          </div>
          {stats?.topVoted ? (
            <div>
              <div className="text-xl font-black text-amber-300 mt-2 truncate">
                {stats.topVoted.title}
              </div>
              <div className="text-xs text-white/80 mt-1">
                by <strong>{stats.topVoted.artist}</strong> (#{stats.topVoted.entry_id})
              </div>
              <div className="mt-2 text-xs font-mono font-bold text-amber-400">
                {stats.topVoted.votes} votes • Grand Champion Tier
              </div>
            </div>
          ) : (
            <div className="mt-4 text-xs text-slate-500">
              No entries submitted yet.
            </div>
          )}
        </div>
      </div>

      {/* ── SEARCH & FILTER CONTROLS ── */}
      <div className="p-4 rounded-2xl bg-[#0c1422] border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search artist, title, phone, or ID..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
          />
        </div>

        {/* Sort Radio / Pills */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-semibold">Sort:</span>
          <button
            type="button"
            onClick={() => setSortBy("votes")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              sortBy === "votes"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            🏆 Top Voted (Leaderboard)
          </button>
          <button
            type="button"
            onClick={() => setSortBy("latest")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              sortBy === "latest"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Latest First
          </button>
        </div>
      </div>

      {/* ── DATA TABLE ── */}
      <div className="rounded-2xl border border-slate-800/80 bg-[#0c1422] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800/80 bg-slate-900/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-3.5 px-4">Rank</th>
                <th className="py-3.5 px-4">Entry ID</th>
                <th className="py-3.5 px-4">Artwork Photo</th>
                <th className="py-3.5 px-4">Title &amp; Artist</th>
                <th className="py-3.5 px-4">Address / Ward</th>
                <th className="py-3.5 px-4">Contact</th>
                <th className="py-3.5 px-4 text-center">Public Votes</th>
                <th className="py-3.5 px-4">Submitted At</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-14 text-center text-slate-500">
                    <div className="size-12 rounded-full bg-slate-800/60 flex items-center justify-center mx-auto mb-3 text-2xl">
                      🪔
                    </div>
                    <div className="font-bold text-sm text-slate-400">
                      {searchQuery ? "No entries match your search." : "No Rangoli entries submitted yet."}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {searchQuery ? "Try clearing the search box." : "Participant submissions will appear here in real-time."}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredEntries.map((entry, index) => {
                  const isTop3 = index < 3 && sortBy === "votes";
                  const rankBadge =
                    index === 0
                      ? "🥇 1st (Leader)"
                      : index === 1
                      ? "🥈 2nd Place"
                      : index === 2
                      ? "🥉 3rd Place"
                      : `#${index + 1}`;

                  return (
                    <tr
                      key={entry.entry_id}
                      className={`hover:bg-slate-800/30 transition-colors ${
                        isTop3 && index === 0
                          ? "bg-amber-500/5"
                          : isTop3
                          ? "bg-amber-500/3"
                          : ""
                      }`}
                    >
                      {/* RANK */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-bold">
                        <span
                          className={`px-2.5 py-1 rounded-md text-[11px] font-black ${
                            index === 0 && isTop3
                              ? "bg-amber-400 text-slate-950 shadow-sm"
                              : index === 1 && isTop3
                              ? "bg-slate-200 text-slate-950"
                              : index === 2 && isTop3
                              ? "bg-amber-700 text-white"
                              : "text-slate-400 font-mono"
                          }`}
                        >
                          {rankBadge}
                        </span>
                      </td>

                      {/* ENTRY ID */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-mono text-xs">
                        <button
                          type="button"
                          onClick={() => handleCopyId(entry.entry_id)}
                          className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 cursor-pointer"
                          title="Click to copy ID"
                        >
                          <span>{entry.entry_id}</span>
                          <span className="text-[10px] text-slate-500">
                            {copiedId === entry.entry_id ? "✓" : "📋"}
                          </span>
                        </button>
                      </td>

                      {/* ARTWORK PHOTO */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div
                          onClick={() => setPreviewEntry(entry)}
                          className="relative size-14 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 cursor-pointer group shadow-sm hover:border-amber-400 transition-colors"
                          title="Click to view full size artwork"
                        >
                          <Image
                            src={entry.image_url}
                            alt={entry.title}
                            fill
                            unoptimized
                            className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] text-white transition-opacity">
                            🔍
                          </div>
                        </div>
                      </td>

                      {/* TITLE & ARTIST */}
                      <td className="py-3.5 px-4 max-w-[220px]">
                        <div className="font-bold text-white text-sm truncate" title={entry.title}>
                          {entry.title}
                        </div>
                        <div className="text-amber-400 font-semibold text-xs mt-0.5">
                          {entry.full_name}
                        </div>
                        {entry.description && (
                          <div className="text-slate-400 text-[11px] truncate mt-1" title={entry.description}>
                            {entry.description}
                          </div>
                        )}
                      </td>

                      {/* ADDRESS */}
                      <td className="py-3.5 px-4 max-w-[160px] text-slate-300 truncate" title={entry.address}>
                        {entry.address}
                      </td>

                      {/* CONTACT */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-mono text-xs text-slate-200">
                          <a
                            href={`https://wa.me/${entry.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-400 flex items-center gap-1"
                            title="Chat on WhatsApp"
                          >
                            <span>{entry.phone}</span>
                            <span className="text-[10px] text-emerald-400">💬</span>
                          </a>
                        </div>
                        {entry.email && (
                          <div className="text-[11px] text-slate-400 truncate max-w-[140px]" title={entry.email}>
                            {entry.email}
                          </div>
                        )}
                      </td>

                      {/* PUBLIC VOTES */}
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono font-black text-sm">
                          <span>❤️</span>
                          <span>{entry.votes_count}</span>
                        </div>
                      </td>

                      {/* SUBMITTED AT */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-xs font-mono text-slate-400">
                        {entry.created_at
                          ? new Date(entry.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "—"}
                      </td>

                      {/* ACTIONS */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setPreviewEntry(entry)}
                            className="text-xs text-amber-300 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1.5 rounded-lg border border-amber-500/30 transition-colors cursor-pointer"
                            title="View Artwork Full Screen"
                          >
                            View
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeleteCandidate(entry)}
                            className="text-xs text-red-400/80 hover:text-red-400 hover:bg-red-500/10 px-2.5 py-1.5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── LIGHTBOX / FULL ARTWORK PREVIEW MODAL ── */}
      {previewEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full rounded-3xl overflow-hidden bg-[#0e1626] border border-amber-500/40 shadow-2xl">
            <button
              onClick={() => setPreviewEntry(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Photo */}
            <div className="relative aspect-4/3 w-full bg-black">
              <Image
                src={previewEntry.image_url}
                alt={previewEntry.title}
                width={800}
                height={600}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold">#{previewEntry.entry_id}</span>
                  <h3 className="text-xl font-black text-white mt-0.5">{previewEntry.title}</h3>
                  <p className="text-xs text-amber-300 font-medium">
                    Artist: <strong>{previewEntry.full_name}</strong> • {previewEntry.address}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-black text-rose-400 font-mono">
                    {previewEntry.votes_count}
                  </div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Public Votes</div>
                </div>
              </div>

              {previewEntry.description && (
                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  {previewEntry.description}
                </p>
              )}

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div>
                  Phone: <strong className="text-white">{previewEntry.phone}</strong>
                  {previewEntry.email && <> • Email: <strong className="text-white">{previewEntry.email}</strong></>}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const toDelete = previewEntry;
                    setPreviewEntry(null);
                    setDeleteCandidate(toDelete);
                  }}
                  className="text-xs text-red-400 hover:text-red-300 font-semibold cursor-pointer"
                >
                  Delete this entry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRMATION MODAL ── */}
      {deleteCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#0e1626] border border-red-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="size-12 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center text-xl">
              🗑️
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Delete Rangoli Entry?</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Are you sure you want to delete Rangoli <strong>&quot;{deleteCandidate.title}&quot;</strong> by <strong>{deleteCandidate.full_name}</strong> (#{deleteCandidate.entry_id})?
                This action is permanent and will also clear its recorded votes.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                size="default"
                disabled={isDeleting}
                onClick={() => setDeleteCandidate(null)}
                className="text-xs border-slate-700 text-slate-300 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="default"
                size="default"
                disabled={isDeleting}
                onClick={handleDelete}
                className="text-xs bg-red-600 hover:bg-red-500 text-white font-bold cursor-pointer"
              >
                {isDeleting ? "Deleting..." : "Yes, Delete Entry"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

