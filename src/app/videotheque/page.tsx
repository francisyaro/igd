"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Play, Calendar, MapPin, X, Video } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { VIDEOS, VideoItem } from "@/data/media";

const CATEGORIES = ["Tout", "Programmes", "Événements", "Recherche"] as const;

export default function VideothequePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Tout");
  const [year, setYear] = useState("");
  const [place, setPlace] = useState("");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VIDEOS.filter((v) => {
      const matchCat = category === "Tout" || v.category === category;
      const matchYear = !year || v.year === year;
      const matchPlace = !place || v.place === place;
      const matchQ =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.tag.toLowerCase().includes(q) ||
        v.place.toLowerCase().includes(q);
      return matchCat && matchYear && matchPlace && matchQ;
    });
  }, [query, category, year, place]);

  return (
    <div>
      <PageHero
        title="Vidéothèque"
        subtitle="Conférences, formations, programmes et interventions de l’IGD en vidéo."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Vidéothèque" }]}
        actions={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
          >
            <Video className="w-4 h-4" />
            Proposer une vidéo
          </Link>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher : WYDE, PJL, conférence, Ouagadougou…"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    category === cat
                      ? "border-[#7CC242] bg-lime-50 text-[#4c8a1b]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium bg-white"
            >
              <option value="">Année (toutes)</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>

            <select
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium bg-white"
            >
              <option value="">Lieu (tous)</option>
              <option value="Ouagadougou">Ouagadougou</option>
              <option value="Abidjan">Abidjan</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 text-center text-sm text-slate-500">
            Aucune vidéo ne correspond à vos critères.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="group text-left bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={video.thumb}
                    alt={video.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#E63087] transition-all">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-slate-950/75 text-white text-[11px] font-semibold">
                    {video.duration}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#7CC242]" />
                      {video.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E63087]" />
                      {video.place}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-[#E63087] transition-colors flex-1">
                    {video.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-600">
                      {video.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E63087] text-[11px] font-semibold">
                      {video.tag}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {activeVideo.date} • {activeVideo.place}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-slate-950">
              <iframe
                title={activeVideo.title}
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
