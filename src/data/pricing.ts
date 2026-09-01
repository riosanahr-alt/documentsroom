import { L, type L as Loc } from "@/i18n/l";

export type PriceRow = { code: string; name: Loc; price: string };

export type FeeGroup = { id: string; title: Loc; rows: PriceRow[] };

export const FEE_GROUPS: FeeGroup[] = [
  {
    id: "uscis",
    title: L("Primary USCIS forms", "Основные формы USCIS"),
    rows: [
      { code: "I-129", name: L("Petition for a Nonimmigrant Worker", "Петиция работника-неиммигранта"), price: "$700" },
      { code: "I-129F", name: L("Petition for Alien Fiancé(e)", "Петиция за жениха/невесту (K-1)"), price: "$450" },
      { code: "I-130", name: L("Petition for Alien Relative", "Петиция за родственника"), price: "$450" },
      { code: "I-130A", name: L("Supplemental Information for Spouse Beneficiary", "Доп. информация для супруга-бенефициара"), price: "$120" },
      { code: "I-131", name: L("Travel Document / Advance Parole / U4U", "Проездной документ / Advance Parole / U4U"), price: "$250" },
      { code: "I-134", name: L("Declaration of Financial Support", "Декларация финансовой поддержки"), price: "$250" },
      { code: "I-134A", name: L("Online Declaration of Financial Support (U4U)", "Онлайн-декларация финансовой поддержки (U4U)"), price: "$200" },
      { code: "I-140", name: L("Immigrant Petition for Alien Worker", "Иммиграционная петиция работника"), price: "$900" },
      { code: "I-192", name: L("Advance Permission to Enter as Nonimmigrant", "Разрешение на въезд как неиммигрант"), price: "$900" },
      { code: "I-485", name: L("Adjust Status / Permanent Residence", "Грин-карта / Adjust Status"), price: "$650" },
      { code: "I-539", name: L("Extend/Change Nonimmigrant Status", "Продление / изменение статуса"), price: "$280" },
      { code: "I-589", name: L("Asylum and Withholding of Removal", "Убежище и Withholding of Removal"), price: "$550" },
      { code: "I-730", name: L("Refugee/Asylee Relative Petition", "Петиция родственника беженца или получившего убежище"), price: "$320" },
      { code: "I-751", name: L("Remove Conditions on Residence", "Снятие условий с грин-карты"), price: "$750" },
      { code: "I-765", name: L("Employment Authorization (EAD)", "Разрешение на работу (EAD)"), price: "$250" },
      { code: "I-821", name: L("Temporary Protected Status (TPS)", "Временный защитный статус (TPS)"), price: "$350" },
      { code: "I-824", name: L("Action on Approved Application/Petition", "Действие по одобренной заявке"), price: "$550" },
      { code: "I-864", name: L("Affidavit of Support (213A)", "Аффидевит поддержки (213A)"), price: "$450" },
      { code: "I-864A", name: L("Contract Between Sponsor and Household Member", "Договор спонсора и члена домохозяйства"), price: "$350" },
      { code: "I-864EZ", name: L("Affidavit of Support (Simplified)", "Аффидевит поддержки (упрощённый)"), price: "$220" },
      { code: "I-864W", name: L("Request for Exemption for Intending Immigrant", "Освобождение от аффидевита"), price: "$220" },
      { code: "I-90", name: L("Replace Permanent Resident Card", "Замена грин-карты"), price: "$220" },
      { code: "I-914", name: L("T Nonimmigrant Status", "Статус T"), price: "$1,100" },
      { code: "I-918", name: L("U Nonimmigrant Status", "Статус U"), price: "$1,100" },
      { code: "I-929", name: L("Qualifying Family Member of U-1", "Член семьи U-1"), price: "$900" },
      { code: "N-300", name: L("Declaration of Intention", "Декларация о намерении"), price: "$320" },
      { code: "N-400", name: L("Naturalization", "Натурализация (гражданство)"), price: "$550" },
      { code: "N-565", name: L("Replacement Naturalization/Citizenship Document", "Замена документа о натурализации"), price: "$320" },
      { code: "N-600", name: L("Certificate of Citizenship", "Сертификат гражданства"), price: "$450" },
    ],
  },
  {
    id: "supporting",
    title: L("Supporting USCIS / EOIR forms", "Вспомогательные формы USCIS / EOIR"),
    rows: [
      { code: "AR-11", name: L("Alien’s Change of Address", "Смена адреса (USCIS)"), price: "$60" },
      { code: "I-865", name: L("Sponsor’s Notice of Change of Address", "Уведомление спонсора о смене адреса"), price: "$110" },
      { code: "—", name: L("Reschedule biometrics appointment", "Перенос записи на биометрию"), price: "$40" },
      { code: "I-693", name: L("Medical Examination form (completion only)", "Медкомиссия (только заполнение формы)"), price: "$110" },
      { code: "I-907", name: L("Premium Processing Request", "Premium Processing"), price: "$280" },
      { code: "I-912", name: L("Request for Fee Waiver", "Запрос на освобождение от пошлины"), price: "$120" },
      { code: "I-942", name: L("Request for Reduced Fee", "Запрос на сниженную пошлину"), price: "$200" },
      { code: "G-639", name: L("FOIA / Privacy Act Request", "FOIA / Privacy Act"), price: "$120" },
      { code: "G-884", name: L("Return of Original Documents", "Возврат оригиналов документов"), price: "$110" },
      { code: "G-1145", name: L("e-Notification of Acceptance", "e-Notification о принятии"), price: "$35" },
      { code: "G-1450", name: L("Credit Card Authorization", "Авторизация карты"), price: "$35" },
      { code: "EOIR-33", name: L("Change of Address / Representation (Court)", "Смена адреса / представителя (суд)"), price: "$60" },
      { code: "—", name: L("Motion: Change of Venue / Consolidation", "Ходатайство: смена места / Consolidation"), price: "$250" },
    ],
  },
  {
    id: "additional",
    title: L("Additional immigration services", "Дополнительные иммиграционные услуги"),
    rows: [
      { code: "—", name: L("Form accuracy review + correction recommendations", "Проверка точности формы + рекомендации"), price: "$120" },
      { code: "—", name: L("Asylum declaration review and editing (up to 10 pp + 2 meetings)", "Редактирование декларации убежища (до 10 стр. + 2 встречи)"), price: "$400" },
      { code: "—", name: L("Additional page of asylum declaration", "Доп. страница декларации убежища"), price: "$30" },
      { code: "—", name: L("Full package assembly (cover, TOC, numbering, checklist)", "Сборка полного пакета (обложка, оглавление, нумерация)"), price: "$75" },
      { code: "—", name: L("Sponsor package for bond / release from detention", "Пакет спонсора для bond / освобождения"), price: "$280" },
      { code: "—", name: L("Support / recommendation letter", "Письмо поддержки / рекомендации"), price: "$40" },
      { code: "—", name: L("Expedite request preparation", "Подготовка expedite request"), price: "$75" },
    ],
  },
  {
    id: "translations",
    title: L("Certified translation", "Заверенный перевод"),
    rows: [
      { code: "—", name: L("Vital record (birth, marriage, divorce, death, name change)", "Свидетельство (рождение, брак, развод, смерть, смена имени)"), price: "$30–40" },
      { code: "—", name: L("Passport / military ID", "Паспорт / военный билет"), price: "$35–45" },
      { code: "—", name: L("Apostille (service)", "Апостиль (услуга)"), price: "$15" },
      { code: "—", name: L("Text document 1–10 pages (per page)", "Текстовый документ 1–10 стр. (за стр.)"), price: "$30–40" },
      { code: "—", name: L("Text document 11–25 pages (per page)", "Текстовый документ 11–25 стр. (за стр.)"), price: "$25–35" },
      { code: "—", name: L("Text document 26+ pages (per page)", "Текстовый документ 26+ стр. (за стр.)"), price: "$22–30" },
      { code: "—", name: L("Review & certification of third-party translation", "Проверка и сертификация чужого перевода"), price: "$15" },
      { code: "—", name: L("Notarization of translation", "Нотариальное заверение перевода"), price: "$15–25" },
    ],
  },
  {
    id: "admin",
    title: L("Administrative & everyday services", "Административные и бытовые услуги"),
    rows: [
      { code: "—", name: L("SSN application / appointment assistance", "Помощь с SSN / записью"), price: "$40" },
      { code: "—", name: L("DMV account / ID / driver’s license assistance", "Помощь с DMV / ID / правами"), price: "$40" },
      { code: "—", name: L("Address change (DMV / SSA / benefits)", "Смена адреса (DMV / SSA / пособия)"), price: "$30" },
      { code: "—", name: L("Bank / credit card application assistance (online)", "Помощь с открытием счёта / карты (онлайн)"), price: "$40" },
      { code: "—", name: L("LLC formation + EIN", "Регистрация LLC + EIN"), price: "$350" },
      { code: "—", name: L("Sole Proprietor registration", "Регистрация Sole Proprietor"), price: "$200" },
      { code: "—", name: L("Public benefits application (food stamps / cash assistance)", "Пособия (продуктовые талоны / денежная помощь)"), price: "$75" },
      { code: "—", name: L("USPS change of address + mail forwarding", "Смена адреса USPS + переадресация"), price: "$30" },
      { code: "—", name: L("Insurance selection / application assistance", "Помощь с выбором / оформлением страховки"), price: "$75" },
      { code: "—", name: L("USCIS-compliant photos (2 prints)", "Фото для USCIS (2 шт.)"), price: "$35" },
      { code: "—", name: L("Letter / request preparation (per page)", "Подготовка письма / запроса (за стр.)"), price: "from $60" },
      { code: "—", name: L("Consultation, 30 min (not legal advice)", "Консультация 30 мин (не юр. совет)"), price: "$75" },
      { code: "—", name: L("Written consultation (1 question, not legal advice)", "Письменная консультация (1 вопрос, не юр. совет)"), price: "$120" },
    ],
  },
  {
    id: "secretarial",
    title: L("Secretarial services", "Секретарские услуги"),
    rows: [
      { code: "—", name: L("Printing / photocopying (B&W, per page)", "Печать / ксерокопия (ч/б, за стр.)"), price: "$0.40" },
      { code: "—", name: L("Scanning (per page)", "Сканирование (за стр.)"), price: "$1.00" },
      { code: "—", name: L("Priority Mail within the U.S.", "Priority Mail по США"), price: "$40" },
      { code: "—", name: L("Typing / form completion from dictation (per page)", "Набор текста / заполнение с диктовки (за стр.)"), price: "$20" },
    ],
  },
];

