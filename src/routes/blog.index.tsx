import { Container, PageHero, Section } from "@/components/sections";
import { ARTICLES } from "@/data/blog";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => routeHead("/blog"),
});

function BlogPage() {
  const { t } = useLocale();
  const cats = useMemo(() => ["__all__", ...Array.from(new Set(ARTICLES.map((a) => a.category.en)))], []);
  const [cat, setCat] = useState("__all__");
  const list = cat === "__all__" ? ARTICLES : ARTICLES.filter((a) => a.category.en === cat);
  const featured = list[0];
  const rest = list.slice(1);

  return (
    <main>
      <PageHero kicker={t(ui.blog.kicker)} title={t(ui.blog.title)} text={t(ui.blog.text)} />
      <Section>
        <Container>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => {
              const label = c === "__all__" ? t(ui.blog.all) : t(ARTICLES.find((a) => a.category.en === c)!.category);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm",
                    cat === c ? "bg-emerald text-ivory" : "bg-paper text-emerald border border-line",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
          {featured ? (
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="mt-10 grid overflow-hidden rounded-2xl border border-line bg-paper md:grid-cols-2"
            >
              <img src={featured.image} alt="" className="aspect-[16/10] h-full w-full object-cover" />
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{t(featured.category)}</p>
                <h2 className="mt-3 text-2xl font-semibold text-emerald md:text-3xl">{t(featured.title)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(featured.excerpt)}</p>
                <p className="mt-4 text-xs text-muted">{t(featured.date)}</p>
              </div>
            </Link>
          ) : null}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="overflow-hidden rounded-2xl border border-line bg-paper"
              >
                <img src={a.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-gold">{t(a.category)}</p>
                  <h3 className="mt-2 text-lg font-semibold text-emerald">{t(a.title)}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{t(a.excerpt)}</p>
                  <p className="mt-3 text-xs text-muted">{t(a.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
