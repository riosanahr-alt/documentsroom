import { createFileRoute } from "@tanstack/react-router";
import { Container, CtaBand, Eyebrow, PageHero, Section } from "@/components/sections";
import { SITE } from "@/data/site";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => routeHead("/about"),
});

function AboutPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.about.kicker)} title={t(ui.about.title)} text={t(ui.about.text)} />
      <Section>
        <Container className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/founder-full.png"
              alt={t(ui.common.founderAlt)}
              className="w-full rounded-2xl bg-ivory-2/50 object-contain"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            <Eyebrow>{t(ui.about.founderKicker)}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-emerald">{t(ui.about.founderTitle)}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">{t(ui.about.founderLine)}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">{t(ui.about.founderP1)}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{t(ui.about.founderP2)}</p>
          </div>
        </Container>
      </Section>
      <Section className="bg-paper">
        <Container className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-7 md:order-2">
            <img
              src="/images/founder-studio.png"
              alt={t(ui.common.studioAlt)}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_18%]"
            />
          </div>
          <div className="md:col-span-5 md:order-1">
            <Eyebrow>{t(ui.about.missionKicker)}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-emerald">{t(ui.about.missionTitle)}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{t(ui.about.missionText)}</p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>{t(ui.about.valuesKicker)}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-emerald">{t(ui.about.valuesTitle)}</h2>
          <div className="mt-12 grid gap-x-16 gap-y-12 sm:grid-cols-2">
            {ui.about.values.map((v, i) => (
              <article key={v.title.en}>
                <p className="font-medium tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold text-emerald">{t(v.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{t(v.text)}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-3xl">
          <Eyebrow>{t(ui.about.companyKicker)}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-emerald">{t(ui.about.companyTitle)}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{t(ui.about.companyP1)}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{t(ui.about.companyP2)}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{t(ui.about.companyP3)}</p>
          <address className="mt-8 text-sm not-italic leading-relaxed text-charcoal">
            <span className="block">{SITE.legalName}</span>
            <span className="block">{SITE.address}</span>
            <span className="mt-2 block text-muted">{t(SITE.addressNote)}</span>
          </address>
          <p className="mt-8 text-sm leading-relaxed text-muted">{t(ui.about.companyLegal)}</p>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
