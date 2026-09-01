import type { ErrorComponentProps } from "@tanstack/react-router";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: Pick<ErrorComponentProps, "error">) {
  const { t } = useLocale();
  const isMissing =
    error.message === "not-found" || error.message === "This page is not on the map.";
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <span className="text-gold" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={1.6} />
      </span>
      <h1 className="text-lg font-semibold text-emerald">{t(ui.common.error)}</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {isMissing ? t(ui.common.notFound) : error.message || t(ui.common.errorHint)}
      </p>
    </main>
  );
}
