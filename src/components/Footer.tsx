import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* L'Institut */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-white font-bold text-lg tracking-tight">L’Institut</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              L’Institut Général Tiémoko Marc Garango pour la Gouvernance et le Développement
              (IGD) est un organisme non gouvernemental burkinabè, spécialisé dans la gouvernance,
              la démocratie, le droit et le développement en Afrique de l’Ouest.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E63087] hover:bg-[#E63087]/20 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E63087] hover:bg-[#E63087]/20 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E63087] hover:bg-[#E63087]/20 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-white font-bold text-base">Navigation</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-slate-400 hover:text-[#7CC242] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/missions" className="text-slate-400 hover:text-[#7CC242] transition-colors">
                  Missions & Objectifs
                </Link>
              </li>
              <li>
                <Link href="/personnel" className="text-slate-400 hover:text-[#7CC242] transition-colors">
                  Personnel
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-slate-400 hover:text-[#7CC242] transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-slate-400 hover:text-[#7CC242] transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-slate-400 hover:text-[#7CC242] transition-colors">
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-white font-bold text-base">Contact</h5>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7CC242] shrink-0 mt-0.5" />
                <span>Cité Azimmo – Ouaga 2000, Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#7CC242] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+22625375082" className="hover:text-white transition-colors">
                    (+226) 25 37 50 82
                  </a>
                  <a href="tel:+22651575858" className="hover:text-white transition-colors">
                    (+226) 51 57 58 58
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E63087] shrink-0" />
                <a
                  href="mailto:institutgarango@igd.bf"
                  className="hover:text-white transition-colors"
                >
                  institutgarango@igd.bf
                </a>
              </li>
            </ul>
          </div>

          {/* Localisation */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-white font-bold text-base">Localisation</h5>
            <div className="rounded-xl overflow-hidden border border-slate-800 h-44 bg-slate-900">
              <iframe
                title="Localisation IGD Ouaga 2000"
                src="https://www.google.com/maps?q=Cité%20Azimmo%20Ouaga%202000%20Ouagadougou&output=embed"
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 IGD – Institut Général Tiémoko Marc Garango. Tous droits réservés.</p>
          <p>Ouagadougou, Burkina Faso</p>
        </div>
      </div>
    </footer>
  );
}
