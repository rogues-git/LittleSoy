"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, CheckCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

const WA_GREEN = "#25D366";

function waLink(text: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return text.trim() ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const startChat = () => {
    window.open(
      waLink(
        message ||
          "Hi Little Soe Revolution Product, I'd like to know more about your housekeeping products."
      ),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(360px,calc(100vw-3rem))] origin-bottom-right overflow-hidden rounded-3xl border border-black/5 bg-white shadow-premium-lg"
          >
            {/* Header */}
            <div
              className="relative flex items-center gap-3 px-5 py-4 text-white"
              style={{ backgroundColor: WA_GREEN }}
            >
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 ring-2 ring-white/40">
                <Image
                  src="/logo1.png"
                  alt={siteConfig.name}
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold leading-tight">
                  <span className="font-royal-hefana">
                    {siteConfig.shortName}
                  </span>{" "}
                  Support
                </p>
                <p className="flex items-center gap-1.5 text-xs text-white/90">
                  <span className="inline-block h-2 w-2 rounded-full bg-white" />
                  Online · replies in minutes
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat body */}
            <div className="relative bg-[#ECE5DD] px-4 py-5">
              {/* subtle doodle pattern */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 15%, rgba(0,0,0,0.03) 1px, transparent 1px), radial-gradient(circle at 75% 55%, rgba(0,0,0,0.03) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="relative max-w-[85%]"
              >
                <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm leading-relaxed text-ink/80">
                    👋 Hi there! Welcome to{" "}
                    <span className="font-semibold text-emerald">
                      {siteConfig.name}
                    </span>
                    . How can we help you with your housekeeping needs today?
                  </p>
                  <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-ink/40">
                    now <CheckCheck className="h-3 w-3 text-[#34B7F1]" />
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && startChat()}
                placeholder="Type your message…"
                className="flex-1 rounded-full border border-black/10 bg-section-gray px-4 py-2.5 text-sm outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25"
              />
              <button
                type="button"
                onClick={startChat}
                aria-label="Send on WhatsApp"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition hover:brightness-95"
                style={{ backgroundColor: WA_GREEN }}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            className="group relative inline-flex h-14 w-14 items-center justify-center self-end rounded-full text-white shadow-premium-lg transition-transform hover:scale-110"
            style={{ backgroundColor: WA_GREEN }}
          >
            {!open && (
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-30"
                style={{ backgroundColor: WA_GREEN }}
              />
            )}
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="relative h-7 w-7" />
                </motion.span>
              ) : (
                <motion.span
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <MessageCircle className="relative h-7 w-7" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
