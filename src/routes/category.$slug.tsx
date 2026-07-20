import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ListingCard } from "@/components/listing-card";
import { getCategoryBySlug, type Listing } from "@/data/listings";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} - سوق السعودية` },
          {
            name: "description",
            content: `تصفح إعلانات ${loaderData.category.name} في جدة والمملكة العربية السعودية.`,
          },
        ]
      : [{ title: "قسم غير موجود" }, { name: "robots", content: "noindex" }],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">القسم غير موجود</h1>
      </div>
    </SiteLayout>
  ),
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <SiteLayout>
      {/* Category hero — compact on mobile, spacious on desktop */}
      <div className="bg-gradient-to-l from-primary/10 via-primary/5 to-transparent border-b">
        <div className="container mx-auto px-4 py-5 sm:py-8">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 grid place-items-center text-2xl sm:text-4xl shrink-0">
              {category.icon}
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-3xl font-bold truncate">{category.name}</h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                {category.listings.length} إعلان متاح · جدة
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* List on mobile (one column, horizontal cards) · grid on tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {category.listings.map((l: Listing) => (
            <ListingCard key={l.id} listing={l} categorySlug={category.slug} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
