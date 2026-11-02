"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { CheckCircleFill, AlertCircleFill } from "@/components/icons";

export default function RangoliSubmitForm() {
  const { t, isNepali } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("female");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successEntryId, setSuccessEntryId] = useState<string | null>(null);

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError(isNepali ? "तस्बिरको आकार ५ एमबी (5MB) भन्दा कम हुनुपर्छ।" : "Image size must be less than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result as string);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !phone.trim() || !address.trim() || !title.trim()) {
      setError(isNepali ? "कृपया सबै अनिवार्य विवरणहरू भर्नुहोस्।" : "Please fill in all required fields.");
      return;
    }

    if (gender !== "female") {
      setError(
        isNepali
          ? "यो प्रतियोगिता महिलाहरूका लागि मात्र हो। कृपया लिङ्ग 'महिला' छान्नुहोस्।"
          : "This competition is exclusively for females. Please select 'Female' as gender."
      );
      return;
    }

    if (!imageBase64) {
      setError(isNepali ? "कृपया आफ्नो रङ्गोलीको तस्बिर अपलोड गर्नुहोस्।" : "Please upload a photo of your Rangoli.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/rangoli", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          gender: gender,
          address: address.trim(),
          title: title.trim(),
          description: description.trim() || undefined,
          image_url: imageBase64,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessEntryId(data.entry.entry_id);
      } else {
        setError(data.error || (isNepali ? "प्रविष्टि पठाउन सकिएन। पुनः प्रयास गर्नुहोस्।" : "Failed to submit entry."));
      }
    } catch {
      setError(isNepali ? "नेटवर्क समस्या। कृपया पुनः प्रयास गर्नुहोस्।" : "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessEntryId(null);
    setFullName("");
    setPhone("");
    setEmail("");
    setGender("female");
    setAddress("");
    setTitle("");
    setDescription("");
    setImageBase64(null);
    setError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-[#1a082b] border border-amber-500/40 text-white shadow-2xl overflow-hidden">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-linear-to-r from-amber-500/25 via-primary/20 to-rose-500/25 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl">🪔</span>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              {isNepali ? "रङ्गोली प्रतियोगिता प्रविष्टि फाराम" : "Diwali Rangoli Registration Form"}
            </h1>
            <p className="text-xs sm:text-sm text-amber-300 mt-1">
              {isNepali
                ? "१००% निःशुल्क सहभागिता • महिला कलाकारहरूका लागि मात्र • सर्वाधिक भोट पाउनेले जित्नेछन् पुरस्कार"
                : "100% Free Entry • For Female Artists Only • Most Voted Wins Grand Prizes"}
            </p>
          </div>
        </div>
      </div>

      {/* Form or Success State */}
      <div className="p-6 sm:p-8">
        {successEntryId ? (
          /* Celebration Success State */
          <div className="py-8 text-center space-y-5">
            <div className="size-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-4xl shadow-xl">
              🎉
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {isNepali ? "बधाई छ! प्रविष्टि सफलतापूर्वक दर्ता भयो!" : "Registration Successful!"}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              {isNepali
                ? `तपाईंको रङ्गोली प्रविष्टि नम्बर #${successEntryId} का साथ ग्यालरीमा समावेश गरिएको छ। अब आफ्ना साथीभाइ र परिवारलाई शेयर गरी भोट सङ्कलन गर्नुहोस्!`
                : `Your Rangoli has been officially listed under Entry ID #${successEntryId}. Share your entry with friends and neighbors to start collecting votes!`}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/30 max-w-sm mx-auto text-sm text-amber-300 font-mono font-bold">
              Entry ID: #{successEntryId}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link href="/rangoli#gallery">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-amber-400 hover:bg-amber-300 text-darker font-bold cursor-pointer"
                >
                  {isNepali ? "ग्यालरीमा हेर्नुहोस् र भोट गर्नुहोस्" : "View in Gallery & Vote"}
                </Button>
              </Link>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="bg-white/5 border-white/15 text-white/80 cursor-pointer"
              >
                {isNepali ? "अर्को रङ्गोली पठाउनुहोस्" : "Submit Another Entry"}
              </Button>
            </div>
          </div>
        ) : (
          /* Submission Form */
          <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
            {error && (
              <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-center gap-3">
                <AlertCircleFill className="size-5 shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Photo Upload Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                {isNepali ? "रङ्गोलीको तस्बिर (अनिवार्य)*" : "Rangoli Photo (Required)*"}
              </label>

              {imageBase64 ? (
                <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-black/50">
                  <Image
                    src={imageBase64}
                    alt="Rangoli preview"
                    width={700}
                    height={400}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setImageBase64(null)}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-lg"
                  >
                    {isNepali ? "हटाउनुहोस्" : "Remove Photo"}
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-amber-500/40 hover:border-amber-400 rounded-2xl p-8 text-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl block mb-2">📸</span>
                  <p className="font-bold text-white text-sm sm:text-base">
                    {isNepali ? "तस्बिर छान्नुहोस् वा खिच्नुहोस्" : "Click to Upload Rangoli Photo"}
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    {isNepali
                      ? "JPG, PNG, WEBP (अधिकतम ५ एमबी)। नामको सानो पर्चासहितको तस्बिर राख्नुहोला।"
                      : "JPG, PNG, WEBP (Up to 5MB). Include your name slip next to your Rangoli."}
                  </p>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageFileChange}
                className="hidden"
              />
            </div>

            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  {isNepali ? "पुरा नाम*" : "Full Name*"}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={isNepali ? "जस्तै: अनिता शाह" : "e.g. Sunita Shah"}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  {isNepali ? "फोन / ह्वाट्सएप नम्बर*" : "Phone / WhatsApp*"}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Gender - Female Only Badge */}
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1.5">
                {isNepali ? "लिङ्ग*" : "Gender*"}
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-400/40 text-rose-200 text-sm font-bold flex items-center gap-2">
                  <span className="text-lg">👩</span>
                  <span>{isNepali ? "महिला (Female)" : "Female"}</span>
                  <span className="ml-auto text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-400/20 text-rose-300 border border-rose-400/30">
                    {isNepali ? "महिला मात्र" : "Women Only"}
                  </span>
                </div>
                <input type="hidden" value="female" />
              </div>
              <p className="text-xs text-amber-300/80 mt-1.5 flex items-center gap-1.5">
                <span>🪔</span>
                <span>
                  {isNepali
                    ? "यो रङ्गोली प्रतियोगिता दीपावलीमा महिला कलाकारहरूका लागि मात्र आयोजित गरिएको हो।"
                    : "This Diwali Rangoli competition is exclusively organized for female artists."}
                </span>
              </p>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  {isNepali ? "इमेल ठेगाना (ऐच्छिक)" : "Email Address (Optional)"}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="artist@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  {isNepali ? "ठेगाना / वडा / सहर*" : "Locality / Ward / City*"}
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={isNepali ? "पर्सा, वीरगञ्ज, नेपाल" : "Birgunj-12, Parsa, Nepal"}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Rangoli Title */}
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1.5">
                {isNepali ? "रङ्गोलीको शीर्षक / नाम*" : "Rangoli Artwork Title*"}
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={isNepali ? "जस्तै: मयूर रङ्गोली वा कमल दीपोत्सव" : "e.g. Sacred Peacock Diya Mandala"}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1.5">
                {isNepali ? "रङ्गोलीको भाव / छोटो विवरण (ऐच्छिक)" : "Art Description / Concept (Optional)"}
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={isNepali ? "रङ्गोलीमा प्रयोग गरिएका रङ्ग तथा यसको सांस्कृतिक अर्थ..." : "Brief description of materials, colors, and festive theme..."}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-hidden focus:border-amber-400 transition-colors resize-none"
              />
            </div>

            {/* Notice banner */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/70 leading-relaxed">
              💡 <strong>{isNepali ? "नियम:" : "Notice:"}</strong>{" "}
              {isNepali
                ? "यो प्रतियोगिता महिला कलाकारहरूका लागि मात्र हो। मौलिक हस्तनिर्मित रङ्गोली हुनुपर्दछ। तस्बिर दर्ता भएपछि तत्काल ग्यालरीमा प्रदर्शित हुनेछ।"
                : "This competition is exclusively for female artists. Rangolis must be handmade and authentic. Entries will be listed immediately in the public gallery for voting."}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <Link href="/rangoli">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="bg-white/5 border-white/15 text-white/80 cursor-pointer"
                >
                  ← {isNepali ? "ग्यालरीमा फर्कनुहोस्" : "Back to Festival"}
                </Button>
              </Link>

              <Button
                type="submit"
                variant="default"
                size="lg"
                disabled={loading}
                className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-darker font-black shadow-xl shadow-amber-500/25 cursor-pointer text-sm sm:text-base px-6 sm:px-8"
              >
                {loading
                  ? isNepali
                    ? "दर्ता हुँदैछ..."
                    : "Submitting..."
                  : isNepali
                  ? "प्रविष्टि पेश गर्नुहोस् 🪔"
                  : "Submit Rangoli Entry 🪔"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
