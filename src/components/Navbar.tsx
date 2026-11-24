"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  Info,
  Target,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { ACTIVE_PROGRAMS, COMPLETED_PROGRAMS } from "@/data/programs";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"institut" | "programmes" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top institutional bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7CC242]" />
              Institut Général Tiémoko Marc Garango (IGD) – Ouagadougou
            </span>
            <a
              href="tel:+22625375082"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7CC242]" />
              (+226) 25 37 50 82
            </a>
            <a
              href="mailto:institutgarango@igd.bf"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E63087]" />
              institutgarango@igd.bf
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Gouvernance</span>
            <span>•</span>
            <span>Démocratie</span>
            <span>•</span>
            <span>Développement</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-slate-200/80"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <Image
                src="/images/logo-igd-site-web-b.png"
                alt="Logo IGD"
                width={180}
                height={64}
                className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-[#E63087] bg-pink-50/80 font-semibold"
                    : "text-slate-700 hover:text-[#E63087] hover:bg-slate-50"
                }`}
              >
                Accueil
              </Link>

              {/* Mega menu: L'Institut */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("institut")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "institut" ? null : "institut")
                  }
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive("/a-propos") || isActive("/missions") || isActive("/personnel")
                      ? "text-[#E63087] bg-pink-50/80 font-semibold"
                      : "text-slate-700 hover:text-[#E63087] hover:bg-slate-50"
                  }`}
                >
                  L’Institut
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === "institut" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === "institut" && (
                  <div className="absolute left-0 top-full pt-2 w-[540px] z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-12 gap-5">
                      <div className="col-span-5 bg-slate-50 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                            <Building2 className="w-4 h-4 text-[#7CC242]" />
                            Présentation
                          </div>
                          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                            Découvrez l’IGD, sa mission, sa vision et l’équipe qui œuvre pour la
                            gouvernance démocratique et le développement en Afrique.
                          </p>
                        </div>
                        <Link
                          href="/a-propos"
                          className="mt-4 inline-flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-lg bg-[#7CC242] hover:bg-[#5DA126] text-white text-xs font-semibold transition-colors"
                        >
                          Découvrir l’Institut
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="col-span-7 flex flex-col gap-1.5">
                        <Link
                          href="/a-propos"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-pink-50 text-[#E63087] flex items-center justify-center shrink-0 group-hover:bg-[#E63087] group-hover:text-white transition-colors">
                            <Info className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">À propos</div>
                            <div className="text-xs text-slate-500">
                              Historique, vision et valeurs
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/missions"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-lime-50 text-[#5DA126] flex items-center justify-center shrink-0 group-hover:bg-[#7CC242] group-hover:text-white transition-colors">
                            <Target className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">
                              Missions & Objectifs
                            </div>
                            <div className="text-xs text-slate-500">
                              Axes stratégiques 2022–2027
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/personnel"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">Personnel</div>
                            <div className="text-xs text-slate-500">
                              Direction exécutive & équipe
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mega menu: Programmes */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("programmes")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "programmes" ? null : "programmes")
                  }
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive("/programmes")
                      ? "text-[#E63087] bg-pink-50/80 font-semibold"
                      : "text-slate-700 hover:text-[#E63087] hover:bg-slate-50"
                  }`}
                >
                  Programmes
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === "programmes" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === "programmes" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[740px] z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5">
                      <div className="grid grid-cols-12 gap-5">
                        {/* En cours */}
                        <div className="col-span-7">
                          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                              <Zap className="w-4 h-4 text-[#7CC242]" />
                              Programmes en cours
                            </div>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-lime-100 text-[#4c8a1b]">
                              {ACTIVE_PROGRAMS.length} actifs
                            </span>
                          </div>
                          <div className="grid grid-cols-1 gap-1">
                            {ACTIVE_PROGRAMS.map((prog) => (
                              <Link
                                key={prog.slug}
                                href={`/programmes/${prog.slug}`}
                                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-lime-50/70 hover:text-[#4c8a1b] transition-colors"
                              >
                                <span className="truncate">{prog.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Terminés */}
                        <div className="col-span-5 border-l border-slate-100 pl-5">
                          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                              <CheckCircle2 className="w-4 h-4 text-slate-500" />
                              Terminés
                            </div>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              {COMPLETED_PROGRAMS.length}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            {COMPLETED_PROGRAMS.map((prog) => (
                              <Link
                                key={prog.slug}
                                href={`/programmes/${prog.slug}`}
                                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                              >
                                <span className="truncate">{prog.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Filtrez et recherchez parmi tous les programmes de l’IGD
                        </span>
                        <Link
                          href="/programmes"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#7CC242] hover:bg-[#5DA126] text-white text-xs font-semibold transition-colors"
                        >
                          Tous les programmes
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/publications"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/publications")
                    ? "text-[#E63087] bg-pink-50/80 font-semibold"
                    : "text-slate-700 hover:text-[#E63087] hover:bg-slate-50"
                }`}
              >
                Publications
              </Link>

              <Link
                href="/phototheque"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/phototheque")
                    ? "text-[#E63087] bg-pink-50/80 font-semibold"
                    : "text-slate-700 hover:text-[#E63087] hover:bg-slate-50"
                }`}
              >
                Photothèque
              </Link>

              <Link
                href="/videotheque"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/videotheque")
                    ? "text-[#E63087] bg-pink-50/80 font-semibold"
                    : "text-slate-700 hover:text-[#E63087] hover:bg-slate-50"
                }`}
              >
                Vidéothèque
              </Link>

              <Link
                href="/actualites"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/actualites")
                    ? "text-[#E63087] bg-pink-50/80 font-semibold"
                    : "text-slate-700 hover:text-[#E63087] hover:bg-slate-50"
                }`}
              >
                Actualités
              </Link>

              <Link
                href="/contact"
                className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#E63087] hover:bg-[#C41E6D] text-white shadow-sm transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            onClick={closeMenus}
            className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto"
          >
            <Link
              href="/"
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Accueil
            </Link>
            <div className="border-t border-slate-100 pt-2">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                L’Institut
              </div>
              <Link
                href="/a-propos"
                className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                À propos
              </Link>
              <Link
                href="/missions"
                className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                Missions & Objectifs
              </Link>
              <Link
                href="/personnel"
                className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                Personnel
              </Link>
            </div>
            <div className="border-t border-slate-100 pt-2">
              <Link
                href="/programmes"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#5DA126] hover:bg-lime-50"
              >
                Tous les programmes ({ACTIVE_PROGRAMS.length + COMPLETED_PROGRAMS.length})
              </Link>
            </div>
            <div className="border-t border-slate-100 pt-2 space-y-1">
              <Link
                href="/publications"
                className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                Publications
              </Link>
              <Link
                href="/phototheque"
                className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                Photothèque
              </Link>
              <Link
                href="/videotheque"
                className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                Vidéothèque
              </Link>
              <Link
                href="/actualites"
                className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                Actualités
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#E63087] text-white"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
