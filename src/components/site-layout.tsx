import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Search, MapPin, Plus, LogOut, User, Twitter, Instagram, Facebook } from "lucide-react";
import { categories } from "@/data/listings";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupaUser } from "@supabase/supabase-js";
import { Logo } from "@/components/logo";

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
      <header className="w-full sticky top-0 z-40 bg-[oklch(0.22_0.08_260)] text-white shadow-md">
        <div className="w-full px-4 md:px-8 py-3 flex items-center gap-3 md:gap-5">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <Logo size={44} />
            <div className="hidden sm:block leading-tight">
              <div className="font-extrabold text-lg text-white">سوقنا</div>
              <div className="text-[11px] text-white/70">إعلانات مبوبة</div>
            </div>
          </Link>

          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="ابحث عن سيارات، عقارات، هواتف..."
              className="w-full h-11 pr-10 pl-4 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623]/60 transition text-sm"
            />
          </div>

          <div className="hidden md:flex items-center gap-1 text-sm text-white/80">
            <MapPin className="w-4 h-4" />
            <span>جدة</span>
          </div>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center font-semibold hover:bg-white/25 transition"
                aria-label="حسابي"
              >
                {user.email?.[0]?.toUpperCase() ?? <User className="w-5 h-5" />}
              </button>
              {menuOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-card text-foreground border rounded-lg shadow-lg py-2 z-50">
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
              className="hidden sm:inline-flex items-center h-10 px-4 rounded-lg border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition"
            >
              دخول
            </Link>
          )}

          <Link
            to={user ? "/page/$slug" : "/auth"}
            params={{ slug: "post-ad" }}
            className="inline-flex items-center gap-1.5 h-10 px-3 md:px-4 rounded-lg bg-[#f5a623] text-slate-900 font-semibold text-sm hover:bg-[#e59712] transition shadow"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">أضف إعلان</span>
          </Link>
        </div>

        <nav className="border-t border-white/10 bg-[oklch(0.19_0.07_260)]">
          <div className="w-full px-4 md:px-8">
            <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
              <Link
                to="/"
                className={`shrink-0 px-4 py-2 rounded-md text-sm font-medium transition ${
                  pathname === "/"
                    ? "bg-[#f5a623] text-slate-900"
                    : "text-white/85 hover:bg-white/10"
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
                        ? "bg-[#f5a623] text-slate-900"
                        : "text-white/85 hover:bg-white/10"
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

      <footer className="bg-[oklch(0.14_0.03_265)] text-white/85 mt-12">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo size={48} />
                <div>
                  <div className="font-bold text-lg text-white">سوقنا</div>
                  <div className="text-xs text-white/60">إعلانات مبوبة فاخرة</div>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                منصة الإعلانات المبوبة الأولى في المملكة، تجمع بين الثقة والجودة والتجربة الراقية.
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Twitter, href: "https://twitter.com", label: "تويتر" },
                  { icon: TikTokIcon, href: "https://tiktok.com", label: "تيك توك" },
                  { icon: SnapchatIcon, href: "https://snapchat.com", label: "سناب شات" },
                  { icon: Instagram, href: "https://instagram.com", label: "انستقرام" },
                  { icon: Facebook, href: "https://facebook.com", label: "فيسبوك" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/25 transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol
              title="المنصة"
              items={[
                { label: "الرئيسية", to: "/" },
                { label: "الأقسام", to: "/#categories" },
                { label: "أحدث الإعلانات", to: "/page/latest" },
                { label: "أضف إعلانك", to: "/page/post-ad" },
              ]}
            />
            <FooterCol
              title="الأمان والثقة"
              items={[
                { label: "مركز الأمان", to: "/page/safety" },
                { label: "نظام التقييم", to: "/page/ratings" },
                { label: "السلع والعروض الممنوعة", to: "/page/prohibited" },
              ]}
            />
            <FooterCol
              title="المساعدة"
              items={[
                { label: "الأسئلة الشائعة", to: "/page/faq" },
                { label: "اتصل بنا", to: "/page/contact" },
                { label: "شروط الاستخدام", to: "/page/terms" },
                { label: "سياسة الخصوصية", to: "/page/privacy" },
              ]}
            />
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <div>© {new Date().getFullYear()} سوقنا. جميع الحقوق محفوظة.</div>
            <div>صُنع بعناية في المملكة العربية السعودية</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <div className="font-semibold text-white mb-4 text-sm tracking-wide">{title}</div>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.to} className="text-sm text-white/65 hover:text-white transition">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.6 6.8a5.7 5.7 0 0 1-3.5-1.2 5.7 5.7 0 0 1-2.2-3.6h-3.3v13.2a2.6 2.6 0 1 1-1.8-2.5v-3.4a5.9 5.9 0 1 0 5.1 5.8V9.4a8.9 8.9 0 0 0 5.7 2V8.1c-.1 0 0-1.3 0-1.3z" />
    </svg>
  );
}

function SnapchatIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.2c3.1 0 5.3 2.2 5.3 5.4 0 1.3-.1 2.4-.1 2.7.2.1.7.3 1.2.3.4 0 1-.2 1.4-.4.1 0 .2-.1.3-.1.4 0 .8.3.8.7 0 .5-.5.7-1.4 1.1-.5.2-1.2.4-1.3.7 0 .2.5.9 1 1.4.6.7 1.4 1.4 2.6 1.8.3.1.5.3.4.6-.2.7-1.5 1-2.4 1.2-.1 0-.2.4-.3.7-.1.4-.2.8-.5.8-.1 0-.3 0-.6-.1-.5-.1-1-.2-1.5-.2-.4 0-.8 0-1.2.1-.7.2-1.4.9-2.1 1.4-.8.5-1.5 1-2.6 1s-1.8-.5-2.5-1c-.7-.5-1.4-1.2-2.1-1.4-.4-.1-.8-.1-1.2-.1-.5 0-1 .1-1.5.2-.3.1-.5.1-.6.1-.4 0-.5-.5-.5-.9 0-.3-.1-.6-.3-.7-.9-.2-2.2-.5-2.4-1.2 0-.3.1-.5.4-.6 1.2-.4 2-1.1 2.6-1.8.5-.5 1-1.2 1-1.4-.1-.3-.8-.5-1.3-.7-.9-.4-1.4-.6-1.4-1.1 0-.4.4-.7.8-.7.1 0 .2 0 .3.1.4.2 1 .4 1.4.4.5 0 1-.2 1.2-.3 0-.3-.1-1.4-.1-2.7C6.7 4.4 8.9 2.2 12 2.2z" />
    </svg>
  );
}
