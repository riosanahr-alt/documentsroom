import { ReviewCard } from "@/components/review-card";
import { Container, CtaBand, Eyebrow, GoldRule, Section } from "@/components/sections";
import { ServiceCard } from "@/components/service-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/data/blog";
import { HOME_FAQS } from "@/data/faq";
import { REVIEWS } from "@/data/reviews";
import { HOME_SERVICES, WORK_COUNTRIES } from "@/data/services";
import { SITE } from "@/data/site";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock3, Languages, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => routeHead("/"),
});

const BENEFIT_ICONS = [Languages, Shield, Clock3, Check];

function Home() {
  const { t } = useLocale();
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold/40" />
        <Container className="grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <Eyebrow>{t(ui.home.kicker)}</Eyebrow>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] text-emerald md:text-6xl">
              {t(SITE.tagline)}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{t(ui.home.notAttorneys)}</p>
            <div className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="sm:min-w-[11rem]">
                  <Link to="/start">{t(ui.nav.start)}</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="sm:min-w-[11rem]">
                  <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                    {t(ui.consult.free)}
                  </a>
                </Button>
              </div>
              <p className="mt-4 max-w-md text-[13px] leading-relaxed text-muted">
                {t(ui.consult.freeHint)}{" "}
                <a
                  href={SITE.calendlyPaid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald underline-offset-4 hover:underline"
                >
                  {t(ui.consult.paid)}
                </a>
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="overflow-hidden">
              <img
                src="/images/founder-portrait.png"
                alt={t(ui.common.founderAlt)}
                className="mx-auto max-h-[620px] w-full object-contain object-bottom"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-paper">
        <Container>
          <Eyebrow>{t(ui.home.servicesKicker)}</Eyebrow>
          <div className="mt-3 flex items-end justify-between gap-6">
            <h2 className="max-w-lg text-3xl font-semibold text-emerald md:text-4xl">{t(ui.home.servicesTitle)}</h2>
            <Link to="/services" className="hidden text-sm font-medium text-emerald underline-offset-4 hover:underline md:inline">
              {t(ui.common.allServices)}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">{t(ui.servicesPage.countriesKicker)}</p>
          <ul className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-muted">
            {WORK_COUNTRIES.map((c, i) => (
              <li key={c.en} className="flex items-center">
                {i > 0 ? <span className="mx-2.5 text-gold/70">·</span> : null}
                {t(c)}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-ivory-2/40">
        <Container className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-1">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/founder-studio.png"
                alt={t(ui.common.studioAlt)}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Eyebrow>{t(ui.home.studioKicker)}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-emerald md:text-4xl">{t(ui.home.studioTitle)}</h2>
            <GoldRule className="mt-6" />
            <p className="mt-6 text-base leading-relaxed text-muted">{t(ui.home.studioP1)}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{t(ui.home.studioP2)}</p>
            <Button asChild variant="secondary" className="mt-8">
              <Link to="/about">{t(ui.home.meet)}</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory-2/60">
        <Container>
          <Eyebrow>{t(ui.home.howKicker)}</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold text-emerald md:text-4xl">{t(ui.home.howTitle)}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {ui.home.steps.map((s, i) => (
              <div key={s.n} className="relative">
                {i < ui.home.steps.length - 1 ? (
                  <span className="pointer-events-none absolute left-12 right-[-16px] top-3 hidden h-px bg-gold/40 md:block" />
                ) : null}
                <p className="font-medium tabular-nums text-gold">{s.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-emerald">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(s.text)}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-10 px-0">
            <Link to="/how-it-works">{t(ui.home.howCta)}</Link>
          </Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>{t(ui.home.whyKicker)}</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold text-emerald md:text-4xl">{t(ui.home.whyTitle)}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {ui.home.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <div key={b.title.en} className="rounded-2xl border border-line bg-paper p-6">
                  <Icon className="size-5 text-gold" strokeWidth={1.6} />
                  <h3 className="mt-4 text-lg font-semibold text-emerald">{t(b.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(b.text)}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <Eyebrow>{t(ui.home.reviewsKicker)}</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold text-emerald md:text-4xl">{t(ui.home.reviewsTitle)}</h2>
            </div>
            <Link to="/reviews" className="hidden text-sm font-medium text-emerald underline-offset-4 hover:underline md:inline">
              {t(ui.home.allReviews)}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>{t(ui.home.blogKicker)}</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold text-emerald">{t(ui.home.blogTitle)}</h2>
            </div>
            <Button asChild variant="secondary">
              <Link to="/blog">{t(ui.home.allArticles)}</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="overflow-hidden rounded-2xl border border-line bg-ivory"
              >
                <img src={a.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-gold">{t(a.category)}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-emerald">{t(a.title)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>{t(ui.home.faqKicker)}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-emerald">{t(ui.home.faqTitle)}</h2>
            <Button asChild variant="secondary" className="mt-6">
              <Link to="/faq">{t(ui.home.fullFaq)}</Link>
            </Button>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible>
              {HOME_FAQS.map((f, i) => (
                <AccordionItem key={f.q.en} value={`h-${i}`}>
                  <AccordionTrigger>{t(f.q)}</AccordionTrigger>
                  <AccordionContent>{t(f.a)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </main>
  );
}
