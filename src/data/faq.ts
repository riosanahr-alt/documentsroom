import { L, type L as Loc } from "@/i18n/l";

export type FaqItem = { q: Loc; a: Loc };
export type FaqGroup = { id: string; title: Loc; items: FaqItem[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "general",
    title: L("General", "Общие вопросы"),
    items: [
      {
        q: L("How do I order a service?", "Как заказать услугу?"),
        a: L(
          "Open Start now or Contact: call, WhatsApp, Telegram, email, or the form. We reply during business hours.",
          "Откройте «Начать» или «Контакты»: звонок, WhatsApp, Telegram, email или форма. Отвечаем в рабочие часы.",
        ),
      },
      {
        q: L("How long does the work take?", "Сколько времени занимает работа?"),
        a: L(
          "Form completion, translation, and document prep usually take up to 3 business days after payment and a complete set of facts. If the desk is full, we warn you before you pay.",
          "Заполнение форм, перевод и подготовка документов обычно занимают до 3 рабочих дней после оплаты и полного комплекта сведений. Если стол загружен, предупредим до оплаты.",
        ),
      },
      {
        q: L("Do you work on prepayment?", "Вы работаете по предоплате?"),
        a: L(
          "Yes — full prepayment is the standard. Partial payment is sometimes possible; ask when we confirm the scope.",
          "Да — полная предоплата, как правило. Частичная оплата иногда возможна; уточните при подтверждении объёма.",
        ),
      },
      {
        q: L("How can I pay?", "Как можно оплатить?"),
        a: L(
          "Cards (via Square), Zelle, PayPal, bank transfer (account + routing), and cash in New York State only. After we agree the work, you receive an invoice the way you prefer.",
          "Карты (через Square), Zelle, PayPal, банковский перевод (account + routing) и наличные только в штате Нью-Йорк. После согласования работы вы получите счёт удобным способом.",
        ),
      },
      {
        q: L("Do you only work in New York?", "Вы работаете только в Нью-Йорке?"),
        a: L(
          "No. We are a New York company and work with clients in every U.S. state fully online. Meetings in New York are by appointment. We also work on site.",
          "Нет. Мы — нью-йоркская компания и работаем онлайн с клиентами во всех штатах США. Встречи в Нью-Йорке — по записи. Работаем и на выезде.",
        ),
      },
      {
        q: L("Can you help if I am outside the United States?", "Можно, если я за пределами США?"),
        a: L(
          "Yes, many services are online. Not every original can be mailed abroad; we will say so case by case.",
          "Да, многие услуги онлайн. Не каждый оригинал можно выслать за границу — скажем отдельно в каждом случае.",
        ),
      },
      {
        q: L("Do you operate legally?", "Вы работаете легально?"),
        a: L(
          "Yes. DOCROOM Document Prep is a registered New York business and an immigration assistance service provider.",
          "Да. DOCROOM Document Prep — зарегистрированная компания Нью-Йорка и провайдер услуг иммиграционной помощи.",
        ),
      },
    ],
  },
  {
    id: "immigration",
    title: L("Immigration forms", "Иммиграционные формы"),
    items: [
      {
        q: L("Which forms do you complete?", "Какие формы вы заполняете?"),
        a: L(
          "The main USCIS set listed on our fee schedule, including I-130, I-485, I-765, I-131, N-400, I-864, I-134, I-589, I-90, I-751, I-539, I-821, N-600, and related helper forms. We complete EOIR-33 address forms from your facts.",
          "Основной набор USCIS из прайс-листа, включая I-130, I-485, I-765, I-131, N-400, I-864, I-134, I-589, I-90, I-751, I-539, I-821, N-600 и вспомогательные формы. Форму EOIR-33 (адрес) заполняем по вашим фактам.",
        ),
      },
      {
        q: L("Can you explain visa paths?", "Вы можете объяснить визовые пути?"),
        a: L(
          "Yes — especially if you are still outside the United States. We walk through typical routes (study, work, family, business) and the documents each one usually needs. We prepare the file. A consulate or USCIS officer decides the case.",
          "Да — особенно если вы ещё не в США. Разбираем типичные маршруты (учёба, работа, семья, бизнес) и документы, которые к каждому обычно нужны. Файл готовим мы. Решение принимает консульство или офицер USCIS.",
        ),
      },
      {
        q: L("Do you write asylum stories?", "Вы пишете истории для убежища?"),
        a: L(
          "We do not invent histories. We can translate a story you already have, edit it for clarity and sequence, and keep within the law. Anyone offering to “make up” a claim is proposing something unlawful.",
          "Мы не выдумываем истории. Можем перевести уже существующий рассказ, отредактировать текст для ясности и последовательности и остаться в рамках закона. Предложение «сочинить» заявление — противозаконно.",
        ),
      },
      {
        q: L("Does the price include the government fee?", "Цена включает госпошлину?"),
        a: L(
          "No. Government fees are paid on the USCIS site. Preparing I-912 (fee waiver) is a separate service.",
          "Нет. Госпошлины оплачиваются на сайте USCIS. Подготовка I-912 (освобождение от пошлины) — отдельная услуга.",
        ),
      },
      {
        q: L("Do you send the package to USCIS?", "Вы отправляете пакет в USCIS?"),
        a: L(
          "You may file yourself (we give a checklist and envelopes). Or, with your written consent, we can mail the finished package for an extra fee.",
          "Можете подать сами (даём чек-лист и конверты). Или с вашего письменного согласия отправим готовый пакет за доплату.",
        ),
      },
      {
        q: L("What if USCIS refuses?", "Что, если USCIS откажет?"),
        a: L(
          "If we made a preparation error, we correct the documents at no extra preparation fee. A government refusal is not, by itself, proof of our error. We never guarantee a government decision.",
          "Если ошибка в подготовке наша, исправляем документы без доплаты за подготовку. Отказ ведомства сам по себе не доказывает нашу ошибку. Решение ведомства мы не гарантируем.",
        ),
      },
    ],
  },
  {
    id: "process",
    title: L("Working with us", "Как мы работаем"),
    items: [
      {
        q: L("I do not know which form I need. Can you help?", "Я не знаю, какая форма нужна. Вы поможете?"),
        a: L(
          "Yes. We do not choose the path for you and we do not determine which immigration category applies to you. When you already know the basis on which you plan to file, we can point to the matching form or application number, explain the structure of the packet, and quote the document-preparation fee from our price list.",
          "Да. Мы не выбираем путь за вас и не определяем, какая иммиграционная категория вам подходит. Когда вы уже знаете, на каком основании планируете подаваться, мы можем подсказать соответствующий номер формы или заявления, объяснить структуру пакета и рассчитать стоимость подготовки документов по нашему прайсу.",
        ),
      },
      {
        q: L("How do I receive the finished files?", "Как я получаю готовые файлы?"),
        a: L(
          "By email and/or on paper via USPS. New York rules require copies for at least three years; we keep them five years and can resend.",
          "На email и/или на бумаге через USPS. По правилам Нью-Йорка копии нужно хранить не менее трёх лет; мы храним их пять лет и можем выслать повторно.",
        ),
      },
      {
        q: L("Can I come in person?", "Можно прийти лично?"),
        a: L(
          "In New York, yes, by appointment. Most of the work is online, anywhere in the United States. We also work on site.",
          "В Нью-Йорке — да, по записи. Большая часть работы онлайн, по всей Америке. Работаем и на выезде.",
        ),
      },
      {
        q: L("Can you come to my city?", "Можете приехать в мой город?"),
        a: L(
          "Yes. We also work on site outside New York. Travel expenses are calculated in advance and agreed with you before the trip is confirmed.",
          "Работаем и на выезде за пределами Нью-Йорка. Командировочные расходы рассчитываются заранее и согласовываются с вами до подтверждения поездки.",
        ),
      },
      {
        q: L("What languages do you work in?", "На каких языках вы работаете?"),
        a: L(
          "We work in English and Russian. We help clients from Russia, Ukraine, Belarus, Kazakhstan, and other countries.",
          "Работаем на английском и русском. Помогаем клиентам из России, Украины, Беларуси, Казахстана и других стран.",
        ),
      },
    ],
  },
  {
    id: "notary",
    title: L("Notary & apostille", "Нотариус и апостиль"),
    items: [
      {
        q: L("Do I need an appointment for a notary?", "Нужна запись к нотариусу?"),
        a: L(
          "Yes. Book a New York notary appointment. Bring valid photo ID and do not sign in advance unless we say otherwise.",
          "Да. Запишитесь к нотариусу Нью-Йорка. Возьмите действующий документ с фото и не подписывайте заранее, если мы не сказали иначе.",
        ),
      },
      {
        q: L("Do you issue apostilles?", "Вы выдаёте апостиль?"),
        a: L(
          "Apostilles are issued by government authorities. We prepare the request and coordinate the process.",
          "Апостиль выдают государственные органы. Мы готовим запрос и координируем процесс.",
        ),
      },
    ],
  },
  {
    id: "divorce",
    title: L("Uncontested divorce", "Развод по согласию"),
    items: [
      {
        q: L("Do you handle uncontested divorce in New York?", "Вы готовите развод по согласию в Нью-Йорке?"),
        a: L(
          "Yes — document preparation only. Both spouses must already agree on the terms. We complete the typical uncontested packet from your facts. We do not appear in court.",
          "Да — только подготовка документов. Оба супруга уже должны быть согласны с условиями. Собираем типичный бесспорный пакет по вашим фактам. В суд не ходим.",
        ),
      },
      {
        q: L("Is this legal representation?", "Это юридическое представительство?"),
        a: L(
          "No. DOCROOM is not a law firm. If there is any dispute about children, support, or property, you need an attorney — we will say so immediately.",
          "Нет. DOCROOM не юридическая фирма. Если есть спор о детях, содержании или имуществе, нужен адвокат — мы скажем это сразу.",
        ),
      },
      {
        q: L("Can we answer in Russian?", "Можно отвечать по-русски?"),
        a: L(
          "Yes. You may give facts in Russian. The court papers are prepared in English. Translations of supporting civil documents can be included.",
          "Да. Факты можно сообщать по-русски. Судебные бумаги готовим на английском. Перевод подтверждающих гражданских документов можно включить в заказ.",
        ),
      },
      {
        q: L("What does it cost?", "Сколько это стоит?"),
        a: L(
          "The preparation fee is quoted after we see the situation (children or not, property list, translations). Court fees are never included.",
          "Стоимость подготовки называем после того, как увидим ситуацию (дети, имущество, переводы). Судебные пошлины никогда не входят в цену.",
        ),
      },
    ],
  },
];

export const HOME_FAQS = FAQ_GROUPS[0].items.slice(0, 4);
