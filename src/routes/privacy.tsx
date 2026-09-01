import { Container, PageHero, Section } from "@/components/sections";
import { SITE } from "@/data/site";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => routeHead("/privacy"),
});

function PrivacyPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.legal.kicker)} title={t(ui.legal.privacy)} text={t(ui.legal.privacyLead)} />
      <Section>
        <Container className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted">
          <p>{t(ui.legal.privacy1)}</p>
          <p>{t(ui.legal.privacy2)}</p>
          <p>{t(ui.legal.privacy3)}</p>
          <p>
            {t(ui.legal.questions)} {SITE.email} · {SITE.phone}
          </p>
        </Container>
      </Section>
    </main>
  );
}
