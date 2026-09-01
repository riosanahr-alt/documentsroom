import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[11px] font-medium uppercase tracking-[0.2em] text-gold", className)}>
      {children}
    </p>
  );
}

export function PageHero({
  kicker,
  title,
  text,
  actions,
}: {
  kicker?: string;
  title: string;
  text?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="border-b border-line bg-ivory-2/50">
      <Container className="py-16 md:py-24">
        {kicker ? <Eyebrow>{kicker}</Eyebrow> : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.12] text-emerald md:text-5xl">
          {title}
        </h1>
        {text ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{text}</p> : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </div>
  );
}

export function CtaBand({ title, text }: { title?: string; text?: string }) {
  const { t } = useLocale();
  return (
    <section className="bg-emerald">
      <div className="h-px bg-gold/70" />
      <Container className="py-10 md:py-14">
        <div className="flex flex-col gap-8 rounded-2xl border border-gold/50 bg-ivory px-6 py-8 md:flex-row md:items-end md:justify-between md:px-10 md:py-10">
          <div className="max-w-xl">
            <Eyebrow>{t(ui.cta.kicker)}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-emerald md:text-4xl">
              {title ?? t(ui.cta.title)}
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              {text ?? t(ui.cta.text)}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:items-stretch">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button asChild variant="primary" size="lg" className="w-full min-w-[12rem]">
                <Link to="/start">
                  {t(ui.cta.primary)}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full min-w-[12rem]">
                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                  {t(ui.consult.free)}
                </a>
              </Button>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {t(ui.consult.freeHint)}{" "}
              <a
                href={SITE.calendlyPaid}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald underline-offset-4 hover:underline"
              >
                {t(ui.consult.paid)}
              </a>
            </p>
          </div>
        </div>
      </Container>
      <div className="h-px bg-gold/70" />
    </section>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("h-px w-16 bg-gold", className)} />;
}

export function FounderPortrait({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("w-full max-w-[280px] md:max-w-[320px]", className)}>
      <div className="overflow-hidden rounded-2xl border border-gold/35 bg-ivory-2 p-1.5 shadow-soft">
        <img src={src} alt={alt} className="aspect-[3/4] w-full rounded-[12px] object-cover object-[center_12%]" />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

