"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { industries } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company name"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Please tell us a little more (min. 10 chars)"),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New B2B Inquiry from ${data.company}`,
          from_name: siteConfig.name,
          ...data,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="John Doe"
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field label="Company Name" error={errors.company?.message}>
          <input
            {...register("company")}
            placeholder="Acme Facilities Ltd."
            className={inputCls(!!errors.company)}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register("phone")}
            placeholder="+91 98765 43210"
            className={inputCls(!!errors.phone)}
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@company.com"
            className={inputCls(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Industry Type" error={errors.industry?.message}>
        <select
          {...register("industry")}
          defaultValue=""
          className={cn(inputCls(!!errors.industry), "appearance-none bg-white")}
        >
          <option value="" disabled>
            Select your industry
          </option>
          {industries.map((i) => (
            <option key={i.id} value={i.title}>
              {i.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your requirements…"
          className={cn(inputCls(!!errors.message), "resize-none")}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-emerald px-7 py-3.5 font-semibold text-white shadow-premium transition-all duration-300 hover:bg-emerald-700 hover:shadow-premium-lg disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="h-4.5 w-4.5" />
          </>
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <Alert
            tone="success"
            Icon={CheckCircle2}
            text="Thank you! Your inquiry has been sent. Our team will get back to you shortly."
          />
        )}
        {status === "error" && (
          <Alert
            tone="error"
            Icon={AlertCircle}
            text="Something went wrong. Please try again or email us directly."
          />
        )}
      </AnimatePresence>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:ring-2",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-black/10 focus:border-gold focus:ring-gold/25"
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink/80">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

function Alert({
  tone,
  Icon,
  text,
}: {
  tone: "success" | "error";
  Icon: typeof CheckCircle2;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={cn(
        "flex items-start gap-3 rounded-xl border px-4 py-3 text-sm",
        tone === "success"
          ? "border-emerald/20 bg-emerald/5 text-emerald-700"
          : "border-red-200 bg-red-50 text-red-600"
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <span>{text}</span>
    </motion.div>
  );
}
