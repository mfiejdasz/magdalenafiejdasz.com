export interface Article {
  title: string;
  titleEn: string;
  source: string;
  sourceEn?: string;
  year?: number;
  url?: string;
}

export const pressArticles: Article[] = [
  {
    title: "Ekoterapia w pracy z młodzieżą: co daje kontakt z naturą",
    titleEn: "Ecotherapy in Youth Work: The Benefits of Connecting with Nature",
    source: "Strefa Psychologii",
    url: "https://strefa-psychologii.pl/metody-terapii/ekoterapia-w-pracy-z-mlodzieza-co-daje-kontakt-z-natura-271.html",
  },
  {
    title: "Lęk przed bliskością u młodzieży – potrzeba więzi a bycie „cool”",
    titleEn: "Fear of Intimacy in Adolescents: The Need for Attachment vs. Being “Cool”",
    source: "Strefa Psychologii",
    url: "https://strefa-psychologii.pl/mlodziez/lek-przed-bliskoscia-u-mlodziezy-potrzeba-wiezi-a-bycie-cool-284.html",
  },
  {
    title: "Nowe życie w stajni",
    titleEn: "A New Life in the Stable",
    source: "Charaktery",
    url: "https://charaktery.eu/artykul/nowe-zycie-w-stajni",
  },
];

export const journalPublications: Article[] = [
  {
    title: "Wpływ hipoterapii na poziom agresji wychowanków placówki resocjalizacyjnej",
    titleEn: "The Influence of hippotherapy on the aggression level of youth in Youth Educational Centres",
    source: "Polskie Towarzystwo Hipoterapeutyczne",
    sourceEn: "Polish Equine Facilitated Therapy Association",
    year: 2015,
  },
  {
    title: "Wpływ kontaktu z koniem na reakcje emocjonalne i zachowania młodzieży niedostosowanej społecznie",
    titleEn: "The Influence of equine contact on emotional responses and behaviors in socially maladjusted adolescent",
    source: "Polskie Towarzystwo Hipoterapeutyczne",
    sourceEn: "Polish Equine Facilitated Therapy Association",
    year: 2012,
  },
  {
    title: "Znaczenie kontaktu z koniem w terapii młodzieży niedostosowanej społecznie",
    titleEn: "The significance of horse contact in the therapy of socially maladjusted youth",
    source: "Polskie Towarzystwo Hipoterapeutyczne",
    sourceEn: "Polish Equine Facilitated Therapy Association",
    year: 2010,
  },
];

export const journalPublicationsUrl = "https://pthip.org.pl/oferta/publikacje";
