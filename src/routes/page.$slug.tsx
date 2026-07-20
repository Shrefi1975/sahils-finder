import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ChevronLeft } from "lucide-react";

type PageContent = {
  title: string;
  intro: string;
  sections: { heading: string; body: string | string[] }[];
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
    return page;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} - سوقنا` },
          { name: "description", content: loaderData.intro },
          { property: "og:title", content: `${loaderData.title} - سوقنا` },
          { property: "og:description", content: loaderData.intro },
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
  const page = Route.useLoaderData() as PageContent;

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ChevronLeft className="w-4 h-4 rotate-180" />
          الرئيسية
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{page.title}</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{page.intro}</p>

        <div className="space-y-8">
          {page.sections.map((s, i) => (
            <section key={i} className="bg-card border rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-3">{s.heading}</h2>
              {Array.isArray(s.body) ? (
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  {s.body.map((line, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
