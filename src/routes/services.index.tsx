import { Container, CtaBand, Eyebrow, GoldRule, PageHero, Section } from "@/components/sections";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { ALSO_SERVICES, getService, SERVICE_GROUPS, WORK_COUNTRIES } from "@/data/services";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => routeHead("/services"),
});

function ServicesPage() {
  const { t } = useLocale();
  const also = ALSO_SERVICES.map((slug) => getService(slug)).filter(Boolean);

  return (
    <main>
      <PageHero kicker={t(ui.servicesPage.kicker)} title={t(ui.servicesPage.title)} text={t(ui.servicesPage.text)} />

      <Section>
        <Container>
          {SERVICE_GROUPS.map((g, i) => (
            <article
              key={g.id}
              className={`grid items-start gap-10 py-16 md:grid-cols-12 md:py-20 ${i === 0 ? "pt-0 md:pt-0" : "border-t border-line"}`}
            >
              <div className="md:col-span-4">
                <p className="font-medium tabular-nums text-gold">{g.n}</p>
                <h2 className="mt-3 text-3xl font-semibold text-emerald">{t(g.title)}</h2>
                <GoldRule className="mt-5" />
                <p className="mt-5 text-sm leading-relaxed text-muted">{t(g.text)}</p>
                <div className="mt-6 flex flex-wrap gap-5">
                  {g.id === "papers" ? (
                    <>
                      <Button asChild variant="ghost" className="px-0">
                        <Link to="/services/$slug" params={{ slug: "apostille" }}>
                          {t(ui.common.viewService)}
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="px-0">
                        <Link to="/services/$slug" params={{ slug: "translations" }}>
                          {t(ui.servicesPage.translationsLink)}
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <Button asChild variant="ghost" className="px-0">
                      <Link to="/services/$slug" params={{ slug: g.href.split("/").pop() ?? g.id }}>
                        {t(ui.common.viewService)}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2 md:col-span-8">
                {g.items.map((item) => (
                  <li
                    key={item.en}
                    className="flex gap-3 rounded-xl border border-line bg-paper px-4 py-3.5 text-sm leading-snug text-charcoal"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </Section>

      <section className="bg-emerald">
        <Container className="py-14 md:py-16">
          <Eyebrow className="text-gold">{t(ui.servicesPage.countriesKicker)}</Eyebrow>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold text-ivory md:text-3xl">{t(ui.servicesPage.countriesTitle)}</h2>
          <ul className="mt-8 flex flex-wrap gap-x-1 gap-y-3">
            {WORK_COUNTRIES.map((c, i) => (
              <li key={c.en} className="flex items-center text-sm tracking-[0.04em] text-ivory/85">
                {i > 0 ? <span className="mx-3 h-px w-4 bg-gold/50" aria-hidden /> : null}
                {t(c)}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section className="bg-paper">
        <Container>
          <Eyebrow>{t(ui.servicesPage.alsoKicker)}</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold text-emerald">{t(ui.servicesPage.alsoTitle)}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {also.map((s) => (s ? <ServiceCard key={s.slug} service={s} /> : null))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </main>
  );
}
