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
      className="group bg-card rounded-xl overflow-hidden border hover:border-primary/40 hover:shadow-lg transition-all
                 flex flex-row sm:flex-col"
    >
      {/* Image: side thumbnail on mobile, full cover on desktop */}
      <div className="relative bg-muted overflow-hidden shrink-0
                      w-32 h-32 sm:w-full sm:h-auto sm:aspect-[16/10]">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-background/95 backdrop-blur text-[10px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5 rounded-md border">
          {listing.condition}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 p-3 sm:p-4 flex flex-col justify-between gap-2 sm:gap-2.5">
        <h3 className="font-semibold text-sm sm:text-base leading-snug line-clamp-2 sm:min-h-[2.75rem] group-hover:text-primary transition-colors">
          {listing.title}
        </h3>
        <div className="text-primary font-extrabold text-base sm:text-xl">
          {listing.price.toLocaleString("ar-SA")}{" "}
          <span className="text-[10px] sm:text-xs font-normal text-muted-foreground">ر.س</span>
        </div>
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-muted-foreground sm:pt-2 sm:border-t gap-2">
          <div className="flex items-center gap-1 min-w-0">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="truncate">{listing.location}</span>
          </div>
          <div className="hidden xs:flex items-center gap-1 shrink-0">
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{new Date(listing.date).toLocaleDateString("ar-SA")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
