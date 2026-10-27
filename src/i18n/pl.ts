export const pl = {
  meta: {
    title: "Psychoterapia – Znajdź spokój i zrozumienie",
    description:
      "Profesjonalna pomoc psychologiczna dla dorosłych i rodzin w Poznaniu. Bezpieczna przestrzeń, w której możesz być sobą.",
  },
  brand: "Psychoterapia",
  nav: {
    menu: "Menu",
    about: "O mnie",
    services: "Oferta",
    firstVisit: "Pierwsza wizyta",
    pricing: "Cennik",
    contact: "Kontakt",
    book: "Umów wizytę",
  },
  languageSwitch: {
    text: "EN",
    label: "English version",
  },
  hero: {
    eyebrow: "Psychoterapia · Poznań",
    titleLine: "Znajdź spokój",
    titleHighlight: "i zrozumienie",
    text: "Profesjonalna pomoc psychologiczna dla dorosłych i rodzin. Bezpieczna przestrzeń, w której możesz być sobą.",
    cta: "Umów wizytę",
    more: "Dowiedz się więcej",
  },
  about: {
    eyebrow: "O mnie",
    imageAlt: "Psychoterapeuta w gabinecie",
    titleLines: ["Bezpieczna przestrzeń", "dla Twojego rozwoju"],
    paragraphs: [
      "Jestem certyfikowaną psychoterapeutką z wieloletnim doświadczeniem w pracy z dorosłymi i rodzinami. Wierzę, że każdy człowiek nosi w sobie zasoby do zmiany — czasem potrzebuje jedynie bezpiecznej przestrzeni, aby je odkryć.",
      "W mojej pracy kieruję się zasadą pełnej akceptacji. Gabinet to miejsce, w którym możesz być sobą — bez oceniania, bez pośpiechu. Wspólnie szukamy zrozumienia dla Twoich doświadczeń i budujemy drogę do lepszego samopoczucia.",
      "Pracuję w nurcie integracyjnym, łącząc podejście psychodynamiczne z elementami terapii systemowej i poznawczo-behawioralnej.",
    ],
  },
  services: {
    eyebrow: "Oferta",
    title: "Jak mogę Ci pomóc?",
    items: [
      {
        title: "Terapia dla dorosłych",
        description:
          "Indywidualne spotkania pomagające zrozumieć siebie, radzić sobie z lękiem, depresją, stresem i trudnościami w relacjach. Pracujemy w Twoim tempie.",
        points: ["Lęk i ataki paniki", "Depresja i obniżony nastrój", "Kryzysy życiowe", "Trudności w relacjach"],
      },
      {
        title: "Terapia dla rodzin",
        description:
          "Wspólne sesje dla rodzin, które chcą poprawić komunikację, rozwiązać konflikty i odbudować bliskość. Bezpieczna przestrzeń dla każdego członka rodziny.",
        points: ["Konflikty rodzinne", "Problemy z komunikacją", "Wsparcie w kryzysie", "Budowanie więzi"],
      },
    ],
  },
  firstVisit: {
    eyebrow: "Pierwsza wizyta",
    title: "Czego się spodziewać?",
    intro: "Wiem, że pierwszy krok bywa najtrudniejszy. Oto jak wygląda droga do pierwszego spotkania.",
    steps: [
      {
        title: "Kontakt",
        description: "Zadzwoń lub umów się online przez ZnanyLekarz. Odpowiem na Twoje pierwsze pytania.",
      },
      {
        title: "Pierwsza rozmowa",
        description: "Spotkanie trwa ok. 50 minut. Poznajemy się, rozmawiamy o Twoich potrzebach i oczekiwaniach.",
      },
      {
        title: "Bezpieczna przestrzeń",
        description: "Nie musisz się przygotowywać. Wystarczy, że przyjdziesz taką/takim, jaką/jakim jesteś.",
      },
      {
        title: "Plan terapii",
        description: "Wspólnie ustalamy cele i częstotliwość spotkań. Ty decydujesz o swoim tempie.",
      },
    ],
  },
  pricing: {
    eyebrow: "Cennik",
    title: "Przejrzyste zasady",
    items: [
      { name: "Konsultacja wstępna", duration: "50 min", price: "200 zł" },
      { name: "Sesja indywidualna", duration: "50 min", price: "200 zł" },
      { name: "Sesja rodzinna", duration: "80 min", price: "300 zł" },
    ],
    officeTitle: "Gabinet stacjonarny",
    officeText: "Spotkania odbywają się na miejscu w kameralnym gabinecie.",
    cta: "Umów wizytę na ZnanyLekarz",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy",
    address: "Adres",
    phone: "Telefon",
    email: "E-mail",
    cta: "Umów wizytę na ZnanyLekarz",
  },
  footer: {
    rights: "Wszelkie prawa zastrzeżone",
  },
  notFound: {
    title: "404",
    text: "Nie znaleziono strony",
    back: "Wróć na stronę główną",
  },
};

export type Dictionary = typeof pl;
