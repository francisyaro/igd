"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const SLIDES = [
  {
    image: "/images/hero1.jpg",
    badge: "Leadership & Gouvernance",
    title: "Remise des attestations – Conférence régionale sur la participation des femmes",
    subtitle:
      "L’IGD accompagne les jeunes et les femmes d’Afrique de l’Ouest pour renforcer la démocratie, les droits humains et la gouvernance inclusive.",
  },
  {
    image: "/images/hero2.jpg",
    badge: "Afrique de l’Ouest",
    title: "Conférence régionale sur la participation des femmes en Afrique",
    subtitle:
      "Un think tank et acteur de formation de référence depuis 2008, au cœur des dynamiques démocratiques et citoyennes.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative h-[540px] sm:h-[600px] lg:h-[640px] w-full overflow-hidden bg-slate-950">
      {SLIDES.map((s, idx) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover object-center"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/35" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#7CC242]" />
            <span>{slide.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
            {slide.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white font-semibold text-sm shadow-lg shadow-lime-900/20 transition-all"
            >
              Découvrir nos programmes
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm transition-all"
            >
              À propos de l’IGD
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Slide précédente"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Slide suivante"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`Aller à la slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "w-8 bg-[#7CC242]" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
