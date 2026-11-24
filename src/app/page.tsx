import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Globe2,
  CalendarCheck,
  Layers,
  FileText,
  Download,
  Eye,
  Calendar,
  MapPin,
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ACTIVE_PROGRAMS } from "@/data/programs";
import { PUBLICATIONS } from "@/data/publications";
import { NEWS_ARTICLES } from "@/data/news";

const PARTNERS = [
  { name: "CIS", src: "/images/cis.png" },
  { name: "Diakonia", src: "/images/diakonia-logo.jpg" },
  { name: "Union Européenne", src: "/images/eu.png" },
  { name: "Fondation Hirondelle", src: "/images/fondation-hirondelle.png" },
  { name: "Afrobarometer", src: "/images/logo-afrobarometer.png" },
  { name: "WYDE", src: "/images/Logo-WYDE.png" },
];

export default function HomePage() {
  const featuredPubs = PUBLICATIONS.slice(0, 3);

  return (
    <div>
      <HeroSection />

      {/* IMPACT METRICS BAR */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-lime-50 text-[#5DA126] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">~400</div>
              <div className="text-xs font-medium text-slate-500">Alumni (jeunes & femmes)</div>
            </div>
          </div>

          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E63087] flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">7 pays</div>
              <div className="text-xs font-medium text-slate-500">Afrique de l’Ouest</div>
            </div>
          </div>

          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-lime-50 text-[#5DA126] flex items-center justify-center shrink-0">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">2008</div>
              <div className="text-xs font-medium text-slate-500">Reconnaissance officielle</div>
            </div>
          </div>

          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E63087] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">11</div>
              <div className="text-xs font-medium text-slate-500">Programmes phares</div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS PROGRAMMES EN COURS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E63087]">
              Action & Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 flex items-center gap-3">
              <span className="w-1.5 h-8 rounded-full bg-[#7CC242]" />
              Nos Programmes en cours
            </h2>
          </div>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5DA126] hover:text-[#4c8a1b] transition-colors"
          >
            Voir tous les programmes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVE_PROGRAMS.map((prog) => (
            <Link
              key={prog.slug}
              href={`/programmes/${prog.slug}`}
              className="group bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="h-14 w-24 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shrink-0">
                  {prog.logo ? (
                    <Image
                      src={prog.logo}
                      alt={prog.title}
                      width={96}
                      height={56}
                      className="max-h-11 w-auto object-contain"
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

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E63087] transition-colors">
                {prog.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3 flex-1">
                {prog.summary}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#5DA126]">
                <span>Découvrir le programme</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Explorer les 11 programmes de l’IGD
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PUBLICATIONS RÉCENTES */}
      <section className="bg-slate-50 border-y border-slate-200/70 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E63087]">
                Recherche & Policy Briefs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 flex items-center gap-3">
                <span className="w-1.5 h-8 rounded-full bg-[#7CC242]" />
                Publications récentes
              </h2>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E63087] hover:text-[#C41E6D] transition-colors"
            >
              Voir toutes les publications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPubs.map((pub) => (
              <article
                key={pub.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
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
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-slate-800 shadow-sm">
                    {pub.badge}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span>{pub.theme}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2 flex-1">
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
        </div>
      </section>

      {/* ACTUALITÉS RÉCENTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E63087]">
              Vie de l’Institut
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 flex items-center gap-3">
              <span className="w-1.5 h-8 rounded-full bg-[#7CC242]" />
              Actualités récentes
            </h2>
          </div>
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5DA126] hover:text-[#4c8a1b] transition-colors"
          >
            Toutes les actualités
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/actualites/${article.slug}`}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
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

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E63087] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2 flex-1">
                  {article.excerpt}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E63087]">
                  Lire l’article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="bg-slate-50 border-t border-slate-200/70 py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Nos Partenaires
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee items-center gap-14 px-6">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center h-20 px-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={140}
                  height={70}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
