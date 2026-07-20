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
  // Deterministic selection to avoid SSR/CSR hydration mismatch (React #418)
  const featured = allListings.slice(0, 8);

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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Categories sidebar — visually on the right in RTL */}
          <aside id="categories" className="lg:w-64 shrink-0 scroll-mt-24">
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm sticky top-32">
              <div className="px-4 py-3 border-b bg-gradient-to-l from-primary/10 to-transparent">
                <h2 className="font-bold text-sm text-foreground">تصفح الأقسام</h2>
              </div>
              <ul className="divide-y">
                {categories.map((cat) => {
                  const active = false;
                  return (
                    <li key={cat.slug}>
                      <Link
                        to="/category/$slug"
                        params={{ slug: cat.slug }}
                        className={`flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-muted/60 transition group ${
                          active ? "bg-primary/5" : ""
                        }`}
                      >
                        <span className="flex items-center gap-2.5 min-w-0">
                          <span className="text-xl shrink-0">{cat.icon}</span>
                          <span className="font-medium text-foreground group-hover:text-primary transition truncate">
                            {cat.name}
                          </span>
                        </span>
                        <span className="text-[11px] text-muted-foreground bg-muted rounded-full px-2 py-0.5 shrink-0">
                          {cat.listings.length}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <section id="featured" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold">إعلانات مميزة</h2>
                <span className="text-xs text-muted-foreground">{featured.length} إعلان</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {featured.map((l) => (
                  <ListingCard key={l.id} listing={l} categorySlug={l.categorySlug} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>


      <FloatingSales />
    </SiteLayout>
  );
}