export const DIVORCE_PRICES: PriceRow[] = [
  { code: "—", name: L("Uncontested packet, no minor children", "Пакет по согласию, без несовершеннолетних детей"), price: "quote" },
  { code: "—", name: L("Uncontested packet with children / property list", "Пакет по согласию с детьми / имуществом"), price: "quote" },
  { code: "—", name: L("Settlement stipulation from agreed terms", "Stipulation по уже согласованным условиям"), price: "quote" },
  { code: "—", name: L("Certified translations in the same order", "Заверенный перевод в том же заказе"), price: "translations" },
];

export const DISCOUNTS = [
  {
    title: L("Family package", "Семейный пакет"),
    text: L("−15% when the same form is prepared for two or more people.", "−15%, если одна и та же форма готовится на двоих или более человек."),
  },
  {
    title: L("Child under 18 with parent", "Ребёнок до 18 лет с родителем"),
    text: L("−10%.", "−10%."),
  },
  {
    title: L("Returning client (from $1,000)", "Постоянный клиент (от $1,000)"),
    text: L("−5%.", "−5%."),
  },
  {
    title: L("Returning client (from $2,500)", "Постоянный клиент (от $2,500)"),
    text: L("−10%.", "−10%."),
  },
];

export const RUSH = [
  { title: L("Next business day", "Следующий рабочий день"), text: "+50%" },
  { title: L("Same day", "В тот же день"), text: "+100%" },
  { title: L("Outside business hours", "Вне рабочего времени"), text: "+50%" },
  { title: L("Weekend / U.S. holiday", "Выходной / праздник США"), text: "+100%" },
  { title: L("Night (9 PM – 8 AM)", "Ночь (21:00–08:00)"), text: "+150%" },
];
