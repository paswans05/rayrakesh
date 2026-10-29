"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { INITIAL_RANGOLI_SHOWCASE, type RangoliShowcaseEntry } from "@/data/rangoli";
import { MapPinFill, HeartFill, ShareAlt, Search, CheckCircleFill, Trophy } from "@/components/icons";
import { cn } from "@/lib/utils";

interface RangoliGalleryProps {
  onOpenSubmitModal: () => void;
  refreshTrigger?: number;
  className?: string;
}

export default function RangoliGallery({ onOpenSubmitModal, refreshTrigger, className }: RangoliGalleryProps) {
  const { t, isNepali } = useLanguage();
  const [entries, setEntries] = useState<RangoliShowcaseEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"leaderboard" | "all" | "latest">("leaderboard");
  const [votingId, setVotingId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<RangoliShowcaseEntry | null>(null);

  // Load entries and user vote state
  useEffect(() => {
    // 1. Load local votes from storage
    try {
      const storedVotes = localStorage.getItem("rakesh_rangoli_voted_ids");
      if (storedVotes) {
        setVotedIds(new Set(JSON.parse(storedVotes)));
      }
    } catch {
      // Ignore localStorage errors
    }

    // 2. Fetch from API
    async function fetchEntries() {
      try {
        const res = await fetch("/api/rangoli");
        if (res.ok) {
          const data = await res.json();
          if (data?.entries && Array.isArray(data.entries)) {
            setEntries(data.entries);
          } else {
            setEntries([]);
          }
          if (data?.userVotedIds && Array.isArray(data.userVotedIds)) {
            setVotedIds((prev) => {
              const merged = new Set([...Array.from(prev), ...data.userVotedIds]);
              try {
                localStorage.setItem("rakesh_rangoli_voted_ids", JSON.stringify(Array.from(merged)));
              } catch {}
              return merged;
            });
          }
        } else {
          setEntries([]);
        }
      } catch (err) {
        console.warn("Could not fetch remote rangoli entries:", err);
        setEntries([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEntries();
  }, [refreshTrigger]);

  const handleVote = async (entry: RangoliShowcaseEntry) => {
    if (votedIds.has(entry.entry_id)) {
      setToastMessage(isNepali ? "तपाईंले यस रङ्गोलीलाई पहिले नै भोट दिइसक्नुभएको छ!" : "You have already voted for this Rangoli!");
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    setVotingId(entry.entry_id);

    // Optimistic UI update
    setEntries((prev) =>
      prev.map((item) =>
        item.entry_id === entry.entry_id ? { ...item, votes_count: item.votes_count + 1 } : item
      )
    );

    const nextVoted = new Set(votedIds);
    nextVoted.add(entry.entry_id);
    setVotedIds(nextVoted);

    try {
      localStorage.setItem("rakesh_rangoli_voted_ids", JSON.stringify(Array.from(nextVoted)));
    } catch {}

    try {
      const res = await fetch("/api/rangoli/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entry_id: entry.entry_id }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setToastMessage(
          isNepali
            ? `धन्यवाद! ${entry.full_name} को रङ्गोलीका लागि तपाईंको भोट दर्ता भयो।`
            : `Thank you! Your vote for "${entry.title}" by ${entry.full_name} has been counted.`
        );
      } else {
        setToastMessage(data.message || (isNepali ? "भोट दर्ता हुन सकेन।" : "Could not record vote."));
      }
    } catch {
      setToastMessage(isNepali ? "भोट सुरक्षित गरियो।" : "Vote saved!");
    } finally {
      setVotingId(null);
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  const handleShare = (entry: RangoliShowcaseEntry) => {
    const shareText = isNepali
      ? `दीपावली रङ्गोली प्रतियोगिता २०८३ मा ${entry.full_name} को रङ्गोली "${entry.title}" लाई भोट गर्नुहोस्! सर्वाधिक भोट पाउनेले जित्नेछन् रु. ३,१०० सम्मका पुरस्कार:`
      : `Vote for "${entry.title}" by ${entry.full_name} in the Diwali Rangoli Festival! Most voted entries win up to NPR 3,100 in grand prizes:`;
    const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/rangoli#entry-${entry.entry_id}` : "";

    if (navigator.share) {
      navigator.share({
        title: entry.title,
        text: `${shareText} ${shareUrl}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  // Filter and sort entries
  const filteredEntries = useMemo(() => {
    let result = [...entries];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (e) =>
          e.full_name.toLowerCase().includes(q) ||
          e.title.toLowerCase().includes(q) ||
          e.address.toLowerCase().includes(q) ||
          (e.description && e.description.toLowerCase().includes(q))
      );
    }

    // Sort tabs
    if (activeTab === "leaderboard") {
      result.sort((a, b) => b.votes_count - a.votes_count);
    } else if (activeTab === "latest") {
      result.reverse();
    }

    return result;
  }, [entries, searchQuery, activeTab]);

  return (
    <Section id="gallery" gap="default" className="bg-[#0b0312] text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-amber-500 text-darker font-bold shadow-2xl shadow-amber-500/30 flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
          <span className="text-xl">🪔</span>
          <span className="text-sm">{toastMessage}</span>
        </div>
      )}

      <div className="container">
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-3 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
              {isNepali ? "प्रत्यक्ष प्रदर्शनी तथा भोटिङ" : "Live Exhibition & Voting"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {t("rangoli.gallery_heading", "Rangoli Exhibition & Live Voting")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              {t("rangoli.gallery_subheading", "Click the vote button to support your favorite Rangoli creations. Share with family and friends to help them win!")}
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-10">
          {/* Controls: Search Bar & Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto mb-10">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 w-full md:w-auto">
              <button
                onClick={() => setActiveTab("leaderboard")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer",
                  activeTab === "leaderboard"
                    ? "bg-amber-500 text-darker shadow-md"
                    : "text-white/70 hover:text-white"
                )}
              >
                <span>🏆</span>
                {t("rangoli.filter_leaderboard", "Leaderboard (Top Voted)")}
              </button>

              <button
                onClick={() => setActiveTab("all")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                  activeTab === "all"
                    ? "bg-amber-500 text-darker shadow-md"
                    : "text-white/70 hover:text-white"
                )}
              >
                {t("rangoli.filter_all", "All Entries")}
              </button>

              <button
                onClick={() => setActiveTab("latest")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                  activeTab === "latest"
                    ? "bg-amber-500 text-darker shadow-md"
                    : "text-white/70 hover:text-white"
                )}
              >
                {t("rangoli.filter_latest", "Latest")}
              </button>
            </div>

            {/* Search Input & Submit Action */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("rangoli.search_placeholder", "Search by artist, title or area...")}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                />
              </div>

              <Button
                variant="default"
                size="md"
                onClick={onOpenSubmitModal}
                className="bg-linear-to-r from-amber-500 to-amber-600 text-darker font-bold text-xs sm:text-sm shrink-0 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                + {isNepali ? "प्रविष्टि पठाउनुहोस्" : "Submit Entry"}
              </Button>
            </div>
          </div>

          {/* Rangoli Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredEntries.map((entry, index) => {
              const hasVoted = votedIds.has(entry.entry_id);
              const isVoting = votingId === entry.entry_id;
              const isTopRank = activeTab === "leaderboard" && index < 3;
              const rankEmoji = index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉";

              return (
                <ScrollReveal key={entry.entry_id} mode="fade" direction="bottom" delay={index * 60}>
                  <div
                    id={`entry-${entry.entry_id}`}
                    className={cn(
                      "group rounded-3xl overflow-hidden bg-[#1a082b] border transition-all duration-300 flex flex-col justify-between h-full hover:shadow-2xl hover:shadow-amber-500/10",
                      isTopRank && index === 0
                        ? "border-amber-400 shadow-xl shadow-amber-500/15"
                        : isTopRank
                        ? "border-amber-500/50"
                        : "border-white/10 hover:border-white/25"
                    )}
                  >
                    {/* Image Area with Zoom click */}
                    <div
                      onClick={() => setSelectedEntry(entry)}
                      className="relative aspect-4/3 w-full overflow-hidden bg-black/40 cursor-pointer"
                    >
                      <Image
                        src={entry.image_url}
                        alt={entry.title}
                        width={600}
                        height={450}
                        unoptimized
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#1a082b] via-transparent to-transparent opacity-80" />

                      {/* Top Rank Badge */}
                      {isTopRank && (
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-linear-to-r from-amber-400 to-yellow-200 text-darker shadow-lg flex items-center gap-1.5">
                          <span>{rankEmoji}</span>
                          <span>
                            {index === 0
                              ? isNepali
                                ? "१st स्थान (शीर्ष)"
                                : "1st Rank (Leader)"
                              : index === 1
                              ? isNepali
                                ? "२nd स्थान"
                                : "2nd Rank"
                              : isNepali
                              ? "३rd स्थान"
                              : "3rd Rank"}
                          </span>
                        </div>
                      )}

                      {/* Live Vote Pill on Image */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-darker/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                        <HeartFill className="size-3.5 text-rose-500 fill-rose-500" />
                        <span className="text-amber-300 font-black">{entry.votes_count}</span>
                        <span className="text-[11px] text-white/70">{t("rangoli.votes_label", "votes")}</span>
                      </div>

                      {/* Click to expand hint */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-darker/60 backdrop-blur-sm text-[10px] text-white/70 group-hover:text-white transition-colors">
                        🔍 {isNepali ? "ठूलो हेर्नुहोस्" : "Click to View Full"}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                          <MapPinFill className="size-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{entry.address}</span>
                          <span>•</span>
                          <span className="font-mono text-amber-300/80">#{entry.entry_id}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                          {entry.title}
                        </h3>

                        <p className="text-xs font-medium text-amber-400/90 mt-1">
                          {isNepali ? "कलाकार:" : "Artist:"} <strong>{entry.full_name}</strong>
                        </p>

                        <p className="text-xs text-white/70 mt-3 line-clamp-2 leading-relaxed">
                          {entry.description}
                        </p>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                        <Button
                          variant={hasVoted ? "outline" : "default"}
                          size="md"
                          disabled={hasVoted || isVoting}
                          onClick={() => handleVote(entry)}
                          className={cn(
                            "flex-1 font-black text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-center gap-2",
                            hasVoted
                              ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 cursor-default"
                              : "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-darker shadow-lg shadow-amber-500/20"
                          )}
                        >
                          <HeartFill className={cn("size-4", hasVoted ? "text-rose-400 fill-rose-400" : "text-darker")} />
                          {hasVoted
                            ? t("rangoli.voted_btn", "Voted ❤️")
                            : isVoting
                            ? isNepali
                              ? "भोटिङ..."
                              : "Voting..."
                            : t("rangoli.vote_btn", "Vote for this")}
                        </Button>

                        <Button
                          variant="outline"
                          size="md"
                          onClick={() => handleShare(entry)}
                          className="bg-white/5 border-white/15 hover:bg-white/15 text-white/90 text-xs px-3.5 cursor-pointer"
                          title={isNepali ? "शेयर गर्नुहोस्" : "Share with friends"}
                        >
                          <ShareAlt className="size-4" />
                          <span className="hidden sm:inline">{t("rangoli.share_btn", "Share")}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Empty State when no entries exist at all */}
          {!loading && entries.length === 0 && (
            <div className="text-center py-16 sm:py-20 px-6 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-amber-500/30 max-w-lg mx-auto my-8 shadow-2xl">
              <div className="size-20 rounded-full bg-amber-500/20 border border-amber-500/40 text-4xl flex items-center justify-center mx-auto mb-4">
                🪔
              </div>
              <h4 className="text-2xl font-black text-white">
                {isNepali ? "प्रतियोगितामा पहिलो बन्नुहोस्!" : "Be the First to Enter!"}
              </h4>
              <p className="text-sm text-white/75 mt-2 leading-relaxed">
                {isNepali
                  ? "अहिलेसम्म कुनै रङ्गोली प्रविष्टि दर्ता भएको छैन। आफ्नो रङ्गोलीको तस्बिर पेश गरी प्रतियोगिताको सुरुवात गर्नुहोस् र अग्रता लिनुहोस्!"
                  : "No Rangolis have been submitted yet. Upload a photo of your handmade Rangoli to be the first on the leaderboard and win grand prizes!"}
              </p>
              <Button
                variant="default"
                size="lg"
                onClick={onOpenSubmitModal}
                className="mt-6 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-darker font-black shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <span className="text-lg">🪔</span>
                {isNepali ? "आफ्नो रङ्गोली पठाउनुहोस्" : "Submit Your Rangoli Now"}
              </Button>
            </div>
          )}

          {/* Empty Search / Filter State */}
          {!loading && entries.length > 0 && filteredEntries.length === 0 && (
            <div className="text-center py-16 px-4 rounded-3xl bg-white/5 border border-white/10 max-w-md mx-auto my-8">
              <span className="text-4xl">🔍</span>
              <h4 className="text-lg font-bold text-white mt-3">
                {isNepali ? "कुनै रङ्गोली फेला परेन" : "No Rangoli Found"}
              </h4>
              <p className="text-xs text-white/60 mt-1">
                {isNepali ? "फरक खोज शब्द प्रयोग गर्नुहोस्।" : "Try searching another artist or area."}
              </p>
              <Button
                variant="default"
                size="md"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
                className="mt-4 bg-amber-500 text-darker font-bold cursor-pointer"
              >
                {isNepali ? "सबै देखाउनुहोस्" : "Reset Filters"}
              </Button>
            </div>
          )}

          {/* Bottom Callout Banner */}
          <div className="mt-16 max-w-5xl mx-auto p-8 rounded-3xl bg-linear-to-r from-amber-500/20 via-[#2a0e3f] to-rose-600/20 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-black text-white">
                {isNepali ? "के तपाईंले आफ्नो रङ्गोली बनाउनुभयो?" : "Have you created your Diwali Rangoli?"}
              </h4>
              <p className="text-xs sm:text-sm text-white/75">
                {isNepali
                  ? "अहिले नै तस्बिर पठाउनुहोस् र रु. ३,१०० सम्मका भव्य पुरस्कार जित्ने अवसर नछुटाउनुहोस्!"
                  : "Submit your entry right now to start collecting votes and win up to NPR 3,100!"}
              </p>
            </div>
            <Button
              size="lg"
              variant="default"
              onClick={onOpenSubmitModal}
              className="bg-amber-400 hover:bg-amber-300 text-darker font-black text-sm px-6 py-3 shadow-lg shadow-amber-500/20 shrink-0 cursor-pointer"
            >
              <span className="text-base">🪔</span>
              {t("rangoli.hero_cta_submit", "Submit Your Rangoli")}
            </Button>
          </div>

        </SectionContent>
      </div>

      {/* Lightbox Modal for Selected Entry */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full rounded-3xl overflow-hidden bg-[#1a082b] border border-amber-500/40 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedEntry(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-darker/80 text-white flex items-center justify-center hover:bg-white hover:text-darker transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* High-res Image Preview */}
            <div className="relative aspect-4/3 w-full bg-black">
              <Image
                src={selectedEntry.image_url}
                alt={selectedEntry.title}
                width={900}
                height={675}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-amber-300">#{selectedEntry.entry_id}</span>
                  <h3 className="text-2xl font-black text-white mt-1">{selectedEntry.title}</h3>
                  <p className="text-sm text-amber-400 font-semibold mt-0.5">
                    {isNepali ? "कलाकार:" : "Artist:"} {selectedEntry.full_name} • {selectedEntry.address}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-black text-amber-300">{selectedEntry.votes_count}</div>
                  <div className="text-xs text-white/60">{t("rangoli.votes_label", "votes")}</div>
                </div>
              </div>

              <p className="text-sm text-white/80 mt-4 leading-relaxed">
                {selectedEntry.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <Button
                  variant="default"
                  size="md"
                  disabled={votedIds.has(selectedEntry.entry_id)}
                  onClick={() => {
                    handleVote(selectedEntry);
                    setSelectedEntry((prev) => prev ? { ...prev, votes_count: prev.votes_count + 1 } : null);
                  }}
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-darker font-bold cursor-pointer"
                >
                  <HeartFill className="size-4" />
                  {votedIds.has(selectedEntry.entry_id)
                    ? t("rangoli.voted_btn", "Voted ❤️")
                    : t("rangoli.vote_btn", "Vote for this Rangoli")}
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleShare(selectedEntry)}
                  className="bg-white/10 text-white hover:bg-white/20 cursor-pointer"
                >
                  <ShareAlt className="size-4" />
                  {t("rangoli.share_btn", "Share")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
