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
      <section className="relative border-b overflow-hidden">
        <AnimatedHeroBg />
        <div className="container mx-auto px-4 py-20 md:py-28 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white/90 text-xs font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
            أكبر منصة إعلانات مبوبة في المملكة
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white leading-tight drop-shadow-sm">
            كل ما تحتاجه <span className="text-[#f5a623]">في مكان واحد</span>
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            تصفح آلاف الإعلانات المميزة من جميع أنحاء المملكة، أو اختر قسماً للبدء بالبيع والشراء بثقة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#categories"
              className="h-12 px-6 rounded-lg bg-white text-primary font-semibold text-sm inline-flex items-center hover:bg-white/95 transition shadow-lg"
            >
              تصفح الأقسام
            </a>
            <a
              href="#featured"
              className="h-12 px-6 rounded-lg bg-white/10 border border-white/25 text-white font-semibold text-sm inline-flex items-center hover:bg-white/20 transition backdrop-blur"
            >
              أحدث الإعلانات
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="container mx-auto px-4 py-10 scroll-mt-24">
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


      <section id="featured" className="container mx-auto px-4 py-10 scroll-mt-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">إعلانات مميزة</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((l) => (
            <ListingCard key={l.id} listing={l} categorySlug={l.categorySlug} />
          ))}
        </div>
      </section>

      <FloatingSales />
    </SiteLayout>
  );
}
