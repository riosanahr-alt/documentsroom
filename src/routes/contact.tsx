import { ContactForm } from "@/components/contact-form";
import { Container, PageHero, Section } from "@/components/sections";
import { SITE } from "@/data/site";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => routeHead("/contact"),
});

function ContactPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero kicker={t(ui.contactPage.kicker)} title={t(ui.contactPage.title)} text={t(ui.contactPage.text)} />
      <Section>
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <ul className="space-y-6">
              <Item icon={Phone} label={t(ui.contactPage.phone)} value={SITE.phone} href={SITE.phoneHref} />
              <Item icon={Mail} label={t(ui.contactPage.email)} value={SITE.email} href={`mailto:${SITE.email}`} />
              <Item icon={MapPin} label={t(ui.contactPage.studio)} value={`${SITE.address}. ${t(SITE.addressNote)}`} />
              <Item icon={Clock} label={t(ui.contactPage.hours)} value={t(SITE.hours)} />
            </ul>
            <div className="mt-8 rounded-2xl border border-line bg-ivory-2/70 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">{t(ui.consult.title)}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(ui.consult.note)}</p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Button asChild size="sm" className="w-full">
                  <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                    {t(ui.consult.free)}
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm" className="w-full">
                  <a href={SITE.calendlyPaid} target="_blank" rel="noopener noreferrer">
                    {t(ui.consult.paid)}
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a className="rounded-xl border border-line px-4 py-2 text-emerald" href={SITE.whatsapp}>
                WhatsApp
              </a>
              <a className="rounded-xl border border-line px-4 py-2 text-emerald" href={SITE.telegram}>
                Telegram
              </a>
              <a className="rounded-xl border border-line px-4 py-2 text-emerald" href={SITE.instagramHref}>
                {SITE.instagram}
              </a>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-ivory-2">
              <img
                src="/images/founder-studio.png"
                alt={t(ui.common.founderAlt)}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </main>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <Icon className="size-4 text-gold" strokeWidth={1.6} />
      <span>
        <span className="block text-xs uppercase tracking-[0.16em] text-muted">{label}</span>
        <span className="mt-1 block text-emerald">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-start gap-3">
          {inner}
        </a>
      ) : (
        <div className="flex items-start gap-3">{inner}</div>
      )}
    </li>
  );
}
