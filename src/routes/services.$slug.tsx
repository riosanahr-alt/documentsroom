import { Container, CtaBand, Eyebrow, GoldRule, PageHero, Section } from "@/components/sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getService } from "@/data/services";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => routeHead(`/services/${loaderData?.service.slug ?? ""}`),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const { t } = useLocale();
  const chapters = service.chapters ?? [];
  const audience = service.audience ?? [];

  return (
    <main>
      <PageHero
        kicker={t(service.kicker)}
        title={t(service.title)}
        text={t(service.short)}
        actions={
          <>
            <Button asChild size="lg">
              <Link to="/start">{t(ui.common.getStarted)}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">{t(ui.common.requestHelp)}</Link>
            </Button>
          </>
        }
      />

      <Section>
        <Container className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>{t(ui.servicesPage.about)}</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-emerald md:text-3xl">{t(service.title)}</h2>
            <GoldRule className="mt-5" />
            <p className="mt-6 text-base leading-relaxed text-muted">{t(service.description)}</p>
          </div>
          <div className="overflow-hidden rounded-2xl md:col-span-6">
            <img src={service.image} alt="" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Container>
      </Section>

      {chapters.length ? (
        <Section className="bg-paper">
          <Container>
            <Eyebrow>{t(service.chaptersKicker ?? ui.servicesPage.help)}</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-emerald">{t(service.chaptersTitle ?? ui.servicesPage.oneProcess)}</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {chapters.map((ch, i) => (
                <article key={ch.title.en} className="flex flex-col rounded-2xl border border-line bg-ivory p-6 md:p-8">
                  <p className="font-medium tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl font-semibold text-emerald">{t(ch.title)}</h3>
                  {ch.text ? <p className="mt-3 text-sm leading-relaxed text-muted">{t(ch.text)}</p> : null}
                  <ul className="mt-6 space-y-2.5">
                    {ch.items.map((item) => (
                      <li key={item.en} className="flex gap-3 text-sm leading-snug text-charcoal">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                  {ch.href ? (
                    <Button asChild variant="ghost" className="mt-6 px-0">
                      <Link to={ch.href}>
                        {ch.linkLabel ? t(ch.linkLabel) : t(ui.common.learnMore)}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  ) : null}
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : (
        <Section className="bg-paper">
          <Container>
            <h2 className="text-2xl font-semibold text-emerald">{t(ui.servicesPage.help)}</h2>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {service.helpWith.map((item) => (
                <li key={item.en} className="flex gap-3 rounded-xl border border-line bg-ivory p-4 text-sm text-charcoal">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  {t(item)}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {service.asides?.length ? (
        <Section>
          <Container className="grid gap-10 md:grid-cols-2">
            {service.asides.map((a) => (
              <article key={a.title.en}>
                <GoldRule />
                <h2 className="mt-5 text-2xl font-semibold text-emerald">{t(a.title)}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{t(a.text)}</p>
              </article>
            ))}
          </Container>
        </Section>
      ) : null}

      {audience.length ? (
        <Section className="bg-emerald">
          <Container>
            <Eyebrow className="text-gold">{t(service.audienceKicker ?? ui.servicesPage.audience)}</Eyebrow>
            <ul className="mt-8 flex flex-wrap gap-2">
              {audience.map((a) => (
                <li
                  key={a.en}
                  className="rounded-full border border-ivory/20 px-4 py-2 text-sm tracking-[0.02em] text-ivory/90"
                >
                  {t(a)}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {service.closingTitle ? (
        <Section className="bg-ivory-2/50">
          <Container className="max-w-3xl">
            <GoldRule />
            <h2 className="mt-6 text-3xl font-semibold leading-snug text-emerald md:text-4xl">{t(service.closingTitle)}</h2>
            {service.closingText ? (
              <p className="mt-5 text-base leading-relaxed text-muted">{t(service.closingText)}</p>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-emerald">{t(ui.servicesPage.need)}</h2>
            <ul className="mt-6 space-y-3">
              {service.clientNeeds.map((item) => (
                <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-emerald">{t(ui.servicesPage.receive)}</h2>
            <ul className="mt-6 space-y-3">
              {service.receives.map((item) => (
                <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald" />
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <h2 className="text-2xl font-semibold text-emerald">{t(ui.servicesPage.process)}</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {service.process.map((p, i) => (
              <li key={p.title.en}>
                <p className="font-medium tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold text-emerald">{t(p.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(p.text)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {service.faqs.length ? (
        <Section>
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-emerald">{t(ui.servicesPage.questions)}</h2>
            <Accordion type="single" collapsible className="mt-6">
              {service.faqs.map((f) => (
                <AccordionItem key={f.q.en} value={f.q.en}>
                  <AccordionTrigger>{t(f.q)}</AccordionTrigger>
                  <AccordionContent>{t(f.a)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Section>
      ) : null}

      {service.disclaimer ? (
        <div className="border-t border-line">
          <Container className="py-8">
            <p className="max-w-3xl text-[11px] leading-relaxed text-muted">{t(service.disclaimer)}</p>
          </Container>
        </div>
      ) : null}

      <CtaBand />
    </main>
  );
}
