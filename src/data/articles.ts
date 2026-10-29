export interface Article {
  title: string;
  source: string;
  year?: number;
  url?: string;
}

export const pressArticles: Article[] = [
  {
    title: "Ekoterapia w pracy z młodzieżą: co daje kontakt z naturą",
    source: "Strefa Psychologii",
    url: "https://strefa-psychologii.pl/metody-terapii/ekoterapia-w-pracy-z-mlodzieza-co-daje-kontakt-z-natura-271.html",
  },
  {
    title: "Lęk przed bliskością u młodzieży – potrzeba więzi a bycie „cool”",
    source: "Strefa Psychologii",
    url: "https://strefa-psychologii.pl/mlodziez/lek-przed-bliskoscia-u-mlodziezy-potrzeba-wiezi-a-bycie-cool-284.html",
  },
  {
    title: "Nowe życie w stajni",
    source: "Charaktery",
    url: "https://charaktery.eu/artykul/nowe-zycie-w-stajni",
  },
];

export const journalPublications: Article[] = [
  {
    title: "Wpływ hipoterapii na poziom agresji wychowanków placówki resocjalizacyjnej",
    source: "Polskie Towarzystwo Hipoterapeutyczne",
    year: 2015,
  },
  {
    title: "Wpływ kontaktu z koniem na reakcje emocjonalne i zachowania młodzieży niedostosowanej społecznie",
    source: "Polskie Towarzystwo Hipoterapeutyczne",
    year: 2012,
  },
  {
    title: "Znaczenie kontaktu z koniem w terapii młodzieży niedostosowanej społecznie",
    source: "Polskie Towarzystwo Hipoterapeutyczne",
    year: 2010,
  },
];

export const journalPublicationsUrl = "https://pthip.org.pl/oferta/publikacje";
