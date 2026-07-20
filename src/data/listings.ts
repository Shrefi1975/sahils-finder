export type Condition = "جديد" | "مستعمل";

export interface Listing {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  location: string;
  date: string;
  condition: Condition;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  listings: Listing[];
}

const img = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const categories: Category[] = [
  {
    slug: "cars",
    name: "سيارات",
    icon: "🚗",
    listings: [
      { id: "c1", title: "تويوتا كامري 2022 فل كامل", price: 95000, image: img("photo-1621007947382-bb3c3994e3fb"), description: "سيارة نظيفة جداً، ماشية 40 ألف كم، فحص شامل، صيانة الوكالة.", location: "جدة", date: "2026-07-15", condition: "مستعمل" },
      { id: "c2", title: "هيونداي سوناتا 2024 جديدة", price: 115000, image: img("photo-1631295868223-63265b40d9e4"), description: "سوناتا موديل 2024 صفر، ضمان الوكالة 5 سنوات.", location: "جدة", date: "2026-07-18", condition: "جديد" },
      { id: "c3", title: "لكزس ES 350 موديل 2021", price: 165000, image: img("photo-1606664515524-ed2f786a0bd6"), description: "لكزس ES فل كامل، لون أبيض، داخلية بيج، حالة ممتازة.", location: "جدة", date: "2026-07-10", condition: "مستعمل" },
      { id: "c4", title: "نيسان باترول 2023 بلاتينيوم", price: 285000, image: img("photo-1533473359331-0135ef1b58bf"), description: "باترول بلاتينيوم، دبل، فتحة، شاشات خلفية، ممشى قليل.", location: "جدة", date: "2026-07-12", condition: "مستعمل" },
      { id: "c5", title: "مرسيدس E200 موديل 2020", price: 175000, image: img("photo-1618843479313-40f8afb4b4d8"), description: "مرسيدس E200 AMG kit، لون أسود، جلد أحمر، فل الفل.", location: "جدة", date: "2026-07-08", condition: "مستعمل" },
      { id: "c6", title: "فورد F-150 رابتر 2022", price: 320000, image: img("photo-1595758376634-42dee2a68eee"), description: "رابتر V6 تويين تيربو، حالة الوكالة، دفع رباعي.", location: "جدة", date: "2026-07-05", condition: "مستعمل" },
      { id: "c7", title: "كيا سيراتو 2024 جديدة", price: 78000, image: img("photo-1580273916550-e323be2ae537"), description: "سيراتو 2024 صفر، اقتصادية بالوقود، ضمان شامل.", location: "جدة", date: "2026-07-19", condition: "جديد" },
      { id: "c8", title: "بي إم دبليو X5 موديل 2021", price: 245000, image: img("photo-1555215695-3004980ad54e"), description: "BMW X5 فل كامل، بانوراما، دفع رباعي، حالة نظيفة.", location: "جدة", date: "2026-07-14", condition: "مستعمل" },
    ],
  },
  {
    slug: "real-estate",
    name: "عقارات",
    icon: "🏠",
    listings: [
      { id: "r1", title: "شقة 4 غرف حي الروضة", price: 750000, image: img("photo-1560518883-ce09059eeffa"), description: "شقة تمليك 180م، 4 غرف، صالة، مطبخ راكب، مدخل خاص.", location: "جدة - الروضة", date: "2026-07-16", condition: "جديد" },
      { id: "r2", title: "فيلا دورين وملحق حي الشاطئ", price: 2800000, image: img("photo-1600596542815-ffad4c1539a9"), description: "فيلا 400م، 6 غرف نوم، مسبح، حديقة، تشطيب سوبر لوكس.", location: "جدة - الشاطئ", date: "2026-07-11", condition: "جديد" },
      { id: "r3", title: "دور أرضي مع حديقة", price: 950000, image: img("photo-1568605114967-8130f3a36994"), description: "دور أرضي 250م، حديقة أمامية وخلفية، مدخلين.", location: "جدة - النعيم", date: "2026-07-09", condition: "مستعمل" },
      { id: "r4", title: "شقة مفروشة للإيجار السنوي", price: 45000, image: img("photo-1502672260266-1c1ef2d93688"), description: "شقة مفروشة بالكامل، 3 غرف، قريبة من الكورنيش.", location: "جدة - الكورنيش", date: "2026-07-17", condition: "جديد" },
      { id: "r5", title: "أرض سكنية 600م حي الحمدانية", price: 1200000, image: img("photo-1500382017468-9049fed747ef"), description: "أرض سكنية على شارعين، صك إلكتروني، موقع مميز.", location: "جدة - الحمدانية", date: "2026-07-06", condition: "جديد" },
      { id: "r6", title: "استوديو مفروش للإيجار الشهري", price: 3500, image: img("photo-1522708323590-d24dbb6b0267"), description: "استوديو مفروش بالكامل، مكيفات، انترنت، أمن 24 ساعة.", location: "جدة - الصفا", date: "2026-07-18", condition: "جديد" },
      { id: "r7", title: "محل تجاري على شارع رئيسي", price: 15000, image: img("photo-1441986300917-64674bd600d8"), description: "محل 80م، واجهة زجاجية، موقع حيوي، إيجار سنوي.", location: "جدة - التحلية", date: "2026-07-13", condition: "جديد" },
      { id: "r8", title: "دوبلكس فاخر حي الياقوت", price: 1850000, image: img("photo-1613490493576-7fde63acd811"), description: "دوبلكس 320م، تشطيب راقي، 5 غرف نوم، مصعد داخلي.", location: "جدة - الياقوت", date: "2026-07-07", condition: "جديد" },
    ],
  },
  {
    slug: "electronics",
    name: "إلكترونيات",
    icon: "💻",
    listings: [
      { id: "e1", title: "لابتوب ماك بوك برو M3 2024", price: 8500, image: img("photo-1517336714731-489689fd1ca8"), description: "MacBook Pro 14 بوصة، شريحة M3، رام 16، تخزين 512.", location: "جدة", date: "2026-07-15", condition: "جديد" },
      { id: "e2", title: "شاشة سامسونج QLED 65 بوصة", price: 4200, image: img("photo-1593359677879-a4bb92f829d1"), description: "شاشة سامسونج QLED 4K، سمارت، ضمان الوكيل.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "e3", title: "بلاي ستيشن 5 مع يدين", price: 2800, image: img("photo-1606813907291-d86efa9b94db"), description: "PS5 نسخة الديسك، مع يدين ولعبتين، بحالة ممتازة.", location: "جدة", date: "2026-07-10", condition: "مستعمل" },
      { id: "e4", title: "آيباد برو M2 12.9 بوصة", price: 5500, image: img("photo-1544244015-0df4b3ffc6b0"), description: "iPad Pro مع قلم Apple Pencil وكيبورد ماجيك.", location: "جدة", date: "2026-07-16", condition: "جديد" },
      { id: "e5", title: "كاميرا كانون R6 Mark II", price: 11500, image: img("photo-1502920917128-1aa500764cbd"), description: "كاميرا احترافية بدون مرآة، عدسة 24-105 مم.", location: "جدة", date: "2026-07-08", condition: "جديد" },
      { id: "e6", title: "سماعات سوني WH-1000XM5", price: 1450, image: img("photo-1583394838336-acd977736f90"), description: "سماعات لاسلكية بعزل ضوضاء ممتاز، بطارية 30 ساعة.", location: "جدة", date: "2026-07-14", condition: "جديد" },
      { id: "e7", title: "ساعة أبل ووتش ألترا 2", price: 3400, image: img("photo-1546868871-7041f2a55e12"), description: "Apple Watch Ultra 2 تيتانيوم، جميع الميزات.", location: "جدة", date: "2026-07-11", condition: "جديد" },
      { id: "e8", title: "طابعة HP LaserJet Pro", price: 950, image: img("photo-1612815154858-60aa4c59eaa6"), description: "طابعة ليزر ملونة، طباعة سريعة، شبكة واي فاي.", location: "جدة", date: "2026-07-09", condition: "مستعمل" },
    ],
  },
  {
    slug: "furniture",
    name: "أثاث",
    icon: "🛋️",
    listings: [
      { id: "f1", title: "طقم كنب مودرن 8 مقاعد", price: 6500, image: img("photo-1555041469-a586c61ea9bc"), description: "طقم كنب فاخر، قماش مخمل، ألوان راقية، ضمان سنة.", location: "جدة", date: "2026-07-15", condition: "جديد" },
      { id: "f2", title: "غرفة نوم ماستر كاملة", price: 8900, image: img("photo-1560448204-e02f11c3d0e2"), description: "غرفة نوم رئيسية، سرير كنق، دولاب 6 أبواب، تسريحة.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "f3", title: "طاولة طعام رخام 8 كراسي", price: 4200, image: img("photo-1615529182904-14819c35db37"), description: "طاولة طعام رخامية فاخرة مع 8 كراسي مبطنة.", location: "جدة", date: "2026-07-10", condition: "جديد" },
      { id: "f4", title: "مكتب خشب زان مع كرسي", price: 1800, image: img("photo-1580480055273-228ff5388ef8"), description: "مكتب خشبي فاخر، خشب زان طبيعي، مع كرسي جلد.", location: "جدة", date: "2026-07-16", condition: "مستعمل" },
      { id: "f5", title: "خزانة ملابس 4 أبواب", price: 2400, image: img("photo-1595428774223-ef52624120d2"), description: "دولاب ملابس واسع، 4 أبواب، مرايا، درفة سحب.", location: "جدة", date: "2026-07-08", condition: "جديد" },
      { id: "f6", title: "جلسة أرضية عربية فاخرة", price: 3800, image: img("photo-1493663284031-b7e3aefcae8e"), description: "جلسة عربية كاملة، مساند، سجاد، ذوق راقي.", location: "جدة", date: "2026-07-14", condition: "جديد" },
      { id: "f7", title: "غرفة أطفال كاملة", price: 3500, image: img("photo-1615529162924-f8605388461d"), description: "غرفة أطفال، سرير، مكتب، دولاب، ألوان زاهية.", location: "جدة", date: "2026-07-11", condition: "جديد" },
      { id: "f8", title: "طقم كراسي حديقة روطان", price: 1650, image: img("photo-1519974719765-e6559eac2575"), description: "طقم جلسة خارجية روطان، طاولة و4 كراسي مع مساند.", location: "جدة", date: "2026-07-09", condition: "جديد" },
    ],
  },
  {
    slug: "fashion",
    name: "أزياء",
    icon: "👗",
    listings: [
      { id: "fa1", title: "عباية سوداء مطرزة فاخرة", price: 850, image: img("photo-1583391733956-6c78276477e2"), description: "عباية كريب ياباني مع تطريز يدوي، مقاسات متوفرة.", location: "جدة", date: "2026-07-15", condition: "جديد" },
      { id: "fa2", title: "بدلة رجالية إيطالية", price: 1800, image: img("photo-1594938298603-c8148c4dae35"), description: "بدلة رسمية صوف إيطالي، تفصيل راقي، مقاس L.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "fa3", title: "حقيبة يد جلد طبيعي", price: 650, image: img("photo-1584917865442-de89df76afd3"), description: "حقيبة نسائية جلد طبيعي، تصميم عصري، ألوان متعددة.", location: "جدة", date: "2026-07-10", condition: "جديد" },
      { id: "fa4", title: "ساعة رجالية كلاسيكية", price: 2200, image: img("photo-1524592094714-0f0654e20314"), description: "ساعة يد رجالية، سوار جلد، مقاومة للماء.", location: "جدة", date: "2026-07-16", condition: "جديد" },
      { id: "fa5", title: "حذاء رياضي نايك جديد", price: 780, image: img("photo-1542291026-7eec264c27ff"), description: "حذاء Nike Air Max أصلي، مقاس 42، جديد بالكرتون.", location: "جدة", date: "2026-07-08", condition: "جديد" },
      { id: "fa6", title: "فستان سهرة طويل", price: 1400, image: img("photo-1566174053879-31528523f8ae"), description: "فستان سهرة فاخر، تصميم حصري، مناسب للمناسبات.", location: "جدة", date: "2026-07-14", condition: "جديد" },
      { id: "fa7", title: "نظارة شمسية ريبان أصلية", price: 950, image: img("photo-1572635196237-14b3f281503f"), description: "Ray-Ban Aviator أصلية بالفاتورة والضمان.", location: "جدة", date: "2026-07-11", condition: "جديد" },
      { id: "fa8", title: "شماغ سعودي فاخر", price: 320, image: img("photo-1591370874773-6702e8f12fd8"), description: "شماغ رجالي فاخر، قطن مصري، ألوان أحمر وأبيض.", location: "جدة", date: "2026-07-09", condition: "جديد" },
    ],
  },
  {
    slug: "jobs",
    name: "وظائف",
    icon: "💼",
    listings: [
      { id: "j1", title: "مطلوب مطور ويب Full Stack", price: 15000, image: img("photo-1522071820081-009f0129c71c"), description: "خبرة 3+ سنوات React و Node.js، دوام كامل.", location: "جدة", date: "2026-07-15", condition: "جديد" },
      { id: "j2", title: "محاسب أول - شركة كبرى", price: 12000, image: img("photo-1554224155-6726b3ff858f"), description: "خبرة 5 سنوات في المحاسبة، شهادة CPA يفضل.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "j3", title: "مندوب مبيعات ميداني", price: 7500, image: img("photo-1552664730-d307ca884978"), description: "مندوب مبيعات، رخصة قيادة، عمولات مجزية.", location: "جدة", date: "2026-07-10", condition: "جديد" },
      { id: "j4", title: "مصمم جرافيك محترف", price: 9000, image: img("photo-1626785774573-4b799315345d"), description: "خبرة في Adobe Suite، بورتفوليو قوي مطلوب.", location: "جدة", date: "2026-07-16", condition: "جديد" },
      { id: "j5", title: "طبيب أسنان عام", price: 25000, image: img("photo-1629909613654-28e377c37b09"), description: "عيادة أسنان راقية، خبرة 3 سنوات، ترخيص هيئة.", location: "جدة", date: "2026-07-08", condition: "جديد" },
      { id: "j6", title: "سائق خاص برخصة سعودية", price: 4500, image: img("photo-1449965408869-eaa3f722e40d"), description: "سائق خاص، خبرة سابقة، سكن وإقامة مكفولة.", location: "جدة", date: "2026-07-14", condition: "جديد" },
      { id: "j7", title: "مدير تسويق رقمي", price: 18000, image: img("photo-1600880292203-757bb62b4baf"), description: "إدارة حملات SEO و SEM، خبرة 5+ سنوات.", location: "جدة", date: "2026-07-11", condition: "جديد" },
      { id: "j8", title: "معلمة رياض أطفال", price: 6500, image: img("photo-1580582932707-520aed937b7b"), description: "معلمة روضة، خبرة سنتين، دبلوم تربية طفل.", location: "جدة", date: "2026-07-09", condition: "جديد" },
    ],
  },
  {
    slug: "services",
    name: "خدمات",
    icon: "🛠️",
    listings: [
      { id: "s1", title: "نقل عفش داخل وخارج جدة", price: 800, image: img("photo-1600585154340-be6161a56a0c"), description: "فك وتركيب وتغليف، عمالة مدربة، سيارات مجهزة.", location: "جدة", date: "2026-07-15", condition: "جديد" },
      { id: "s2", title: "صيانة مكيفات سبليت وشباك", price: 150, image: img("photo-1621905251189-08b45d6a269e"), description: "غسيل وصيانة وتعبئة فريون، فني معتمد.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "s3", title: "تنظيف منازل بالبخار", price: 400, image: img("photo-1581578731548-c64695cc6952"), description: "تنظيف عميق، بخار، مواد آمنة، عمالة نسائية.", location: "جدة", date: "2026-07-10", condition: "جديد" },
      { id: "s4", title: "تصوير أعراس ومناسبات", price: 3500, image: img("photo-1519741497674-611481863552"), description: "تصوير احترافي فيديو وصور، مونتاج، ألبومات.", location: "جدة", date: "2026-07-16", condition: "جديد" },
      { id: "s5", title: "تصميم مواقع وتطبيقات", price: 5000, image: img("photo-1460925895917-afdab827c52f"), description: "تصميم متجاوب، لوحة تحكم، استضافة مجانية سنة.", location: "جدة", date: "2026-07-08", condition: "جديد" },
      { id: "s6", title: "دروس خصوصية رياضيات", price: 200, image: img("photo-1509228468518-180dd4864904"), description: "معلم رياضيات، جميع المراحل، حضوري أو أونلاين.", location: "جدة", date: "2026-07-14", condition: "جديد" },
      { id: "s7", title: "سباك ومقاول تمديدات", price: 500, image: img("photo-1607472586893-edb57bdc0e39"), description: "تمديدات صحية، كشف تسربات، ضمان سنة.", location: "جدة", date: "2026-07-11", condition: "جديد" },
      { id: "s8", title: "بوفيه مفتوح للمناسبات", price: 65, image: img("photo-1555244162-803834f70033"), description: "بوفيه مفتوح متنوع للمناسبات، السعر للفرد.", location: "جدة", date: "2026-07-09", condition: "جديد" },
    ],
  },
  {
    slug: "phones",
    name: "هواتف",
    icon: "📱",
    listings: [
      { id: "p1", title: "آيفون 15 برو ماكس 256 جيجا", price: 5200, image: img("photo-1592286927505-1def25115558"), description: "iPhone 15 Pro Max لون تيتانيوم طبيعي، جديد مغلق.", location: "جدة", date: "2026-07-15", condition: "جديد" },
      { id: "p2", title: "سامسونج جالكسي S24 ألترا", price: 4700, image: img("photo-1610945415295-d9bbf067e59c"), description: "Galaxy S24 Ultra 512GB، جديد ضمان الوكيل.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "p3", title: "آيفون 14 برو مستعمل نظيف", price: 3200, image: img("photo-1678685888221-cda773a3dcdb"), description: "iPhone 14 Pro 128GB، حالة ممتازة، كرتونة كاملة.", location: "جدة", date: "2026-07-10", condition: "مستعمل" },
      { id: "p4", title: "شاومي 14 برو النسخة العالمية", price: 2800, image: img("photo-1598327105666-5b89351aff97"), description: "Xiaomi 14 Pro كاميرا لايكا، جديد بالكرتون.", location: "جدة", date: "2026-07-16", condition: "جديد" },
      { id: "p5", title: "هواوي Mate 60 Pro", price: 3500, image: img("photo-1567581935884-3349723552ca"), description: "Huawei Mate 60 Pro، كاميرا احترافية، جديد.", location: "جدة", date: "2026-07-08", condition: "جديد" },
      { id: "p6", title: "آيفون 13 مستعمل بحالة جيدة", price: 2100, image: img("photo-1632661674596-df8be070a5c5"), description: "iPhone 13 128GB، بطارية 89%، مع كفر وشاشة.", location: "جدة", date: "2026-07-14", condition: "مستعمل" },
      { id: "p7", title: "جوجل بكسل 8 برو", price: 3400, image: img("photo-1598965402089-897ce52e8355"), description: "Google Pixel 8 Pro، كاميرا AI، جديد مغلق.", location: "جدة", date: "2026-07-11", condition: "جديد" },
      { id: "p8", title: "أونر ماجيك 6 برو", price: 3100, image: img("photo-1580910051074-3eb694886505"), description: "Honor Magic 6 Pro، شاشة AMOLED، شحن سريع.", location: "جدة", date: "2026-07-09", condition: "جديد" },
    ],
  },
  {
    slug: "games",
    name: "ألعاب",
    icon: "🎮",
    listings: [
      { id: "g1", title: "جهاز PS5 Pro مع لعبتين", price: 3400, image: img("photo-1607853202273-797f1c22a38e"), description: "PlayStation 5 Pro، يدين، FIFA 25، Spider-Man.", location: "جدة", date: "2026-07-15", condition: "جديد" },
      { id: "g2", title: "إكس بوكس سيريس X", price: 2600, image: img("photo-1621259182978-fbf93132d53d"), description: "Xbox Series X، يد إضافية، Game Pass 3 شهور.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "g3", title: "نينتندو سويتش OLED", price: 1450, image: img("photo-1578303512597-81e6cc155b3e"), description: "Nintendo Switch OLED، مع Zelda وMario Kart.", location: "جدة", date: "2026-07-10", condition: "جديد" },
      { id: "g4", title: "كرسي قيمنق احترافي", price: 1200, image: img("photo-1598550476439-6847785fcea6"), description: "كرسي قيمنق RGB، جلد، مساند رقبة وظهر.", location: "جدة", date: "2026-07-16", condition: "جديد" },
      { id: "g5", title: "ستيم ديك 512 جيجا OLED", price: 2400, image: img("photo-1585620385456-4759f9b5c7d9"), description: "Steam Deck OLED، حقيبة، شاشة لمس.", location: "جدة", date: "2026-07-08", condition: "مستعمل" },
      { id: "g6", title: "طقم ألعاب PS5 (5 ألعاب)", price: 850, image: img("photo-1493711662062-fa541adb3fc8"), description: "5 ألعاب أصلية PS5: EA FC، COD، GTA وغيرها.", location: "جدة", date: "2026-07-14", condition: "مستعمل" },
      { id: "g7", title: "سماعة قيمنق HyperX Cloud", price: 480, image: img("photo-1599669454699-248893623440"), description: "سماعة احترافية للقيمنق، مايك عزل، 7.1 محيطي.", location: "جدة", date: "2026-07-11", condition: "جديد" },
      { id: "g8", title: "لوحة مفاتيح ميكانيكية RGB", price: 620, image: img("photo-1587829741301-dc798b83add3"), description: "كيبورد ميكانيكي، مفاتيح Cherry MX، إضاءة RGB.", location: "جدة", date: "2026-07-09", condition: "جديد" },
    ],
  },
  {
    slug: "other",
    name: "أخرى",
    icon: "📦",
    listings: [
      { id: "o1", title: "دراجة هوائية جبلية", price: 1400, image: img("photo-1485965120184-e220f721d03e"), description: "دراجة جبلية 27 سرعة، إطارات جديدة، حالة ممتازة.", location: "جدة", date: "2026-07-15", condition: "مستعمل" },
      { id: "o2", title: "خيمة رحلات 6 أشخاص", price: 950, image: img("photo-1504280390367-361c6d9f38f4"), description: "خيمة عائلية كبيرة، مقاومة للماء، سهلة التركيب.", location: "جدة", date: "2026-07-12", condition: "جديد" },
      { id: "o3", title: "قطة شيرازي صغيرة", price: 1800, image: img("photo-1514888286974-6c03e2ca1dba"), description: "قطة شيرازي أصلية، عمر 3 شهور، مطعمة بالكامل.", location: "جدة", date: "2026-07-10", condition: "جديد" },
      { id: "o4", title: "جهاز مشي كهربائي", price: 2200, image: img("photo-1571902943202-507ec2618e8f"), description: "جهاز مشي منزلي، شاشة LCD، قابل للطي.", location: "جدة", date: "2026-07-16", condition: "مستعمل" },
      { id: "o5", title: "آلة قهوة إسبريسو ديلونجي", price: 1800, image: img("photo-1585504198199-20277593b94f"), description: "De'Longhi أوتوماتيك، مطحنة مدمجة، ضمان.", location: "جدة", date: "2026-07-08", condition: "جديد" },
      { id: "o6", title: "لوحة فنية زيتية أصلية", price: 3200, image: img("photo-1547891654-e66ed7ebb968"), description: "لوحة زيتية أصلية لفنان معروف، إطار خشب فاخر.", location: "جدة", date: "2026-07-14", condition: "جديد" },
      { id: "o7", title: "ساعة حائط عتيقة", price: 450, image: img("photo-1524578271613-d550eacf6090"), description: "ساعة حائط أنتيك، تعمل بالبندول، حالة ممتازة.", location: "جدة", date: "2026-07-11", condition: "مستعمل" },
      { id: "o8", title: "سجاد عجمي أصلي 3×4", price: 4500, image: img("photo-1600166898405-da9535204843"), description: "سجاد عجمي يدوي أصلي، ألوان زاهية، مقاس 3×4 م.", location: "جدة", date: "2026-07-09", condition: "مستعمل" },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const allListings = categories.flatMap((c) =>
  c.listings.map((l) => ({ ...l, categorySlug: c.slug, categoryName: c.name }))
);
