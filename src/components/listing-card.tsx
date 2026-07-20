import { Link } from "@tanstack/react-router";
import { MapPin, Calendar } from "lucide-react";
import type { Listing } from "@/data/listings";

export function ListingCard({
  listing,
  categorySlug,
}: {
  listing: Listing;
  categorySlug: string;
}) {
  return (
    <Link
      to="/listing/$category/$id"
      params={{ category: categorySlug, id: listing.id }}
      className="group bg-card rounded-xl overflow-hidden border hover:border-primary/40 hover:shadow-lg transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-2 right-2 bg-background/95 backdrop-blur text-xs font-medium px-2 py-1 rounded-md border">
          {listing.condition}
        </span>
      </div>
      <div className="p-3.5 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {listing.title}
        </h3>
        <div className="text-primary font-bold text-lg">
          {listing.price.toLocaleString("ar-SA")}{" "}
          <span className="text-xs font-normal text-muted-foreground">ر.س</span>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{listing.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(listing.date).toLocaleDateString("ar-SA")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
