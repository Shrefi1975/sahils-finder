import { useState } from "react";
import { X, MessageCircle, Rocket } from "lucide-react";

export function FloatingSales() {
  const [open, setOpen] = useState(true);
  const phoneIntl = "966566175512";
  const message = encodeURIComponent(
    "مرحباً، أرغب في الحصول على منصة إعلانات مبوبة احترافية قابلة للتخصيص بالكامل.",
  );
  const waLink = `https://wa.me/${phoneIntl}?text=${message}`;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-105 transition"
        aria-label="فتح بطاقة امتلك منصتك"
      >
        <Rocket className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-[290px] animate-fade-in">
      <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground rounded-2xl shadow-2xl p-5 overflow-hidden">
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
            <div className="text-xs font-semibold opacity-90">امتلك منصتك الإعلانية الاحترافية</div>
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
  );
}
