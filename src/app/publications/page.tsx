"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Eye,
  Download,
  FileText,
  Calendar,
  Tag,
  Zap,
  Mail,
  X,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PUBLICATIONS, PUBLICATION_THEMES } from "@/data/publications";

export default function PublicationsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [year, setYear] = useState("Toutes");
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PUBLICATIONS.filter((pub) => {
      const matchQ =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.description.toLowerCase().includes(q) ||
        pub.theme.toLowerCase().includes(q);
      const matchCat = category === "Toutes" || pub.category === category;
      const matchYear = year === "Toutes" || pub.year === year;
      const matchTheme = !selectedTheme || pub.theme === selectedTheme;
      return matchQ && matchCat && matchYear && matchTheme;
    });
  }, [query, category, year, selectedTheme]);

  return (
    <div>
      <PageHero
        title="Publications"
        subtitle="Rapports, études, policy briefs et documents de référence produits dans le cadre des programmes de l’IGD."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Publications" }]}
        actions={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
          >
            <Mail className="w-4 h-4" />
            Demande d’information
          </Link>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Filtres */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-5">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Rechercher</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Titre, thème, programme…"
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

          <div className="md:col-span-4">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Catégorie</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
            >
              <option value="Toutes">Toutes</option>
              <option value="Rapports">Rapports</option>
              <option value="Études & recherches">Études &amp; recherches</option>
              <option value="Notes politiques">Notes politiques</option>
              <option value="Appels & communiqués">Appels &amp; communiqués</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Année</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
            >
              <option value="Toutes">Toutes</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Liste principale */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
                Documents disponibles
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 text-center text-sm text-slate-500">
                Aucune publication ne correspond à vos critères.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filtered.map((pub) => (
                  <article
                    key={pub.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      {pub.coverImage ? (
                        <Image
                          src={pub.coverImage}
                          alt={pub.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <FileText className="w-12 h-12" />
                        </div>
                      )}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-bold text-slate-800 shadow-sm">
                        {pub.badge}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#7CC242]" />
                          {pub.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5 text-[#E63087]" />
                          {pub.theme}
                        </span>
                        <span>PDF</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-1">
                        {pub.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2.5">
                        <a
                          href={pub.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 hover:border-[#E63087] hover:text-[#E63087] text-xs font-semibold text-slate-700 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Lire
                        </a>
                        <a
                          href={pub.pdfUrl}
                          download
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#7CC242] hover:bg-[#5DA126] text-xs font-semibold text-white transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Télécharger
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Ressources rapides</h3>
                <Zap className="w-4 h-4 text-[#E63087]" />
              </div>
              <div className="space-y-2.5">
                <a
                  href="/publications/Brochure-Projet-PYPA.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Brochure PYPA (PDF)
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("Toutes");
                    setYear("Toutes");
                    setSelectedTheme(null);
                    setQuery("");
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#E63087] hover:text-[#E63087] text-slate-700 text-xs font-semibold transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900">Thématiques</h3>
              <div className="flex flex-wrap gap-2">
                {PUBLICATION_THEMES.map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    onClick={() =>
                      setSelectedTheme(selectedTheme === theme ? null : theme)
                    }
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                      selectedTheme === theme
                        ? "bg-[#E63087] text-white border-[#E63087]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#E63087]"
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">À propos des publications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Retrouvez ici les rapports, études, notes politiques et documents produits dans le
                cadre des programmes de l’IGD. Les fichiers sont proposés au format PDF pour
                consultation et téléchargement libre.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
