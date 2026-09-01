import { Container, PageHero, Section } from "@/components/sections";
import {
  ADVERTISING_NOTICE,
  CANCEL_NOTICE,
  CANCEL_WAIVER,
  COMPLAINTS,
  NON_ATTORNEY_NOTICE,
  SURETY_NOTICE,
  USCIS_FREE,
} from "@/data/notices";
import { SITE } from "@/data/site";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/notices")({
  component: NoticesPage,
  head: () => routeHead("/notices"),
});

function NoticesPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.notices.kicker)} title={t(ui.notices.title)} text={t(ui.notices.text)} />
      <Section>
        <Container className="max-w-3xl space-y-10">
          <Block title={t(ui.notices.role)} body={`${SITE.legalName} · ${t(SITE.descriptor)}. ${SITE.address}. ${SITE.phone} · ${SITE.email}`} />
          <Block title={t(ui.notices.ad)} body={t(ADVERTISING_NOTICE)} />
          <Block title={t(ui.notices.nonAtty)} body={t(NON_ATTORNEY_NOTICE)} />
          <Block title={t(ui.notices.cancel)} body={t(CANCEL_NOTICE)} caps />
          <Block title={t(ui.notices.cancelWaiver)} body={t(CANCEL_WAIVER)} />
          <Block title={t(ui.notices.surety)} body={t(SURETY_NOTICE)} />
          <Block title={t(ui.notices.complaints)} body={t(COMPLAINTS)} />
          <Block title={t(ui.notices.uscis)} body={t(USCIS_FREE)} />
          <p className="text-sm leading-relaxed text-muted">{t(ui.notices.signs)}</p>
          <p className="text-sm">
            <Link to="/pricing" className="font-medium text-emerald underline-offset-4 hover:underline">
              {t(ui.nav.pricing)}
            </Link>
          </p>
        </Container>
      </Section>
    </main>
  );
}

function Block({ title, body, caps }: { title: string; body: string; caps?: boolean }) {
  return (
    <article>
      <h2 className="text-lg font-semibold text-emerald">{title}</h2>
      <p className={`mt-3 text-sm leading-relaxed text-charcoal ${caps ? "uppercase tracking-wide" : ""}`}>{body}</p>
    </article>
  );
}
