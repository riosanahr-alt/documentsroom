"use client";

import { useCallback, useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { type L as Loc, type Lang } from "./l";

export { L } from "./l";
export type { Lang } from "./l";

const STORAGE_KEY = "docroom-lang";
const COOKIE = "docroom-lang";

let current: Lang = "en";
const listeners = new Set<() => void>();

function readClient(): Lang {
  try {
    const fromStore = window.localStorage.getItem(STORAGE_KEY);
    if (fromStore === "en" || fromStore === "ru") return fromStore;
    const match = document.cookie.match(/(?:^|; )docroom-lang=(en|ru)/);
    if (match) return match[1] as Lang;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("ru")) return "ru";
  return "en";
}

function persist(next: Lang) {
  current = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
    document.cookie = `${COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = next;
  } catch {
    /* ignore */
  }
  listeners.forEach((fn) => fn());
}

export function setLang(next: Lang) {
  persist(next);
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

function getSnapshot(): Lang {
  return current;
}

function getServerSnapshot(): Lang {
  return "en";
}

if (typeof window !== "undefined") {
  current = readClient();
  document.documentElement.lang = current;
}

export function useLocale() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = useCallback(
    (value: Loc | string) => {
      if (typeof value === "string") return value;
      if (!value) return "";
      return value[lang] || value.en || "";
    },
    [lang],
  );
  return { lang, setLang, t };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  return children;
}

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang } = useLocale();
  return (
    <div
      className={cn(
        "relative z-50 inline-flex shrink-0 rounded-full border border-line bg-paper p-0.5 text-[11px] font-medium tracking-[0.14em]",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "ru"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLang(code);
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLang(code);
          }}
          className={cn(
            "h-8 min-w-10 rounded-full px-3 uppercase transition-colors",
            lang === code ? "bg-emerald text-ivory" : "text-muted hover:text-emerald",
          )}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
