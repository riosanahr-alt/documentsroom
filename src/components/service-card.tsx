import { cn } from "@/lib/cn";
import type { Service } from "@/data/services";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Languages, Stamp, Globe2, Zap, FolderOpen, BookOpen, Handshake, Archive, Truck, MapPin, Stethoscope, Compass } from "lucide-react";

const ICONS = {
  immigration: FileText,
  translations: Languages,
  notary: Stamp,
  apostille: Globe2,
  expedited: Zap,
  other: FolderOpen,
  asylum: BookOpen,
  divorce: Handshake,
  recovery: Archive,
  delivery: Truck,
  visits: MapPin,
  nclex: Stethoscope,
  relocation: Compass,
} as const;

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const { t } = useLocale();
  const Icon = ICONS[service.slug as keyof typeof ICONS] ?? FileText;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={cn(
        "group flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-soft transition-colors hover:border-gold/50",
        className,
      )}
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-ivory-2 text-emerald">
        <Icon className="size-5" strokeWidth={1.6} />
      </span>
      <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-gold">{t(service.kicker)}</p>
      <h3 className="mt-2 text-lg font-semibold text-emerald">{t(service.title)}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t(service.short)}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald">
        {t(ui.common.learnMore)}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
