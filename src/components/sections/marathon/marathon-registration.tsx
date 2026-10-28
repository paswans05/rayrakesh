"use client";

import { useState, useId } from "react";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircleFill, AlertCircleFill, Activity, Shield, MapPinFill, CallAlt, Mail } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  emergencyName: string;
  emergencyPhone: string;
  understandsDistance: boolean;
  acceptsTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  age?: string;
  address?: string;
  emergencyName?: string;
  emergencyPhone?: string;
  understandsDistance?: string;
  acceptsTerms?: string;
}

interface RegistrationReceipt {
  registrationId: string;
  fullName: string;
  email: string;
  phone: string;
  age: string;
  address: string;
  emergencyName: string;
  emergencyPhone: string;
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
    address: "Parsa, Nepal",
    emergencyName: "",
    emergencyPhone: "+977 ",
    understandsDistance: false,
    acceptsTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<RegistrationReceipt | null>(null);
  const [duplicateWarning, setDuplicateWarning] = useState<string | null>(null);

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
    } else if (ageNum < 16) {
      newErrors.age = "Minimum age to participate in the 15 KM Marathon is 16 years.";
    } else if (ageNum > 100) {
      newErrors.age = "Please enter a valid age.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address or city is required.";
    }

    if (!formData.emergencyName.trim()) {
      newErrors.emergencyName = "Emergency contact name is required.";
    }

    if (!formData.emergencyPhone.trim() || formData.emergencyPhone.trim() === "+977") {
      newErrors.emergencyPhone = "Emergency contact phone is required.";
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
          address: formData.address.trim(),
          emergencyName: formData.emergencyName.trim(),
          emergencyPhone: formData.emergencyPhone.trim(),
          registrationId: generatedId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
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
        address: formData.address.trim(),
        emergencyName: formData.emergencyName.trim(),
        emergencyPhone: formData.emergencyPhone.trim(),
        registeredAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Store in session to protect against duplicates
      if (typeof window !== "undefined") {
        localStorage.setItem(existingKey, JSON.stringify(newReceipt));
      }

      setReceipt(newReceipt);
    } catch {
      setDuplicateWarning("Failed to process registration. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setReceipt(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "+977 ",
      age: "",
      gender: "prefer-not-to-say",
      address: "Parsa, Nepal",
      emergencyName: "",
      emergencyPhone: "+977 ",
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
              <div className="p-8 sm:p-12 rounded-3xl bg-darker text-white border-2 border-primary shadow-2xl relative overflow-hidden">
                <div className="text-center max-w-xl mx-auto">
                  <div className="size-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4 border border-primary/40">
                    <CheckCircleFill className="size-10" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Registration Confirmed</span>
                  <h3 className="text-3xl font-black text-white mt-1">You Are Officially Registered!</h3>
                  <p className="text-sm text-white/75 mt-2">
                    Welcome to the 15 KM Rakesh Marathon in Parsa. Keep your registration ID handy for bib collection.
                  </p>
                </div>

                {/* Registration Slip Summary Card */}
                <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/15 max-w-2xl mx-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Registration ID</div>
                      <div className="text-2xl font-mono font-black text-primary">{receipt.registrationId}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/60 uppercase tracking-wider">Distance Category</div>
                      <div className="text-base font-bold text-white">15 KM Solo</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
                    <div>
                      <span className="text-white/60 text-xs uppercase block">Participant Name</span>
                      <strong className="text-white">{receipt.fullName}</strong>
                    </div>
                    <div>
                      <span className="text-white/60 text-xs uppercase block">Email Address</span>
                      <strong className="text-white">{receipt.email}</strong>
                    </div>
                    <div>
                      <span className="text-white/60 text-xs uppercase block">Contact Phone</span>
                      <strong className="text-white">{receipt.phone}</strong>
                    </div>
                    <div>
                      <span className="text-white/60 text-xs uppercase block">Age / Location</span>
                      <strong className="text-white">{receipt.age} yrs • {receipt.address}</strong>
                    </div>
                    <div>
                      <span className="text-white/60 text-xs uppercase block">Emergency Contact</span>
                      <strong className="text-white">{receipt.emergencyName} ({receipt.emergencyPhone})</strong>
                    </div>
                    <div>
                      <span className="text-white/60 text-xs uppercase block">Timestamp</span>
                      <strong className="text-white">{receipt.registeredAt}</strong>
                    </div>
                  </div>
                </div>

                {/* Email Confirmation Notice */}
                <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-white/90 max-w-2xl mx-auto flex items-center gap-3">
                  <CheckCircleFill className="size-5 text-primary shrink-0" />
                  <span>A confirmation email with your Registration ID has been dispatched to <strong>{receipt.email}</strong>. Please check your inbox and spam folder.</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.print()}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Print Registration Slip
                  </Button>
                  <Button
                    variant="default"
                    onClick={handleReset}
                  >
                    Register Another Runner
                  </Button>
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
                          Age (Minimum 16 yrs) *
                        </label>
                        <input
                          id={`${formId}-age`}
                          type="number"
                          min="16"
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

                  {/* Step 2: Emergency Contact */}
                  <div className="pt-4 border-t border-lighter">
                    <h4 className="text-lg font-bold text-darker mb-4 flex items-center gap-2">
                      <span className="size-6 rounded-full bg-primary text-darker text-xs font-black flex items-center justify-center">2</span>
                      Emergency Contact Information
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Emergency Contact Name */}
                      <div>
                        <label htmlFor={`${formId}-em-name`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Emergency Contact Name *
                        </label>
                        <input
                          id={`${formId}-em-name`}
                          type="text"
                          value={formData.emergencyName}
                          onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                          placeholder="e.g. Suman Shrestha (Parent/Spouse)"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all",
                            errors.emergencyName ? "border-danger" : "border-lighter"
                          )}
                        />
                        {errors.emergencyName && <p className="text-xs text-danger mt-1">{errors.emergencyName}</p>}
                      </div>

                      {/* Emergency Contact Phone */}
                      <div>
                        <label htmlFor={`${formId}-em-phone`} className="block text-xs font-bold uppercase tracking-wider text-darker mb-1.5">
                          Emergency Contact Phone *
                        </label>
                        <input
                          id={`${formId}-em-phone`}
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                          placeholder="+977 98XXXXXXXX"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white text-darker text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-mono",
                            errors.emergencyPhone ? "border-danger" : "border-lighter"
                          )}
                        />
                        {errors.emergencyPhone && <p className="text-xs text-danger mt-1">{errors.emergencyPhone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Declarations & Distance Acknowledgment */}
                  <div className="pt-4 border-t border-lighter space-y-3">
                    <h4 className="text-lg font-bold text-darker mb-3 flex items-center gap-2">
                      <span className="size-6 rounded-full bg-primary text-darker text-xs font-black flex items-center justify-center">3</span>
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
