"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MENU_SERVICES } from "@/data/services";
import { NAV, SITE } from "@/data/site";
import { LanguageSwitch, useLocale } from "@/i18n/locale";
import { ui } from "@/i18n/copy";
import { cn } from "@/lib/cn";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const consultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setConsultOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!consultOpen) return;
    function onDoc(e: MouseEvent) {
      if (!consultRef.current?.contains(e.target as Node)) setConsultOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [consultOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-line/80 bg-ivory/92 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 overflow-visible px-5 md:h-[72px] md:px-8">
        <Link to="/" className="shrink-0" aria-label="DOCROOM home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  className={cn(
                    "flex h-10 items-center gap-1 rounded-[10px] px-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:text-emerald",
                    pathname.startsWith("/services") && "text-emerald",
                  )}
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  {t(ui.nav.services)}
                  <ChevronDown className={cn("size-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen ? (
                  <div className="absolute left-0 top-full z-20 mt-2 w-72 rounded-2xl border border-line bg-paper p-2 shadow-soft">
                    {MENU_SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block rounded-xl px-3 py-2.5 text-sm text-charcoal hover:bg-ivory-2"
                      >
                        <span className="block font-medium text-emerald">{t(s.title)}</span>
                        <span className="mt-0.5 block text-xs text-muted">{t(s.kicker)}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex h-10 items-center rounded-[10px] px-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:text-emerald",
                  pathname === item.href && "text-emerald",
                )}
              >
                {t(item.label)}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitch className="shrink-0" />
          <div className="relative hidden sm:block" ref={consultRef}>
            <button
              type="button"
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-[10px] border border-emerald/20 px-4 text-sm font-medium text-emerald transition-colors hover:border-emerald/50 hover:bg-emerald/5",
                consultOpen && "border-emerald/50 bg-emerald/5",
              )}
              onClick={() => {
                setConsultOpen((v) => !v);
                setServicesOpen(false);
              }}
              aria-expanded={consultOpen}
              aria-haspopup="menu"
            >
              {t(ui.nav.consult)}
              <ChevronDown className={cn("size-3.5 transition-transform", consultOpen && "rotate-180")} />
            </button>
            {consultOpen ? (
              <div
                role="menu"
                className="absolute right-0 top-[calc(100%+8px)] z-[80] w-[19rem] rounded-2xl border border-line bg-paper p-2 shadow-soft"
              >
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="block rounded-xl px-3 py-2.5 hover:bg-ivory-2"
                  onClick={() => setConsultOpen(false)}
                >
                  <span className="block text-sm font-medium text-emerald">{t(ui.consult.free)}</span>
                  <span className="mt-0.5 block text-xs text-muted">{t(ui.consult.freeHint)}</span>
                </a>
                <a
                  href={SITE.calendlyPaid}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="mt-0.5 block rounded-xl px-3 py-2.5 hover:bg-ivory-2"
                  onClick={() => setConsultOpen(false)}
                >
                  <span className="block text-sm font-medium text-emerald">{t(ui.consult.paid)}</span>
                  <span className="mt-0.5 block text-xs text-muted">{t(ui.consult.paidHint)}</span>
                </a>
              </div>
            ) : null}
          </div>
          <Button asChild size="sm">
            <Link to="/start">{t(ui.nav.start)}</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[12px] text-emerald lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ivory px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <div className="mb-4 px-1">
              <LanguageSwitch />
            </div>
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-xl px-3 py-3 text-lg font-medium text-emerald"
              >
                {t(item.label)}
              </Link>
            ))}
            <p className="mt-4 px-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">{t(ui.nav.services)}</p>
            {MENU_SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-xl px-3 py-3 text-base text-charcoal"
              >
                {t(s.title)}
              </Link>
            ))}
            <Button asChild variant="secondary" className="mt-6 w-full" size="lg">
              <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                {t(ui.consult.free)}
              </a>
            </Button>
            <Button asChild variant="secondary" className="mt-3 w-full" size="lg">
              <a href={SITE.calendlyPaid} target="_blank" rel="noopener noreferrer">
                {t(ui.consult.paid)}
              </a>
            </Button>
            <Button asChild className="mt-3 w-full" size="lg">
              <Link to="/start">{t(ui.nav.start)}</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
