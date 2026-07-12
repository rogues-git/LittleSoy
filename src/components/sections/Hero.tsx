"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { image: "/hero/sl1.png", alt: "Little Soe housekeeping — slide 1" },
  { image: "/hero/sl2.png", alt: "Little Soe housekeeping — slide 2" },
  { image: "/hero/sl3.png", alt: "Little Soe housekeeping — slide 3" },
];

const AUTOPLAY = 6000;

const imageVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => paginate(1), AUTOPLAY);
    return () => clearInterval(id);
  }, [paused, current, paginate]);

  return (
    <section
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full bg-emerald-900 pt-16 sm:pt-20"
    >
      {/* Poster stage — matches the 1376x768 poster ratio so the full
          image is always shown, uncropped and responsive */}
      <div className="relative aspect-[1376/768] w-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2.5 sm:bottom-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2.5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-all duration-300"
              style={{
                width: i === current ? 30 : 10,
                backgroundColor:
                  i === current ? "#C5A06A" : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-emerald-900 sm:flex md:left-4 md:h-11 md:w-11"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-emerald-900 sm:flex md:right-4 md:h-11 md:w-11"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
