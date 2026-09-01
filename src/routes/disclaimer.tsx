import { Container, PageHero, Section } from "@/components/sections";
import { ADVERTISING_NOTICE, CANCEL_NOTICE, CANCEL_WAIVER } from "@/data/notices";
import { DISCLAIMER } from "@/data/site";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
  head: () => routeHead("/disclaimer"),
});

function DisclaimerPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.legal.kicker)} title={t(ui.legal.disclaimer)} />
      <Section>
        <Container className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted">
          <p className="font-medium uppercase tracking-wide text-emerald">{t(CANCEL_NOTICE)}</p>
          <p>{t(CANCEL_WAIVER)}</p>
          <p>{t(DISCLAIMER)}</p>
          <p>{t(ADVERTISING_NOTICE)}</p>
          <p>{t(ui.legal.extra)}</p>
          <p>
            <Link to="/notices" className="font-medium text-emerald underline-offset-4 hover:underline">
              {t(ui.nav.notices)}
            </Link>
          </p>
        </Container>
      </Section>
    </main>
  );
}
