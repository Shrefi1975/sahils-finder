import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ChevronLeft,
  Shield,
  Star,
  Ban,
  HelpCircle,
  Phone,
  FileText,
  Lock,
  Sparkles,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PageContent = {
  title: string;
  intro: string;
  sections: { heading: string; body: string | string[] }[];
};

type PageTheme = {
  icon: LucideIcon;
  gradient: string;
  accent: string;
  ring: string;
};

const THEMES: Record<string, PageTheme> = {
  latest: {
    icon: Sparkles,
    gradient: "from-indigo-600 via-blue-600 to-cyan-500",
    accent: "text-indigo-600",
    ring: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  "post-ad": {
    icon: Rocket,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    accent: "text-orange-600",
    ring: "bg-orange-50 text-orange-600 border-orange-100",
  },
  safety: {
    icon: Shield,
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    accent: "text-emerald-600",
    ring: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  ratings: {
    icon: Star,
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    accent: "text-amber-600",
    ring: "bg-amber-50 text-amber-600 border-amber-100",
  },
  prohibited: {
    icon: Ban,
    gradient: "from-rose-600 via-red-600 to-orange-600",
    accent: "text-rose-600",
    ring: "bg-rose-50 text-rose-600 border-rose-100",
  },
  faq: {
    icon: HelpCircle,
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    accent: "text-violet-600",
    ring: "bg-violet-50 text-violet-600 border-violet-100",
  },
  contact: {
    icon: Phone,
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    accent: "text-sky-600",
    ring: "bg-sky-50 text-sky-600 border-sky-100",
  },
  terms: {
    icon: FileText,
    gradient: "from-slate-700 via-slate-600 to-zinc-600",
    accent: "text-slate-700",
    ring: "bg-slate-100 text-slate-700 border-slate-200",
  },
  privacy: {
    icon: Lock,
    gradient: "from-teal-600 via-emerald-600 to-green-600",
    accent: "text-teal-600",
    ring: "bg-teal-50 text-teal-600 border-teal-100",
  },
};

const PAGES: Record<string, PageContent> = {
  latest: {
    title: "أحدث الإعلانات",
    intro: "اطّلع على أحدث الإعلانات المضافة في جميع الأقسام من مختلف مناطق المملكة.",
    sections: [
      {
        heading: "كيف نرتّب أحدث الإعلانات؟",
        body: "نعرض الإعلانات وفق تاريخ النشر مع إبراز الإعلانات الموثّقة والمميزة أولاً لضمان تجربة تصفح آمنة وسريعة.",
      },
      {
        heading: "ابدأ التصفح الآن",
        body: "افتح الصفحة الرئيسية أو اختر أحد الأقسام العشرة للبدء بمتابعة أحدث ما نُشر.",
      },
    ],
  },
  "post-ad": {
    title: "أضف إعلانك",
    intro: "انشر إعلانك خلال دقائق وابدأ استقبال طلبات المشترين من كل مكان في المملكة.",
    sections: [
      {
        heading: "خطوات النشر",
        body: [
          "أنشئ حساباً مجانياً أو سجّل الدخول.",
          "اختر القسم المناسب لسلعتك أو خدمتك.",
          "أضف عنواناً واضحاً ووصفاً مختصراً وصوراً واقعية.",
          "حدّد السعر والموقع وطريقة التواصل، ثم انشر.",
        ],
      },
      {
        heading: "نصائح لإعلان أفضل",
        body: "استخدم صوراً واضحة بإضاءة جيدة، واذكر حالة المنتج بصدق، وحدّد سعراً منافساً لجذب أكبر عدد من المهتمين.",
      },
    ],
  },
  safety: {
    title: "مركز الأمان",
    intro: "أمانك أولويتنا. نوفّر لك إرشادات ومبادئ لضمان تجربة بيع وشراء موثوقة.",
    sections: [
      {
        heading: "قواعد التعامل الآمن",
        body: [
          "التقِ البائع في مكان عام ومزدحم كلما أمكن.",
          "افحص السلعة جيداً قبل الدفع.",
          "لا تحوّل أي مبالغ قبل استلام السلعة أو الخدمة.",
          "احذر العروض المبالغ فيها أو الأسعار المشبوهة.",
        ],
      },
      {
        heading: "الإبلاغ عن إعلان",
        body: "إذا واجهت أي إعلان مخالف أو محاولة احتيال، تواصل معنا مباشرة عبر صفحة اتصل بنا وسنتعامل مع البلاغ بسرّية تامة.",
      },
    ],
  },
  ratings: {
    title: "نظام التقييم",
    intro: "نظام تقييم شفاف يعكس مصداقية البائعين ويساعد المشترين على اتخاذ القرار المناسب.",
    sections: [
      {
        heading: "كيف يعمل التقييم؟",
        body: "بعد إتمام أي صفقة، يمكن للمشتري تقييم البائع من 1 إلى 5 نجوم مع كتابة تعليق مختصر. تظهر التقييمات في صفحة كل بائع.",
      },
      {
        heading: "معايير التقييم",
        body: [
          "دقة وصف المنتج.",
          "سرعة الرد والتواصل.",
          "الالتزام بالسعر والموعد.",
          "الاحترافية العامة في التعامل.",
        ],
      },
    ],
  },
  prohibited: {
    title: "السلع والعروض الممنوعة",
    intro: "حفاظاً على بيئة آمنة ونظامية، يُمنع نشر بعض السلع والخدمات في سوقنا.",
    sections: [
      {
        heading: "قائمة الممنوعات",
        body: [
          "المنتجات المقلّدة أو المسروقة.",
          "الأسلحة والذخائر بجميع أنواعها.",
          "الأدوية والمستحضرات الطبية غير المرخّصة.",
          "المشروبات الكحولية والتبغ الإلكتروني المخالف.",
          "العملات المشفّرة والعروض المالية غير المرخّصة.",
          "أي محتوى مخالف للأنظمة والقيم في المملكة العربية السعودية.",
        ],
      },
    ],
  },
  faq: {
    title: "الأسئلة الشائعة",
    intro: "إجابات لأكثر التساؤلات شيوعاً بين مستخدمي منصة سوقنا.",
    sections: [
      {
        heading: "هل النشر مجاني؟",
        body: "نعم، نشر الإعلانات الأساسية مجاني تماماً. تتوفر خيارات تمييز مدفوعة لزيادة ظهور إعلانك.",
      },
      {
        heading: "كيف أتواصل مع البائع؟",
        body: "من صفحة الإعلان يمكنك التواصل مباشرة عبر الواتساب أو الاتصال بالرقم المسجّل.",
      },
      {
        heading: "كم يستغرق مراجعة الإعلان؟",
        body: "غالباً يتم اعتماد الإعلانات خلال أقل من ساعة من نشرها بعد التحقق من مطابقتها للسياسات.",
      },
    ],
  },
  contact: {
    title: "اتصل بنا",
    intro: "فريق الدعم متاح لخدمتك على مدار الأسبوع.",
    sections: [
      {
        heading: "قنوات التواصل",
        body: [
          "واتساب: 0566175512",
          "البريد الإلكتروني: support@souqna.sa",
          "ساعات العمل: من السبت إلى الخميس، 9 صباحاً - 9 مساءً.",
        ],
      },
      {
        heading: "الدعم التجاري",
        body: "للشراكات والإعلانات المميزة، تواصل معنا مباشرة عبر الواتساب وسنعاود التواصل معك خلال ساعات العمل.",
      },
    ],
  },
  terms: {
    title: "شروط الاستخدام",
    intro: "باستخدامك لمنصة سوقنا فأنت توافق على الشروط والأحكام التالية.",
    sections: [
      {
        heading: "استخدام المنصة",
        body: "المنصة مخصصة لتسهيل التواصل بين البائعين والمشترين داخل المملكة العربية السعودية. لا تُعدّ المنصة طرفاً في أي صفقة تتم بين المستخدمين.",
      },
      {
        heading: "مسؤولية المستخدم",
        body: "يلتزم المستخدم بصحة المعلومات التي يقدّمها وبمطابقتها للأنظمة المعمول بها. يحق للمنصة إزالة أي إعلان مخالف دون إشعار مسبق.",
      },
      {
        heading: "التعديلات",
        body: "يحق لنا تعديل هذه الشروط في أي وقت، ويُعدّ استمرارك في استخدام المنصة موافقةً على التحديثات.",
      },
    ],
  },
  privacy: {
    title: "سياسة الخصوصية",
    intro: "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.",
    sections: [
      {
        heading: "البيانات التي نجمعها",
        body: "نجمع البيانات الضرورية فقط لتشغيل الحساب مثل الاسم والبريد الإلكتروني ورقم التواصل، إضافة إلى بيانات الإعلانات التي تنشرها.",
      },
      {
        heading: "استخدام البيانات",
        body: "تُستخدم بياناتك لتحسين تجربتك، وعرض إعلاناتك، والتواصل معك عند الحاجة. لا نبيع بياناتك لأي طرف ثالث.",
      },
      {
        heading: "حقوقك",
        body: "لك الحق في طلب تعديل أو حذف بياناتك في أي وقت عبر التواصل مع فريق الدعم.",
      },
    ],
  },
};

export const Route = createFileRoute("/page/$slug")({
  loader: ({ params }) => {
    const page = PAGES[params.slug];
    if (!page) throw notFound();
    return { page, slug: params.slug };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.page.title} - سوقنا` },
          { name: "description", content: loaderData.page.intro },
          { property: "og:title", content: `${loaderData.page.title} - سوقنا` },
          { property: "og:description", content: loaderData.page.intro },
        ]
      : [],
  }),
  component: InfoPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-3">الصفحة غير موجودة</h1>
        <Link to="/" className="text-primary underline">
          العودة للرئيسية
        </Link>
      </div>
    </SiteLayout>
  ),
});

function InfoPage() {
  const { page, slug } = Route.useLoaderData();
  const theme = THEMES[slug] ?? THEMES.faq;
  const Icon = theme.icon;

  return (
    <SiteLayout>
      <section className={`relative bg-gradient-to-br ${theme.gradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-14 md:py-20 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white mb-6"
          >
            <ChevronLeft className="w-4 h-4 rotate-180" />
            الرئيسية
          </Link>
          <div className="flex items-start gap-5 max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center shrink-0 shadow-xl">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight drop-shadow-sm">
                {page.title}
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">{page.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-3xl -mt-8 relative">
        <div className="space-y-5">
          {page.sections.map((s, i) => (
            <section
              key={i}
              className="bg-card border rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${theme.ring}`}>
                  <span className="font-bold text-sm">{i + 1}</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold">{s.heading}</h2>
              </div>
              {Array.isArray(s.body) ? (
                <ul className="space-y-3 text-foreground/80 leading-relaxed">
                  {s.body.map((line, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${theme.accent}`} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-foreground/80 leading-relaxed">{s.body}</p>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-gradient-to-br from-muted/50 to-transparent p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-base mb-1">هل تحتاج مساعدة إضافية؟</div>
            <p className="text-sm text-muted-foreground">فريقنا جاهز للرد على استفساراتك.</p>
          </div>
          <Link
            to="/page/$slug"
            params={{ slug: "contact" }}
            className="h-11 px-5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center gap-2 hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" />
            تواصل معنا
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
