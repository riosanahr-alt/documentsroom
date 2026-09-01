import { Container, CtaBand, Eyebrow, PageHero } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { CANCEL_NOTICE, CANCEL_WAIVER } from "@/data/notices";
import { DISCOUNTS, DIVORCE_PRICES, FEE_GROUPS, RUSH, type PriceRow } from "@/data/pricing";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => routeHead("/pricing"),
});

function PricingPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero
        kicker={t(ui.pricing.kicker)}
        title={t(ui.pricing.title)}
        text={t(ui.pricing.text)}
        actions={
          <Button asChild>
            <Link to="/start">{t(ui.pricing.quote)}</Link>
          </Button>
        }
      />

      <div className="border-b border-line">
        <Container className="max-w-3xl py-8">
          <p className="text-sm leading-relaxed text-muted">{t(ui.pricing.consultLine)}</p>
        </Container>
      </div>

      {FEE_GROUPS.map((group, i) => (
        <section key={group.id} id={group.id} className="scroll-mt-24 border-b border-line">
          <Container className="max-w-3xl py-12 md:py-14">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight text-emerald md:text-2xl">{t(group.title)}</h2>
              <span className="shrink-0 font-mono text-[11px] tracking-[0.18em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-8">
              {group.rows.map((r) => (
                <FeeRow key={r.code + r.name.en} row={r} />
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="border-b border-line">
        <Container className="max-w-3xl py-12 md:py-14">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight text-emerald md:text-2xl">{t(ui.pricing.divorce)}</h2>
            <span className="shrink-0 font-mono text-[11px] tracking-[0.18em] text-gold">08</span>
          </div>
          <ul className="mt-8">
            {DIVORCE_PRICES.map((r) => (
              <FeeRow
                key={r.name.en}
                row={r}
                display={
                  r.price === "quote"
                    ? t(ui.pricing.onRequest)
                    : r.price === "translations"
                      ? t(ui.pricing.seeTranslations)
                      : r.price
                }
              />
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid max-w-3xl gap-12 py-12 md:grid-cols-2 md:py-14">
          <div>
            <h2 className="text-xl font-semibold text-emerald">{t(ui.pricing.discounts)}</h2>
            <ul className="mt-6 space-y-4">
              {DISCOUNTS.map((d) => (
                <li key={d.title.en}>
                  <p className="text-sm text-charcoal">{t(d.title)}</p>
                  <p className="mt-0.5 text-sm text-muted">{t(d.text)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-emerald">{t(ui.pricing.rush)}</h2>
            <ul className="mt-6">
              {RUSH.map((d) => (
                <FeeLine key={d.title.en} name={t(d.title)} price={d.text} />
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">{t(ui.pricing.rusCard)}</p>
          </div>
        </Container>
      </section>

      <section className="bg-ivory-2/50">
        <Container className="max-w-3xl space-y-5 py-14 md:py-16">
          <Eyebrow>{t(ui.legal.kicker)}</Eyebrow>
          <p className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.12em] text-emerald">
            {t(CANCEL_NOTICE)}
          </p>
          <p className="text-sm leading-relaxed text-muted">{t(CANCEL_WAIVER)}</p>
          <p className="text-sm leading-relaxed text-muted">{t(ui.pricing.disclaimer)}</p>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}

function FeeRow({ row, display }: { row: PriceRow; display?: string }) {
  const { t } = useLocale();
  const code = row.code !== "—" ? row.code : "";
  return (
    <FeeLine
      name={
        <>
          {code ? <span className="mr-2.5 font-mono text-[11px] text-gold">{code}</span> : null}
          {t(row.name)}
        </>
      }
      price={display ?? row.price}
    />
  );
}

function FeeLine({ name, price }: { name: ReactNode; price: string }) {
  return (
    <li className="flex items-baseline gap-3 py-2.5 text-sm">
      <span className="min-w-0 text-charcoal">{name}</span>
      <span className="min-w-[1.5rem] flex-1 border-b border-dotted border-line" aria-hidden />
      <span className="shrink-0 tabular-nums font-medium text-emerald">{price}</span>
    </li>
  );
}
