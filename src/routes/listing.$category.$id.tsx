import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Calendar, Tag, ChevronLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { getCategoryBySlug } from "@/data/listings";

export const Route = createFileRoute("/listing/$category/$id")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    const listing = category?.listings.find((l) => l.id === params.id);
    if (!category || !listing) throw notFound();
    return { category, listing };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.listing.title} - سوق السعودية` },
          { name: "description", content: loaderData.listing.description },
          { property: "og:title", content: loaderData.listing.title },
          { property: "og:description", content: loaderData.listing.description },
          { property: "og:image", content: loaderData.listing.image },
        ]
      : [{ title: "إعلان غير موجود" }, { name: "robots", content: "noindex" }],
  }),
  component: ListingPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">الإعلان غير موجود</h1>
      </div>
    </SiteLayout>
  ),
});

function ListingPage() {
  const { category, listing } = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ChevronLeft className="w-3 h-3" />
          <Link
            to="/category/$slug"
            params={{ slug: category.slug }}
            className="hover:text-primary"
          >
            {category.name}
          </Link>
          <ChevronLeft className="w-3 h-3" />
          <span className="text-foreground line-clamp-1">{listing.title}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border bg-muted">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 bg-card border rounded-xl p-6">
              <h2 className="font-bold text-lg mb-3">تفاصيل الإعلان</h2>
              <p className="text-muted-foreground leading-relaxed">
                {listing.description}
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-card border rounded-xl p-5">
              <h1 className="text-xl font-bold mb-3">{listing.title}</h1>
              <div className="text-3xl font-bold text-primary mb-4">
                {listing.price.toLocaleString("ar-SA")}{" "}
                <span className="text-sm font-normal text-muted-foreground">ر.س</span>
              </div>
              <dl className="space-y-2.5 text-sm border-t pt-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <dt className="text-muted-foreground">القسم:</dt>
                  <dd className="font-medium">{category.name}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <dt className="text-muted-foreground">الموقع:</dt>
                  <dd className="font-medium">{listing.location}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <dt className="text-muted-foreground">تاريخ النشر:</dt>
                  <dd className="font-medium">
                    {new Date(listing.date).toLocaleDateString("ar-SA")}
                  </dd>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-primary/20" />
                  <dt className="text-muted-foreground">الحالة:</dt>
                  <dd className="font-medium">{listing.condition}</dd>
                </div>
              </dl>
              <button className="mt-5 w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
                اتصل بالبائع
              </button>
              <button className="mt-2 w-full h-11 rounded-lg border font-medium hover:bg-muted transition">
                مراسلة
              </button>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
