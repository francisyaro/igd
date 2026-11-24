import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { NEWS_ARTICLES, getNewsBySlug } from "@/data/news";

export function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "Actualité introuvable" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ActualiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const others = NEWS_ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <div>
      <PageHero
        title={article.title}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Actualités", href: "/actualites" },
          { label: article.category },
        ]}
        actions={
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:border-slate-400 text-slate-700 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux actualités
          </Link>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="px-2.5 py-1 rounded-full bg-pink-50 text-[#E63087]">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#7CC242]" />
                Publié le {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E63087]" />
                {article.location}
              </span>
            </div>

            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              {article.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900">Autres actualités</h2>
            <div className="space-y-4">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/actualites/${other.slug}`}
                  className="group flex gap-3.5 bg-white rounded-2xl border border-slate-200 p-3 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-[#7CC242]">
                      {other.date}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#E63087] transition-colors line-clamp-2 mt-0.5">
                      {other.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
