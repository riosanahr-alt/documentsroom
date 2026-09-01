import { StartForm } from "@/components/start-form";
import { Container, PageHero, Section } from "@/components/sections";
import { CANCEL_NOTICE, CANCEL_WAIVER } from "@/data/notices";
import { DISCLAIMER } from "@/data/site";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  component: StartPage,
  head: () => routeHead("/start"),
});

function StartPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.startPage.kicker)} title={t(ui.startPage.title)} text={t(ui.startPage.text)} />
      <Section>
        <Container className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <StartForm />
          </div>
          <aside className="space-y-6 md:col-span-5">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="text-lg font-semibold text-emerald">{t(ui.startPage.next)}</h2>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>{t(ui.startPage.n1)}</li>
                <li>{t(ui.startPage.n2)}</li>
                <li>{t(ui.startPage.n3)}</li>
              </ol>
            </div>
            <p className="text-xs font-medium uppercase leading-relaxed tracking-wide text-emerald">{t(CANCEL_NOTICE)}</p>
            <p className="text-xs leading-relaxed text-muted">{t(CANCEL_WAIVER)}</p>
            <p className="text-xs leading-relaxed text-muted">{t(DISCLAIMER)}</p>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
