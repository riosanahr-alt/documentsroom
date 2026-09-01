import { ARTICLES } from "@/data/blog";
import { SERVICES } from "@/data/services";
import { L, type L as Loc } from "@/i18n/l";

export const SITE_URL = "https://www.documentsroom.com";

export type SeoEntry = { title: Loc; description: Loc };

export const PAGE_SEO: Record<string, SeoEntry> = {
  "/": {
    title: L(
      "Immigration document preparation in New York — DOCROOM",
      "Подготовка иммиграционных документов в Нью-Йорке — DOCROOM",
    ),
    description: L(
      "USCIS forms I-130, I-485, N-400, certified translation, apostille, New York notary, NCLEX-RN. Immigration assistance service provider. Online across the U.S.",
      "Формы USCIS I-130, I-485, N-400, заверенный перевод, апостиль, нотариус Нью-Йорка, NCLEX-RN. Провайдер иммиграционной помощи. Онлайн по всей Америке.",
    ),
  },
  "/services": {
    title: L("Immigration services in New York — DOCROOM", "Иммиграционные услуги в Нью-Йорке — DOCROOM"),
    description: L(
      "USCIS form prep, certified translations, apostille, mobile notary, document recovery, RN/LPN licensing, and U.S. relocation paperwork.",
      "Подготовка форм USCIS, заверенный перевод, апостиль, нотариус на выезде, восстановление документов, лицензия RN/LPN и бумаги для переезда в США.",
    ),
  },
  "/how-it-works": {
    title: L("How document preparation works — DOCROOM", "Как мы готовим документы — DOCROOM"),
    description: L(
      "Five steps from the first message to a filing-ready packet. You give the facts. We complete the forms in English.",
      "Пять шагов от первого сообщения до пакета, готового к подаче. Вы даёте факты. Мы заполняем формы на английском.",
    ),
  },
  "/about": {
    title: L("About DOCROOM — Anastasia Rios, New York", "О DOCROOM — Anastasia Rios, Нью-Йорк"),
    description: L(
      "Anastasia Rios — paralegal, M.S. in Strategic Planning, immigration services provider, New York State Notary Public.",
      "Anastasia Rios — paralegal, магистр стратегического планирования, провайдер иммиграционных услуг, нотариус штата Нью-Йорк.",
    ),
  },
  "/faq": {
    title: L("FAQ — immigration document prep — DOCROOM", "Вопросы об иммиграционных документах — DOCROOM"),
    description: L(
      "Fees, timelines, USCIS forms, translations, notary visits, and the 3-business-day cancellation right.",
      "Стоимость, сроки, формы USCIS, переводы, выезд нотариуса и право отменить договор в течение 3 рабочих дней.",
    ),
  },
  "/pricing": {
    title: L("Fee schedule — USCIS forms, translations, notary — DOCROOM", "Прайс-лист — формы USCIS, переводы, нотариус — DOCROOM"),
    description: L(
      "I-130 $450, I-485 $650, N-400 $550, certified translations from $30. Consultation $75. Effective September 2026.",
      "I-130 $450, I-485 $650, N-400 $550, заверенный перевод от $30. Консультация $75. Действует с сентября 2026.",
    ),
  },
  "/blog": {
    title: L(
      "Immigration documents: I-130, apostille, NCLEX, N-400 — DOCROOM",
      "Иммиграционные документы: I-130, апостиль, NCLEX, N-400 — DOCROOM",
    ),
    description: L(
      "Practical notes on Form I-130, certified translation for USCIS, apostille, NCLEX-RN in New York, mobile notary, and N-400 naturalization.",
      "Разборы формы I-130, заверенного перевода для USCIS, апостиля, NCLEX-RN в Нью-Йорке, нотариуса на выезде и натурализации N-400.",
    ),
  },
  "/contact": {
    title: L("Contact DOCROOM in New York", "Контакты DOCROOM в Нью-Йорке"),
    description: L(
      "Phone 646-994-7581, WhatsApp, Telegram, email. Free 10-minute consultation. Paid consultation $75.",
      "Телефон 646-994-7581, WhatsApp, Telegram, почта. Бесплатная консультация 10 минут. Платная — $75.",
    ),
  },
  "/start": {
    title: L("Start a document request — DOCROOM", "Оставить заявку на документы — DOCROOM"),
    description: L(
      "Tell us the task. We name the scope, the fee, and the timeline before any payment.",
      "Напишите задачу. Назовём объём, стоимость и срок до любой оплаты.",
    ),
  },
  "/reviews": {
    title: L("Client reviews — DOCROOM New York", "Отзывы клиентов — DOCROOM Нью-Йорк"),
    description: L(
      "What clients say about USCIS form preparation, translations, and remote document help.",
      "Что говорят клиенты о подготовке форм USCIS, переводах и удалённой работе с документами.",
    ),
  },
  "/notices": {
    title: L("Required NYC immigration notices — DOCROOM", "Обязательные уведомления NYC — DOCROOM"),
    description: L(
      "Non-attorney disclosure, 3-day cancellation, surety bond, and advertising notice required of New York immigration assistance service providers.",
      "Уведомление «не адвокат», отмена за 3 дня, surety bond и рекламное уведомление для провайдеров иммиграционной помощи в Нью-Йорке.",
    ),
  },
  "/privacy": {
    title: L("Privacy Policy — DOCROOM", "Политика конфиденциальности — DOCROOM"),
    description: L("How DOCROOM handles the information you send us.", "Как DOCROOM обрабатывает сведения, которые вы нам передаёте."),
  },
  "/terms": {
    title: L("Terms — DOCROOM", "Условия — DOCROOM"),
    description: L("Terms of document-preparation services.", "Условия услуг по подготовке документов."),
  },
  "/disclaimer": {
    title: L("Disclaimer — DOCROOM", "Отказ от ответственности — DOCROOM"),
    description: L(
      "DOCROOM is an immigration assistance service provider, not a law firm.",
      "DOCROOM — провайдер иммиграционной помощи, не юридическая фирма.",
    ),
  },
};

