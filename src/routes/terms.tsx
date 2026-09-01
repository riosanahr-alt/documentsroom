import { Container, PageHero, Section } from "@/components/sections";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => routeHead("/terms"),
});

function TermsPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.legal.kicker)} title={t(ui.legal.terms)} />
      <Section>
        <Container className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted">
          <p>{t(ui.legal.terms1)}</p>
          <p>{t(ui.legal.terms2)}</p>
          <p>{t(ui.legal.terms3)}</p>
          <p>{t(ui.legal.terms4)}</p>
        </Container>
      </Section>
    </main>
  );
}
