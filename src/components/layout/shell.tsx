import { DocumentSeo } from "@/components/document-seo";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-ivory text-charcoal">
      <DocumentSeo />
      <SiteHeader />
      <div className="grow">{children}</div>
      <SiteFooter />
    </div>
  );
}