const SERVICE_SEO: Record<string, SeoEntry> = {
  immigration: {
    title: L("USCIS forms I-130, I-485, N-400 — DOCROOM", "Формы USCIS I-130, I-485, N-400 — DOCROOM"),
    description: L(
      "Preparation of USCIS immigration forms from the facts you provide. I-130 family petition, I-485, N-400 naturalization. English and Russian.",
      "Подготовка иммиграционных форм USCIS по вашим сведениям. Петиция I-130 за родственника, I-485, натурализация N-400. Русский и английский.",
    ),
  },
  translations: {
    title: L("Certified translation for USCIS — DOCROOM", "Заверенный перевод документов для USCIS — DOCROOM"),
    description: L(
      "Certified translation of birth and marriage certificates, diplomas, and civil records for USCIS. Russian, Ukrainian, English.",
      "Заверенный перевод свидетельств о рождении и браке, дипломов и записей ЗАГСа для USCIS. Русский, украинский, английский.",
    ),
  },
  notary: {
    title: L("Mobile notary New York — DOCROOM", "Нотариус Нью-Йорка на выезде — DOCROOM"),
    description: L(
      "New York notary public: powers of attorney, affidavits, parental consent. Studio, home, or office visit.",
      "Нотариус штата Нью-Йорк: доверенности, заявления, согласие родителей. Кабинет, дом или офис — с выездом.",
    ),
  },
  apostille: {
    title: L("Apostille USA, Russia, Ukraine — DOCROOM", "Апостиль США, Россия, Украина — DOCROOM"),
    description: L(
      "Apostille on birth certificates, diplomas, and New York vital records. We organize the request; the government stamps the paper.",
      "Апостиль на свидетельство о рождении, диплом и записи ЗАГСа Нью-Йорка. Мы организуем запрос; штамп ставит ведомство.",
    ),
  },
  nclex: {
    title: L("NCLEX-RN New York for foreign nurses — DOCROOM", "NCLEX-RN в Нью-Йорке для иностранных медсестёр — DOCROOM"),
    description: L(
      "NYSED RN/LPN application, credential verification, Pearson VUE, ATT, and exam prep for nurses educated outside the U.S.",
      "Заявление NYSED RN/LPN, credential verification, Pearson VUE, ATT и подготовка к экзамену для медсестёр с иностранным дипломом.",
    ),
  },
  relocation: {
    title: L("How to move to the USA: documents — DOCROOM", "Как переехать в США: какие документы готовить — DOCROOM"),
    description: L(
      "Work visa, family petition, study. Diplomas, civil records, translations, and apostilles to prepare before you leave.",
      "Рабочая виза, семейная петиция, учёба. Дипломы, записи ЗАГСа, переводы и апостили — что собрать до отъезда.",
    ),
  },
  recovery: {
    title: L("Document recovery Russia, Ukraine, USA — DOCROOM", "Восстановление документов Россия, Украина, США — DOCROOM"),
    description: L(
      "Vital records, court archives, school records, police certificates. We prepare and follow the request; the agency issues the paper.",
      "ЗАГС, судебные архивы, учёба, справки о несудимости. Готовим и ведём запрос; документ выдаёт ведомство.",
    ),
  },
  delivery: {
    title: L("Document delivery USA — Russia, Ukraine, Belarus — DOCROOM", "Доставка документов США — Россия, Украина, Беларусь — DOCROOM"),
    description: L(
      "We organize sending papers between the United States and Russia, Ukraine, or Belarus.",
      "Организуем отправку бумаг между США и Россией, Украиной или Беларусью.",
    ),
  },
  divorce: {
    title: L("Uncontested divorce New York — document prep — DOCROOM", "Развод по согласию в Нью-Йорке — подготовка документов — DOCROOM"),
    description: L(
      "Uncontested divorce paperwork from the facts you both provide. English and Russian.",
      "Пакет документов для развода по взаимному согласию по вашим фактам. Английский и русский.",
    ),
  },
  expedited: {
    title: L("Rush immigration document prep — DOCROOM", "Срочная подготовка иммиграционных документов — DOCROOM"),
    description: L(
      "Same-day and next-day document preparation with posted rush fees.",
      "Подготовка в тот же или на следующий день — с прозрачной наценкой за срочность.",
    ),
  },
  other: {
    title: L("SSN, DMV, LLC — settling-in paperwork — DOCROOM", "SSN, DMV, LLC — бумаги для жизни в США — DOCROOM"),
    description: L(
      "Help with SSN, DMV, banks, insurance, and LLC formation after arrival.",
      "Помощь с SSN, DMV, банками, страховкой и регистрацией LLC после приезда.",
    ),
  },
  asylum: {
    title: L("I-589 asylum declaration editing — DOCROOM", "I-589 декларация убежища — редактирование — DOCROOM"),
    description: L(
      "Editorial and translation support for your asylum declaration. We do not invent the story.",
      "Редакторская и переводческая поддержка декларации убежища. Историю не выдумываем.",
    ),
  },
  visits: {
    title: L("Process service and marriage visit in New York — DOCROOM", "Вручение документов и регистрация брака в Нью-Йорке — DOCROOM"),
    description: L(
      "Hand-delivery of papers in New York and a marriage-ceremony visit where state law allows.",
      "Вручение документов в Нью-Йорке и выезд для регистрации брака — там, где разрешает закон штата.",
    ),
  },
};

