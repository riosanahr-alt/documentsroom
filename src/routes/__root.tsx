import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/shell";
import { AuthProvider } from "@/lib/auth/provider";
import { AppErrorComponent } from "@/lib/error-component";
import { LocaleProvider } from "@/i18n/locale";
import { PAGE_SEO } from "@/data/seo";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: PAGE_SEO["/"].title.en },
      { name: "description", content: `${PAGE_SEO["/"].description.ru} ${PAGE_SEO["/"].description.en}` },
      { name: "theme-color", content: "#0A3D2E" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: () => <NotFound />,
});

function NotFound() {
  return <AppErrorComponent error={{ message: "not-found" } as Error} />;
}

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh bg-ivory font-sans text-charcoal">
        <PreviewHostBridge />
        <AuthProvider>
          <LocaleProvider>
            <SiteShell>
              <Outlet />
            </SiteShell>
          </LocaleProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
