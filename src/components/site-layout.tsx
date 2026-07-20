import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Search, MapPin, Plus, LogOut, User } from "lucide-react";
import { categories } from "@/data/listings";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupaUser } from "@supabase/supabase-js";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [user, setUser] = useState<SupaUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setMenuOpen(false);
    navigate({ to: "/" });
  };

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

          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold hover:bg-primary/20 transition"
                aria-label="حسابي"
              >
                {user.email?.[0]?.toUpperCase() ?? <User className="w-5 h-5" />}
              </button>
              {menuOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-card border rounded-lg shadow-lg py-2 z-50">
                  <div className="px-3 py-2 text-xs text-muted-foreground border-b truncate">
                    {user.email}
                  </div>
                  <button
                    onClick={signOut}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition text-right"
                  >
                    <LogOut className="w-4 h-4" />
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center h-11 px-4 rounded-lg border font-medium text-sm hover:bg-muted transition"
            >
              دخول
            </Link>
          )}

          <Link
            to={user ? "/" : "/auth"}
            className="hidden sm:inline-flex items-center gap-2 h-11 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition"
          >
            <Plus className="w-4 h-4" />
            أضف إعلان
          </Link>
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

      <footer className="bg-[oklch(0.16_0.03_265)] text-white/85 mt-12">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-11 h-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">س</div>
                <div>
                  <div className="font-bold text-lg text-white">سوق السعودية</div>
                  <div className="text-xs text-white/60">إعلانات مبوبة فاخرة</div>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                منصة الإعلانات المبوبة الأولى في المملكة، تجمع بين الثقة والجودة والتجربة الراقية.
              </p>
            </div>

            <FooterCol
              title="المنصة"
              items={[
                { label: "الرئيسية", href: "/" },
                { label: "الأقسام", href: "/" },
                { label: "أحدث الإعلانات", href: "/" },
                { label: "أضف إعلانك", href: "/" },
              ]}
            />
            <FooterCol
              title="الأمان والثقة"
              items={[
                { label: "مركز الأمان", href: "/" },
                { label: "نظام التقييم", href: "/" },
                { label: "السلع والعروض الممنوعة", href: "/" },
              ]}
            />
            <FooterCol
              title="المساعدة"
              items={[
                { label: "الأسئلة الشائعة", href: "/" },
                { label: "اتصل بنا", href: "/" },
                { label: "شروط الاستخدام", href: "/" },
                { label: "سياسة الخصوصية", href: "/" },
              ]}
            />
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <div>© {new Date().getFullYear()} سوق السعودية. جميع الحقوق محفوظة.</div>
            <div>صُنع بعناية في المملكة العربية السعودية</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="font-semibold text-white mb-4 text-sm tracking-wide">{title}</div>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href} className="text-sm text-white/65 hover:text-white transition">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
