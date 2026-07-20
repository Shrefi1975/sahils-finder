import { useState } from "react";
import { X, MessageCircle, Rocket, Sparkles } from "lucide-react";

export function FloatingSales() {
  const [open, setOpen] = useState(false);
  const phoneIntl = "966566175512";
  const message = encodeURIComponent(
    "مرحباً، أرغب في الحصول على منصة إعلانات مبوبة احترافية قابلة للتخصيص بالكامل.",
  );
  const waLink = `https://wa.me/${phoneIntl}?text=${message}`;

  return (
    <>
      {/* Slim edge tab — always visible but doesn't block content */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 group ${open ? "pointer-events-none opacity-0" : "opacity-100"} transition-opacity`}
        aria-label="امتلك منصتك الإعلانية"
      >
        <div className="flex items-center gap-2 bg-primary text-primary-foreground pr-3 pl-2 py-3 rounded-l-none rounded-r-xl shadow-lg hover:pr-4 transition-all">
          <Sparkles className="w-4 h-4" />
          <span
            className="text-xs font-semibold whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            امتلك منصتك
          </span>
        </div>
      </button>

      {/* Backdrop + panel — only when opened */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-[300px] animate-fade-in">
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/85 text-primary-foreground rounded-2xl shadow-2xl p-5 overflow-hidden">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5" />
                  <div className="text-xs font-semibold opacity-90">
                    امتلك منصتك الإعلانية الاحترافية
                  </div>
                </div>
                <div className="font-bold text-lg leading-tight mb-1">
                  نظام متكامل، سريع، وقابل للتخصيص بالكامل
                </div>
                <p className="text-sm opacity-90 mb-4 leading-relaxed">
                  احصل على منصة إعلانات مبوبة بهوية علامتك التجارية، جاهزة للانطلاق خلال أيام.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 rounded-lg bg-white text-primary font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/95 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  تواصل مع المطور
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
