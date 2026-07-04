"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Slide {
  eyebrow: string;
  titleA: string;
  highlight: string;
  titleB: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  // Move 2nd slide to be first
  {
    eyebrow: "Hospital-Grade Hygiene & Infection Control",
    titleA: "Hygiene &",
    highlight: "Infection Control",
    titleB: "You Can Trust",
    subtitle:
      "Hospital-grade disinfectants, microfiber systems and sanitation supplies that raise your hygiene standards.",
    image: "/hero/heroo.jpg",
    imageAlt: "Sanitised hospital building with hygiene shield",
  },
  // Move 1st slide to be second
  {
    eyebrow: "Trusted B2B Housekeeping Supplier",
    titleA: "Professional Housekeeping",
    highlight: "Solutions",
    titleB: "for Every Space",
    subtitle:
      "Trusted supplier of premium cleaning products for hospitals, offices, schools, hotels and commercial facilities.",
    image: "/hero/sample0.webp",
    imageAlt: "Professional housekeeping cart, mop and cleaning equipment",
  },
  {
    eyebrow: "Bulk Supply • Fast On-Time Delivery",
    titleA: "Reliable Bulk Supply",
    highlight: "for Every",
    titleB: "Industry",
    subtitle:
      "From hotels and offices to factories — dependable bulk ordering with fast, on-time delivery across sectors.",
    image: "/hero/sample2.jpg",
    imageAlt: "Bulk housekeeping product boxes ready for delivery",
  },
];

const badges = [
  { Icon: ShieldCheck, label: "Quality Assured" },
  { Icon: Truck, label: "Fast Delivery" },
  { Icon: Sparkles, label: "Premium Grade" },
];

const AUTOPLAY = 6500;

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 90 : -90, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -90 : 90, opacity: 0 }),
};

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [[current, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const paginate = useCallback((dir: number) => {
    setSlide(([c]) => [(c + dir + slides.length) % slides.length, dir]);
  }, []);

  const goTo = useCallback(
    (i: number) => setSlide(([c]) => [i, i > c ? 1 : -1]),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => paginate(1), AUTOPLAY);
    return () => clearInterval(id);
  }, [paused, current, paginate]);

  const slide = slides[current];

  return (
    <section
      id="home"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 h-[125%]">
        <div className="absolute inset-0 bg-emerald-radial" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/95 via-emerald/85 to-emerald-900/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(197,160,106,0.18),transparent_42%)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </motion.div>

      {/* Floating accents */}
      <motion.span
        aria-hidden
        className="absolute left-[6%] top-[20%] -z-[5] h-24 w-24 rounded-full border border-gold/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute right-[8%] bottom-[16%] -z-[5] h-16 w-16 rounded-2xl border border-white/20"
        animate={{ y: [0, 18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slide track */}
      <motion.div style={{ opacity: fade }} className="relative w-full overflow-hidden">
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="container-px grid w-full items-center gap-10 pt-28 pb-24 lg:grid-cols-2 lg:gap-12 lg:pt-24 lg:pb-20"
          >
            {/* Image — left on desktop, with unique borders + animation */}
            <div className="order-2 lg:order-1">
              <HeroImage slide={slide} />
            </div>

            {/* Text — right */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="visible"
              className="order-1 max-w-xl lg:order-2"
            >
              <motion.span
                variants={textItem}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-200 backdrop-blur-sm"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {slide.eyebrow}
              </motion.span>

              <motion.h1
                variants={textItem}
                className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-shadow-hero sm:text-5xl lg:text-[3.4rem]"
              >
                {slide.titleA}{" "}
                <span className="bg-gradient-to-r from-gold-200 to-gold bg-clip-text text-transparent">
                  {slide.highlight}
                </span>{" "}
                {slide.titleB}
              </motion.h1>

              <motion.p
                variants={textItem}
                className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                variants={textItem}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Button href="/products" variant="gold" size="lg">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href="/#contact" variant="ghostLight" size="lg">
                  Get Quote
                </Button>
              </motion.div>

              <motion.div
                variants={textItem}
                className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
              >
                {badges.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm font-medium text-white/85"
                  >
                    <Icon className="h-5 w-5 text-gold" />
                    {label}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-7 z-10">
        <div className="container-px flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group h-2.5 rounded-full transition-all duration-300"
                style={{ width: i === current ? 34 : 10 }}
              >
                <span
                  className={`block h-full w-full rounded-full transition-colors ${
                    i === current
                      ? "bg-gold"
                      : "bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-emerald-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-emerald-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage({ slide }: { slide: Slide }) {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[500px]"
    >
      {/* Rotating dashed accent ring */}
      <motion.span
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-6 rounded-[42%_58%_56%_44%/52%_44%_56%_48%] border-2 border-dashed border-gold/35"
      />
      {/* Offset gold frame */}
      <span
        aria-hidden
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem_4rem_2.5rem_4rem] border-2 border-gold/50"
      />
      {/* Soft glow */}
      <span
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-[3rem] bg-gold/15 blur-2xl"
      />

      {/* Image card */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem_4rem_2.5rem_4rem] border border-white/30 bg-white shadow-premium-lg ring-1 ring-gold/30">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 500px"
          className="object-cover"
        />
        <span className="pointer-events-none absolute inset-0 rounded-[2.5rem_4rem_2.5rem_4rem] ring-1 ring-inset ring-black/5" />
      </div>

      {/* Floating badge — top */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-3 top-8 flex items-center gap-2 rounded-2xl border border-gold/20 bg-white/95 px-4 py-2.5 shadow-card backdrop-blur sm:-left-6"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald text-gold">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-emerald">Quality Assured</p>
          <p className="text-[11px] text-ink/55">Institutional grade</p>
        </div>
      </motion.div>

      {/* Floating badge — bottom */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-2 bottom-10 flex items-center gap-2 rounded-2xl border border-gold/20 bg-white/95 px-4 py-2.5 shadow-card backdrop-blur sm:-right-5"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient text-emerald-900">
          <Truck className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-emerald">Fast Delivery</p>
          <p className="text-[11px] text-ink/55">Bulk & on-time</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