export function seoForPath(pathname: string): SeoEntry {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (PAGE_SEO[clean]) return PAGE_SEO[clean];
  const serviceMatch = clean.match(/^\/services\/([^/]+)$/);
  if (serviceMatch && SERVICE_SEO[serviceMatch[1]]) return SERVICE_SEO[serviceMatch[1]];
  const articleMatch = clean.match(/^\/blog\/([^/]+)$/);
  if (articleMatch) {
    const a = ARTICLES.find((x) => x.slug === articleMatch[1]);
    if (a) return { title: L(`${a.title.en} — DOCROOM`, `${a.title.ru} — DOCROOM`), description: a.excerpt };
  }
  const s = SERVICES.find((x) => `/services/${x.slug}` === clean);
  if (s) return { title: L(`${s.title.en} — DOCROOM`, `${s.title.ru} — DOCROOM`), description: s.short };
  return PAGE_SEO["/"];
}

export function routeHead(path: string) {
  const s = seoForPath(path);
  return {
    meta: [{ title: s.title.en }, { name: "description", content: `${s.description.ru} ${s.description.en}` }],
  };
}

export const LOCAL_BUSINESS_JSON = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DOCROOM Document Prep",
  alternateName: "DOCROOM",
  url: SITE_URL,
  telephone: "+1-646-994-7581",
  email: "info@documentsroom.com",
  image: `${SITE_URL}/images/logo-full.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "418 Broadway, STE N",
    addressLocality: "Albany",
    addressRegion: "NY",
    postalCode: "12207",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "Country", name: "United States" },
  ],
  knowsLanguage: ["en", "ru", "uk"],
  description:
    "Immigration assistance service provider in New York. USCIS form preparation, certified translations, apostille, New York notary, NCLEX-RN licensing support.",
};
