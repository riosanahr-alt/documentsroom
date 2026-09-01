import { ReviewCard } from "@/components/review-card";
import { Container, CtaBand, PageHero, Section } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { REVIEWS } from "@/data/reviews";
import { routeHead } from "@/data/seo";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => routeHead("/reviews"),
});

function ReviewsPage() {
  const { t } = useLocale();
  return (
    <main>
      <PageHero
        kicker={t(ui.reviewsPage.kicker)}
        title={t(ui.reviewsPage.title)}
        text={t(ui.reviewsPage.text)}
        actions={
          <Button asChild variant="secondary">
            <Link to="/contact">{t(ui.reviewsPage.leave)}</Link>
          </Button>
        }
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
