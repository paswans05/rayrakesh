"use client";

import { useState, useId, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { toPng } from "html-to-image";
import { useRegistrationModal } from "@/context/registration-modal-context";
import { Button } from "@/components/ui/button";
import {
  CheckCircleFill,
  AlertCircleFill,
  Download,
  Cross,
} from "@/components/icons";
import { cn } from "@/lib/utils";

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

export default function MarathonRegistrationModal() {
  const { isOpen, closeRegistrationModal } = useRegistrationModal();
  const formId = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloadingCard, setIsDownloadingCard] = useState(false);
  const [receipt, setReceipt] = useState<RegistrationReceipt | null>(null);
  const [duplicateWarning, setDuplicateWarning] = useState<string | null>(null);
  const [cardStatusNotice, setCardStatusNotice] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeRegistrationModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeRegistrationModal]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

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
    } else if (ageNum < 16) {
      newErrors.age = "Minimum age to participate in 15 KM is 16 years.";
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
      newErrors.acceptsTerms = "You must accept the event terms.";
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
          setCardStatusNotice("Found existing record in SQLite database! Your runner card is displayed below.");
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

      setReceipt(newReceipt);
      setCardStatusNotice(null);
    } catch {
      setDuplicateWarning("Failed to process registration. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-5"
    >
      {/* Dark Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={closeRegistrationModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-lighter z-10 my-auto flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-darker text-white border-b border-white/10 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <span className="size-9 rounded-xl bg-primary text-darker font-black text-sm flex items-center justify-center">
              15K
            </span>
            <div>
              <h3 id="modal-title" className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                Rakesh Marathon Registration
              </h3>
              <p className="text-xs text-primary font-medium">15 KM Single-Distance • Kathmandu, Nepal</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeRegistrationModal}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close registration popup"
          >
            <Cross className="size-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {receipt ? (
            /* ── CONFIRMATION & DIGITAL RUNNER CARD ── */
            <div className="flex flex-col items-center">
              <div className="text-center max-w-lg mx-auto mb-6">
                <div className="size-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3 border border-primary/40">
                  <CheckCircleFill className="size-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Saved in Event Database</span>
                <h4 className="text-2xl font-black text-darker mt-1">Your Official Marathon Runner Card</h4>
                <p className="text-xs sm:text-sm text-body mt-1">
                  Save or download your official digital card below. Present this pass at the bib desk.
                </p>
                {cardStatusNotice && (
                  <div className="mt-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                    {cardStatusNotice}
                  </div>
                )}
              </div>

              {/* ── CARD ELEMENT FOR PNG CAPTURE ── */}
              <div
                ref={cardRef}
                className="w-full max-w-xl rounded-3xl overflow-hidden border-2 border-[#CAA05C] bg-[#121C27] text-white shadow-2xl p-6 sm:p-8 relative"
                style={{
                  backgroundColor: "#121C27",
                  backgroundImage:
                    "radial-gradient(circle at top right, rgba(202, 160, 92, 0.22), transparent 50%), radial-gradient(circle at bottom left, rgba(189, 31, 23, 0.18), transparent 45%)",
                }}
              >
                {/* Card Top */}
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary text-darker flex items-center justify-center font-black text-base shadow-md shrink-0">
                      RM
                    </div>
                    <div>
                      <h4 className="text-base font-black tracking-wider uppercase text-white leading-tight">
                        RAKESH MARATHON 2026
                      </h4>
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                        Run Together. Build a Better Tomorrow.
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-primary text-darker">
                    OFFICIAL PASS
                  </span>
                </div>

                {/* Card Bib */}
                <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#1c2733] border border-primary/40 text-center relative overflow-hidden">
                  <div className="text-[11px] uppercase tracking-widest text-primary font-bold">
                    15 KM SINGLE DISTANCE • KATHMANDU, NEPAL
                  </div>
                  <div className="text-4xl sm:text-5xl font-mono font-black text-white mt-1 tracking-wider">
                    {receipt.registrationId}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-white/70">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    <span>SAVED IN SQLITE DATABASE</span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">Participant Name</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                      {receipt.fullName}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-white/50 uppercase block text-[10px]">Age</span>
                      <strong className="text-white">{receipt.age} Years</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-white/50 uppercase block text-[10px]">T-Shirt Size</span>
                      <strong className="text-primary font-bold">{receipt.tshirtSize || "M"}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                      <span className="text-white/50 uppercase block text-[10px]">Category</span>
                      <strong className="text-white">15 KM Solo</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-white/50 uppercase block text-[10px]">Email</span>
                      <span className="text-white truncate block">{receipt.email}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-white/50 uppercase block text-[10px]">Contact Phone</span>
                      <span className="text-white font-mono">{receipt.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Card Barcode */}
                <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-[2px] h-6 opacity-85">
                      {[4, 2, 6, 1, 3, 5, 2, 4, 7, 2, 5, 3, 1, 6, 3, 4, 2, 5, 1, 4, 6, 2, 3, 5, 2, 4, 1, 5, 3, 6, 2, 4, 5, 1, 3, 6, 2, 4, 1, 5, 2, 3, 4].map((h, i) => (
                        <div key={i} className="bg-white rounded-xs" style={{ width: i % 3 === 0 ? "3px" : "2px", height: `${h * 3}px` }} />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-white/50 mt-1">CHECK-IN: {receipt.registrationId}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-wider text-white/50 block">Registered On</span>
                    <span className="text-[11px] font-mono text-white/80">{receipt.registeredAt}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full">
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  onClick={handleDownloadCard}
                  disabled={isDownloadingCard}
                  className="font-bold shadow-lg shadow-primary/25 cursor-pointer"
                >
                  <Download className="size-4 mr-2 shrink-0" />
                  <span>{isDownloadingCard ? "Generating Card..." : "Save / Download Card (PNG)"}</span>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => window.print()}
                  className="cursor-pointer"
                >
                  <span>Print Card</span>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleReset}
                  className="cursor-pointer"
                >
                  <span>Register Another</span>
                </Button>
              </div>
            </div>
          ) : (
            /* ── REGISTRATION INPUT FORM ── */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {duplicateWarning && (
                <div className="p-3.5 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm flex items-start gap-2.5">
                  <AlertCircleFill className="size-5 shrink-0 mt-0.5" />
                  <span>{duplicateWarning}</span>
                </div>
              )}

              {/* Step 1: Personal Info */}
              <div>
                <h4 className="text-base font-bold text-darker mb-3 flex items-center gap-2">
                  <span className="size-5 rounded-full bg-primary text-darker text-xs font-black flex items-center justify-center">1</span>
                  Personal Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor={`${formId}-modal-name`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1">
                      Full Name *
                    </label>
                    <input
                      id={`${formId}-modal-name`}
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Shrestha"
                      className={cn(
                        "w-full px-3.5 py-2.5 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                        errors.fullName ? "border-danger" : "border-lighter"
                      )}
                    />
                    {errors.fullName && <p className="text-xs text-danger mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor={`${formId}-modal-email`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1">
                      Email Address *
                    </label>
                    <input
                      id={`${formId}-modal-email`}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@example.com"
                      className={cn(
                        "w-full px-3.5 py-2.5 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                        errors.email ? "border-danger" : "border-lighter"
                      )}
                    />
                    {errors.email && <p className="text-xs text-danger mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor={`${formId}-modal-phone`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1">
                      Phone Number *
                    </label>
                    <input
                      id={`${formId}-modal-phone`}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+977 98XXXXXXXX"
                      className={cn(
                        "w-full px-3.5 py-2.5 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-mono",
                        errors.phone ? "border-danger" : "border-lighter"
                      )}
                    />
                    {errors.phone && <p className="text-xs text-danger mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor={`${formId}-modal-age`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1">
                      Age (Min 16+) *
                    </label>
                    <input
                      id={`${formId}-modal-age`}
                      type="number"
                      min="16"
                      max="99"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 24"
                      className={cn(
                        "w-full px-3.5 py-2.5 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                        errors.age ? "border-danger" : "border-lighter"
                      )}
                    />
                    {errors.age && <p className="text-xs text-danger mt-1">{errors.age}</p>}
                  </div>

                  <div>
                    <label htmlFor={`${formId}-modal-gender`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1">
                      Gender (Optional)
                    </label>
                    <select
                      id={`${formId}-modal-gender`}
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-lighter bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={`${formId}-modal-tshirt`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1">
                      Official T-Shirt Size *
                    </label>
                    <select
                      id={`${formId}-modal-tshirt`}
                      value={formData.tshirtSize}
                      onChange={(e) => setFormData({ ...formData, tshirtSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-lighter bg-white text-darker text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    >
                      <option value="S">Small (S — 36&quot;)</option>
                      <option value="M">Medium (M — 38&quot;)</option>
                      <option value="L">Large (L — 40&quot;)</option>
                    </select>
                    <p className="text-[11px] text-body mt-1">Provided in your runner kit at the reporting counter.</p>
                  </div>

                  <div>
                    <label htmlFor={`${formId}-modal-address`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1">
                      City / Residential Address *
                    </label>
                    <input
                      id={`${formId}-modal-address`}
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Kathmandu, Nepal"
                      className={cn(
                        "w-full px-3.5 py-2.5 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                        errors.address ? "border-danger" : "border-lighter"
                      )}
                    />
                    {errors.address && <p className="text-xs text-danger mt-1">{errors.address}</p>}
                  </div>
                </div>
              </div>

              {/* Step 2: Checkboxes & Terms */}
              <div className="pt-3 border-t border-lighter space-y-2.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-lightest border border-lighter">
                  <input
                    id={`${formId}-modal-dist`}
                    type="checkbox"
                    checked={formData.understandsDistance}
                    onChange={(e) => setFormData({ ...formData, understandsDistance: e.target.checked })}
                    className="mt-0.5 size-4 rounded accent-primary text-primary focus:ring-primary"
                  />
                  <label htmlFor={`${formId}-modal-dist`} className="text-xs text-darker leading-relaxed cursor-pointer select-none">
                    <strong>I understand this is exclusively a 15 KM race</strong> and I confirm I am medically fit for endurance running.
                  </label>
                </div>
                {errors.understandsDistance && <p className="text-xs text-danger">{errors.understandsDistance}</p>}

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-lightest border border-lighter">
                  <input
                    id={`${formId}-modal-terms`}
                    type="checkbox"
                    checked={formData.acceptsTerms}
                    onChange={(e) => setFormData({ ...formData, acceptsTerms: e.target.checked })}
                    className="mt-0.5 size-4 rounded accent-primary text-primary focus:ring-primary"
                  />
                  <label htmlFor={`${formId}-modal-terms`} className="text-xs text-darker leading-relaxed cursor-pointer select-none">
                    I agree to follow safety marshal instructions and accept the event terms.
                  </label>
                </div>
                {errors.acceptsTerms && <p className="text-xs text-danger">{errors.acceptsTerms}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="xl"
                  variant="default"
                  full
                  className="font-bold text-base shadow-lg shadow-primary/25 cursor-pointer"
                >
                  {isSubmitting ? "Saving to Database..." : "Complete Registration & Get ID Card"}
                </Button>
                <p className="text-center text-[11px] text-body mt-2">
                  Complimentary Community Entry • Instant Digital Card Generation
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

