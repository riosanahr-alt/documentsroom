import { Container, CtaBand, PageHero, Section } from "@/components/sections";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/how-it-works")({
  component: HowPage,
  head: () => routeHead("/how-it-works"),
});

function HowPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.how.kicker)} title={t(ui.how.title)} text={t(ui.how.text)} />
      <Section>
        <Container>
          <ol className="space-y-0">
            {ui.how.steps.map((s) => (
              <li key={s.n} className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:py-14">
                <p className="font-medium tabular-nums text-gold md:col-span-2">{s.n}</p>
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-semibold text-emerald">{t(s.title)}</h2>
                </div>
                <p className="text-base leading-relaxed text-muted md:col-span-6">{t(s.text)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <CtaBand title={t(ui.how.cta)} />
    </main>
  );
}
