"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PROGRAMS, ProgramStatus } from "@/data/programs";

export default function ProgrammesPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | ProgramStatus>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROGRAMS.filter((p) => {
      const matchStatus = filter === "all" || p.status === filter;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.countries.some((c) => c.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchStatus && matchQuery;
    });
  }, [query, filter]);

  const activeList = filtered.filter((p) => p.status === "en-cours");
  const completedList = filtered.filter((p) => p.status === "termine");

  return (
    <div>
      <PageHero
        title="Programmes"
        subtitle="Découvrez les programmes en cours et les initiatives achevées de l’IGD en Afrique de l’Ouest."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Programmes" }]}
        actions={
          <>
            <a
              href="#en-cours"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
            >
              <Zap className="w-4 h-4" />
              En cours
            </a>
            <a
              href="#termines"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:border-[#E63087] hover:text-[#E63087] text-slate-700 text-sm font-semibold transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              Terminés
            </a>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Barre outils */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un programme (ex : PYPA, EWIP, WYDE, Sahel...)"
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Effacer la recherche"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {(
              [
                { key: "all", label: "Tous" },
                { key: "en-cours", label: "En cours" },
                { key: "termine", label: "Terminés" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setFilter(opt.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  filter === opt.key
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {opt.label}
              </button>
            ))}

            <span className="ml-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">
              {filtered.length} {filtered.length > 1 ? "programmes" : "programme"}
            </span>
          </div>
        </div>

        {/* En cours */}
        {(filter === "all" || filter === "en-cours") && (
          <section id="en-cours" className="space-y-6">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
                Programmes en cours
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                {activeList.length} programme{activeList.length > 1 ? "s" : ""}
              </span>
            </div>

            {activeList.length === 0 ? (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">
                Aucun programme en cours ne correspond à votre recherche.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeList.map((prog) => (
                  <div
                    key={prog.slug}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="h-12 w-20 rounded-xl bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center shrink-0">
                        {prog.logo ? (
                          <Image
                            src={prog.logo}
                            alt={prog.title}
                            width={80}
                            height={48}
                            className="max-h-9 w-auto object-contain"
                          />
                        ) : (
                          <span className="text-xs font-bold text-slate-500">{prog.shortTitle}</span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-lime-50 text-[#4c8a1b] border border-lime-200/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7CC242]" />
                        En cours
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">{prog.title}</h3>
                    <p className="text-xs font-medium text-[#E63087] mt-0.5">{prog.subtitle}</p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1">
                      {prog.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {prog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/programmes/${prog.slug}`}
                      className="mt-5 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
                    >
                      Voir le programme
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Terminés */}
        {(filter === "all" || filter === "termine") && (
          <section id="termines" className="space-y-6 pt-4">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-slate-400" />
                Programmes terminés
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                {completedList.length} programme{completedList.length > 1 ? "s" : ""}
              </span>
            </div>

            {completedList.length === 0 ? (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">
                Aucun programme terminé ne correspond à votre recherche.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {completedList.map((prog) => (
                  <div
                    key={prog.slug}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-slate-500">{prog.period}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600">
                        <CheckCircle2 className="w-3 h-3" />
                        Terminé
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{prog.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-1">
                      {prog.summary}
                    </p>

                    <Link
                      href={`/programmes/${prog.slug}`}
                      className="mt-4 inline-flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-xl border border-slate-200 hover:border-[#E63087] hover:text-[#E63087] text-xs font-semibold text-slate-700 transition-colors"
                    >
                      Consulter la fiche
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
