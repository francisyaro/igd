import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BookOpen,
  GraduationCap,
  CalendarRange,
  Network,
  Globe2,
  Target,
  Award,
  ShieldAlert,
  Eye,
  Lightbulb,
  Handshake,
  Grid,
  FileText,
  Mail,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Missions & Objectifs",
  description:
    "Mission, vision, valeurs et axes stratégiques 2022–2027 de l’Institut Général Tiémoko Marc Garango (IGD).",
};

export default function MissionsPage() {
  return (
    <div>
      <PageHero
        title="Missions & Objectifs"
        subtitle="Promouvoir la démocratie, les droits humains et le développement humain durable en Afrique."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Missions & Objectifs" }]}
        actions={
          <>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
            >
              <Grid className="w-4 h-4" />
              Découvrir nos programmes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:border-[#E63087] hover:text-[#E63087] text-slate-700 text-sm font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              Nous contacter
            </Link>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Mission + image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Notre Mission
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              L’IGD a pour mission de promouvoir la démocratie, les droits humains et le
              développement humain durable en Afrique. Ses objectifs stratégiques reposent sur le
              postulat selon lequel l’avenir du continent dépend des jeunes et des femmes engagés et
              attachés aux idéaux de démocratie et de droits humains.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              À cet effet, l’Institut met en œuvre une logique d’intervention scientifique afin
              d’offrir, au niveau national et régional, des programmes de renforcement des capacités
              et de production de connaissances.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { icon: ShieldCheck, label: "Démocratie & droits humains" },
                { icon: Users, label: "Jeunes & femmes" },
                { icon: BookOpen, label: "Connaissances scientifiques" },
                { icon: GraduationCap, label: "Renforcement de capacités" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  <pill.icon className="w-3.5 h-3.5 text-[#7CC242]" />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-80 relative">
            <Image src="/images/mission-IGD.jpg" alt="Mission IGD" fill className="object-cover" />
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <h2 className="text-2xl font-extrabold mb-3 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Notre Vision
          </h2>
          <p className="text-slate-300 leading-relaxed">
            L’IGD a pour vision de <strong className="text-white">devenir un institut de référence</strong>,
            qui influence le développement, la démocratisation, la sécurité et la stabilité des pays
            africains, ainsi que leur intégration, à travers le renforcement des capacités des jeunes
            et des femmes, la production de connaissances scientifiques, la création de réseaux et
            le plaidoyer.
          </p>
        </div>

        {/* Repères */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: CalendarRange, value: "2022–2027", label: "Plan stratégique" },
            { icon: Network, value: "3", label: "Axes stratégiques" },
            { icon: Globe2, value: "National +", label: "Portée régionale" },
            { icon: Target, value: "1", label: "Objectif général" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E63087] flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Nos valeurs */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Professionnalisme",
                desc: "Certification des services, respect des délais, qualité, procédures normées, réactivité et proactivité.",
              },
              {
                icon: ShieldAlert,
                title: "Intégrité",
                desc: "Tolérance zéro face à la corruption : fiabilité des informations, respect de la parole donnée, honnêteté, sincérité.",
              },
              {
                icon: Eye,
                title: "Transparence",
                desc: "Diffusion des méthodes de travail, explication des décisions, partage des règles et des bonnes pratiques.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Amélioration continue des méthodes pour accroître l’impact et proposer des solutions nouvelles.",
              },
              {
                icon: Handshake,
                title: "Participation",
                desc: "Concertation et implication des collaborateurs et partenaires dans la décision et l’exécution des activités.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-lime-50 text-[#5DA126] flex items-center justify-center mb-4">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plan stratégique + 3 axes */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Plan stratégique 2022–2027
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Conscient de sa vision et de sa mission, l’IGD s’est doté d’un plan stratégique
              2022–2027. L’objectif général de ce plan est de{" "}
              <strong className="text-slate-900">
                contribuer au renforcement de la gouvernance démocratique
              </strong>{" "}
              à travers l’analyse des politiques publiques de développement et le renforcement des
              capacités politiques des femmes et des jeunes d’Afrique.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                num: "Axe stratégique 1",
                title: "La recherche appliquée",
                desc: "L’IGD ambitionne de se positionner comme un « think tank » de référence en Afrique de l’Ouest, en produisant des connaissances utiles pour les décideurs, à travers des études sur les thématiques émergentes et l’analyse rigoureuse des transformations structurelles affectant les sociétés africaines.",
              },
              {
                num: "Axe stratégique 2",
                title: "Le renforcement des capacités",
                desc: "Domaine de prédilection de l’IGD, le renforcement des capacités a permis à l’Institut de se positionner comme un acteur crédible de la formation des acteurs de la gouvernance démocratique, notamment les femmes et les jeunes leaders.",
              },
              {
                num: "Axe stratégique 3",
                title: "L’institutionnalisation de l’IGD",
                desc: "Axe transversal visant à renforcer l’administration et la gestion de l’Institut, afin d’optimiser la mise en œuvre des activités opérationnelles des deux premiers axes. Cet axe conditionne l’efficacité globale des interventions de l’IGD.",
              },
            ].map((axis) => (
              <div
                key={axis.num}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col"
              >
                <span className="inline-flex self-start px-3 py-1 rounded-full bg-pink-50 text-[#E63087] text-xs font-bold mb-4">
                  {axis.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{axis.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{axis.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
            >
              <Grid className="w-4 h-4" />
              Découvrir nos programmes
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#E63087] hover:text-[#E63087] text-slate-700 text-sm font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" />
              Voir nos publications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
