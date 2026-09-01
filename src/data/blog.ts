import { L, type L as Loc } from "@/i18n/l";

export type Article = {
  slug: string;
  title: Loc;
  excerpt: Loc;
  category: Loc;
  date: Loc;
  image: string;
  body: { heading?: Loc; paragraphs: Loc[]; quote?: Loc; note?: Loc }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "i-130-family-petition",
    title: L(
      "How to prepare Form I-130: family petition to USCIS",
      "Как подготовить форму I-130: петиция за родственника в USCIS",
    ),
    excerpt: L(
      "I-130 is the family petition most people start with — spouse, parent, child. What Form I-130 asks, which documents go with it, and how the USCIS file is assembled.",
      "I-130 — семейная петиция USCIS, с которой начинают чаще всего: супруг, родитель, ребёнок. Как заполнить форму I-130, какие документы к петиции за родственника и как собирается файл.",
    ),
    category: L("USCIS forms", "Формы USCIS"),
    date: L("August 20, 2026", "20 августа 2026"),
    image: "/images/blog-i130.jpg?v=3",
    body: [
      {
        paragraphs: [
          L(
            "Form I-130, Petition for Alien Relative, is the USCIS family petition used when a U.S. citizen or permanent resident asks the government to recognize a qualifying family relationship. It is not a visa and it is not a Green Card. It is the document that starts many family-based immigration files.",
            "Форма I-130, Petition for Alien Relative — это семейная петиция USCIS: гражданин США или постоянный житель просит признать родство. Это не виза и не Green Card. Это документ, с которого начинается большая часть семейной иммиграции.",
          ),
          L(
            "People search “how to fill I-130” because the form looks short and the supporting papers are not. Dates, names, prior marriages, and addresses have to match the civil documents. One mismatch and the file waits.",
            "«Как заполнить I-130» ищут потому, что сама форма кажется короткой, а пакет к ней — нет. Даты, имена, предыдущие браки и адреса должны совпадать с документами ЗАГСа. Одно расхождение — и файл стоит.",
          ),
        ],
      },
      {
        heading: L("What I-130 usually needs", "Что обычно нужно к I-130"),
        paragraphs: [
          L(
            "The petition itself, evidence of the petitioner’s status (passport, naturalization certificate, or Green Card), evidence of the relationship (marriage certificate, birth certificate), and certified translations if any paper is not in English. Prior divorces, name changes, and children’s certificates often belong in the same packet.",
            "Сама петиция, подтверждение статуса заявителя (паспорт, сертификат натурализации или Green Card), подтверждение родства (свидетельство о браке, о рождении) и заверенный перевод, если бумага не на английском. Часто в тот же пакет входят разводы, смена имени и свидетельства детей.",
          ),
          L(
            "If the relative is already in the United States, I-130 is often prepared together with I-485 and related forms. If the relative is abroad, the next steps usually sit with the National Visa Center and a consulate — a different stack of papers.",
            "Если родственник уже в США, I-130 часто готовят вместе с I-485 и смежными формами. Если родственник за границей, дальше обычно National Visa Center и консульство — уже другой комплект бумаг.",
          ),
        ],
      },
      {
        heading: L("How we prepare the petition", "Как мы готовим петицию"),
        paragraphs: [
          L(
            "You answer in Russian or English. We complete Form I-130 from the facts you provide, match them to the civil documents, and assemble the packet in an order a reviewer can follow. You read the PDF before anything is filed.",
            "Вы отвечаете по-русски или по-английски. Мы заполняем форму I-130 по вашим сведениям, сверяем их с документами ЗАГСа и собираем пакет в порядке, который можно проверить. PDF вы читаете до любой подачи.",
          ),
        ],
        quote: L(
          "The relationship has to be visible on paper — not assumed from the story.",
          "Родство должно быть видно по бумагам, а не по рассказу.",
        ),
      },
      {
        note: L(
          "This article is general information about document preparation. Whether I-130 is the right form for your family is a question of your facts and, where needed, licensed counsel.",
          "Статья носит общий характер о подготовке документов. Подходит ли I-130 вашей семье — вопрос ваших фактов и, если нужно, лицензированного специалиста.",
        ),
        paragraphs: [],
      },
    ],
  },
  {
    slug: "certified-translation-uscis",
    title: L(
      "Certified translation of documents for USCIS",
      "Заверенный перевод документов для USCIS",
    ),
    excerpt: L(
      "Birth certificate, marriage certificate, diploma. What a certified translation for USCIS must include — and what a casual translation is missing.",
      "Свидетельство о рождении, свидетельство о браке, диплом. Что должен содержать заверенный перевод для USCIS — и чего не хватает у обычного перевода.",
    ),
    category: L("Translations", "Переводы"),
    date: L("August 18, 2026", "18 августа 2026"),
    image: "/images/blog-translation.jpg?v=3",
    body: [
      {
        paragraphs: [
          L(
            "USCIS does not accept a document in Russian or Ukrainian without an English translation. The usual search is “certified translation for USCIS” or “заверенный перевод свидетельства о рождении”. The standard is simple: a complete translation plus a signed certification that the translator is competent and the translation is accurate.",
            "USCIS не принимает документ на русском или украинском без английского перевода. Обычно ищут «заверенный перевод для USCIS» или «перевод свидетельства о рождении». Стандарт простой: полный перевод и подпись переводчика, что он компетентен и перевод точный.",
          ),
          L(
            "A machine translation, a friend with good English, or a stamp without the certificate text is not the same thing. Reviewers look at names, stamps, seals, and handwritten notes. If those are skipped, the file is incomplete.",
            "Машинный перевод, знакомый с хорошим английским или печать без текста сертификата — это не то же самое. Смотрят имена, штампы, печати и рукописные пометки. Если их нет в переводе, файл неполный.",
          ),
        ],
      },
      {
        heading: L("Which papers are translated most often", "Какие бумаги переводят чаще всего"),
        paragraphs: [
          L(
            "Birth, marriage, divorce, and death certificates; name-change records; diplomas and transcripts; police certificates; court decrees; military IDs; and passports when a page must be shown in English. For immigration, the civil record is usually the first document in the stack.",
            "Свидетельства о рождении, браке, разводе и смерти; смена имени; дипломы и транскрипты; справки о судимости; судебные решения; военные билеты; страницы паспорта, если их нужно показать по-английски. Для иммиграции гражданская запись обычно первая в стопке.",
          ),
        ],
      },
      {
        heading: L("How we do the translation", "Как мы делаем перевод"),
        paragraphs: [
          L(
            "You send a clear scan. We translate the full page, including seals and marginal notes, prepare the translator’s certification, and return a PDF you can attach to I-130, I-485, N-400, or a consular packet. New York notarization of the certification is available when the receiving office asks for it.",
            "Вы присылаете читаемый скан. Переводим страницу целиком, включая печати и пометки, готовим сертификат переводчика и отдаём PDF, который можно приложить к I-130, I-485, N-400 или консульскому пакету. Нотариальное удостоверение в Нью-Йорке — если принимающая сторона его просит.",
          ),
        ],
      },
      {
        note: L(
          "Requirements differ by office. We follow the USCIS translation certification format and the instructions of the form you are filing.",
          "Требования отличаются по ведомствам. Мы следуем формату сертификата перевода USCIS и инструкциям той формы, которую вы подаёте.",
        ),
        paragraphs: [],
      },
    ],
  },
  {
    slug: "apostille-usa-russia-ukraine",
    title: L(
      "Apostille on documents from Russia and Ukraine for use in the United States",
      "Апостиль на документы из России и Украины для США",
    ),
    excerpt: L(
      "Apostille on a birth certificate, diploma, or New York vital record. Who affixes it in the U.S., Russia, Ukraine, and Belarus — and how the paper travels.",
      "Апостиль на свидетельство о рождении, диплом или запись ЗАГСа Нью-Йорка. Кто ставит апостиль в США, России, Украине и Беларуси — и как едет бумага.",
    ),
    category: L("Apostille", "Апостиль"),
    date: L("August 14, 2026", "14 августа 2026"),
    image: "/images/blog-apostille.jpg?v=3",
    body: [
      {
        paragraphs: [
          L(
            "An apostille is a government authentication under the Hague Convention. People search “апостиль на свидетельство о рождении”, “apostille USA”, “апостиль Россия”, “апостиль Украина” when a school, a court, USCIS, or a notary abroad will not take a plain copy.",
            "Апостиль — это государственное подтверждение по Гаагской конвенции. Ищут «апостиль на свидетельство о рождении», «apostille USA», «апостиль Россия», «апостиль Украина», когда школа, суд, USCIS или нотариус за границей не берут простую копию.",
          ),
          L(
            "DOCROOM does not issue apostilles. We prepare the request, check that the original is eligible, and organize filing with the competent authority — a U.S. secretary of state, a court, or the foreign ministry of the country that issued the record.",
            "DOCROOM апостиль не выдаёт. Мы готовим запрос, проверяем, что оригинал подходит, и организуем подачу в компетентный орган — secretary of state в США, суд или МИД страны, где запись выдана.",
          ),
        ],
      },
      {
        heading: L("U.S. document or a CIS document", "Американский документ или документ СНГ"),
        paragraphs: [
          L(
            "A New York vital record is apostilled in New York. A diploma issued in another state is apostilled in that state. A birth certificate from Ukraine or Russia is apostilled in the country of issue, then translated if it will be used in the United States.",
            "Нью-йоркскую актовую запись апостилируют в Нью-Йорке. Диплом другого штата — в том штате. Свидетельство из Украины или России — в стране выдачи, затем переводят, если документ пойдёт в США.",
          ),
          L(
            "The sequence matters. Apostille first, then translation — or translation with the apostille page included — depending on who will read the file. We name the order before you pay.",
            "Последовательность важна. Сначала апостиль, потом перевод — или перевод вместе со страницей апостиля — зависит от того, кто будет читать файл. Порядок называем до оплаты.",
          ),
        ],
      },
      {
        heading: L("Timelines", "Сроки"),
        paragraphs: [
          L(
            "A state apostille in the U.S. is often days to a few weeks. A foreign civil-registry apostille can take longer, especially if the record itself must be reissued. Carrier and government fees are separate from our preparation fee.",
            "Апостиль штата в США часто занимает от нескольких дней до нескольких недель. Апостиль иностранного ЗАГСа может быть дольше, особенно если саму запись нужно восстановить. Пошлины ведомства и перевозчика — отдельно от нашего гонорара за подготовку.",
          ),
        ],
      },
    ],
  },
  {
    slug: "nclex-rn-new-york-foreign-nurses",
    title: L(
      "NCLEX-RN in New York for nurses with a foreign diploma",
      "NCLEX-RN в Нью-Йорке для медсестёр с иностранным дипломом",
    ),
    excerpt: L(
      "NYSED RN license, credential verification, Pearson VUE, ATT, NCLEX-RN. How foreign-educated nurses assemble the New York file — including exam prep.",
      "Лицензия RN Нью-Йорк, credential verification, Pearson VUE, ATT, NCLEX-RN. Как медсестре с иностранным дипломом собрать файл в NYSED — включая подготовку к экзамену.",
    ),
    category: L("Nursing license", "Сестринская лицензия"),
    date: L("August 10, 2026", "10 августа 2026"),
    image: "/images/blog-nclex.jpg?v=3",
    body: [
      {
        paragraphs: [
          L(
            "Nurses educated in Ukraine, Russia, Belarus, Kazakhstan, or Uzbekistan often search “NCLEX RN New York”, “иностранная медсестра Нью-Йорк”, “NYSED RN”. New York does not automatically require a U.S. nursing degree. It reviews the foreign education and decides whether you may sit NCLEX-RN or NCLEX-PN.",
            "Медсёстры с образованием из Украины, России, Беларуси, Казахстана, Узбекистана ищут «NCLEX RN New York», «иностранная медсестра Нью-Йорк», «NYSED RN». Нью-Йорк не требует автоматически американский диплом. Он смотрит иностранное образование и решает, можно ли идти на NCLEX-RN или NCLEX-PN.",
          ),
          L(
            "The path is administrative before it is academic: NYSED application, verification of the diploma and transcript, sometimes TruMerit / CGFNS, then Pearson VUE registration, then Authorization to Test (ATT).",
            "Сначала административная часть, не учёба: заявление NYSED, подтверждение диплома и transcript, иногда TruMerit / CGFNS, затем регистрация Pearson VUE, затем Authorization to Test (ATT).",
          ),
        ],
      },
      {
        heading: L("What we organize", "Что мы организуем"),
        paragraphs: [
          L(
            "A reading of your diploma and licenses, a personal checklist, help with the NYSED application, coordination of credential verification, translations, Pearson VUE registration, follow-up until ATT — and preparation for the exam itself. You do not collect a dozen offices into one evening.",
            "Разбор диплома и лицензий, персональный checklist, помощь с заявлением NYSED, координация credential verification, переводы, регистрация Pearson VUE, сопровождение до ATT — и подготовка к самому экзамену. Вам не нужно собирать десяток ведомств за один вечер.",
          ),
        ],
        quote: L(
          "Ten minutes is enough to see which New York path your papers support.",
          "10 минут хватит, чтобы понять, какой нью-йоркский путь держат ваши бумаги.",
        ),
      },
      {
        heading: L("Endorsement from another state", "Если лицензия уже есть в другом штате"),
        paragraphs: [
          L(
            "If you already hold an RN or LPN license in another U.S. state, New York may be a licensure-by-endorsement file, not a first-time NCLEX file. The documents change. We name that before you pay for the wrong sequence.",
            "Если RN или LPN уже есть в другом штате США, Нью-Йорк может быть путём endorsement, а не первым NCLEX. Документы другие. Называем это до оплаты неверной последовательности.",
          ),
        ],
      },
      {
        note: L(
          "NYSED decides eligibility and the license. Pearson VUE runs the exam. We prepare the file, register you, and prepare you for the test.",
          "Допуск и лицензию решает NYSED. Экзамен проводит Pearson VUE. Мы готовим файл, регистрируем и готовим к тесту.",
        ),
        paragraphs: [],
      },
    ],
  },
  {
    slug: "how-to-move-to-usa-documents",
    title: L(
      "How to move to the United States: which documents to prepare first",
      "Как переехать в США: какие документы готовить заранее",
    ),
    excerpt: L(
      "How to immigrate to the USA: work visa, family petition, study. Which documents to prepare before you leave — diplomas, civil records, translations, apostilles.",
      "Как иммигрировать в США: рабочая виза, семейная петиция, учёба. Какие документы готовить до отъезда — дипломы, записи ЗАГСа, переводы, апостили.",
    ),
    category: L("Relocation", "Переезд"),
    date: L("August 6, 2026", "6 августа 2026"),
    image: "/images/blog-relocation.jpg?v=3",
    body: [
      {
        paragraphs: [
          L(
            "“How to move to the USA” is not one form. It is a set of lawful paths: work (H-1B, L-1, O-1 and others), family (I-130 and consular processing), study, business, Diversity Visa, humanitarian programs. Each path asks for its own documents.",
            "«Как переехать в США» — это не одна форма. Это набор законных путей: работа (H-1B, L-1, O-1 и другие), семья (I-130 и консульство), учёба, бизнес, Diversity Visa, гуманитарные программы. У каждого пути свой пакет документов.",
          ),
          L(
            "What you can do before a visa interview is the same in most cases: recover civil records, get apostilles, make certified translations, collect diplomas and transcripts, and put employment letters in a form an officer can read.",
            "Что можно сделать до собеседования на визу, почти всегда одно и то же: восстановить записи ЗАГСа, поставить апостили, сделать заверенные переводы, собрать дипломы и транскрипты, привести трудовые письма к виду, который можно прочитать.",
          ),
        ],
      },
      {
        heading: L("A practical pre-departure file", "Практический файл до отъезда"),
        paragraphs: [
          L(
            "Birth and marriage certificates, a certificate of no criminal record, diplomas with transcripts, military records if any, and a simple index of what you already hold. Missing papers are cheaper to request from home than from New York.",
            "Свидетельства о рождении и браке, справка об отсутствии судимости, дипломы с приложениями, военный билет если есть, и простой список того, что уже на руках. Недостающие бумаги дешевле запросить из дома, чем из Нью-Йорка.",
          ),
        ],
      },
      {
        heading: L("If you already chose the path", "Если путь уже выбран"),
        paragraphs: [
          L(
            "You choose the immigration category from your situation. We help turn that decision into documents: the USCIS form, the supporting stack, translations, apostille, and a packet you can file or hand to an attorney, employer, or university.",
            "Иммиграционную категорию выбираете вы, исходя из своей ситуации. Мы помогаем превратить это решение в документы: форму USCIS, комплект приложений, переводы, апостиль и пакет, который можно подать или отдать адвокату, работодателю, университету.",
          ),
        ],
      },
      {
        note: L(
          "This is a map of typical paperwork, not a choice of visa for you. Program rules change. Government agencies decide.",
          "Это карта типичных бумаг, а не выбор визы за вас. Правила программ меняются. Решения принимают ведомства.",
        ),
        paragraphs: [],
      },
    ],
  },
  {
    slug: "mobile-notary-new-york",
    title: L(
      "Mobile notary in New York: powers of attorney, affidavits, and home visits",
      "Нотариус Нью-Йорка на выезде: доверенности, заявления и заверение на дому",
    ),
    excerpt: L(
      "New York notary public, mobile notary, notarization of a power of attorney, parental consent, and certified copies. When we come to you — and what to bring.",
      "Нотариус Нью-Йорка, нотариус на выезде, заверение доверенности, согласие родителей, копии. Когда приезжаем к вам — и что взять с собой.",
    ),
    category: L("Notary", "Нотариус"),
    date: L("August 4, 2026", "4 августа 2026"),
    image: "/images/blog-notary.jpg?v=3",
    body: [
      {
        paragraphs: [
          L(
            "People search “mobile notary New York”, “нотариус Нью-Йорк на выезде”, “заверить доверенность в США” when a paper must be signed in front of a New York notary public: a power of attorney, an affidavit, parental consent for a child to travel, a certified copy, or a translator’s certification.",
            "Ищут «нотариус Нью-Йорк на выезде», «mobile notary New York», «заверить доверенность в США», когда бумагу нужно подписать при нотариусе штата Нью-Йорк: доверенность, заявление, согласие родителей на выезд ребёнка, заверенную копию или сертификат переводчика.",
          ),
          L(
            "A New York notary does not give legal advice and does not draft the document’s meaning. The notary identifies the signer, takes the acknowledgment or jurat, and completes the notarial certificate. We also organize the visit — at the studio, at home, or at an office.",
            "Нотариус Нью-Йорка не даёт юридических советов и не составляет смысл документа. Он удостоверяет личность, принимает acknowledgment или jurat и заполняет сертификат. Мы ещё организуем выезд — в кабинет, домой или в офис.",
          ),
        ],
      },
      {
        heading: L("What is most often notarized", "Что заверяют чаще всего"),
        paragraphs: [
          L(
            "Powers of attorney (including real estate and inheritance), spousal consents for a property sale, parental travel consents, affidavits, statements of life for a pension fund, and the certification on a translation. Bring government-issued photo ID. The document must be unsigned until the notary is present, unless the certificate type says otherwise.",
            "Доверенности (в том числе на недвижимость и наследство), супружеские согласия на сделку, согласия родителей на выезд, заявления, свидетельство о нахождении в живых для пенсионного фонда и сертификат перевода. Нужен документ с фото. Бумагу не подписывают заранее, пока нотариус не на месте — если тип сертификата не говорит иное.",
          ),
        ],
      },
      {
        heading: L("Studio, online, or a visit", "Кабинет, онлайн или выезд"),
        paragraphs: [
          L(
            "In New York we work in person. We also travel outside the city; travel costs are quoted before the appointment is confirmed. Remote online notarization is a separate question of state law — we will not promise a remote act the statute does not allow.",
            "В Нью-Йорке работаем лично. Выезжаем и за пределы города; командировочные называем до подтверждения. Удалённое онлайн-заверение — отдельный вопрос закона штата: не обещаем акт, который статут не разрешает.",
          ),
        ],
      },
    ],
  },
  {
    slug: "n-400-naturalization",
    title: L(
      "Form N-400: naturalization and U.S. citizenship application",
      "Форма N-400: натурализация и гражданство США",
    ),
    excerpt: L(
      "N-400 naturalization, citizenship application, Green Card holders. Which documents usually go with Form N-400 and how the packet is prepared.",
      "N-400 натурализация, заявление на гражданство США, держатели Green Card. Какие документы обычно идут с формой N-400 и как готовится пакет.",
    ),
    category: L("USCIS forms", "Формы USCIS"),
    date: L("August 1, 2026", "1 августа 2026"),
    image: "/images/blog-n400.jpg?v=3",
    body: [
      {
        paragraphs: [
          L(
            "Form N-400 is the USCIS application for naturalization — the step from permanent resident to U.S. citizenship. Searches look like “N-400 naturalization”, “заявление на гражданство США”, “как заполнить N-400”, “гражданство после Green Card”.",
            "Форма N-400 — заявление USCIS на натурализацию: шаг от постоянного жителя к гражданству США. Ищут «N-400 натурализация», «заявление на гражданство США», «как заполнить N-400», «гражданство после Green Card».",
          ),
          L(
            "The form is long because it reconstructs residence, trips, tax filing, marital history, and children. The supporting stack is usually shorter than people fear: Green Card, proof of residence, tax transcripts where relevant, and certified translations of foreign civil records.",
            "Форма длинная, потому что восстанавливает проживание, поездки, налоги, браки и детей. Пакет приложений обычно короче, чем кажется: Green Card, подтверждение адреса, налоговые transcripts где нужно и заверенные переводы иностранных записей ЗАГСа.",
          ),
        ],
      },
      {
        heading: L("What we prepare", "Что мы готовим"),
        paragraphs: [
          L(
            "We complete Form N-400 from the facts you provide, in English, including the travel table and family pages. You may answer in Russian. You review the PDF before filing. Related helper forms — N-600, N-565 — are a separate request if you need them.",
            "Заполняем форму N-400 по вашим сведениям, на английском, включая таблицу поездок и семейные страницы. Отвечать можно по-русски. PDF вы читаете до подачи. Смежные формы N-600 и N-565 — отдельный запрос, если они нужны.",
          ),
        ],
        quote: L(
          "Citizenship is a government decision. The application is a document we can put in order.",
          "Гражданство — решение ведомства. Заявление — документ, который можно привести в порядок.",
        ),
      },
      {
        heading: L("After the form", "После формы"),
        paragraphs: [
          L(
            "Biometrics, an interview, and the oath are USCIS stages. We do not attend the interview as an attorney. We do prepare the file so the answers on N-400 match the documents in the packet.",
            "Биометрия, интервью и присяга — этапы USCIS. На интервью как адвокат мы не ходим. Файл готовим так, чтобы ответы в N-400 совпадали с документами в пакете.",
          ),
        ],
      },
      {
        note: L(
          "Eligibility for naturalization depends on your residence, absences, and other facts. This article is about preparing Form N-400, not about deciding whether you qualify.",
          "Право на натурализацию зависит от проживания, отъездов и других фактов. Статья о подготовке формы N-400, а не о том, подходите ли вы.",
        ),
        paragraphs: [],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
