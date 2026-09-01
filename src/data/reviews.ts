import { L, type L as Loc } from "@/i18n/l";

export type Review = {
  name: string;
  meta: Loc;
  quote: Loc;
  service: Loc;
};

export const REVIEWS: Review[] = [
  {
    name: "Elena M.",
    meta: L("Brooklyn, NY · I-130 / I-485", "Бруклин, NY · I-130 / I-485"),
    quote: L(
      "They explained everything in Russian, so it was easy to follow. The documents were prepared in English, neatly and as a complete set. I liked that nobody promised anything in advance or applied pressure — they just did their work, calmly and precisely.",
      "Все объясняли по-русски, поэтому было легко разобраться. Документы подготовили на английском аккуратно и в полном комплекте. Понравилось, что никто ничего не обещал заранее и не давил — просто спокойно и четко сделали свою работу.",
    ),
    service: L("Immigration forms", "Иммиграционные формы"),
  },
  {
    name: "Andriy K.",
    meta: L("New Jersey · translations", "Нью-Джерси · переводы"),
    quote: L(
      "I needed marriage and birth certificates translated. Everything was done in two days, including the stamps and the layout. I filed — and there were no additional requests on the translations.",
      "Нужно было перевести свидетельства о браке и рождении. Всё сделали за два дня, включая штампы и оформление. Подал документы — по переводам никаких дополнительных запросов не было.",
    ),
    service: L("Certified translations", "Заверенный перевод"),
  },
  {
    name: "Maria S.",
    meta: L("Online · N-400", "Онлайн · N-400"),
    quote: L(
      "I am in Florida, so everything was done remotely — I sent the documents by email, and we discussed the details on a short call. I especially liked that they marked the boundaries right away: what DOCROOM can help with on the documents, and which questions already need a consultation with an attorney.",
      "Я во Флориде, поэтому всё делали дистанционно — документы отправила по email, детали обсудили на коротком звонке. Особенно понравилось, что сразу обозначили границы: с чем DOCROOM может помочь по документам, а какие вопросы уже требуют консультации адвоката.",
    ),
    service: L("Naturalization", "Натурализация"),
  },
  {
    name: "Dmitry P.",
    meta: L("Queens, NY · notary + package", "Квинс, NY · нотариус + пакет"),
    quote: L(
      "Came in, signed, left with a ready envelope. The checklist on a single page was more useful than a long lecture.",
      "Пришёл, подписал, ушёл с готовым конвертом. Чек-лист на одной странице оказался полезнее длинной лекции.",
    ),
    service: L("Notary", "Нотариус"),
  },
  {
    name: "Olga V.",
    meta: L("Outside the U.S. · I-589 statement", "За пределами США · заявление I-589"),
    quote: L(
      "They refused to “improve” facts I did not have — which is exactly why I trusted them. The English text is mine, only clearer.",
      "Они отказались «улучшать» факты, которых у меня не было — именно поэтому я им доверилась. Английский текст — мой, только яснее.",
    ),
    service: L("Personal statement", "Личное заявление"),
  },
  {
    name: "Sergei L.",
    meta: L("Manhattan · SSA / bank package", "Манхэттен · SSA / банковский пакет"),
    quote: L(
      "The first months in New York are noisy. They put the bank and Social Security papers in order so I could walk in once.",
      "Первые месяцы в Нью-Йорке — шумные. Они привели в порядок бумаги для банка и Social Security, чтобы я сходил один раз.",
    ),
    service: L("Adaptation", "Адаптация"),
  },
];
