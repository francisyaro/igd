import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export function PageHero({ title, subtitle, breadcrumbs, actions }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-lime-50/40 border-b border-slate-200/80 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-3">
              {breadcrumbs.map((item, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                  {item.href ? (
                    <Link href={item.href} className="text-[#E63087] hover:underline">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          {actions && <div className="flex flex-wrap items-center gap-2.5">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
