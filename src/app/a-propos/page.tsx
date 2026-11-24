import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Globe2,
  CalendarCheck,
  Handshake,
  ShieldCheck,
  Award,
  Scale,
  Coins,
  Kanban,
  TrendingUp,
  GraduationCap,
  Grid,
  Mail,
  FileText,
  Newspaper,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l’Institut Général Tiémoko Marc Garango (IGD) : historique, valeurs, gouvernance et réseau en Afrique de l’Ouest.",
};

export default function AProposPage() {
  return (
    <div>
      <PageHero
        title="À propos de l’IGD"
        subtitle="Organisme non gouvernemental de droit burkinabè à vocation régionale, spécialisé dans la gouvernance, le droit et le développement."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
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
        {/* Qui sommes-nous */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Qui sommes-nous ?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              L’Institut Général Tiémoko Marc Garango pour la Gouvernance et le Développement (IGD)
              est un organisme non gouvernemental de droit burkinabè, à vocation régionale, spécialisé
              dans les domaines de la gouvernance, du droit et du développement.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Son siège est situé à <strong className="text-slate-900">Ouagadougou, Cité Azimmo (Ouaga 2000)</strong>.
              Le réseau de l’Institut dépasse les frontières du Burkina Faso et couvre l’Afrique de
              l’Ouest francophone (Burkina Faso, Bénin, Côte d’Ivoire, Mali, Niger, Sénégal, Togo).
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-80 relative">
            <Image src="/images/hero2.jpg" alt="IGD Conférence" fill className="object-cover" />
          </div>
        </div>

        {/* Chiffres clés */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Chiffres clés
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Users, value: "~400", label: "Alumni (jeunes & femmes)" },
              { icon: Globe2, value: "7", label: "Pays couverts" },
              { icon: CalendarCheck, value: "2008", label: "Reconnaissance officielle" },
              { icon: Handshake, value: "+", label: "Partenariats stratégiques" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-lime-50 text-[#5DA126] flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-xs font-medium text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Origine + Repères */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Origine et création
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              La naissance de l’Institut est l’aboutissement d’un processus de consultation de partis
              politiques de la sous-région sur le projet de création d’une école de formation des
              élites politiques.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Cette consultation, menée fin 2007 par un groupe d’enseignants-chercheurs au Burkina
              Faso, au Bénin, au Mali et au Niger, a conduit à la création d’un projet dénommé « École
              des partis politiques ». Dans ce contexte de renforcement de la démocratie par la
              formation des élites, l’IGD a été créé et officiellement reconnu en 2008.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Repères historiques
            </h2>
            <div className="space-y-5 border-l-2 border-lime-200 pl-5">
              {[
                {
                  date: "Fin 2007",
                  text: "Consultations sous-régionales et lancement du projet « École des partis politiques ».",
                },
                { date: "2008", text: "Création et reconnaissance officielle de l’IGD." },
                { date: "2009", text: "Choix de porter le nom de Tiémoko Marc Garango." },
                {
                  date: "31 déc. 2010",
                  text: "Décision consacrée par récépissé n°2010-872 du Ministère chargé de l’Administration territoriale.",
                },
                { date: "Jusqu’en 2019", text: "Direction assurée par le Pr Augustin Loada." },
              ].map((item) => (
                <div key={item.date} className="relative">
                  <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#7CC242] ring-4 ring-white" />
                  <div className="text-xs font-bold uppercase tracking-wide text-[#E63087]">
                    {item.date}
                  </div>
                  <div className="text-sm text-slate-600 mt-0.5">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notre ambition */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <h2 className="text-2xl font-extrabold mb-3 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Notre ambition
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Le but de l’Institut est de promouvoir les meilleures idées sur les grands défis
            politiques, sociaux et économiques du XXIᵉ siècle auxquels la jeunesse africaine, en
            particulier, est confrontée. Le travail de l’Institut est motivé par un réseau de
            décideurs et de chercheurs universitaires spécialisés sur les enjeux de long terme :
            gouvernance, politiques publiques, économie politique, attitudes sociales et affaires
            internationales, complété par l’expertise de l’équipe IGD.
          </p>
        </div>

        {/* Tiémoko Marc Garango */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Général Tiémoko Marc Garango (1927–2015)
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-200 relative h-80">
              <Image
                src="/images/marc-garango.jpg"
                alt="Général Tiémoko Marc Garango"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-slate-600 leading-relaxed">
                En 2009, l’Institut a choisi de porter le nom du général{" "}
                <strong className="text-slate-900">Tiémoko Marc Garango</strong> (1927–2015), une
                figure historique et politique majeure au Burkina Faso. Par cette décision, consacrée
                par le récépissé n°2010-872 du 31 décembre 2010, les fondateurs ont voulu perpétuer
                les valeurs qu’il a portées et reconnaître sa contribution à la bonne gouvernance et
                au développement.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ancien diplômé de « Science-Po Aix », Ministre des Finances et du Commerce et
                Médiateur du Faso, il s’est distingué par son intégrité morale, son sens élevé du
                devoir et sa rigueur dans la conduite des affaires de l’État.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { icon: ShieldCheck, title: "Intégrité morale", sub: "Éthique, exemplarité" },
                  { icon: Award, title: "Sens du devoir", sub: "Service public" },
                  { icon: Scale, title: "Rigueur", sub: "Gestion responsable" },
                ].map((val) => (
                  <div
                    key={val.title}
                    className="rounded-xl bg-slate-50 border border-slate-200/80 p-4"
                  >
                    <val.icon className="w-6 h-6 text-[#7CC242] mb-2" />
                    <div className="font-bold text-slate-900 text-sm">{val.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{val.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gouvernance & Direction exécutive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Gouvernance
            </h2>
            <p className="text-slate-600 mb-4">
              L’Institut est administré par un <strong className="text-slate-900">Conseil d’administration (CA)</strong>{" "}
              composé de personnalités issues des pays ouest-africains :
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CC242] mt-2 shrink-0" />
                Définit les orientations stratégiques de l’Institut
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CC242] mt-2 shrink-0" />
                Veille à leur mise en œuvre par la direction exécutive
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CC242] mt-2 shrink-0" />
                Désigne le président de l’Institut et nomme le Directeur exécutif
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
              Direction exécutive
            </h2>
            <p className="text-slate-600 text-sm mb-5">
              La direction exécutive coordonne et met en œuvre les activités conformément aux
              orientations du CA, avec une équipe technique structurée :
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Coins, title: "Finances", sub: "Gestion & reporting" },
                { icon: Kanban, title: "Programmes", sub: "Mise en œuvre" },
                { icon: TrendingUp, title: "Suivi-évaluation", sub: "Planification" },
                { icon: GraduationCap, title: "Recherche", sub: "Experts & universitaires" },
              ].map((dep) => (
                <div key={dep.title} className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <dep.icon className="w-4 h-4 text-[#E63087]" />
                    {dep.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{dep.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partenariats & CTA */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#7CC242]" />
            Partenariats, réseau et capacité opérationnelle
          </h2>
          <div className="space-y-3 text-slate-600 leading-relaxed">
            <p>
              Depuis sa création, l’IGD a mis en œuvre plusieurs programmes de renforcement de
              capacités et de recherche en partenariat avec la Fondation internationale du parti du
              centre suédois (CIS), l’Union européenne, le GRIP (Bruxelles), Diakonia, etc.
            </p>
            <p>
              L’Institut travaille avec un large réseau d’alumni (environ 400 jeunes et femmes)
              issus du Sénégal, du Mali, du Niger, du Bénin, de la Côte d’Ivoire, du Burkina Faso
              et du Togo.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" />
              Voir nos publications
            </Link>
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#E63087] hover:text-[#E63087] text-slate-700 text-sm font-semibold transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              Consulter les actualités
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
