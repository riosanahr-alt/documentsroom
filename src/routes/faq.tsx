import { ContactForm } from "@/components/contact-form";
import { Container, PageHero, Section } from "@/components/sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_GROUPS } from "@/data/faq";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => routeHead("/faq"),
});

function FaqPage() {
  const { t } = useLocale();
  const [active, setActive] = useState(FAQ_GROUPS[0].id);
  const group = FAQ_GROUPS.find((g) => g.id === active) ?? FAQ_GROUPS[0];

  return (
    <main>
      <PageHero kicker={t(ui.faqPage.kicker)} title={t(ui.faqPage.title)} text={t(ui.faqPage.text)} />
      <Section>
        <Container className="grid gap-10 md:grid-cols-12">
          <aside className="md:col-span-4">
            <div className="flex gap-2 overflow-x-auto md:sticky md:top-28 md:flex-col md:overflow-visible">
              {FAQ_GROUPS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActive(g.id)}
                  className={cn(
                    "whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-medium",
                    active === g.id ? "bg-emerald text-ivory" : "bg-paper text-emerald hover:bg-ivory-2",
                  )}
                >
                  {t(g.title)}
                </button>
              ))}
            </div>
          </aside>
          <div className="md:col-span-8">
            <h2 className="text-xl font-semibold text-emerald">{t(group.title)}</h2>
            <Accordion type="single" collapsible className="mt-4">
              {group.items.map((f) => (
                <AccordionItem key={f.q.en} value={f.q.en}>
                  <AccordionTrigger>{t(f.q)}</AccordionTrigger>
                  <AccordionContent>{t(f.a)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>
      <Section className="bg-paper">
        <Container className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-emerald">{t(ui.faqPage.still)}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t(ui.faqPage.stillText)}</p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </main>
  );
}
