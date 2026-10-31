"use client";

import { useState, useId, useRef } from "react";
import { toPng } from "html-to-image";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircleFill, AlertCircleFill, Download, Shield } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  tshirtSize: string;
  address: string;
  understandsDistance: boolean;
  acceptsTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  age?: string;
  address?: string;
  understandsDistance?: string;
  acceptsTerms?: string;
}

interface RegistrationReceipt {
  registrationId: string;
  fullName: string;
  email: string;
  phone: string;
  age: string;
  tshirtSize?: string;
  address: string;
  registeredAt: string;
}

export default function MarathonRegistration() {
  const formId = useId();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "+977 ",
    age: "",
    gender: "prefer-not-to-say",
    tshirtSize: "M",
    address: "Parsa, Nepal",
    understandsDistance: false,
    acceptsTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloadingCard, setIsDownloadingCard] = useState(false);
  const [receipt, setReceipt] = useState<RegistrationReceipt | null>(null);
  const [duplicateWarning, setDuplicateWarning] = useState<string | null>(null);
  const [cardStatusNotice, setCardStatusNotice] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownloadCard = async () => {
    if (!cardRef.current) return;
    setIsDownloadingCard(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#121C27",
      });
      const link = document.createElement("a");
      link.download = `rakesh-marathon-pass-${receipt?.registrationId || "15KM"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate card image", err);
      window.print();
    } finally {
      setIsDownloadingCard(false);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim() || formData.phone.trim() === "+977") {
      newErrors.phone = "Phone number with country code is required.";
    }

    const ageNum = parseInt(formData.age, 10);
    if (!formData.age || isNaN(ageNum)) {
      newErrors.age = "Please provide your age.";
    } else if (ageNum < 14) {
      newErrors.age = "Minimum age to participate in the 15 KM Marathon is 14 years.";
    } else if (ageNum > 100) {
      newErrors.age = "Please enter a valid age.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address or city is required.";
    }

    if (!formData.understandsDistance) {
      newErrors.understandsDistance = "You must confirm you understand the 15 KM distance.";
    }

    if (!formData.acceptsTerms) {
      newErrors.acceptsTerms = "You must accept the event terms and privacy guidelines.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateWarning(null);

    if (!validate()) {
      return;
    }

    // Check duplicate submission in local session
    const existingKey = `rm15k_reg_${formData.email.trim().toLowerCase()}`;
    if (typeof window !== "undefined" && localStorage.getItem(existingKey)) {
      setDuplicateWarning(
        "A registration with this email address has already been submitted in this browser session. If you need to modify details, please contact event organizers."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const generatedId = `RM15K-${Math.floor(1000 + Math.random() * 9000)}`;

      const res = await fetch("/api/marathon-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          age: formData.age,
          gender: formData.gender,
          tshirtSize: formData.tshirtSize,
          address: formData.address.trim(),
          registrationId: generatedId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.alreadyRegistered && data.registration) {
          const existingReceipt: RegistrationReceipt = {
            registrationId: data.registration.registration_id,
            fullName: data.registration.full_name,
            email: data.registration.email,
            phone: data.registration.phone,
            age: String(data.registration.age),
            tshirtSize: data.registration.tshirt_size || "M",
            address: data.registration.address,
            registeredAt: data.registration.created_at || "Previously Registered",
          };
          setReceipt(existingReceipt);
          setCardStatusNotice("Found existing registration in SQLite database! Your official runner pass is displayed below.");
          return;
        }
        setDuplicateWarning(data.error || "Failed to process registration. Please try again.");
        return;
      }

      const assignedId = data.registrationId || generatedId;

      const newReceipt: RegistrationReceipt = {
        registrationId: assignedId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        age: formData.age,
        tshirtSize: formData.tshirtSize,
        address: formData.address.trim(),
        registeredAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Store in session
      if (typeof window !== "undefined") {
        localStorage.setItem(existingKey, JSON.stringify(newReceipt));
      }

      setReceipt(newReceipt);
      setCardStatusNotice(null);
    } catch {
      setDuplicateWarning("Failed to process registration. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setReceipt(null);
    setCardStatusNotice(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "+977 ",
      age: "",
      gender: "prefer-not-to-say",
      tshirtSize: "M",
      address: "Parsa, Nepal",
      understandsDistance: false,
      acceptsTerms: false,
    });
    setErrors({});
    setDuplicateWarning(null);
  };

  return (
    <Section id="register" gap="default" className="bg-white relative">
      <div className="container">

        {/* Section Heading */}
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 px-3 py-1 rounded-full bg-primary/10">
              Online Participant Entry
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-darker uppercase tracking-tight">
              Register for 15 KM Marathon
            </h2>
            <p className="mt-4 text-base sm:text-lg text-body">
              Join fellow runners in Parsa. Every participant receives a certificate, and the top 10 finishers receive medals. The top three also compete for cash prizes.
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-12 max-w-4xl mx-auto">

          {/* CONFIRMATION SCREEN WHEN SUBMITTED */}
          {receipt ? (
            <ScrollReveal mode="fade" direction="bottom">
              <div className="p-6 sm:p-10 rounded-3xl bg-darker text-white border-2 border-primary shadow-2xl relative overflow-hidden">
                <div className="text-center max-w-xl mx-auto mb-8">
                  <div className="size-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4 border border-primary/40">
                    <CheckCircleFill className="size-10" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Registration Saved in SQLite Database</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Official Marathon Runner Pass</h3>
                  <p className="text-sm text-white/75 mt-2">
                    Your registration has been securely recorded. You can save or download your official digital card below.
                  </p>
                  {cardStatusNotice && (
                    <div className="mt-3 px-4 py-2 rounded-xl bg-primary/15 border border-primary/30 text-primary-light text-xs font-medium">
                      {cardStatusNotice}
                    </div>
                  )}
                </div>

                {/* ── OFFICIAL DIGITAL RUNNER PASS CARD (CAPTURED ON DOWNLOAD) ── */}
                <div className="flex flex-col items-center">
                  <div
                    ref={cardRef}
                    className="w-full max-w-xl rounded-3xl overflow-hidden border-2 border-primary bg-[#121C27] text-white shadow-2xl p-6 sm:p-8 relative"
                    style={{
                      backgroundColor: "#121C27",
                      backgroundImage: "radial-gradient(circle at top right, rgba(202, 160, 92, 0.22), transparent 50%), radial-gradient(circle at bottom left, rgba(189, 31, 23, 0.18), transparent 45%)",
                    }}
                  >
                    {/* Top Header Strip */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/15">
                      <div className="flex items-center gap-3">
                        <div className="size-11 rounded-xl bg-primary text-darker flex items-center justify-center font-black text-lg shadow-md shrink-0">
                          RM
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-black tracking-wider uppercase text-white leading-tight">
                            RAKESH MARATHON 2026
                          </h4>
                          <p className="text-[11px] font-semibold tracking-widest uppercase text-primary">
                            Run Together. Build a Better Tomorrow.
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-primary text-darker shadow-sm">
                          OFFICIAL PASS
                        </span>
                      </div>
                    </div>

                    {/* Center Prominent Bib & Distance Box */}
                    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#1c2733] border border-primary/40 text-center relative overflow-hidden">
                      <div className="text-xs uppercase tracking-widest text-primary font-bold">
                        15 KM SINGLE DISTANCE • Parsa, Nepal
                      </div>

                      <div className="text-4xl sm:text-5xl font-mono font-black text-white mt-1.5 tracking-wider drop-shadow-md">
                        {receipt.registrationId}
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-white/70">
                        <span className="size-2 rounded-full bg-primary animate-pulse" />
                        <span>CONFIRMED &amp; SAVED IN EVENT DATABASE</span>
                      </div>
                    </div>

                    {/* Runner Information Details */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block">Participant Name</span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                          {receipt.fullName}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-white/50 uppercase block text-[10px] font-medium">Age</span>
                          <strong className="text-white text-sm">{receipt.age} Years</strong>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-white/50 uppercase block text-[10px] font-medium">T-Shirt Size</span>
                          <strong className="text-primary text-sm font-bold">{receipt.tshirtSize || "M"}</strong>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                          <span className="text-white/50 uppercase block text-[10px] font-medium">Category</span>
                          <strong className="text-white text-sm">15 KM Solo</strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-white/50 uppercase block text-[10px] font-medium">Email</span>
                          <span className="text-white truncate block">{receipt.email}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-white/50 uppercase block text-[10px] font-medium">Contact Phone</span>
                          <span className="text-white font-mono">{receipt.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Barcode / Check-in Strip */}
                    <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-[2px] h-7 opacity-85">
                          {[4, 2, 6, 1, 3, 5, 2, 4, 7, 2, 5, 3, 1, 6, 3, 4, 2, 5, 1, 4, 6, 2, 3, 5, 2, 4, 1, 5, 3, 6, 2, 4, 5, 1, 3, 6, 2, 4, 1, 5, 2, 3, 4].map((h, i) => (
                            <div key={i} className="bg-white rounded-xs" style={{ width: i % 3 === 0 ? "3px" : "2px", height: `${h * 3.5}px` }} />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono text-white/50 mt-1">CHECK-IN BIB: {receipt.registrationId}</span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-white/50 block">Registered On</span>
                        <span className="text-xs font-mono text-white/80">{receipt.registeredAt}</span>
                      </div>
                    </div>
                  </div>

                  {/* Email Confirmation Notice */}
                  <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-white/90 max-w-xl w-full flex items-center gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0" />
                    <span>A confirmation email with your Registration ID has been dispatched to <strong>{receipt.email}</strong>.</span>
                  </div>

                  {/* Card Download & Save Actions */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full">
                    <Button
                      type="button"
                      variant="default"
                      size="xl"
                      onClick={handleDownloadCard}
                      disabled={isDownloadingCard}
                      className="font-bold shadow-xl shadow-primary/25 cursor-pointer"
                    >
                      <Download className="size-5 mr-2 shrink-0" />
                      <span>{isDownloadingCard ? "Generating Card Image..." : "Save / Download Card (PNG)"}</span>
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="xl"
                      onClick={() => window.print()}
                      className="border-white/20 text-white hover:bg-white/10 cursor-pointer"
                    >
                      <span>Print ID Card</span>
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="xl"
                      onClick={handleReset}
                      className="border-white/20 text-white hover:bg-white/10 cursor-pointer"
                    >
                      <span>Register Another Runner</span>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            /* REGISTRATION FORM */
            <ScrollReveal mode="fade" direction="bottom" delay={100}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-6 sm:p-10 rounded-3xl bg-lightest border border-lighter shadow-xl"
              >
                {/* Duplicate / Alert Box */}
                {duplicateWarning && (
                  <div className="mb-6 p-4 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm flex items-start gap-3">
                    <AlertCircleFill className="size-5 shrink-0 mt-0.5" />
                    <span>{duplicateWarning}</span>
                  </div>
                )}

                <div className="space-y-6">

                  {/* Step 1: Personal Details */}
                  <div>
                    <h4 className="text-lg font-bold text-darker mb-4 flex items-center gap-2">
                      <span className="size-6 rounded-full bg-primary text-darker text-xs font-black flex items-center justify-center">1</span>
                      Personal Details
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor={`${formId}-name`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id={`${formId}-name`}
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Shrestha"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                            errors.fullName ? "border-danger" : "border-lighter"
                          )}
                        />
                        {errors.fullName && <p className="text-xs text-danger mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label htmlFor={`${formId}-email`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id={`${formId}-email`}
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. ramesh@example.com"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                            errors.email ? "border-danger" : "border-lighter"
                          )}
                        />
                        {errors.email && <p className="text-xs text-danger mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone Number with Country Code */}
                      <div>
                        <label htmlFor={`${formId}-phone`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Phone Number (with country code) *
                        </label>
                        <input
                          id={`${formId}-phone`}
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+977 98XXXXXXXX"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-mono",
                            errors.phone ? "border-danger" : "border-lighter"
                          )}
                        />
                        {errors.phone && <p className="text-xs text-danger mt-1">{errors.phone}</p>}
                      </div>

                      {/* Age */}
                      <div>
                        <label htmlFor={`${formId}-age`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Age (Minimum 14 yrs) *
                        </label>
                        <input
                          id={`${formId}-age`}
                          type="number"
                          min="14"
                          max="99"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          placeholder="e.g. 24"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                            errors.age ? "border-danger" : "border-lighter"
                          )}
                        />
                        {errors.age && <p className="text-xs text-danger mt-1">{errors.age}</p>}
                      </div>

                      {/* Gender (Optional) */}
                      <div>
                        <label htmlFor={`${formId}-gender`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Gender (Optional)
                        </label>
                        <select
                          id={`${formId}-gender`}
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-lighter bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>

                      {/* T-Shirt Size */}
                      <div>
                        <label htmlFor={`${formId}-tshirt`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Official T-Shirt Size *
                        </label>
                        <select
                          id={`${formId}-tshirt`}
                          value={formData.tshirtSize}
                          onChange={(e) => setFormData({ ...formData, tshirtSize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-lighter bg-white text-darker text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        >
                          <option value="S">Small (S — 36&quot;)</option>
                          <option value="M">Medium (M — 38&quot;)</option>
                          <option value="L">Large (L — 40&quot;)</option>
                          <option value="XL">Extra Large (XL — 42&quot;)</option>
                          <option value="XXL">Double Extra Large (XXL — 44&quot;)</option>
                        </select>
                        <p className="text-[11px] text-body mt-1">Included in your runner kit at bib collection.</p>
                      </div>

                      {/* Address or City */}
                      <div>
                        <label htmlFor={`${formId}-address`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          City / Residential Address *
                        </label>
                        <input
                          id={`${formId}-address`}
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="e.g. Birgunj, Parsa"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                            errors.address ? "border-danger" : "border-lighter"
                          )}
                        />
                        {errors.address && <p className="text-xs text-danger mt-1">{errors.address}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Declarations & Distance Acknowledgment */}
                  <div className="pt-4 border-t border-lighter space-y-3">
                    <h4 className="text-lg font-bold text-darker mb-3 flex items-center gap-2">
                      <span className="size-6 rounded-full bg-primary text-darker text-xs font-black flex items-center justify-center">2</span>
                      Distance Acknowledgment & Consent
                    </h4>

                    {/* Checkbox 1: 15 KM Distance */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-lighter">
                      <input
                        id={`${formId}-dist-check`}
                        type="checkbox"
                        checked={formData.understandsDistance}
                        onChange={(e) => setFormData({ ...formData, understandsDistance: e.target.checked })}
                        className="mt-1 size-4 rounded accent-primary text-primary focus:ring-primary"
                      />
                      <label htmlFor={`${formId}-dist-check`} className="text-xs sm:text-sm text-darker leading-relaxed cursor-pointer select-none">
                        <strong>I understand that the Rakesh Marathon is exclusively a 15 KM distance event</strong> (there are no 3 KM, 5 KM, or 10 KM sub-categories). I confirm that I am in suitable cardiovascular health to undertake this endurance run.
                      </label>
                    </div>
                    {errors.understandsDistance && <p className="text-xs text-danger">{errors.understandsDistance}</p>}

                    {/* Checkbox 2: Terms and Privacy */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-lighter">
                      <input
                        id={`${formId}-terms-check`}
                        type="checkbox"
                        checked={formData.acceptsTerms}
                        onChange={(e) => setFormData({ ...formData, acceptsTerms: e.target.checked })}
                        className="mt-1 size-4 rounded accent-primary text-primary focus:ring-primary"
                      />
                      <label htmlFor={`${formId}-terms-check`} className="text-xs sm:text-sm text-darker leading-relaxed cursor-pointer select-none">
                        I agree to follow official marshal safety instructions, traffic rules, and accept the event liability waiver and privacy terms for race coordination in Parsa.
                      </label>
                    </div>
                    {errors.acceptsTerms && <p className="text-xs text-danger">{errors.acceptsTerms}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="xl"
                      variant="default"
                      full
                      className="font-bold text-base shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
                    >
                      {isSubmitting ? "Processing Registration..." : "Submit 15 KM Marathon Registration"}
                    </Button>
                    <p className="text-center text-xs text-body mt-3">
                      Complimentary Community Entry • Zero Registration Fees • Secure Client Validation
                    </p>
                  </div>

                </div>
              </form>
            </ScrollReveal>
          )}

        </SectionContent>
      </div>
    </Section>
  );
}
