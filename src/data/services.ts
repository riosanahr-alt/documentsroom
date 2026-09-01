import { L, type L as Loc } from "@/i18n/l";

export type ProcessStep = { title: Loc; text: Loc };

export type ServiceChapter = { title: Loc; text?: Loc; items: Loc[]; href?: string; linkLabel?: Loc };

export type Service = {
  slug: string;
  title: Loc;
  short: Loc;
  kicker: Loc;
  description: Loc;
  image: string;
  helpWith: Loc[];
  clientNeeds: Loc[];
  process: ProcessStep[];
  receives: Loc[];
  faqs: { q: Loc; a: Loc }[];
  chapters?: ServiceChapter[];
  chaptersKicker?: Loc;
  chaptersTitle?: Loc;
  audience?: Loc[];
  audienceKicker?: Loc;
  closingTitle?: Loc;
  closingText?: Loc;
  disclaimer?: Loc;
  asides?: { title: Loc; text: Loc }[];
};

export const SERVICES: Service[] = [
  {
    slug: "immigration",
    title: L("Immigration document preparation", "Подготовка иммиграционных документов"),
    kicker: L("USCIS", "USCIS"),
    short: L(
      "Careful preparation of immigration forms from the information you provide — in English or Russian.",
      "Аккуратная подготовка иммиграционных форм по вашим сведениям — на английском или русском.",
    ),
    description: L(
      "We help prepare the main USCIS forms from the information you provide. You can communicate in Russian: we translate your information into English and complete the forms in accordance with the official instructions.",
      "Мы помогаем подготовить основные формы USCIS на основании предоставленной вами информации. Общаться можно на русском: мы переводим ваши сведения на английский и заполняем формы в соответствии с официальными инструкциями.",
    ),
    image: "/images/hero-desk.jpg",
    helpWith: [
      L("Family petitions and adjustment of status (I-130, I-485, I-130A)", "Семейные петиции и смена статуса (I-130, I-485, I-130A)"),
      L("Work and travel documents (I-765, I-131, I-539)", "Разрешение на работу и проездные документы (I-765, I-131, I-539)"),
      L("Affidavits of support (I-864, I-864A, I-864EZ, I-864W, I-134)", "Аффидевиты поддержки (I-864, I-864A, I-864EZ, I-864W, I-134)"),
      L("Naturalization and citizenship (N-400, N-600, N-565, N-300)", "Натурализация и гражданство (N-400, N-600, N-565, N-300)"),
      L("Asylum form I-589 (document preparation only)", "Форма убежища I-589 (только подготовка документов)"),
      L("TPS, replacement cards, motions, and address changes", "TPS, замена карт, ходатайства и смена адреса"),
    ],
    clientNeeds: [
      L("A clear description of your situation", "Понятное описание вашей ситуации"),
      L("Identity documents and prior filings, if any", "Документы личности и ранее поданные материалы, если есть"),
      L("Answers to our structured questions (Russian is welcome)", "Ответы на наши структурированные вопросы (можно по-русски)"),
      L("Payment of our preparation fee (government fees are separate)", "Оплата нашей подготовки (госпошлины отдельно)"),
    ],
    process: [
      {
        title: L("We map the paperwork", "Составляем карту бумаг"),
        text: L(
          "You tell us what you need. If you are unsure which form applies — or you are still abroad and choosing a visa path — we map the usual routes and the papers each one needs.",
          "Вы говорите, что нужно. Если не уверены, какая форма подходит — или вы ещё не в США и выбираете визовый путь — составляем карту обычных маршрутов и документов к каждому.",
        ),
      },
      {
        title: L("You answer, we prepare", "Вы отвечаете, мы готовим"),
        text: L(
          "We collect facts from you, translate when needed, and complete the forms according to the published form instructions.",
          "Собираем факты, при необходимости переводим и заполняем формы по опубликованным инструкциям к бланку.",
        ),
      },
      {
        title: L("You review and file", "Вы проверяете и подаёте"),
        text: L(
          "You receive ready files by email and, if you wish, on paper via USPS. You file yourself, or we mail the package with your written consent for an extra fee.",
          "Готовые файлы — на email и при желании на бумаге через USPS. Подаёте сами — или мы отправляем пакет с вашего письменного согласия за доплату.",
        ),
      },
    ],
    receives: [
      L("Completed forms ready for your review", "Заполненные формы для вашей проверки"),
      L("A checklist of supporting documents typically requested", "Чек-лист обычно запрашиваемых сопроводительных документов"),
      L("Filing instructions and envelope guidance, if you file yourself", "Инструкция по подаче и конверты, если подаёте сами"),
      L("Copies stored at least three years (usually five)", "Копии хранятся не менее трёх лет (обычно пять)"),
    ],
    faqs: [
      {
        q: L("Do government filing fees come with your price?", "Госпошлина входит в вашу цену?"),
        a: L(
          "No. USCIS and court fees are paid separately. We can prepare Form I-912 (fee waiver) as a separate service.",
          "Нет. Пошлины USCIS и судов оплачиваются отдельно. Форму I-912 (освобождение от пошлины) готовим как отдельную услугу.",
        ),
      },
      {
        q: L("What if I do not know which form I need?", "А если я не знаю, какая форма нужна?"),
        a: L(
          "We do not choose the path for you. When you already know the basis on which you plan to file, we can point to the matching form number, explain the packet, and quote the preparation fee from our price list.",
          "Мы не выбираем путь за вас. Когда вы уже знаете, на каком основании планируете подаваться, мы можем подсказать номер формы, объяснить структуру пакета и рассчитать стоимость подготовки по прайсу.",
        ),
      },
      {
        q: L("Do you file with USCIS for me?", "Вы подаёте в USCIS за меня?"),
        a: L(
          "You may file yourself (we give a checklist and envelopes). With your written consent we can mail the finished package for an extra fee.",
          "Можете подать сами (даём чек-лист и конверты). С вашего письменного согласия можем отправить готовый пакет за доплату.",
        ),
      },
    ],
  },
  {
    slug: "translations",
    title: L("Certified translations", "Заверенный перевод"),
    kicker: L("Russian · Ukrainian · English", "Русский · украинский · английский"),
    short: L(
      "Accurate translations of civil, identity, and supporting documents — certified, and notarized when the receiving office asks.",
      "Точный перевод гражданских, идентификационных и подтверждающих документов — заверенный, и нотариальный, если так просит принимающий орган.",
    ),
    description: L(
      "We translate birth, marriage, divorce, and education documents, passports, court papers, and personal statements. Translations are prepared for U.S. filing packages, with a certification of accuracy. The translator’s certification can be notarized. Spoken interpreting is available on request.",
      "Переводим свидетельства о рождении, браке, разводе, документы об образовании, паспорта, судебные бумаги и личные заявления. Переводы готовим для американских пакетов с сертификатом верности. Сертификат переводчика можем нотариально удостоверить. Устный перевод — по запросу.",
    ),
    image: "/images/translations.jpg",
    helpWith: [
      L("Civil status certificates (birth, marriage, divorce, death)", "Акты гражданского состояния (рождение, брак, развод, смерть)"),
      L("Passports, diplomas, transcripts, and employment letters", "Паспорта, дипломы, транскрипты и справки с работы"),
      L("Personal statements and supporting evidence", "Личные заявления и подтверждающие материалы"),
      L("Notarization of the translator’s certification when needed", "Нотариальное заверение сертификата переводчика при необходимости"),
      L("Spoken interpreting, on request", "Устный перевод — по запросу"),
    ],
    clientNeeds: [
      L("Clear scans or photos of the original (all pages, stamps, seals)", "Чёткие сканы или фото оригинала (все страницы, штампы, печати)"),
      L("The target language and intended use (USCIS, court, DMV, school)", "Язык перевода и цель (USCIS, суд, DMV, школа)"),
      L("Any prior translation you want us to review", "Предыдущий перевод, если хотите, чтобы мы его проверили"),
    ],
    process: [
      {
        title: L("Send the originals", "Пришлите оригиналы"),
        text: L(
          "Upload scans. We confirm page count, turnaround, and price before work begins.",
          "Загрузите сканы. Количество страниц, срок и цену подтверждаем до начала работы.",
        ),
      },
      {
        title: L("Translate and certify", "Перевод и заверение"),
        text: L(
          "A complete, faithful translation plus a signed certification of accuracy.",
          "Полный точный перевод и подписанный сертификат верности перевода.",
        ),
      },
      {
        title: L("Deliver", "Выдача"),
        text: L("PDF by email; paper copies and notary by appointment or mail.", "PDF на email; бумажные копии и нотариус — по записи или почтой."),
      },
    ],
    receives: [
      L("Certified translation (PDF)", "Заверенный перевод (PDF)"),
      L("Matching layout notes for stamps and seals where useful", "Пометки по штампам и печатям, где это полезно"),
      L("Optional notarized certification", "При желании — нотариально заверенный сертификат"),
    ],
    faqs: [
      {
        q: L("Which languages?", "Какие языки?"),
        a: L(
          "We work primarily between Russian, Ukrainian, and English. Other language pairs can be quoted.",
          "В основном русский, украинский и английский. Другие языковые пары — по запросу.",
        ),
      },
      {
        q: L("How fast?", "Как быстро?"),
        a: L(
          "Most civil documents are 1–3 business days. Rush options are available.",
          "Большинство гражданских документов — 1–3 рабочих дня. Есть срочные тарифы.",
        ),
      },
    ],
  },
  {
    slug: "notary",
    title: L("New York notary", "Нотариус Нью-Йорка"),
    kicker: L("New York notary", "Нотариус штата Нью-Йорк"),
    short: L(
      "New York notary — in the studio, at your home or office, and mobile across the city.",
      "Нотариус Нью-Йорка — в кабинете, у вас дома или в офисе, с выездом по городу.",
    ),
    description: L(
      "DOCROOM is a commissioned New York notary. We notarize and we come to you. We organize powers of attorney, spousal consents for real estate, parental consents for a child’s travel, statements, and certificates of life. We authenticate translator certifications. Appointments in New York; clients anywhere in the U.S. complete the rest of the file online. We notarize the document you bring, or we help you organize a standard form from your facts.",
      "DOCROOM — нотариус Нью-Йорка. Заверяем и приезжаем к вам. Организуем удостоверение доверенностей, супружеских согласий на покупку или продажу недвижимости, согласий родителей на выезд детей, заявлений и свидетельств о нахождении в живых. Удостоверяем подлинность перевода. Запись в Нью-Йорке; клиенты по всей Америке ведут остальной файл онлайн. Заверяем принесённый документ или помогаем организовать стандартный бланк по вашим фактам.",
    ),
    image: "/images/seal-docs.jpg",
    helpWith: [
      L("Mobile notary — home, office, or a place we agree", "Мобильный нотариус / нотариус на выезде — дом, офис или согласованное место"),
      L("Organization of powers of attorney (general, real estate, inheritance)", "Организация удостоверения доверенностей (обычные, на недвижимость, на наследство)"),
      L("Organization of spousal consents for the purchase or sale of real estate", "Организация супружеских согласий на покупку или продажу недвижимости"),
      L("Organization of parental consents for a child to travel abroad", "Организация согласий родителей на выезд детей за границу"),
      L("Organization of statements and affidavits", "Организация заявлений и аффидевитов"),
      L("Certificates of life (witness of being alive)", "Организация свидетельств о нахождении в живых"),
      L("Authentication of a translator’s certification", "Удостоверение подлинности перевода"),
      L("I-864 and other support affidavits — notarization of the document only", "I-864 и другие аффидевиты поддержки — только нотариальное заверение документа"),
    ],
    clientNeeds: [
      L("Valid government photo ID", "Действующий государственный документ с фото"),
      L("The unsigned document (do not sign before the notary unless instructed)", "Неподписанный документ (не подписывайте заранее, если не сказали иначе)"),
      L("An appointment", "Запись"),
    ],
    process: [
      {
        title: L("We come to you, or you come in", "Приезжаем к вам — или вы к нам"),
        text: L(
          "Studio by appointment, or a mobile visit to your home or office. Travel is quoted before we book.",
          "Кабинет по записи или выезд домой / в офис. Командировку и выезд по городу согласуем до поездки.",
        ),
      },
      {
        title: L("Appear with ID", "Приходите с ID"),
        text: L("Sign in the notary’s presence. We complete the notarial certificate.", "Подписываете в присутствии нотариуса. Мы заполняем нотариальный сертификат."),
      },
      {
        title: L("Collect", "Получение"),
        text: L("Take the original with you, or we include it in your filing package.", "Забираете оригинал с собой или включаем его в пакет подачи."),
      },
    ],
    receives: [
      L("Completed notarial certificate", "Оформленный нотариальный сертификат"),
      L("Optional scans of the notarized set", "При желании — сканы заверенного комплекта"),
    ],
    faqs: [
      {
        q: L("Do you travel to me?", "Вы приезжаете?"),
        a: L(
          "Yes. Mobile notary in New York — home or office — by appointment. Travel is quoted before we set the time.",
          "Да. Мобильный нотариус в Нью-Йорке — дом или офис — по записи. Выезд согласуем до назначения времени.",
        ),
      },
      {
        q: L("Do you notarize blank forms?", "Заверяете пустые бланки?"),
        a: L("No. The document must be complete, and you must appear with proper ID.", "Нет. Документ должен быть заполнен, и вы должны явиться с надлежащим ID."),
      },
    ],
  },
  {
    slug: "apostille",
    title: L("Apostille services", "Апостиль"),
    kicker: L("Hague Convention documents", "Документы Гаагской конвенции"),
    short: L(
      "Apostille and legalization — in the United States and abroad. We organize the request; the government stamps the document.",
      "Апостиль и легализация — в США и за границей. Мы организуем запрос; штамп ставит государственный орган.",
    ),
    description: L(
      "We help you assemble the correct originals, identify the competent authority in the U.S. or overseas, and track the apostille or chain authentication. We do not issue apostilles ourselves. Government fees and foreign-office queues are separate from our coordination fee.",
      "Помогаем собрать нужные оригиналы, определить компетентный орган в США или за границей и отследить апостиль или цепочку легализации. Апостиль сами не ставим. Госпошлины и очереди иностранных ведомств — отдельно от нашей координации.",
    ),
    image: "/images/seal-docs.jpg",
    helpWith: [
      L("Apostille of U.S. documents for use abroad", "Оформление апостиля на документы США для использования за границей"),
      L("Apostille or legalization of foreign documents for use in the U.S.", "Апостиль или легализация иностранных документов для США"),
      L("U.S. vital records and notarized documents destined overseas", "Американские акты и нотариальные документы для использования за границей"),
      L("Chain authentication when an apostille is not available", "Цепочка легализации, если апостиль недоступен"),
    ],
    clientNeeds: [
      L("Original documents (or certified copies, depending on the issuer)", "Оригиналы (или заверенные копии — в зависимости от органа)"),
      L("The destination country", "Страна назначения"),
      L("Timeframe — apostilles have their own government queues", "Срок — у апостиля свои государственные очереди"),
    ],
    process: [
      {
        title: L("Review the set", "Смотрим комплект"),
        text: L("We confirm which documents actually require an apostille.", "Подтверждаем, каким документам апостиль действительно нужен."),
      },
      {
        title: L("Submit", "Подаём"),
        text: L(
          "We prepare the request to the competent authority or walk you through self-filing.",
          "Готовим запрос в компетентный орган или проводим вас через самостоятельную подачу.",
        ),
      },
      {
        title: L("Return", "Возврат"),
        text: L("You receive the apostilled originals plus scans.", "Получаете оригиналы с апостилем и сканы."),
      },
    ],
    receives: [
      L("A clear list of what will be apostilled", "Понятный список того, что идёт на апостиль"),
      L("Tracking of the government request", "Отслеживание государственного запроса"),
      L("Scans of the finished set", "Сканы готового комплекта"),
    ],
    faqs: [
      {
        q: L("Do you stamp the apostille in-house?", "Вы ставите апостиль сами?"),
        a: L(
          "No. Apostilles are issued by government authorities. We prepare and coordinate.",
          "Нет. Апостиль выдают государственные органы. Мы готовим и координируем.",
        ),
      },
    ],
  },
  {
    slug: "expedited",
    title: L("Expedited filing", "Срочное оформление"),
    kicker: L("Same day · next day", "В тот же день · на следующий"),
    short: L(
      "Priority preparation when a deadline is close — with transparent rush fees, not last-minute chaos.",
      "Приоритетная подготовка, когда срок близко — с прозрачной наценкой, а не с хаосом в последний момент.",
    ),
    description: L(
      "When you need the paperwork sooner, we re-order the queue and confirm a realistic deadline before you pay. Rush work still follows the same accuracy standard.",
      "Если бумаги нужны раньше, мы перестраиваем очередь и подтверждаем реалистичный срок до оплаты. Срочная работа идёт с тем же стандартом точности.",
    ),
    image: "/images/hero-desk.jpg",
    helpWith: [
      L("Same-day preparation when capacity allows (+100%)", "Подготовка в тот же день при наличии слота (+100%)"),
      L("Next-business-day preparation (+50%)", "Подготовка на следующий рабочий день (+50%)"),
      L("Evening work after 21:00 ET (+150%)", "Вечерняя работа после 21:00 ET (+150%)"),
      L("Weekend and holiday preparation (+100%)", "Выходные и праздники (+100%)"),
    ],
    clientNeeds: [
      L("All facts and scans when you request rush service", "Все факты и сканы в момент запроса срочности"),
      L("A reachable phone number for clarifying questions", "Доступный телефон для уточнений"),
      L("Acceptance of the rush surcharge before we start", "Согласие на наценку до начала работы"),
    ],
    process: [
      {
        title: L("We confirm capacity", "Подтверждаем слот"),
        text: L("Rush is never promised blindly. You get a written turnaround first.", "Срочность никогда не обещаем вслепую. Сначала письменный срок."),
      },
      {
        title: L("You send everything at once", "Вы присылаете всё сразу"),
        text: L("Missing pages are what break rush timelines.", "Именно недостающие страницы ломают срочные сроки."),
      },
      {
        title: L("Priority desk", "Приоритетный стол"),
        text: L("The package is prepared, reviewed, and returned on the agreed clock.", "Пакет готовится, проверяется и возвращается в согласованный срок."),
      },
    ],
    receives: [
      L("A locked delivery window", "Зафиксированное окно выдачи"),
      L("The same completed files you would receive on a standard timeline", "Те же готовые файлы, что и в обычном графике"),
    ],
    faqs: [
      {
        q: L("Can every form be same-day?", "Любую форму можно сделать в тот же день?"),
        a: L(
          "No. Complex packages and anything requiring a notary or apostille follow their own limits. We will say so immediately.",
          "Нет. Сложные пакеты и всё, что требует нотариуса или апостиля, идут по своим срокам. Мы скажем это сразу.",
        ),
      },
    ],
  },
  {
    slug: "other",
    title: L("Adaptation & other documents", "Адаптация и другие документы"),
    kicker: L("Life in the U.S.", "Жизнь в США"),
    short: L(
      "Help with the practical paperwork of settling in — banks, SSA, DMV, insurance, business, and records from home.",
      "Помощь с практическими бумагами для обустройства — банки, SSA, DMV, страховка, бизнес и документы из страны исхода.",
    ),
    description: L(
      "Beyond immigration forms, we help Russian-speaking clients assemble the documents needed for everyday life and small business in the United States, and we can work with records from Russia and neighboring countries.",
      "Помимо иммиграционных форм помогаем русскоязычным клиентам собрать документы для повседневной жизни и малого бизнеса в США, а также работаем с бумагами из России и соседних стран.",
    ),
    image: "/images/nyc-stoop.jpg",
    helpWith: [
      L("SSA, DMV, driver license, insurance, and benefit paperwork", "SSA, DMV, водительские права, страховка и пособия"),
      L("Bank and address-change packages", "Банковские пакеты и смена адреса"),
      L("Business registration support (document preparation)", "Регистрация бизнеса (подготовка документов)"),
      L("Tax records and certificates from Russia (including 3-NDFL assistance)", "Налоговые справки из России (в том числе помощь с 3-НДФЛ)"),
      L("Scanning, storage, and re-issue of your copies (kept at least 5 years)", "Сканирование, хранение и повторная выдача копий (не менее 5 лет)"),
    ],
    clientNeeds: [
      L("The agency or office you need to deal with", "Ведомство или офис, с которым нужно иметь дело"),
      L("Existing letters, IDs, and account numbers", "Имеющиеся письма, ID и номера счетов"),
      L("A preferred language for explanations", "Предпочтительный язык объяснений"),
    ],
    process: [
      {
        title: L("Name the task", "Назовите задачу"),
        text: L(
          "“I need a bank package,” “I need an SSN appointment set,” or similar.",
          "«Нужен банковский пакет», «нужна запись на SSN» — или похожее.",
        ),
      },
      {
        title: L("We assemble", "Собираем"),
        text: L("Forms, cover notes, and a checklist in plain language.", "Формы, сопроводительные заметки и чек-лист простым языком."),
      },
      {
        title: L("You walk in prepared", "Вы приходите готовыми"),
        text: L("Or we complete the online filing with you.", "Или вместе проходим онлайн-подачу."),
      },
    ],
    receives: [
      L("Completed forms and a simple checklist", "Заполненные формы и простой чек-лист"),
      L("Optional accompaniment notes for in-person visits in New York", "При желании — памятка к личному визиту в Нью-Йорке"),
    ],
    faqs: [
      {
        q: L("What is this, exactly?", "Что это, собственно?"),
        a: L("Document preparation and practical orientation — SSA, DMV, banks, everyday American papers.", "Подготовка документов и практические пояснения — SSA, DMV, банки, повседневные американские бумаги."),
      },
    ],
  },
  {
    slug: "divorce",
    title: L("Uncontested divorce", "Развод по согласию"),
    kicker: L("New York · document preparation", "Нью-Йорк · подготовка документов"),
    short: L(
      "We prepare the uncontested-divorce paperwork from the facts you both provide — clearly, in English and Russian.",
      "Готовим пакет документов для развода по взаимному согласию по вашим фактам — ясно, на английском и русском.",
    ),
    description: L(
      "When both spouses agree on the terms, we assemble the New York uncontested-divorce forms from the information you give us: summons and complaint, affidavits, a settlement stipulation, and the judgment papers typically used in an uncontested filing. We translate between Russian and English when needed. We do not represent anyone in court, we do not negotiate terms, and we do not advise on custody, support, or property. If the matter is contested, we will say so early and you will need an attorney.",
      "Когда оба супруга согласны с условиями, мы собираем нью-йоркские формы uncontested divorce по вашим сведениям: summons и complaint, аффидевиты, соглашение (stipulation) и бумаги judgment, которые обычно входят в бесспорную подачу. При необходимости переводим с русского на английский и обратно. Мы никого не представляем в суде, не ведём переговоры и не консультируем по опеке, алиментам или имуществу. Если дело спорное — скажем это сразу: понадобится адвокат.",
    ),
    image: "/images/consult-hands.jpg",
    helpWith: [
      L("New York uncontested divorce packet (UD series and related forms)", "Пакет нью-йоркского uncontested divorce (серия UD и смежные формы)"),
      L("Settlement stipulation drafted from the terms you already agreed on", "Stipulation / соглашение — по условиям, о которых вы уже договорились"),
      L("Affidavits, summons, complaint, and judgment papers for your review", "Аффидевиты, summons, complaint и judgment — на вашу проверку"),
      L("Russian–English translation of civil documents in the same order", "Русско-английский перевод гражданских документов в том же заказе"),
      L("A filing checklist and envelope guidance if you file yourselves", "Чек-лист подачи и конверты, если подаёте сами"),
    ],
    clientNeeds: [
      L("Both spouses agree on the terms — this service is only for uncontested matters", "Согласие обоих супругов — услуга только для бесспорных дел"),
      L("Marriage certificate and identity documents", "Свидетельство о браке и документы личности"),
      L("A clear written list of what you have already agreed (children, support, property, name)", "Письменный список уже согласованного (дети, содержание, имущество, фамилия)"),
      L("Addresses, dates, and prior court or immigration papers if any", "Адреса, даты и ранее поданные судебные или иммиграционные бумаги, если есть"),
    ],
    process: [
      {
        title: L("We confirm it is uncontested", "Подтверждаем, что развод бесспорный"),
        text: L(
          "If there is a dispute, we stop. Document preparation is not a substitute for counsel.",
          "Если есть спор — останавливаемся. Подготовка документов не заменяет адвоката.",
        ),
      },
      {
        title: L("You give the facts", "Вы даёте факты"),
        text: L(
          "Structured questions in Russian or English. We do not invent terms you have not agreed.",
          "Структурированные вопросы на русском или английском. Мы не придумываем условия, о которых вы не договаривались.",
        ),
      },
      {
        title: L("You review, then file", "Вы проверяете, затем подаёте"),
        text: L(
          "Ready PDFs by email, optional paper via USPS. Court fees are paid by you to the court.",
          "Готовые PDF на email, при желании бумага через USPS. Судебные пошлины вы платите суду сами.",
        ),
      },
    ],
    receives: [
      L("A complete uncontested-divorce set for your review", "Полный комплект uncontested divorce для вашей проверки"),
      L("A plain-language checklist of typical next steps at the clerk’s office", "Простой чек-лист типичных шагов в канцелярии суда"),
      L("Optional certified translations of supporting civil documents", "При желании — заверенный перевод подтверждающих гражданских документов"),
      L("Copies stored at least three years (usually five)", "Копии хранятся не менее трёх лет (обычно пять)"),
    ],
    faqs: [
      {
        q: L("Do you go to court with us?", "Вы идёте с нами в суд?"),
        a: L(
          "We prepare the uncontested packet. You file.",
          "Готовим пакет развода по согласию. Подаёте вы.",
        ),
      },
      {
        q: L("What if we do not agree on everything?", "А если мы согласны не во всём?"),
        a: L(
          "Then this is not an uncontested matter. We will not prepare a contested case. You will need legal counsel.",
          "Тогда это не развод по согласию. Спорное дело мы не готовим. Нужен юридический представитель.",
        ),
      },
      {
        q: L("Does the price include the court fee?", "Цена включает судебную пошлину?"),
        a: L(
          "No. Court filing fees are paid separately to the court. We quote our preparation fee before work starts.",
          "Нет. Пошлина суда оплачивается отдельно. Нашу подготовку называем до начала работы.",
        ),
      },
    ],
  },
  {
    slug: "asylum",
    title: L("Personal statements for immigration cases", "Личные заявления по иммиграционным делам"),
    kicker: L("Language · structure · truth", "Язык · структура · правда"),
    short: L(
      "Editorial and translation support for your real story — never invented, never coached as a legal claim.",
      "Редакторская и переводческая поддержка вашей настоящей истории — без вымысла и без «натаскивания» на юридический иск.",
    ),
    description: L(
      "If you are filing Form I-589 or another package that needs a written personal explanation, we help you present your actual account clearly. We provide linguistic, technical, and editorial support within New York law and federal immigration rules. We do not create stories, invent facts, or evaluate the legal merits of a claim.",
      "Если вы подаёте форму I-589 или другой пакет, где нужно письменное личное объяснение, мы помогаем ясно изложить ваш действительный рассказ. Оказываем языковую, техническую и редакторскую поддержку в рамках права Нью-Йорка и федеральных иммиграционных правил. Мы не создаём истории, не выдумываем факты и не оцениваем юридические перспективы заявления.",
    ),
    image: "/images/consult-hands.jpg",
    helpWith: [
      L("Logical structure of a written narrative you already have", "Логическая структура уже имеющегося у вас текста"),
      L("Spelling, punctuation, and stylistic editing", "Орфография, пунктуация и стилистическая правка"),
      L("Notes on gaps so you can add missing facts yourself", "Пометки о пробелах, чтобы вы сами добавили недостающие факты"),
      L("Translation of your text from Russian to English", "Перевод вашего текста с русского на английский"),
      L(
        "Verbatim transcription of audio (up to quoted lengths) and alignment with typical USCIS narrative form",
        "Дословная расшифровка аудио (в оговорённом объёме) и приведение к типичной форме повествования USCIS",
      ),
    ],
    clientNeeds: [
      L("Your own facts — written or recorded", "Ваши собственные факты — письменно или в записи"),
      L(
        "Understanding that false statements in immigration filings are a serious offense",
        "Понимание, что ложные сведения в иммиграционных заявлениях — серьёзное правонарушение",
      ),
      L("Time for 1–3 business days (text) or 3–5 business days (audio)", "Срок 1–3 рабочих дня (текст) или 3–5 рабочих дней (аудио)"),
    ],
    process: [
      {
        title: L("Send the source", "Пришлите исходник"),
        text: L("Text or audio, in any convenient format.", "Текст или аудио в удобном формате."),
      },
      {
        title: L("Scope and fee", "Объём и стоимость"),
        text: L("We confirm length, turnaround, and price before work starts.", "Длину, срок и цену подтверждаем до начала работы."),
      },
      {
        title: L("You receive a clean file", "Вы получаете чистый файл"),
        text: L(
          "Word/PDF ready to place in your package, without further editorial work.",
          "Word/PDF, готовый к вложению в пакет, без дальнейшей редактуры.",
        ),
      },
    ],
    receives: [
      L("Edited and/or translated narrative as a Word/PDF file", "Отредактированный и/или переведённый текст в Word/PDF"),
      L("A document that reflects your facts, not ours", "Документ, в котором ваши факты, а не наши"),
    ],
    faqs: [
      {
        q: L("Will you write the story from scratch?", "Вы напишете историю с нуля?"),
        a: L(
          "No. We do not manufacture histories, invent facts, or create circumstances that did not happen. If someone offers to “invent” a claim, that is unlawful and can harm the case.",
          "Нет. Мы не сочиняем биографии, не выдумываем факты и не создаём обстоятельства, которых не было. Если кто-то предлагает «придумать» заявление — это противозаконно и может навредить делу.",
        ),
      },
      {
        q: L("What does it cost?", "Сколько это стоит?"),
        a: L(
          "Editing is $95 per page. Translation is $25 per page. Transcription and editing of audio up to 10 minutes is $135. A full package up to 6 pages is $500. Individual quotes are available.",
          "Редактура — $95 за страницу. Перевод — $25 за страницу. Расшифровка и правка аудио до 10 минут — $135. Полный пакет до 6 страниц — $500. Возможен индивидуальный расчёт.",
        ),
      },
    ],
  },
  {
    slug: "recovery",
    title: L("Document recovery", "Восстановление документов"),
    kicker: L("Archives · vital records · CIS & U.S.", "Архивы · ЗАГС · СНГ и США"),
    short: L(
      "We organize requests for lost or missing papers — vital records, court archives, school records, police certificates, and pension files. Agencies issue them; we prepare and follow the request.",
      "Организуем запросы на утраченные бумаги — акты ЗАГС, судебные архивы, учёба, справки о несудимости, пенсионные дела. Документ выдаёт ведомство; мы готовим и ведём запрос.",
    ),
    description: L(
      "When a certificate is missing, we do not print a replacement. We organize the request to the right archive or vital-records office — in Russia, Ukraine and other CIS countries, in New York City, and in every U.S. state that will accept a third-party request. Court archives, schools, police-clearance (no-criminal-record) certificates, certificates of life for a pension fund, and pension paperwork are in the same desk. Timelines belong to the issuing office.",
      "Если свидетельства нет, мы не печатаем дубликат. Организуем запрос в нужный архив или ЗАГС — в России, Украине и других странах СНГ, в Нью-Йорке и во всех штатах США, куда можно подать запрос через представителя. Судебные архивы, учебные заведения, справки об отсутствии судимости, свидетельство о нахождении в живых для пенсионного фонда и пенсионные документы — тот же кабинет. Сроки принадлежат выдающему органу.",
    ),
    image: "/images/nyc-stoop.jpg",
    helpWith: [
      L("Vital records from Russia, Ukraine, and other CIS countries", "Восстановление документов ЗАГС (Россия, Украина и другие страны СНГ)"),
      L("New York City vital records", "Восстановление актов гражданского состояния в Нью-Йорке"),
      L("Vital records from every U.S. state that accepts the request", "Восстановление актов гражданского состояния во всех штатах США"),
      L("Court-archive documents — Russia, Ukraine, New York, and other U.S. states", "Документы из архивов судов (Россия, Украина, Нью-Йорк и другие штаты США)"),
      L("Records from schools and universities — Russia, Ukraine, the U.S.", "Документы из учебных заведений (Россия, Украина, США)"),
      L("Police certificates / certificates of no criminal record", "Справки об отсутствии судимости"),
      L("Certificate of life for a pension fund", "Свидетельство о факте нахождения в живых для пенсионного фонда"),
      L("Pension paperwork", "Пенсионные документы"),
    ],
    clientNeeds: [
      L("Full name as it appears on the original, with variants", "ФИО как в оригинале, плюс варианты написания"),
      L("Dates, places, and any old certificate numbers you still have", "Даты, места и старые номера свидетельств, если сохранились"),
      L("A signed authorization if the archive requires a representative", "Подписанное полномочие, если архив работает через представителя"),
      L("Patience for government and archive queues — we will say the real range", "Готовность к очередям ведомств — назовём реальный диапазон срока"),
    ],
    process: [
      {
        title: L("We name the archive", "Называем архив"),
        text: L(
          "You describe what is missing. We list the offices that typically hold that record.",
          "Вы описываете, чего не хватает. Перечисляем органы, где такая запись обычно хранится.",
        ),
      },
      {
        title: L("You authorize the request", "Вы уполномочиваете запрос"),
        text: L(
          "We prepare the forms from your facts. You review and sign what the archive requires.",
          "Готовим бланки по вашим фактам. Вы проверяете и подписываете то, что требует архив.",
        ),
      },
      {
        title: L("We follow, then you receive", "Ведём запрос — вы получаете"),
        text: L(
          "We track the office. The original comes to you — or we hold it for the next step (apostille, translation, notary).",
          "Отслеживаем ведомство. Оригинал приходит вам — или держим его для следующего шага (апостиль, перевод, нотариус).",
        ),
      },
    ],
    receives: [
      L("A written list of offices and fees before work starts", "Письменный список органов и пошлин до начала работы"),
      L("Prepared request forms for your signature", "Подготовленные бланки запроса на вашу подпись"),
      L("Tracking until the archive responds", "Сопровождение до ответа архива"),
    ],
    faqs: [
      {
        q: L("Do you print a new certificate yourselves?", "Вы сами печатаете новое свидетельство?"),
        a: L(
          "No. Only the issuing office can do that. We organize a lawful request and follow it.",
          "Нет. Это делает только выдающий орган. Мы организуем законный запрос и ведём его.",
        ),
      },
      {
        q: L("How long does an archive take?", "Сколько ждать архив?"),
        a: L(
          "From a few weeks to several months, depending on the country and the year of the record. We quote a range before you pay.",
          "От нескольких недель до нескольких месяцев — зависит от страны и года записи. Диапазон называем до оплаты.",
        ),
      },
    ],
  },
  {
    slug: "delivery",
    title: L("Document delivery", "Доставка документов"),
    kicker: L("U.S. · Russia · Ukraine · Belarus", "США · Россия · Украина · Беларусь"),
    short: L(
      "We organize the sending of papers between the United States and Russia, Ukraine, or Belarus.",
      "Организуем отправку бумаг между США и Россией, Украиной или Беларусью.",
    ),
    description: L(
      "Cross-border envelopes go missing when the contents, the customs declaration, and the carrier are not matched. We organize document delivery from the U.S. to Russia, Ukraine, and Belarus, and the other way.",
      "Международные конверты теряются, когда содержимое, декларация и перевозчик не совпадают. Организуем доставку документов из США в Россию, Украину и Беларусь — и обратно.",
    ),
    image: "/images/nyc-stoop.jpg",
    helpWith: [
      L("Document delivery, U.S. → Russia / Ukraine / Belarus", "Доставка документов из США в Россию, Украину, Беларусь"),
      L("Document delivery, Russia / Ukraine / Belarus → the U.S.", "Доставка документов из России, Украины, Беларуси в США"),
    ],
    clientNeeds: [
      L("The exact contents and whether originals must stay intact", "Точный состав отправления и можно ли вскрывать конверт"),
      L("Sender and recipient names, addresses, and phones", "ФИО, адреса и телефоны отправителя и получателя"),
    ],
    process: [
      {
        title: L("We name the route", "Называем маршрут"),
        text: L(
          "You tell us what travels and where. We confirm a carrier and a realistic window.",
          "Вы говорите, что едет и куда. Подтверждаем перевозчика и реалистичное окно.",
        ),
      },
      {
        title: L("Pack and declare", "Упаковка и декларация"),
        text: L(
          "We prepare the inventory and the paperwork the border asks for. You review before it leaves.",
          "Готовим опись и бумаги, которые просит граница. Вы смотрите до отправки.",
        ),
      },
      {
        title: L("Track until receipt", "Трекинг до получения"),
        text: L("You receive tracking and a confirmation when it is in hand.", "Вы получаете трекинг и подтверждение, когда отправление на руках."),
      },
    ],
    receives: [
      L("A written route and carrier quote before anything ships", "Письменный маршрут и расчёт перевозчика до отправки"),
      L("Tracking", "Трекинг"),
      L("Confirmation of delivery", "Подтверждение вручения"),
    ],
    faqs: [
      {
        q: L("Do you fly the package yourselves?", "Вы сами везёте конверт?"),
        a: L(
          "No. We organize a suitable carrier and the paperwork. Airlines and posts move the item.",
          "Нет. Мы организуем подходящего перевозчика и бумаги. Сам груз везут авиакомпания или почта.",
        ),
      },
    ],
  },
  {
    slug: "visits",
    title: L("Process service & ceremony visits", "Вручение и выездная регистрация"),
    kicker: L("New York · by appointment", "Нью-Йорк · по записи"),
    short: L(
      "Hand-delivery of papers in New York, and a marriage-ceremony visit at home, a hospital, or a nursing home — where New York law allows.",
      "Вручение документов в Нью-Йорке и выезд для регистрации брака — дом, больница, дом престарелых — там, где это разрешает закон штата.",
    ),
    description: L(
      "Two practical visits — no theater. Process service: we deliver papers in person within New York. If the matter requires a licensed process server, we arrange one — we do not pretend a license we do not hold. Marriage ceremonies: we organize the paperwork and can come to you at home, a hospital, or a nursing home, where New York law allows an officiant to attend.",
      "Два практических выезда — без лишнего. Вручение документов (process service) лично в пределах Нью-Йорка. Если делу нужен лицензированный process server — организуем его; чужую лицензию не приписываем. Регистрация брака: организуем бумаги и можем приехать домой, в больницу или дом престарелых, если закон Нью-Йорка позволяет присутствие officiant.",
    ),
    image: "/images/consult-hands.jpg",
    helpWith: [
      L("In-person delivery of papers in New York (process service)", "Вручение документов в пределах Нью-Йорка (process service)"),
      L("Marriage-ceremony visit — home, hospital, or nursing home", "Регистрация брака с выездом к клиенту (дом, больница, дом престарелых)"),
    ],
    clientNeeds: [
      L("The papers to be served, or the marriage documents already in hand", "Бумаги для вручения или уже собранные документы для брака"),
      L("Address, a window of time, and who must be present", "Адрес, окно времени и кто должен присутствовать"),
      L("For a ceremony: what New York currently requires of the officiant and the couple", "Для регистрации: что Нью-Йорк сейчас требует от officiant и пары"),
    ],
    process: [
      {
        title: L("We confirm it is possible", "Подтверждаем, что это возможно"),
        text: L(
          "Some deliveries and some ceremonies need a specific license. We say so before you pay.",
          "Для части вручений и церемоний нужна отдельная лицензия. Скажем это до оплаты.",
        ),
      },
      {
        title: L("We set the visit", "Назначаем выезд"),
        text: L("A written time, address, and fee — including travel.", "Письменные время, адрес и стоимость, включая дорогу."),
      },
      {
        title: L("We attend, then you receive the proof", "Приезжаем — вы получаете подтверждение"),
        text: L(
          "An affidavit of service, or the signed ceremony papers, as the task requires.",
          "Аффидевит вручения или подписанные бумаги церемонии — как требует задача.",
        ),
      },
    ],
    receives: [
      L("A written scope before the visit", "Письменный объём до выезда"),
      L("Proof of delivery or ceremony papers", "Подтверждение вручения или бумаги церемонии"),
    ],
    faqs: [
      {
        q: L("Are you a licensed NYC process server?", "Вы лицензированный process server Нью-Йорка?"),
        a: L(
          "If the job legally requires that license, we arrange a licensed server. We will tell you which case is which before you pay.",
          "Если закону нужна эта лицензия, организуем лицензированного сервера. Какой случай какой — скажем до оплаты.",
        ),
      },
    ],
  },
  {
    slug: "nclex",
    title: L("RN & LPN licensing in New York", "Сопровождение RN и LPN в Нью-Йорке"),
    kicker: L("Nursing licensing assistance", "Лицензирование медсестёр"),
    short: L(
      "Foreign nursing education, or a license already held in another state. We organize the New York file — application, verification, NCLEX — and we stay with you through the exam, including preparation.",
      "Сестринское образование за пределами США или лицензия в другом штате. Организуем нью-йоркский файл — заявление, verification, NCLEX — и сопровождаем до экзамена, включая подготовку к нему.",
    ),
    description: L(
      "You trained as a nurse outside the United States, or you already hold an RN or LPN license in another state. DOCROOM helps you through the path to an RN or LPN license in New York — from the first reading of your papers to the NYSED application, credential verification, NCLEX registration, and preparation for the exam. We do not leave you with a list of forms. We organize the sequence and stay with you until you sit the test.",
      "Вы получили сестринское образование за пределами США или уже имеете nursing license в другом штате. DOCROOM помогает пройти процесс получения RN или LPN license в New York State — от первичного разбора документов до подачи заявлений, credential verification, регистрации на NCLEX и подготовки к экзамену. Мы не оставляем вас со списком форм. Мы организуем последовательность и сопровождаем до экзамена.",
    ),
    image: "/images/consult-hands.jpg",
    helpWith: [
      L("RN and LPN applications with NYSED", "Заявления RN и LPN в NYSED"),
      L("Credential verification for foreign nursing education", "Подтверждение иностранного сестринского образования"),
      L("NCLEX-RN and NCLEX-PN registration", "Регистрация на NCLEX-RN и NCLEX-PN"),
      L("Help through to the exam, and preparation for it", "Сопровождение до экзамена и подготовка к нему"),
      L("New York licensure by endorsement", "Лицензия Нью-Йорка через endorsement"),
    ],
    chapters: [
      {
        title: L("RN & LPN application", "Заявление RN и LPN"),
        text: L(
          "The New York application, prepared from your facts — then checked before it leaves.",
          "Заявление в Нью-Йорк по вашим фактам — и проверка пакета до отправки.",
        ),
        items: [
          L("A reading of your situation and the papers you already hold", "Разбор вашей ситуации и имеющихся документов"),
          L("A personal checklist — not a generic packet", "Персональный checklist — не общий пакет"),
          L("Help completing the NYSED application", "Помощь с заполнением заявления NYSED"),
          L("Documents prepared for filing", "Подготовка документов для подачи"),
          L("A check of the packet before it is sent", "Проверка пакета перед отправкой"),
          L("Tracking of the licensing steps that still sit ahead", "Отслеживание необходимых этапов лицензирования"),
          L("Help with extra document requests", "Помощь с дополнительными запросами по документам"),
        ],
      },
      {
        title: L("Internationally educated nurses", "Иностранное сестринское образование"),
        text: L(
          "Some confirmations must travel directly from a school or a licensing board. We organize that path and tell you, at each stage, what still has to be done.",
          "Некоторые подтверждения должны идти напрямую из учебного заведения или лицензирующего органа. Мы организуем этот путь и на каждом этапе объясняем, что ещё нужно сделать.",
        ),
        items: [
          L("Credential verification", "Credential verification"),
          L("TruMerit / CGFNS-related papers, when that route applies", "Документы TruMerit / CGFNS, когда этот путь применим"),
          L("Applicant portions of the required forms", "Помощь с applicant portions необходимых форм"),
          L("Transcripts and records from the school", "Координация transcript и документов из учебного заведения"),
          L("Confirmation of a foreign nursing license", "Координация подтверждения иностранной nursing license"),
          L("Translations of the documents the file needs", "Переводы необходимых документов"),
          L("Administrative contact with schools and other offices", "Коммуникация с учебными заведениями и другими учреждениями по административным вопросам"),
          L("Watching that the right papers reach NYSED", "Контроль отправки необходимых документов в NYSED"),
        ],
      },
      {
        title: L("NCLEX-RN & NCLEX-PN", "NCLEX-RN и NCLEX-PN"),
        text: L(
          "We register you, stay with you until you sit the exam, and prepare you for it.",
          "Регистрируем, сопровождаем до экзамена и готовим к нему.",
        ),
        items: [
          L("Pearson VUE registration", "Регистрация в Pearson VUE"),
          L("Checking that the data in the applications match", "Проверка соответствия данных в заявках"),
          L("Coordinating the NYSED and Pearson VUE stages", "Координация этапов NYSED и Pearson VUE"),
          L("Follow-up until Authorization to Test (ATT)", "Сопровождение до получения Authorization to Test (ATT)"),
          L("Preparation for NCLEX-RN and NCLEX-PN", "Подготовка к NCLEX-RN и NCLEX-PN"),
          L("Clear next steps after ATT arrives", "Инструкции по следующим шагам после получения ATT"),
        ],
      },
      {
        title: L("Licensure by endorsement", "Licensure by endorsement"),
        text: L(
          "You already hold an RN or LPN license in another U.S. state. We prepare the New York endorsement file.",
          "У вас уже есть RN или LPN license в другом штате США. Готовим пакет для New York licensure by endorsement.",
        ),
        items: [
          L("Naming the documents New York will ask for", "Определить необходимый пакет документов"),
          L("Preparing the application", "Подготовить application"),
          L("Organizing verification of the license you hold", "Организовать verification действующей лицензии"),
          L("Gathering the supporting papers", "Собрать подтверждающие документы"),
          L("Administrative follow-up of the filing", "Сопроводить административный процесс подачи"),
        ],
      },
    ],
    audience: [
      L("Nurses educated in Ukraine", "Образование в Украине"),
      L("Nurses educated in Russia", "Образование в России"),
      L("Nurses educated in Belarus", "Образование в Беларуси"),
      L("Nurses educated in Kazakhstan", "Образование в Казахстане"),
      L("Nurses educated in Uzbekistan", "Образование в Узбекистане"),
      L("Nurses educated in other countries", "Образование в других странах"),
      L("Graduates of U.S. nursing programs", "Выпускники nursing programs в США"),
      L("RN or LPN by endorsement", "RN и LPN через endorsement"),
    ],
    closingTitle: L("One process instead of dozens of separate steps.", "Один процесс вместо десятков отдельных шагов."),
    closingText: L(
      "Nursing licensing can involve NYSED, Pearson VUE, a school, a foreign licensing board, credential verification, translations, and extra papers. DOCROOM gathers those stages into one understandable process.",
      "Nursing licensing может включать NYSED, Pearson VUE, учебное заведение, иностранный лицензирующий орган, credential verification, переводы и дополнительные документы. DOCROOM собирает эти этапы в один понятный процесс.",
    ),
    disclaimer: L(
      "DOCROOM provides document preparation and administrative support. We are not the New York State Education Department, Pearson VUE, TruMerit, a nursing school, or a licensing authority. Whether you meet the requirements, whether you may sit NCLEX, and whether a professional license is issued are decisions for those organizations alone.",
      "DOCROOM предоставляет услуги по подготовке документов и административному сопровождению. DOCROOM не является New York State Education Department, Pearson VUE, TruMerit, nursing school или licensing authority. Решение о соответствии требованиям, допуске к NCLEX и выдаче профессиональной лицензии принимают только эти организации.",
    ),
    clientNeeds: [
      L("Where you trained, and which nursing credential you hold", "Где вы учились и какое сестринское образование получили"),
      L("Licenses you already hold — U.S. or foreign — if any", "Лицензии, которые уже есть — американские или иностранные"),
      L("Diplomas, transcripts, and licenses you still have — scans are enough to start", "Дипломы, транскрипты и лицензии, которые сохранились — для старта достаточно сканов"),
      L("Professional experience, in brief", "Кратко — профессиональный опыт"),
    ],
    process: [
      {
        title: L("First reading", "Первичная проверка"),
        text: L(
          "You send what you know about your education, licenses, experience, and the papers still in hand.",
          "Вы присылаете сведения об образовании, лицензиях, опыте и документах, которые сохранились.",
        ),
      },
      {
        title: L("A personal plan", "Персональный план"),
        text: L(
          "We name the documents and stages your situation actually requires — not a generic sequence.",
          "Называем документы и этапы, которые нужны именно в вашей ситуации — не общую схему.",
        ),
      },
      {
        title: L("The application", "Подготовка заявления"),
        text: L(
          "Help completing the forms and preparing the papers for filing.",
          "Помогаем заполнить необходимые формы и подготовить документы.",
        ),
      },
      {
        title: L("Credential verification", "Credential verification"),
        text: L(
          "For foreign education, we organize confirmation of the diploma, transcript, and professional license.",
          "При иностранном образовании организуем подтверждение диплома, transcript и профессиональной лицензии.",
        ),
      },
      {
        title: L("Filing and follow-up", "Подача и сопровождение"),
        text: L(
          "We watch the administrative stages and help you answer extra document requests.",
          "Контролируем административные этапы и помогаем реагировать на дополнительные запросы по документам.",
        ),
      },
      {
        title: L("NCLEX, ATT, and exam prep", "NCLEX, ATT и подготовка"),
        text: L(
          "If the exam is required, we help with registration, stay with you until you sit it, and prepare you for it.",
          "Если экзамен нужен — помогаем с регистрацией, сопровождаем до экзамена и готовим к нему.",
        ),
      },
    ],
    receives: [
      L("A written New York path before you pay for the next stage", "Письменный путь подачи в New York State до оплаты следующего этапа"),
      L("A personal checklist", "Персональный checklist"),
      L("Prepared application steps and organized verification", "Подготовленные этапы заявления и организованная верификация"),
      L("Follow-up through Pearson VUE registration, exam prep, and the test date", "Сопровождение регистрации Pearson VUE, подготовка к экзамену и выход на дату теста"),
    ],
    faqs: [
      {
        q: L("Do I have to earn a U.S. nursing degree first?", "Нужно ли сначала получить американский диплом медсестры?"),
        a: L(
          "Not automatically. New York reviews foreign nursing education case by case. We help assemble the file NYSED asks for. We cannot promise how they will decide.",
          "Не обязательно. Нью-Йорк рассматривает иностранное сестринское образование индивидуально. Мы помогаем собрать файл, который просит NYSED. Как они решат — не обещаем.",
        ),
      },
      {
        q: L("I already have an RN or LPN in another state. Is this still the desk?", "У меня уже есть RN или LPN в другом штате. Это всё ещё ваш кабинет?"),
        a: L(
          "Yes. That is licensure by endorsement. We prepare the New York application and organize verification of the license you hold.",
          "Да. Это licensure by endorsement. Готовим заявление Нью-Йорка и организуем verification действующей лицензии.",
        ),
      },
      {
        q: L("Do you also prepare for the exam?", "Вы ещё и готовите к экзамену?"),
        a: L(
          "Yes. We help you reach NCLEX and we prepare you for it — alongside the New York application and registration.",
          "Да. Помогаем дойти до NCLEX и готовим к экзамену — вместе с заявлением в Нью-Йорк и регистрацией.",
        ),
      },
      {
        q: L("Must some papers come straight from the school?", "Некоторые бумаги должны идти напрямую из учебного заведения?"),
        a: L(
          "Yes. Some verifications have to be sent by the school or the licensing board, not by you. We organize that process and tell you, at each stage, what they still need to send.",
          "Да. Часть подтверждений направляет само учебное заведение или лицензирующий орган, не вы. Мы организуем этот процесс и на каждом этапе объясняем, что ещё должны отправить.",
        ),
      },
    ],
  },
  {
    slug: "relocation",
    title: L("How to move to the United States", "Как переехать в США"),
    kicker: L("Lawful paths", "Законные пути"),
    short: L(
      "The main lawful routes for work, study, family, business, and life in America.",
      "Основные законные пути для переезда, работы, учёбы и жизни в Америке.",
    ),
    description: L(
      "The way you move depends on education, profession, work history, family, business, finances, and other facts of your life. Some programs can lead toward a Green Card. Others let you live, work, or study in the United States for a time — and, if a separate lawful basis later exists, change to another status. Below are the main options worth knowing. After you see the direction, we organize the papers.",
      "Способ переезда зависит от образования, профессии, опыта, семьи, бизнеса, финансов и других обстоятельств. Одни программы позволяют сразу двигаться к Green Card. Другие дают возможность временно жить, работать или учиться в США, а затем — при отдельном законном основании — перейти к другому статусу. Ниже — основные варианты, которые стоит знать. Когда направление видно — организуем документы.",
    ),
    image: "/images/nyc-stoop.jpg",
    chaptersKicker: L("The routes", "Маршруты"),
    chaptersTitle: L("The main lawful paths.", "Основные законные пути."),
    helpWith: [
      L("A map of typical visa and Green Card routes for your situation", "Карта типичных визовых и Green Card маршрутов под вашу ситуацию"),
      L("A personal list of papers to gather while you are still home", "Персональный список бумаг, которые стоит собрать ещё дома"),
      L("Retrieval, apostille, translation, notary, delivery", "Получение, апостиль, перевод, нотариус, доставка"),
      L("A file ready for a school, employer, licensing board, or counsel", "Пакет для школы, работодателя, licensing board или адвоката"),
    ],
    chapters: [
      {
        title: L("Work — temporary status", "Переезд через работу"),
        text: L(
          "Several categories let foreign specialists work in the United States. Some are temporary; a later, separate employment-based process may lead toward a Green Card. H-1B itself is not a Green Card.",
          "Несколько категорий позволяют иностранным специалистам работать в США. Одни дают временный статус; позже работодатель может начать отдельный employment-based процесс к Green Card. Сама H-1B Green Card не является.",
        ),
        items: [
          L("H-1B — specialty occupation, usually a U.S. employer as petitioner; IT, engineering, finance, healthcare, science, architecture and other professions. Many cases face an annual cap and lottery.", "H-1B — работа по специальности; как правило, американский работодатель-заявитель. IT, engineering, finance, healthcare, science, architecture и другие профессии. Для значительной части — ежегодный лимит и отбор."),
          L("L-1A managers and executives; L-1B specialized knowledge — transfer inside a related company, including firms opening a U.S. office.", "L-1A — managers и executives; L-1B — specialized knowledge. Перевод внутри связанной компании, в том числе при открытии американского офиса."),
          L("O-1 — extraordinary ability in science, business, education, sport, the arts, film and television. Awards, publications, press, leading roles, high earnings — the evidence depends on the category.", "O-1 — выдающиеся достижения в науке, бизнесе, образовании, спорте, искусстве, кино и ТВ. Награды, публикации, СМИ, ведущие роли, доход — доказательства зависят от категории."),
          L("Also: H-2A agricultural; H-2B seasonal; P athletes and artists; R certain religious workers. Each program has its own rules.", "Также: H-2A — сельское хозяйство; H-2B — сезонные работы; P — спортсмены и артисты; R — определённые religious workers. У каждой программы свои требования."),
        ],
      },
      {
        title: L("Employment-based Green Card", "Green Card через профессию"),
        text: L(
          "Unlike a temporary work visa, these categories can lead to lawful permanent residence. Each case is read on its own facts — this is not “a visa for any diploma.”",
          "В отличие от временной рабочей визы, конечным результатом может быть lawful permanent residence — Green Card. Каждый кейс читают по своим фактам: это не «виза для любого диплома».",
        ),
        items: [
          L("EB-1A Extraordinary Ability — science, arts, education, business, sport. A traditional U.S. job offer is not always required if the category’s tests are met.", "EB-1A Extraordinary Ability — наука, искусство, образование, бизнес, спорт. Традиционное предложение о работе не всегда обязательно, если выполнены требования категории."),
          L("EB-1B outstanding professors and researchers; EB-1C multinational managers and executives transferring into a U.S. entity.", "EB-1B — outstanding professors and researchers; EB-1C — руководители международных компаний, переводящиеся в американское подразделение."),
          L("EB-2 — advanced degree or exceptional ability. Inside it: National Interest Waiver (NIW) — in some cases a request to waive the usual job offer and labor certification if the proposed endeavor meets NIW tests.", "EB-2 — advanced degree или exceptional ability. Внутри: National Interest Waiver (NIW) — в некоторых случаях можно просить отказаться от обычного job offer и labor certification, если proposed endeavor отвечает критериям NIW."),
          L("NIW may be considered in science, engineering, technology, healthcare, business, entrepreneurship, education, research — never automatically.", "NIW рассматривают в science, engineering, technology, healthcare, business, entrepreneurship, education, research — никогда автоматически."),
          L("EB-3 — professionals (bachelor’s or foreign equivalent), skilled workers (usually two years’ training or experience), and certain other workers. Most EB-3 cases need a U.S. employer and labor certification.", "EB-3 — professionals (bachelor’s или иностранный эквивалент), skilled workers (обычно два года подготовки или опыта) и other workers. В большинстве дел нужен американский работодатель и трудовая сертификация."),
        ],
      },
      {
        title: L("Business and investment", "Бизнес и инвестиции"),
        text: L(
          "Two well-known routes. They are not interchangeable: one is usually temporary; the other is built as a Green Card path.",
          "Два известных маршрута. Они не взаимозаменяемы: один обычно временный, другой рассчитан на Green Card.",
        ),
        items: [
          L("E-2 Treaty Investor — nationals of certain treaty countries may live in the U.S. and run a business they have substantially invested in (new, purchased, or into an existing company). Eligibility turns on citizenship of a treaty country, not merely residence. No universal minimum sum — the investment must be substantial for that business. E-2 is not itself a Green Card.", "E-2 Treaty Investor — граждане определённых treaty countries могут жить в США и вести бизнес, в который сделали substantial investment (новый, купленный или в действующую компанию). Право зависит от гражданства treaty country, не от страны проживания. Универсальной минимальной суммы нет — инвестиция должна быть substantial для конкретного бизнеса. E-2 сама по себе Green Card не даёт."),
          L("EB-5 — qualifying investment in a U.S. commercial enterprise, job-creation rules, proof of lawful source of funds, and the rest of the program. Unlike E-2, EB-5 is an immigrant path to permanent residence for the investor and certain family members.", "EB-5 — квалифицирующая инвестиция в американское коммерческое предприятие, требования к рабочим местам, законное происхождение средств и остальные условия программы. В отличие от E-2, это иммиграционный путь к permanent residence для инвестора и определённых членов семьи."),
        ],
      },
      {
        title: L("Family, marriage, K-1", "Семья, брак, K-1"),
        text: L(
          "Family immigration is one of the main Green Card routes. What is open depends on who the U.S. citizen or permanent resident is to you.",
          "Семейная иммиграция — одно из основных направлений Green Card. Что открыто, зависит от того, кем вам приходится гражданин или permanent resident США.",
        ),
        items: [
          L("Immediate relatives of U.S. citizens: spouses; unmarried children under 21; parents of adult citizens. These immigrant visas are not limited by the ordinary annual family-preference quota.", "Immediate relatives граждан США: супруги; не состоящие в браке дети младше 21 года; родители совершеннолетних граждан. Для них immigrant visas не ограничены обычной ежегодной family-preference квотой."),
          L("Family preference: certain spouses and children of permanent residents; adult children of citizens; brothers and sisters of adult citizens. Visa numbers are limited — waits can be long.", "Family preference: супруги и дети permanent residents; взрослые дети граждан; братья и сёстры совершеннолетних граждан. Число виз ограничено — ожидание может быть долгим."),
          L("K-1 fiancé(e) of a U.S. citizen: after entry, marry the petitioner within the statutory time, then a separate process for permanent residence.", "K-1 — жених или невеста гражданина США. После въезда брак с тем, кто подавал петицию, в установленный срок, затем отдельный процесс permanent residence."),
          L("If you are already married, it is a family immigration process — not K-1. The category can depend on how long you have been married and other facts.", "Если брак уже заключён — это семейная иммиграция, не K-1. Категория может зависеть от длительности брака и других обстоятельств."),
        ],
      },
      {
        title: L("Study and exchange", "Учёба и программы обмена"),
        text: L(
          "Education and exchange can bring you to the United States for a long stay. None of these is itself a Green Card.",
          "Образование и обмен могут привезти в США на длительный срок. Ни один из этих статусов сам по себе Green Card не даёт.",
        ),
        items: [
          L("F-1 academic study — universities, colleges, certain schools, language programs, other qualifying institutions. First: admission to a SEVP-approved school and Form I-20, then the visa process.", "F-1 — университеты, colleges, некоторые школы, language programs и другие qualifying academic institutions. Сначала поступление в SEVP-approved school и Form I-20, затем визовый процесс."),
          L("After F-1, some graduates may obtain OPT — Optional Practical Training tied to the field of study. A later work or other immigration category is a separate matter.", "После F-1 некоторые выпускники могут получить OPT — Optional Practical Training по направлению учёбы. Дальнейшая рабочая или иная категория — отдельный вопрос."),
          L("M-1 — certain vocational and non-academic programs.", "M-1 — определённые vocational и non-academic программы."),
          L("J-1 exchange — interns, trainees, researchers, professors, teachers, au pair, physicians and other approved categories. Needs an approved sponsor and Form DS-2019. Some J-1 participants face a two-year home-country physical presence requirement.", "J-1 — interns, trainees, researchers, professors, teachers, Au Pair, physicians и другие одобренные категории. Нужен approved sponsor и Form DS-2019. Для части участников — two-year home-country physical presence requirement."),
        ],
        href: "/services/nclex",
        linkLabel: L("Nursing licensing after you arrive", "Лицензия RN / LPN после переезда"),
      },
      {
        title: L("Lottery, humanitarian, other", "Лотерея, гуманитарные и другие пути"),
        text: L(
          "The system is wider than the well-known visas. Two people with the same citizenship can need entirely different processes.",
          "Система шире нескольких самых известных виз. У двух людей с одним гражданством процессы могут быть совершенно разными.",
        ),
        items: [
          L("Diversity Visa (Green Card Lottery) — official registration only, in the government window, eligibility often tied to country of birth. Selection is not a Green Card: you still must meet the program, file, submit documents, complete a medical exam, and be processed. Visa numbers are limited.", "Diversity Visa (лотерея Green Card) — регистрация только официально, в правительственное окно; участие часто зависит от страны рождения. Выигрыш ещё не Green Card: нужно соответствовать программе, подать, сдать документы, пройти medical examination и рассмотрение. Число виз ограничено."),
          L("Refugee status — certain people outside the United States who meet U.S. refugee law.", "Refugee — определённые люди за пределами США, отвечающие американскому законодательству о беженцах."),
          L("Asylum — people in the United States or arriving who claim persecution or a well-founded fear on statutory grounds. A demanding, fact-specific category.", "Asylum — люди в США или прибывающие, заявляющие о преследовании или обоснованном страхе по установленным законом основаниям. Сложная категория, завязанная на факты конкретного человека."),
          L("Humanitarian parole and special programs — created, changed, paused, or ended by the government. Parole is not a Green Card and does not by itself create a permanent path.", "Humanitarian parole и специальные программы — правительство может вводить, менять, приостанавливать или закрывать их. Parole не равен Green Card и сам по себе постоянный путь не создаёт."),
          L("Also: certain religious workers, international-organization employees, victims of trafficking or specified crimes, special immigrants, and other categories in federal law.", "Также: определённые religious workers, сотрудники международных организаций, жертвы трафика или указанных преступлений, special immigrants и другие категории федерального закона."),
        ],
      },
    ],
    audienceKicker: L("Every path", "Каждый путь"),
    audience: [
      L("Work", "Работа"),
      L("Career", "Карьера"),
      L("Business", "Бизнес"),
      L("Investment", "Инвестиции"),
      L("Family", "Семья"),
      L("Study", "Учёба"),
      L("Professional achievements", "Профессиональные достижения"),
      L("Diversity Visa", "Diversity Visa"),
      L("Humanitarian programs", "Гуманитарные программы"),
    ],
    asides: [
      {
        title: L("What usually matters in your situation", "Что обычно имеет значение"),
        text: L(
          "Family — a spouse, parents, children, or other qualifying relatives in the U.S.? Profession and career — education, what you do, a U.S. employer, a related company abroad? Achievements — recognition, research, publications, awards? Business or a plan to invest? Study in the United States? Finances, if a program asks for a substantial investment? Prior visas and immigration history. Two similar lives can still need two different processes.",
          "Семья — супруг, родители, дети или другие qualifying relatives в США? Профессия и карьера — образование, чем занимаетесь, американский работодатель, связанная компания за границей? Достижения — признание, исследования, публикации, награды? Бизнес или план инвестировать? Учёба в США? Финансы, если программа предполагает существенную инвестицию? Предыдущие визы и иммиграционная история. Две похожие жизни всё равно могут требовать разных процессов.",
        ),
      },
      {
        title: L("After you see the direction — the papers", "Когда направление видно — документы"),
        text: L(
          "DOCROOM gathers and restores records, retrieves papers from another country, requests vital records and archives, diplomas and transcripts, proof of professional experience, translations, apostille, notary, a structured packet, and international delivery — for you, an employer, a university, a licensing authority, or counsel. If you are still home, it is often simpler to write to a university, replace a certificate, or obtain an apostille than after the move.",
          "DOCROOM собирает и восстанавливает документы, получает бумаги из другой страны, запрашивает ЗАГС и архивы, дипломы и transcripts, подтверждение опыта, переводы, апостиль, нотариус, структурированный пакет и международную доставку — для вас, работодателя, университета, licensing authority или адвоката. Пока вы дома, часто проще написать в университет, восстановить свидетельство или поставить апостиль, чем после переезда.",
        ),
      },
    ],
    closingTitle: L("The path starts with seeing the options.", "Путь начинается с понимания возможностей."),
    closingText: L(
      "Work, career, business, investment, family, study, achievements, Diversity Visa, humanitarian programs — each route has its own requirements. Tell us the situation and the aim. We help you see the documentary side, name what you already have, and what to prepare next.",
      "Работа, карьера, бизнес, инвестиции, семья, учёба, достижения, Diversity Visa, гуманитарные программы — у каждого пути свои требования. Расскажите ситуацию и цель. Поможем увидеть документальную сторону, что уже есть и что готовить дальше.",
    ),
    disclaimer: L(
      "This page is general orientation. Program rules change. USCIS, the U.S. Department of State, and other competent authorities decide cases. DOCROOM prepares the file from your facts.",
      "Страница носит общий характер. Требования программ меняются. Решения принимают USCIS, U.S. Department of State и другие компетентные органы. DOCROOM готовит файл по вашим фактам.",
    ),
    clientNeeds: [
      L("Where you are now, and the aim — work, study, family, business", "Где вы сейчас и цель — работа, учёба, семья, бизнес"),
      L("Education, profession, achievements, employer or company abroad", "Образование, профессия, достижения, работодатель или компания за границей"),
      L("Family in the U.S., if any — who, and their status", "Семья в США, если есть — кто и какой статус"),
      L("Papers already in hand, and what is still in another country", "Какие бумаги уже есть и что осталось в другой стране"),
    ],
    process: [
      {
        title: L("We map the usual paths", "Карта обычных путей"),
        text: L(
          "Work, family, study, business, achievements — which routes people in a situation like yours typically take.",
          "Работа, семья, учёба, бизнес, достижения — какие маршруты обычно берут в похожей ситуации.",
        ),
      },
      {
        title: L("What the file will need", "Что понадобится файлу"),
        text: L(
          "Diplomas, transcripts, civil records, proof of work, evidence of achievements — named before you hunt at midnight.",
          "Дипломы, transcripts, гражданские акты, подтверждение работы, доказательства достижений — называем до ночного поиска.",
        ),
      },
      {
        title: L("What is still abroad", "Что ещё за границей"),
        text: L(
          "We name what is painful to obtain after you leave — and we organize retrieval while it is still simple.",
          "Называем, что сложно получить после отъезда — и организуем получение, пока это ещё просто.",
        ),
      },
      {
        title: L("We put the packet in order", "Собираем пакет"),
        text: L(
          "Retrieve, apostille, translate, notarize, deliver — in the sequence your path actually needs.",
          "Получить, апостиль, перевести, заверить, доставить — в том порядке, который нужен именно вашему пути.",
        ),
      },
      {
        title: L("Ready for the next desk", "Готово к следующему столу"),
        text: L(
          "A school, an employer, a licensing board, a consulate packet, or counsel — without a scramble.",
          "Школа, работодатель, licensing board, консульский пакет или адвокат — без аврала.",
        ),
      },
    ],
    receives: [
      L("You choose the path based on your experience and the information available; we help turn that decision into documents.", "Вы выбираете путь, опираясь на свой опыт и доступную информацию, а мы помогаем воплотить это решение в документах."),
      L("A written list of papers to gather now", "Письменный список бумаг, которые стоит собрать сейчас"),
      L("Organized retrieval, apostille, translation, notary, delivery", "Организованные получение, апостиль, перевод, нотариус, доставка"),
      L("A packet ready for the next stage", "Пакет, готовый к следующему этапу"),
    ],
    faqs: [
      {
        q: L("Will you walk me through visa paths?", "Вы разберёте со мной визовые пути?"),
        a: L(
          "Yes — especially if you are still outside the United States. We go through typical routes (work, family, study, business, Green Card categories) and the papers each one usually needs.",
          "Да — особенно если вы ещё не в США. Проходим типичные маршруты (работа, семья, учёба, бизнес, категории Green Card) и документы, которые к каждому обычно нужны.",
        ),
      },
      {
        q: L("Is H-1B a Green Card?", "H-1B — это Green Card?"),
        a: L(
          "No. H-1B is a temporary work classification. A U.S. employer may later start a separate employment-based immigration process.",
          "Нет. H-1B — временный рабочий статус. Позже работодатель может начать отдельный employment-based процесс к Green Card.",
        ),
      },
      {
        q: L("What is the difference between E-2 and EB-5?", "Чем E-2 отличается от EB-5?"),
        a: L(
          "E-2 is for nationals of certain treaty countries who invest substantially in a U.S. business. It is not itself a Green Card. EB-5 is an immigrant investor path that can lead to permanent residence if the program’s tests are met.",
          "E-2 — для граждан определённых treaty countries, которые существенно инвестируют в американский бизнес. Сама по себе Green Card не даёт. EB-5 — иммиграционный путь инвестора, который при выполнении требований может привести к permanent residence.",
        ),
      },
      {
        q: L("I already know my path. Do I still need a consultation?", "Я уже знаю свой путь. Консультация всё равно нужна?"),
        a: L(
          "Not necessarily. If the route is clear, we go straight to the papers.",
          "Не обязательно. Если маршрут ясен — сразу переходим к документам.",
        ),
      },
      {
        q: L("I am already in the U.S. Can you still help?", "Я уже в США. Вы всё ещё можете помочь?"),
        a: L(
          "Yes. We organize retrieval, replacement, translation, apostille, and delivery of papers that remained abroad.",
          "Да. Организуем получение, восстановление, перевод, апостиль и доставку документов, которые остались за границей.",
        ),
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const HOME_SERVICES = SERVICES.filter((s) =>
  ["immigration", "relocation", "notary", "translations"].includes(s.slug),
).sort((a, b) => {
  const order = ["immigration", "relocation", "notary", "translations"];
  return order.indexOf(a.slug) - order.indexOf(b.slug);
});

export const WORK_COUNTRIES: Loc[] = [
  L("Russia", "Россия"),
  L("Ukraine", "Украина"),
  L("Belarus", "Беларусь"),
  L("Kazakhstan", "Казахстан"),
  L("Uzbekistan", "Узбекистан"),
  L("Azerbaijan", "Азербайджан"),
];

export type ServiceGroup = {
  id: string;
  n: string;
  title: Loc;
  text: Loc;
  href: string;
  items: Loc[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "notary",
    n: "01",
    title: L("Notary", "Нотариальные услуги"),
    text: L(
      "A New York notary — in the studio or at your door.",
      "Нотариус Нью-Йорка — в кабинете или у вашей двери.",
    ),
    href: "/services/notary",
    items: [
      L("Mobile notary / notary on site", "Мобильный нотариус / нотариус на выезде"),
      L("Powers of attorney — general, real estate, inheritance", "Организация удостоверения доверенностей (обычные, на недвижимость, на наследство)"),
      L("Spousal consents for buying or selling property", "Организация супружеских согласий на покупку/продажу недвижимости"),
      L("Parental consents for a child to travel abroad", "Организация согласий родителей на выезд детей за границу"),
      L("Statements and affidavits", "Организация заявлений"),
      L("Certificates of life", "Организация свидетельств о нахождении в живых"),
      L("Authentication of a translation", "Удостоверение подлинности перевода"),
      L("House or office visit", "Выезд нотариуса на дом или в офис"),
    ],
  },
  {
    id: "papers",
    n: "02",
    title: L("Apostille & translations", "Апостиль и переводы"),
    text: L(
      "Certified and notarized translations. Apostille in the U.S. and abroad — the government stamps; we organize the file.",
      "Заверенный и нотариальный перевод. Апостиль в США и за границей — штамп ставит ведомство, файл организуем мы.",
    ),
    href: "/services/apostille",
    items: [
      L("Apostille — United States and abroad", "Оформление апостиля (США и за границей)"),
      L("Notarized and certified translations", "Нотариальные и сертифицированные переводы"),
      L("Spoken interpreting, on request", "Устные переводы (по запросу)"),
    ],
  },
  {
    id: "recovery",
    n: "03",
    title: L("Document recovery", "Восстановление и получение документов"),
    text: L(
      "Lost papers from CIS archives, New York, and every U.S. state that will take the request.",
      "Утраченные бумаги из архивов СНГ, Нью-Йорка и штатов США, куда можно подать запрос.",
    ),
    href: "/services/recovery",
    items: [
      L("Vital records — Russia, Ukraine, and other CIS countries", "Восстановление документов ЗАГС (Россия, Украина и другие страны СНГ)"),
      L("New York City vital records", "Восстановление актов гражданского состояния в Нью-Йорке"),
      L("Vital records in all U.S. states", "Восстановление актов гражданского состояния во всех штатах США"),
      L("Court archives — Russia, Ukraine, New York, other U.S. states", "Документы из архивов судов (Россия, Украина, Нью-Йорк и другие штаты США)"),
      L("School and university records — Russia, Ukraine, the U.S.", "Документы из учебных заведений (Россия, Украина, США)"),
      L("Certificates of no criminal record", "Справки об отсутствии судимости"),
      L("Certificate of life for a pension fund", "Свидетельство о факте нахождения в живых для Пенсионного Фонда"),
      L("Pension paperwork", "Пенсионные документы"),
    ],
  },
  {
    id: "delivery",
    n: "04",
    title: L("Delivery", "Доставка"),
    text: L(
      "Papers between the U.S. and Russia, Ukraine, or Belarus.",
      "Документы между США и Россией, Украиной или Беларусью.",
    ),
    href: "/services/delivery",
    items: [
      L("Documents, U.S. ↔ Russia / Ukraine / Belarus", "Доставка документов из США в Россию / Украину / Беларусь и обратно"),
    ],
  },
  {
    id: "visits",
    n: "05",
    title: L("Additional visits", "Дополнительные услуги"),
    text: L(
      "Practical visits in New York. Licenses, when the law requires them, are named before you pay.",
      "Практические выезды в Нью-Йорке. Если закону нужна лицензия — назовём её до оплаты.",
    ),
    href: "/services/visits",
    items: [
      L("Process service within New York", "Вручение документов в пределах Нью-Йорка (Process Service)"),
      L("Marriage ceremony at home, hospital, or nursing home", "Регистрация брака с выездом к клиенту (дом, больница, дом престарелых)"),
    ],
  },
  {
    id: "nclex",
    n: "06",
    title: L("RN & LPN licensing", "RN и LPN в Нью-Йорке"),
    text: L(
      "Foreign education, a U.S. program, or a license in another state. One New York process — application, verification, NCLEX, and exam prep.",
      "Иностранное образование, американская программа или лицензия в другом штате. Один нью-йоркский процесс — заявление, verification, NCLEX и подготовка к экзамену.",
    ),
    href: "/services/nclex",
    items: [
      L("RN and LPN applications with NYSED", "Заявления RN и LPN в NYSED"),
      L("Personal checklist and packet review", "Персональный checklist и проверка пакета"),
      L("Credential verification for foreign education", "Подтверждение иностранного образования"),
      L("TruMerit / CGFNS papers, when that route applies", "TruMerit / CGFNS, когда этот путь применим"),
      L("NCLEX-RN and NCLEX-PN registration", "Регистрация NCLEX-RN и NCLEX-PN"),
      L("Help through to the exam, and preparation for it", "Сопровождение до экзамена и подготовка к нему"),
      L("Follow-up until ATT", "Сопровождение до Authorization to Test"),
      L("Licensure by endorsement from another state", "Licensure by endorsement из другого штата"),
    ],
  },
  {
    id: "relocation",
    n: "07",
    title: L("How to move to the U.S.", "Как переехать в США"),
    text: L(
      "The main lawful paths — work, Green Card, family, study, business — then the papers each one needs.",
      "Основные законные пути — работа, Green Card, семья, учёба, бизнес — и документы к каждому.",
    ),
    href: "/services/relocation",
    items: [
      L("H-1B, L-1, O-1 and other work visas", "H-1B, L-1, O-1 и другие рабочие визы"),
      L("EB-1, EB-2 / NIW, EB-3 — Green Card through work", "EB-1, EB-2 / NIW, EB-3 — Green Card через работу"),
      L("E-2 and EB-5 — business and investment", "E-2 и EB-5 — бизнес и инвестиции"),
      L("Family, K-1, study, lottery, humanitarian", "Семья, K-1, учёба, лотерея, гуманитарные пути"),
    ],
  },
];

export const ALSO_SERVICES = ["immigration", "divorce", "asylum", "expedited", "other"] as const;

const MENU_SLUGS = ["immigration", "relocation", "nclex", "notary", "translations", "apostille", "recovery", "delivery"] as const;

export const MENU_SERVICES = MENU_SLUGS.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(
  (s): s is NonNullable<typeof s> => Boolean(s),
);
