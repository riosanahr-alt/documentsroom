import { Logo } from "@/components/logo";
import { ADVERTISING_NOTICE, CANCEL_NOTICE, CANCEL_WAIVER } from "@/data/notices";
import { FOOTER_SERVICES, SITE } from "@/data/site";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const { t } = useLocale();
  return (
    <footer className="bg-emerald text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Logo inverted />
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-gold">{t(SITE.descriptor)}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">{t(SITE.tagline)}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t(ui.footer.visit)}</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <Link to="/about" className="hover:text-ivory">
                {t(ui.nav.about)}
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-ivory">
                {t(ui.nav.how)}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-ivory">
                {t(ui.nav.faq)}
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-ivory">
                {t(ui.nav.reviews)}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-ivory">
                {t(ui.nav.blog)}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-ivory">
                {t(ui.nav.pricing)}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t(ui.footer.services)}</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.href}>
                <Link to="/services/$slug" params={{ slug: s.href.split("/").pop() ?? "immigration" }} className="hover:text-ivory">
                  {t(s.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t(ui.footer.contact)}</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <a href={SITE.phoneHref} className="hover:text-ivory">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-ivory">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.address}</li>
            <li className="text-ivory/55">{t(SITE.addressNote)}</li>
            <li>{t(SITE.hours)}</li>
            <li>
              <a href={SITE.instagramHref} className="hover:text-ivory">
                {SITE.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-6xl space-y-4 px-5 py-8 md:px-8">
          <p className="text-[11px] font-medium uppercase leading-relaxed tracking-wide text-gold/90">{t(CANCEL_NOTICE)}</p>
          <p className="max-w-4xl text-[12px] leading-relaxed text-ivory/80">{t(CANCEL_WAIVER)}</p>
          <p className="max-w-4xl text-[12px] leading-relaxed text-ivory/80">{t(ADVERTISING_NOTICE)}</p>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-ivory/45">
            <p>
              © {new Date().getFullYear()} {SITE.legalName}. {t(ui.footer.copyright)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/notices" className="hover:text-ivory">
                {t(ui.nav.notices)}
              </Link>
              <Link to="/privacy" className="hover:text-ivory">
                {t(ui.nav.privacy)}
              </Link>
              <Link to="/terms" className="hover:text-ivory">
                {t(ui.nav.terms)}
              </Link>
              <Link to="/disclaimer" className="hover:text-ivory">
                {t(ui.nav.disclaimer)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
