"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ExternalLink,
  Info,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

const FAQS = [
  {
    q: "Comment candidater à un programme ?",
    a: "Consultez la page « Programmes » puis sélectionnez le programme concerné. Les appels à candidatures sont publiés dans la rubrique « Actualités ».",
  },
  {
    q: "Où trouver les rapports et études ?",
    a: "Toutes les ressources téléchargeables au format PDF sont disponibles dans la page « Publications ».",
  },
  {
    q: "En combien de temps l’IGD répond ?",
    a: "Nous répondons généralement sous 24 à 72h les jours ouvrés. Pour les demandes urgentes, privilégiez le téléphone.",
  },
];

export default function ContactPage() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, telephone, email, sujet, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Une erreur est survenue.");
        return;
      }
      setStatus("success");
      setFeedback(data.message);
      setNom("");
      setTelephone("");
      setEmail("");
      setSujet("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("Impossible d’envoyer le message pour le moment.");
    }
  }

  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Écrivez-nous ou rendez-nous visite à notre siège à Ouagadougou."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-lime-50 text-[#5DA126] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Adresse</h2>
              <p className="text-sm text-slate-600 mt-1">Cité Azimmo – Ouaga 2000</p>
              <p className="text-sm text-slate-600">Ouagadougou, Burkina Faso</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#E63087] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Téléphone</h2>
              <p className="text-sm text-slate-600 mt-1">
                <a href="tel:+22625375082" className="hover:text-[#E63087] transition-colors">
                  (+226) 25 37 50 82
                </a>
              </p>
              <p className="text-sm text-slate-600">
                <a href="tel:+22651575858" className="hover:text-[#E63087] transition-colors">
                  (+226) 51 57 58 58
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-lime-50 text-[#5DA126] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Email</h2>
              <p className="text-sm text-slate-600 mt-1">
                <a
                  href="mailto:institutgarango@igd.bf"
                  className="hover:text-[#E63087] transition-colors"
                >
                  institutgarango@igd.bf
                </a>
              </p>
              <p className="text-xs text-slate-400 mt-1">Réponse sous 24 à 72h</p>
            </div>
          </div>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Envoyez-nous un message
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Réponse généralement sous 24 à 72h (jours ouvrés).
            </p>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-lime-50 border border-lime-200 text-sm text-[#4c8a1b] flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{feedback}</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                {feedback}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nom complet *
                  </label>
                  <input
                    id="nom"
                    type="text"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
                  />
                </div>
                <div>
                  <label htmlFor="tel" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Téléphone (optionnel)
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Ex: +226 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Adresse e-mail *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
                />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Objet *
                </label>
                <select
                  id="sujet"
                  required
                  value={sujet}
                  onChange={(e) => setSujet(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
                >
                  <option value="" disabled>
                    Choisir un sujet
                  </option>
                  <option value="Informations générales">Informations générales</option>
                  <option value="Programmes & candidatures">Programmes &amp; candidatures</option>
                  <option value="Publications & recherche">Publications &amp; recherche</option>
                  <option value="Partenariats">Partenariats</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="msg" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre demande..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC242]/30 focus:border-[#7CC242]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] disabled:opacity-60 text-white text-sm font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {status === "loading" ? "Envoi en cours..." : "Envoyer"}
                </button>
                <a
                  href="mailto:institutgarango@igd.bf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 hover:border-[#E63087] hover:text-[#E63087] text-slate-700 text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Écrire par email
                </a>
              </div>
            </form>
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
                Localisation
              </h2>
              <a
                href="https://www.google.com/maps?q=Cité%20Azimmo%20Ouaga%202000%20Ouagadougou"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#E63087] hover:text-[#E63087] text-xs font-semibold text-slate-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Ouvrir sur Google Maps
              </a>
            </div>

            <div className="flex-1 min-h-[320px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                title="Localisation IGD Ouaga 2000"
                src="https://www.google.com/maps?q=Cité%20Azimmo%20Ouaga%202000%20Ouagadougou&output=embed"
                loading="lazy"
                className="w-full h-full min-h-[320px] border-0"
              />
            </div>

            <p className="mt-4 text-xs text-slate-500 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#7CC242] shrink-0" />
              Accès : Ouaga 2000, Cité Azimmo. Merci de prendre rendez-vous avant toute visite.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {FAQS.map((item, idx) => (
              <div
                key={item.q}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#E63087]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
