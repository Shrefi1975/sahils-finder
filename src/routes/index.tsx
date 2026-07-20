import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ListingCard } from "@/components/listing-card";
import { AnimatedHeroBg } from "@/components/animated-hero-bg";
import { FloatingSales } from "@/components/floating-sales";
import { categories, allListings } from "@/data/listings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سوق السعودية - إعلانات مبوبة" },
      { name: "description", content: "منصة الإعلانات المبوبة الأولى في السعودية: سيارات، عقارات، إلكترونيات، هواتف، وظائف وأكثر." },
      { property: "og:title", content: "سوق السعودية - إعلانات مبوبة" },
      { property: "og:description", content: "تصفح آلاف الإعلانات في جدة والمملكة." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = [...allListings].sort(() => 0.5 - Math.random()).slice(0, 8);

  return (
    <SiteLayout>
      <section className="bg-gradient-to-l from-primary/10 via-primary/5 to-transparent border-b">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            كل ما تحتاجه في مكان واحد
          </h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
            تصفح الإعلانات المميزة من جميع أنحاء المملكة، أو اختر قسماً للبدء.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">تصفح الأقسام</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/category/$slug"
              params={{ slug: cat.slug }}
              className="bg-card border rounded-xl p-4 text-center hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <div className="font-semibold text-sm">{cat.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {cat.listings.length} إعلان
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">إعلانات مميزة</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((l) => (
            <ListingCard key={l.id} listing={l} categorySlug={l.categorySlug} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
