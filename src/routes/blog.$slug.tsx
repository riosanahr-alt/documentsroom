import { Container, CtaBand, Section } from "@/components/sections";
import { ARTICLES, getArticle } from "@/data/blog";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => routeHead(`/blog/${loaderData?.article.slug ?? ""}`),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const { t } = useLocale();
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <main>
      <div className="border-b border-line">
        <Container className="py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">{t(article.category)}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-emerald md:text-5xl">{t(article.title)}</h1>
          <p className="mt-4 text-sm text-muted">{t(article.date)}</p>
        </Container>
      </div>
      <img src={article.image} alt="" className="max-h-[420px] w-full object-cover" />
      <Section>
        <Container className="max-w-2xl">
          {article.body.map((block, i) => (
            <div key={i} className="mb-8">
              {block.heading ? (
                <h2 className="mb-3 text-xl font-semibold text-emerald">{t(block.heading)}</h2>
              ) : null}
              {block.paragraphs.map((p) => (
                <p key={p.en} className="mb-4 text-base leading-relaxed text-charcoal">
                  {t(p)}
                </p>
              ))}
              {block.quote ? (
                <blockquote className="my-6 border-l-2 border-gold pl-5 text-lg text-emerald">
                  {t(block.quote)}
                </blockquote>
              ) : null}
              {block.note ? (
                <p className="rounded-xl bg-ivory-2 px-4 py-3 text-sm text-muted">{t(block.note)}</p>
              ) : null}
            </div>
          ))}
        </Container>
      </Section>
      <Section className="bg-paper">
        <Container>
          <h2 className="text-xl font-semibold text-emerald">{t(ui.common.related)}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((a) => (
              <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="rounded-2xl border border-line bg-ivory p-5">
                <p className="text-xs text-gold">{t(a.category)}</p>
                <h3 className="mt-2 font-semibold text-emerald">{t(a.title)}</h3>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
