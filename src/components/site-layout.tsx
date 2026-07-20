import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Search, MapPin, Plus } from "lucide-react";
import { categories } from "@/data/listings";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div dir="rtl" className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              س
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight">سوق السعودية</div>
              <div className="text-xs text-muted-foreground">إعلانات مبوبة</div>
            </div>
          </Link>

          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث عن سيارات، عقارات، هواتف..."
              className="w-full h-11 pr-10 pl-4 rounded-lg border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-sm"
            />
          </div>

          <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>جدة</span>
          </div>

          <button className="hidden sm:inline-flex items-center gap-2 h-11 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition">
            <Plus className="w-4 h-4" />
            أضف إعلان
          </button>
        </div>

        <nav className="border-t bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
              <Link
                to="/"
                className={`shrink-0 px-4 py-2 rounded-md text-sm font-medium transition ${
                  pathname === "/"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                الرئيسية
              </Link>
              {categories.map((cat) => {
                const active = pathname === `/category/${cat.slug}`;
                return (
                  <Link
                    key={cat.slug}
                    to="/category/$slug"
                    params={{ slug: cat.slug }}
                    className={`shrink-0 px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-1.5 ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <div className="font-semibold text-foreground mb-2">سوق السعودية</div>
          <div>منصة الإعلانات المبوبة الأولى في المملكة العربية السعودية</div>
          <div className="mt-4">© {new Date().getFullYear()} جميع الحقوق محفوظة</div>
        </div>
      </footer>
    </div>
  );
}
