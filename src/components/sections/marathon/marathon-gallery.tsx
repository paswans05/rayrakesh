"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { MARATHON_GALLERY_PHOTOS, MarathonGalleryItem, MARATHON_DETAILS } from "@/data/marathon";
import { useLanguage } from "@/context/language-context";
import {
  MedalFill,
  CalendarAlt,
  MapPinFill,
  Search,
  CheckCircleFill,
  ClockFill,
} from "@/components/icons";

export default function MarathonGallery() {
  const { isNepali } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "race" | "ceremony" | "community">("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Certificate lookup state
  const [certQuery, setCertQuery] = useState("");
  const [isSearchingCert, setIsSearchingCert] = useState(false);
  const [certRunner, setCertRunner] = useState<{ id: string; name: string } | null>(null);
  const [certNotFound, setCertNotFound] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const filteredPhotos =
    activeTab === "all"
      ? MARATHON_GALLERY_PHOTOS
      : MARATHON_GALLERY_PHOTOS.filter((p) => p.category === activeTab);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredPhotos.length]);

  const handleLookupCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = certQuery.trim();
    if (!query) return;

    setIsSearchingCert(true);
    setCertNotFound(false);

    try {
      // If looks like registration ID (e.g. RM... or number), open directly
      if (/^RM/i.test(query) || /^[0-9A-Za-z_-]{4,}$/.test(query)) {
        setCertRunner({ id: query.toUpperCase(), name: query.toUpperCase() });
        setShowCertModal(true);
        setIsSearchingCert(false);
        return;
      }

      // Otherwise search
      const res = await fetch(`/api/marathon-certificate/${encodeURIComponent(query)}`);
      if (res.ok) {
        setCertRunner({ id: query, name: query });
        setShowCertModal(true);
      } else {
        setCertNotFound(true);
      }
    } catch {
      // Fallback
      setCertRunner({ id: query, name: query });
      setShowCertModal(true);
    } finally {
      setIsSearchingCert(false);
    }
  };

  return (
    <Section id="gallery" gap="default" className="bg-[#0B1120] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Heading & Celebration Header */}
        <SectionHead className="text-center max-w-4xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            {/* Completion Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-lg shadow-emerald-500/10">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{isNepali ? "दौड सफलतापूर्वक सम्पन्न • १५ नोभेम्बर २०२६" : "Event Concluded With Great Success • Nov 15, 2026"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              {isNepali ? (
                <>
                  राकेश म्याराथन <span className="text-primary">२०८३</span> का स्मरणीय पलहरू
                </>
              ) : (
                <>
                  Rakesh Marathon <span className="text-primary">2026</span> Event Gallery
                </>
              )}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isNepali
                ? "लागूऔषधमुक्त पर्सा अभियान–२०८३ अन्तर्गत आयोजित १५ किमी राकेश म्याराथनका अविस्मरणीय तस्बिरहरू, धावकहरूको ऊर्जा र पुरस्कार वितरणका झलकहरू।"
                : "Capturing the athletic energy, community solidarity, and award moments from the historic 15 KM Rakesh Marathon in Parsa, Nepal."}
            </p>
          </ScrollReveal>
        </SectionHead>

        {/* ── EVENT STATS COUNTER STRIP ── */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-primary">15 KM</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
              {isNepali ? "एकल दूरी दौड" : "Single Distance"}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">NPR 50,000</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
              {isNepali ? "नगद पुरस्कार वितरण" : "Cash Prizes Awarded"}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">Top 10</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
              {isNepali ? "विजेता पदकहरू" : "Finisher Medals"}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
              {isNepali ? "प्रमाणपत्र सबैलाई" : "Certificates to All"}
            </div>
          </div>
        </div>

        {/* ── CERTIFICATE VIEW & LOOKUP BAR ── */}
        <div className="mt-10 max-w-3xl mx-auto p-5 sm:p-6 rounded-3xl bg-linear-to-r from-emerald-950/40 via-slate-900/80 to-blue-950/40 border border-emerald-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="text-left w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400" />
                <h3 className="text-base sm:text-lg font-black text-white">
                  {isNepali ? "आफ्नो प्रमाणपत्र हेर्नुहोस् र डाउनलोड गर्नुहोस्" : "View & Download Your Official Certificate"}
                </h3>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {isNepali
                  ? "सहभागी धावकहरूले आफ्नो दर्ता नं. (Reg ID) वा नाम राखी प्रमाणपत्र प्राप्त गर्न सक्नुहुन्छ।"
                  : "All runners can search by Registration ID or Name to view their official certificate."}
              </p>
            </div>

            <form onSubmit={handleLookupCertificate} className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <input
                type="text"
                value={certQuery}
                onChange={(e) => setCertQuery(e.target.value)}
                placeholder="e.g. RM-2026 or Name"
                className="w-full sm:w-48 px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-700 text-white text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <Button
                type="submit"
                size="default"
                disabled={isSearchingCert || !certQuery.trim()}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shrink-0 cursor-pointer shadow-md shadow-emerald-500/20"
              >
                {isSearchingCert ? "Loading..." : "View"}
              </Button>
            </form>
          </div>
          {certNotFound && (
            <p className="text-xs text-amber-400 mt-2">
              Registration not found. Please verify your Registration ID or contact organizers.
            </p>
          )}
        </div>

        {/* ── CATEGORY FILTER TABS ── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", labelEn: "All Highlights", labelNe: "सबै तस्बिरहरू", count: MARATHON_GALLERY_PHOTOS.length },
            { id: "race", labelEn: "Race Action & Route", labelNe: "दौड तथा रुट", count: 3 },
            { id: "ceremony", labelEn: "Awards & Prizes", labelNe: "पुरस्कार समारोह", count: 3 },
            { id: "community", labelEn: "Community & Youth", labelNe: "सामुदायिक सहभागिता", count: 4 },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-slate-950 shadow-lg shadow-primary/25 scale-105"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              <span>{isNepali ? tab.labelNe : tab.labelEn}</span>
              <span className="ml-1.5 text-[10px] opacity-75 font-mono">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* ── INTERACTIVE PHOTO GALLERY GRID ── */}
        <SectionContent className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPhotos.map((photo, index) => {
              const isFeature = index === 0 || index === 6;
              return (
                <div
                  key={photo.id}
                  onClick={() => setActiveLightboxIndex(index)}
                  className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50 ${
                    isFeature ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  {/* Image Container with Aspect Ratio */}
                  <div className={`relative w-full ${isFeature ? "h-64 sm:h-96" : "h-64 sm:h-72"} overflow-hidden bg-slate-950`}>
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                    {/* Category Badge & Expand Icon */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-primary">
                        {photo.category}
                      </span>
                      <span className="size-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </span>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {isNepali ? photo.titleNe : photo.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                        {isNepali ? photo.descriptionNe : photo.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── VIDEO HIGHLIGHT CARD ── */}
          <div className="mt-8 max-w-4xl mx-auto rounded-3xl bg-linear-to-br from-slate-900 via-slate-900 to-primary/10 border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-5/12 aspect-video rounded-2xl overflow-hidden bg-black relative border border-white/10 shadow-lg">
                <video
                  src="/images/marathon-complete/marathon-highlight.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-7/12 text-left space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider">
                  {isNepali ? "भिडियो झलक" : "Race Day Video Highlight"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {isNepali
                    ? "पर्साको सडकमा दौडिएका धावकहरूको प्रत्यक्ष दृश्य"
                    : "Live Action from the 15 KM Course in Parsa"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isNepali
                    ? "लागूऔषधमुक्त पर्सा अभियानको सन्देशसहित युवाहरूले देखाएको अदम्य साहस र उत्साहको भिडियो क्लिप।"
                    : "Witness the excitement, crowd support, and determined runners pacing through Parsa, Sarlahi under the drug-free campaign."}
                </p>
              </div>
            </div>
          </div>
        </SectionContent>
      </div>

      {/* ── FULLSCREEN LIGHTBOX MODAL ── */}
      {activeLightboxIndex !== null && filteredPhotos[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-slate-950 border border-slate-700 shadow-2xl overflow-hidden"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-primary">
                  {activeLightboxIndex + 1} / {filteredPhotos.length}
                </span>
                <span className="text-sm font-bold text-white truncate max-w-md">
                  {isNepali
                    ? filteredPhotos[activeLightboxIndex].titleNe
                    : filteredPhotos[activeLightboxIndex].title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={filteredPhotos[activeLightboxIndex].src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  View Full Res
                </a>
                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 min-h-[50vh] max-h-[70vh] flex items-center justify-center bg-black/95 p-2">
              <img
                src={filteredPhotos[activeLightboxIndex].src}
                alt={filteredPhotos[activeLightboxIndex].title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex(
                    (activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center cursor-pointer transition-all shadow-xl"
                aria-label="Previous Photo"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((activeLightboxIndex + 1) % filteredPhotos.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center cursor-pointer transition-all shadow-xl"
                aria-label="Next Photo"
              >
                ›
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <p>
                {isNepali
                  ? filteredPhotos[activeLightboxIndex].descriptionNe
                  : filteredPhotos[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── CERTIFICATE VIEW MODAL FOR RUNNER ── */}
      {showCertModal && certRunner && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowCertModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0E1626] border border-slate-700 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <MedalFill className="size-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Official Certificate of Participation
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Participant: {certRunner.name} • {certRunner.id}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`/api/marathon-certificate/${encodeURIComponent(certRunner.id)}?download=1`}
                  download={`Rakesh-Marathon-Certificate-${certRunner.id}.png`}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-emerald-500/20"
                >
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download PNG</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowCertModal(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Certificate Render View */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 sm:p-4 flex items-center justify-center shadow-inner">
              <img
                src={`/api/marathon-certificate/${encodeURIComponent(certRunner.id)}`}
                alt="Official Runner Certificate"
                className="w-full h-auto max-h-[65vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>Verified by Youth of Parsa RM & Er Rakesh Ray</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={() => window.print()}
                  className="text-xs cursor-pointer"
                >
                  Print Certificate
                </Button>
                <a
                  href={`/api/marathon-certificate/${encodeURIComponent(certRunner.id)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
