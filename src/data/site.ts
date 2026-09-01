import { L, type L as Loc } from "@/i18n/l";
import { ADVERTISING_NOTICE } from "@/data/notices";

export const SITE = {
  name: "DOCROOM",
  legalName: "DOCROOM Document Prep",
  descriptor: L("Immigration assistance service provider", "Провайдер иммиграционной помощи"),
  tagline: L("Clear documents. A successful process.", "Понятные документы. Успешный процесс."),
  promise: L(
    "We turn bureaucratic chaos into an organized, understandable process.",
    "Мы превращаем бюрократический хаос в организованный и понятный процесс.",
  ),
  email: "info@documentsroom.com",
  phone: "646-994-7581",
  phoneHref: "tel:+16469947581",
  instagram: "@documents_room",
  instagramHref: "https://instagram.com/documents_room",
  web: "www.documentsroom.com",
  address: "418 Broadway, STE N, Albany, NY 12207",
  addressNote: L(
    "Registered mailing address — not a walk-in office. Meetings in New York by appointment.",
    "Адрес регистрации и почты — не приёмная. Встречи в Нью-Йорке по записи.",
  ),
  city: L("New York · online nationwide", "Нью-Йорк · онлайн по всей стране"),
  hours: L(
    "Monday–Friday, 10:00–18:00 ET · by appointment on weekends",
    "Понедельник–пятница, 10:00–18:00 ET · в выходные по записи",
  ),
  whatsapp: "https://wa.me/16469947581",
  telegram: "https://t.me/documents_room",
  calendly: "https://calendly.com/riosanahr/new-meeting",
  calendlyPaid: "https://calendly.com/riosanahr/new-meeting-1",
} as const;

export const DISCLAIMER = L(
  "DOCROOM Document Prep is an immigration assistance service provider. We prepare documents from the facts you provide. Government agencies make their own decisions.",
  "DOCROOM Document Prep — провайдер услуг иммиграционной помощи. Документы готовим по сведениям, которые вы предоставляете. Решения принимают государственные органы.",
);

/** Website advertising notice — keep exact statutory wording. */
export const NY_NOTICE = ADVERTISING_NOTICE;

export const NAV: { href: string; label: Loc; children?: boolean }[] = [
  { href: "/services", label: L("Services", "Услуги"), children: true },
  { href: "/how-it-works", label: L("How it works", "Как мы работаем") },
  { href: "/about", label: L("About", "О нас") },
  { href: "/faq", label: L("FAQ", "Вопросы") },
  { href: "/pricing", label: L("Pricing", "Цены") },
  { href: "/blog", label: L("Blog", "Блог") },
  { href: "/contact", label: L("Contact", "Контакты") },
];

export const FOOTER_SERVICES: { href: string; label: Loc }[] = [
  { href: "/services/immigration", label: L("Immigration forms", "Иммиграционные формы") },
  { href: "/services/relocation", label: L("How to move to the U.S.", "Как переехать в США") },
  { href: "/services/nclex", label: L("RN & LPN licensing", "RN и LPN в Нью-Йорке") },
  { href: "/services/notary", label: L("New York notary", "Нотариус Нью-Йорка") },
  { href: "/services/apostille", label: L("Apostille & translations", "Апостиль и переводы") },
  { href: "/services/recovery", label: L("Document recovery", "Восстановление документов") },
  { href: "/services/delivery", label: L("Delivery", "Доставка") },
];
