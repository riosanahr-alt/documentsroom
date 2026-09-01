import { LOCAL_BUSINESS_JSON, SITE_URL, seoForPath } from "@/data/seo";
import { useLocale } from "@/i18n/locale";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export function DocumentSeo() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang, t } = useLocale();
  const seo = seoForPath(pathname);

  useEffect(() => {
    document.title = t(seo.title);
    setMeta("description", t(seo.description));
    document.documentElement.lang = lang;
    const path = pathname.replace(/\/$/, "") || "/";
    setCanonical(`${SITE_URL}${path === "/" ? "/" : path}`);
  }, [pathname, lang, seo, t]);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON) }} />
  );
}
