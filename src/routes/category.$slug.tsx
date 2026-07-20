import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ListingCard } from "@/components/listing-card";
import { getCategoryBySlug } from "@/data/listings";

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
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">{category.icon}</div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{category.name}</h1>
            <p className="text-sm text-muted-foreground">
              {category.listings.length} إعلان متاح
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.listings.map((l: typeof category.listings[number]) => (
            <ListingCard key={l.id} listing={l} categorySlug={category.slug} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
