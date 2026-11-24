"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Camera, Calendar, X, Maximize2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PHOTO_ALBUMS, PhotoAlbum } from "@/data/media";

const FILTER_CHIPS = ["Tout", "Événements", "Programmes", "Recherche", "Femmes", "Jeunes"];

export default function PhotothequePage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("Tout");
  const [lightbox, setLightbox] = useState<PhotoAlbum | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PHOTO_ALBUMS.filter((album) => {
      const matchTag =
        activeTag === "Tout" ||
        album.tags.some((t) => t.toLowerCase().includes(activeTag.toLowerCase()));
      const matchQ =
        !q ||
        album.title.toLowerCase().includes(q) ||
        album.tags.some((t) => t.toLowerCase().includes(q)) ||
        album.date.toLowerCase().includes(q);
      return matchTag && matchQ;
    });
  }, [query, activeTag]);

  return (
    <div>
      <PageHero
        title="Photothèque"
        subtitle="Albums, événements, formations et moments forts de l’IGD en images."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Photothèque" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un album (WYDE, PJL, Femmes...)"
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
            {FILTER_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => setActiveTag(chip)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  activeTag === chip
                    ? "border-[#7CC242] bg-lime-50 text-[#4c8a1b]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 text-center text-sm text-slate-500">
            Aucun album ne correspond à votre recherche.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((album) => (
              <button
                key={album.id}
                type="button"
                onClick={() => setLightbox(album)}
                className="group text-left bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-bold text-slate-800 shadow-sm">
                      <Camera className="w-3.5 h-3.5 text-[#7CC242]" />
                      {album.count} photos
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E63087]" />
                    {album.date}
                  </div>
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-[#E63087] transition-colors">
                    {album.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 flex-1">
                    {album.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {album.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{lightbox.title}</h3>
                <p className="text-xs text-slate-500">
                  {lightbox.date} • {lightbox.count} photos
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-80 sm:h-[420px] bg-slate-100">
              <Image
                src={lightbox.cover}
                alt={lightbox.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
