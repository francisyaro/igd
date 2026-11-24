import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Target,
  Users,
  Briefcase,
  Globe2,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PROGRAMS, getProgramBySlug } from "@/data/programs";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Programme introuvable" };
  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <div>
      <PageHero
        title={program.title}
        subtitle={program.subtitle}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: program.shortTitle },
        ]}
        actions={
          <>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:border-slate-400 text-slate-700 text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux programmes
            </Link>
            {program.externalUrl && (
              <a
                href={program.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7CC242] hover:bg-[#5DA126] text-white text-sm font-semibold transition-colors"
              >
                Site officiel
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Program Hero Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">
              {program.status === "en-cours" ? (
                <>
                  <Zap className="w-3.5 h-3.5 text-[#7CC242]" />
                  <span>Programme en cours</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                  <span>Programme terminé ({program.period})</span>
                </>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {program.heroTitle}
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {program.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {program.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {program.logo && (
            <div className="bg-white rounded-2xl p-4 shrink-0 shadow-md">
              <Image
                src={program.logo}
                alt={program.title}
                width={150}
                height={100}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {program.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-extrabold text-[#E63087]">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Présentation + Partenaires */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-[#7CC242]" />
                Présentation du programme
              </h2>
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                {program.presentation.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-[#7CC242]" />
                Objectifs
              </h2>
              <div className="rounded-xl bg-lime-50/70 border border-lime-200/80 p-4 mb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                  <Target className="w-4 h-4 text-[#5DA126]" />
                  Objectif général
                </div>
                <p className="text-sm text-slate-700">{program.generalObjective}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.objectives.map((obj) => (
                  <div
                    key={obj.title}
                    className="rounded-xl bg-slate-50 border border-slate-200/80 p-4"
                  >
                    <div className="font-bold text-sm text-slate-900 mb-1">{obj.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{obj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-[#E63087]" />
                Partenaires
              </h2>
              {program.technicalPartner && (
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Partenaire technique
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-1">
                    {program.technicalPartner}
                  </div>
                </div>
              )}
              <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Partenaire financier
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {program.financialPartner}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
                <Users className="w-5 h-5 text-[#7CC242]" />
                Parties prenantes
              </h2>
              <div className="space-y-3">
                {program.stakeholders.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl bg-slate-50 border border-slate-200/80 p-4"
                  >
                    <div className="font-bold text-sm text-slate-900">{s.title}</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activités & Couverture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-[#E63087]" />
              Activités clés
            </h2>
            <div className="space-y-3">
              {program.activities.map((act) => (
                <div
                  key={act.title}
                  className="rounded-xl bg-slate-50 border border-slate-200/80 p-4"
                >
                  <div className="font-bold text-sm text-slate-900">{act.title}</div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{act.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3 mb-4">
                <Globe2 className="w-5 h-5 text-[#7CC242]" />
                Couverture géographique
              </h2>
              <div className="space-y-3">
                {program.coverage.map((cov) => (
                  <div
                    key={cov.title}
                    className="rounded-xl bg-slate-50 border border-slate-200/80 p-4"
                  >
                    <div className="font-bold text-sm text-slate-900">{cov.title}</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{cov.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-[#E63087]" />
                Impact attendu
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">{program.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
