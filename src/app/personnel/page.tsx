import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UserCheck,
  CalendarCheck,
  GraduationCap,
  Search,
  Globe2,
  CheckCircle2,
  Users,
  UserPlus,
  Coins,
  Kanban,
  TrendingUp,
  CalendarRange,
  Grid,
  Mail,
  Info,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Personnel & Direction",
  description:
    "Direction exécutive et équipe technique de l’Institut Général Tiémoko Marc Garango (IGD).",
};

export default function PersonnelPage() {
  return (
    <div>
      <PageHero
        title="Personnel & Direction"
        subtitle="Une équipe pluridisciplinaire engagée pour la gouvernance démocratique et le développement."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Personnel" }]}
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
        {/* Directeur exécutif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
            <div className="relative h-80 rounded-xl overflow-hidden bg-slate-100">
              <Image
                src="/images/Pr-Abdoul-Karim-SAIDOU-2.jpg"
                alt="Pr Abdoul Karim SAIDOU"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#E63087] text-xs font-semibold">
                <UserCheck className="w-3.5 h-3.5" />
                Directeur exécutif
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-50 text-[#4c8a1b] text-xs font-semibold">
                <CalendarCheck className="w-3.5 h-3.5" />
                Depuis 2019
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
                Le Directeur exécutif de l’IGD
              </h2>
              <h3 className="text-lg font-bold text-[#E63087]">Pr Abdoul Karim SAIDOU</h3>
              <p className="text-sm font-medium text-slate-500 mt-1 mb-5">
                Agrégé de science politique et Maître de conférences (CAMES) – Université Thomas
                Sankara (Burkina Faso)
              </p>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Depuis 2019, le Directeur exécutif de l’IGD est le{" "}
                  <strong className="text-slate-900">Pr Abdoul Karim SAIDOU</strong>. Il est
                  responsable scientifique du <strong className="text-slate-900">Master recherche en science politique</strong>{" "}
                  et chef de l’équipe de recherche <strong className="text-slate-900">sociologie politique et action publique</strong>{" "}
                  au sein du Laboratoire de droit et de science politique de l’Université Thomas Sankara.
                </p>
                <p>
                  Outre l’Université Thomas Sankara, il est enseignant associé/vacataire dans
                  plusieurs universités : Université Joseph-Ki Zerbo (Burkina Faso), Université Abdou
                  Moumouni de Niamey (Niger) et Université de Lomé (Togo).
                </p>
                <p>
                  Diplômé de l’Ahmadu Bello University (Nigeria – BSc Science politique) et de
                  l’Université Thomas Sankara (DEA &amp; thèse), il a soutenu en 2014 une thèse sur
                  les trajectoires de reconversion d’ex-chefs rebelles touaregs et toubou dans les
                  partis politiques au Niger. Ses travaux portent sur les politiques publiques de
                  sécurité, l’État et la démocratie au Sahel (Niger, Mali, Burkina Faso).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Enseignement",
                  sub: "Universités : UTS, UJKZ, Niamey, Lomé",
                },
                {
                  icon: Search,
                  title: "Recherche",
                  sub: "Sécurité, État, démocratie au Sahel",
                },
                {
                  icon: Globe2,
                  title: "Réseaux",
                  sub: "GRIP (Bruxelles) • V-Dem (Gothenburg)",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <item.icon className="w-6 h-6 text-[#7CC242] mb-2.5" />
                  <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-[#7CC242]" />
                Parcours au sein de l’IGD
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Le Pr Saidou travaille à l’IGD depuis 2009. Il a notamment été coordonnateur de
                projets structurants et continue de contribuer à la consolidation des programmes de
                renforcement des capacités.
              </p>

              <div className="space-y-4 border-l-2 border-lime-200 pl-5 mb-6">
                {[
                  {
                    date: "2009 – 2011",
                    text: "Coordonnateur du projet « École des cadres des partis politiques »",
                  },
                  {
                    date: "2012 – 2022",
                    text: "Coordonnateur du programme « Program for Young Politicians in Africa (PYPA) »",
                  },
                  { date: "Depuis 2019", text: "Directeur exécutif de l’IGD" },
                  {
                    date: "Depuis 2015",
                    text: "Coordonnateur régional (Afrique de l’Ouest) – Variety of Democracy (V-Dem)",
                  },
                ].map((step) => (
                  <div key={step.date} className="relative">
                    <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#7CC242] ring-4 ring-white" />
                    <div className="text-xs font-bold text-[#E63087]">{step.date}</div>
                    <div className="text-sm text-slate-700 mt-0.5">{step.text}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-100 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7CC242] shrink-0" />
                  Chercheur associé au <strong>GRIP</strong> (Bruxelles)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7CC242] shrink-0" />
                  Responsable scientifique du <strong>Master recherche</strong> en science politique
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7CC242] shrink-0" />
                  Chef d’équipe : <strong>sociologie politique &amp; action publique</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Staff technique */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Le staff technique de l’IGD
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Users, value: "14", label: "Personnes dans l’équipe" },
              { icon: UserCheck, value: "8", label: "Femmes dans l’équipe" },
              { icon: UserPlus, value: "~20", label: "Formateurs / experts (répertoire)" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-lime-50 text-[#5DA126] flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
                <div className="text-xs font-medium text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Coins,
                title: "Finances",
                sub: "Gestion budgétaire, comptabilité, reporting",
              },
              {
                icon: Kanban,
                title: "Projets",
                sub: "Coordination, mise en œuvre, partenariats",
              },
              {
                icon: TrendingUp,
                title: "Suivi-évaluation",
                sub: "Indicateurs, résultats, apprentissage",
              },
              {
                icon: CalendarRange,
                title: "Planification",
                sub: "Programmation, cohérence et priorisation",
              },
            ].map((dep) => (
              <div
                key={dep.title}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
              >
                <dep.icon className="w-6 h-6 text-[#E63087] mb-3" />
                <div className="font-bold text-slate-900">{dep.title}</div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{dep.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contacter l’IGD
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#E63087] hover:text-[#E63087] text-slate-700 text-sm font-semibold transition-colors"
            >
              <Info className="w-4 h-4" />
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
