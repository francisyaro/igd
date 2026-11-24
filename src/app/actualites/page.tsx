"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, MapPin, ArrowRight, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { NEWS_ARTICLES } from "@/data/news";

export default function ActualitesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return NEWS_ARTICLES.filter(
      (a) =>
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <PageHero
        title="Actualités"
        subtitle="Suivez les événements, formations, conférences et temps forts de l’IGD."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Actualités" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm max-w-xl">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une actualité..."
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
        </div>

        {filtered.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 text-center text-sm text-slate-500">
            Aucune actualité ne correspond à votre recherche.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/actualites/${article.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#E63087] text-white text-[11px] font-semibold">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#7CC242]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E63087]" />
                      {article.location}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#E63087] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E63087]">
                    Lire plus
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
