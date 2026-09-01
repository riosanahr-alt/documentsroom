import type { Review } from "@/data/reviews";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";

export function ReviewCard({ review, className }: { review: Review; className?: string }) {
  const { t } = useLocale();
  return (
    <figure className={cn("flex h-full flex-col rounded-2xl border border-line bg-paper p-6 md:p-8", className)}>
      <blockquote className="flex-1 text-base leading-relaxed text-charcoal">“{t(review.quote)}”</blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="font-medium text-emerald">{review.name}</p>
        <p className="mt-1 text-sm text-muted">{t(review.meta)}</p>
      </figcaption>
    </figure>
  );
}
