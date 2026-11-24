import type { Dictionary, PrivacySection } from "./pl";

export const en: Dictionary = {
  meta: {
    title: "Psychotherapy – a place for your story",
    description:
      "Online psychotherapy for adults. A safe, friendly atmosphere and support in discovering your own path.",
  },
  brand: "Psychotherapy",
  nav: {
    menu: "Menu",
    about: "About me",
    services: "Services",
    articles: "Articles",
    news: "News",
    contact: "Contact",
  },
  languageSwitch: {
    text: "PL",
    label: "Wersja polska",
  },
  hero: {
    title: "For me, psychotherapy is accompanying someone as they discover their own path,",
    intro:
      "sometimes wild and winding. It is a search for one's own truth, an understanding of oneself, acceptance. For some, the fruit of this path may be relief and a sense of liberation; for others, a desire to make changes.",
    emphasis: "As many paths, so many stories and needs.",
    closing:
      "As a psychotherapist, I follow the client along this path, with curiosity and attentiveness, in a safe, friendly atmosphere, with one shared goal – improving quality of life.",
    cta: "Write to me",
    more: "Learn more",
  },
  about: {
    eyebrow: "About me",
    imageAlt: "Magdalena Fiejdasz, psychotherapist",
    title: "Magdalena Fiejdasz",
    role: "Psychotherapist · psychologist · educator · hippotherapist · canine-assisted therapist",
    paragraphs: [
      "For over 20 years I have been supporting people who find themselves at a critical point in life. I work in an integrative approach based on humanistic-experiential psychotherapy.",
      "Out of my love for nature, I invite animals – horses and dogs – and nature itself – forests, mountains, the ocean – into my work. I believe nature supports the healing process, which is why, besides therapy sessions, I organise personal development retreats in beautiful natural places.",
    ],
    facts: [
      { value: "20+", label: "years of experience" },
      { value: "Online", label: "work with people 18+" },
      { value: "Supervision", label: "ongoing supervision" },
    ],
    education: {
      title: "Education",
      items: [
        "4-year INTRA School of Psychotherapy",
        "Psychology at SWPS University in Warsaw",
        "Social rehabilitation pedagogy at the Maria Grzegorzewska University in Warsaw",
        "Movement recreation instructor course with a specialisation in hippotherapy (member of the Polish Hippotherapy Society)",
        "Canine-assisted therapy course",
        "Regular participation in specialist trainings",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        "Individual psychotherapy for adults",
        "Support groups for women who have experienced domestic violence at the Mederi Foundation",
        "Work with teenagers in foster care at the Warsaw Family Support Centre – individual and group support, therapeutic camps",
        "Work with youth with behavioural disorders (in Youth Educational Centres, Youth Sociotherapy Centres and Special Educational Centres) – sociotherapy, hippotherapy, canine-assisted therapy, art therapy and wilderness therapy",
        "Workshops and trainings, including for SWPS University in Warsaw and the Polish Hippotherapy Society",
      ],
      moreLabel: "See more",
      moreItems: [
        "Talks at international conferences, including the 14th Congress of Therapeutic Horse Riding in Athens – lecture “The influence of hippotherapy on emotional response and behaviour of under-aged in Youth Borstal”",
        {
          before: "Organising and running violence prevention projects, e.g. “Przemoc ma Twarz” for the poDRUGIE Foundation and the project “",
          linkText: "Resocjalizacja przez merdanie | Kundellos",
          after: "” for the Youth Educational Centre",
          url: "https://kundellos.pl/2016/04/17/resocjalizacja-przez-merdanie/",
        },
        "Organising trips for young people and week-long development workshops for adults",
        "Articles on psychological topics in the press",
      ],
    },
  },
  services: {
    eyebrow: "Services",
    title: "I invite people who:",
    items: [
      {
        title: "Crisis and difficult emotions",
        points: [
          "are going through a crisis in life",
          "experience depressive states",
          "experience anxiety",
          "experience low self-esteem",
        ],
      },
      {
        title: "Relationships",
        points: [
          "experience difficulties in relationships with other people",
          "experience difficulties in their relationship with themselves",
        ],
      },
      {
        title: "Change and new stages",
        points: [
          "experience difficulties adapting",
          "feel professional burnout and lost",
          "are young adults on the threshold of independence",
          "live abroad and face the difficulties that come with it",
        ],
      },
      {
        title: "Growth",
        points: [
          "want to better understand themselves and their choices",
          "need to strengthen their resources and believe that a fulfilling life is possible",
        ],
      },
    ],
  },
  articles: {
    eyebrow: "Articles",
    title: "Selected publications about my work",
    pressTitle: "Press and online media",
    journalTitle: "Trade journal",
    journalLink: "All publications at Polish Equine Facilitated Therapy Association (PTHiP)",
    openLabel: "Opens in a new tab",
  },
  news: {
    eyebrow: "News",
    title: "Training and events",
    intro: "Workshops, retreats and conferences I take part in or lead.",
    upcomingTitle: "Upcoming",
    pastTitle: "Completed",
    types: {
      retreat: "Retreat",
      conference: "Conference",
      workshop: "Workshop",
      training: "Training",
    },
    moreInfo: "More information",
    openLabel: "Opens in a new tab",
  },
  contact: {
    title: "You are welcome to get in touch",
    form: {
      name: "Full name",
      email: "E-mail",
      phone: "Phone",
      optional: "optional",
      message: "Message",
      messagePlaceholder: "Write a few sentences about yourself",
      consentBefore: "I consent to the processing of my personal data in order to receive a reply to my message, in accordance with the",
      consentLink: "Privacy Policy",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you for your message. I will reply as soon as possible.",
      error: "The message could not be sent. Please try again in a moment.",
    },
  },
  footer: {
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    credit: "Made by",
  },
  privacy: {
    title: "Privacy Policy",
    metaTitle: "Privacy Policy – Magdalena Fiejdasz",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [
          "The controller of your personal data is Magdalena Fiejdasz, running a business under the name Magdalena Fiejdasz Psychoterapia, ul. Bora-Komorowskiego 16 m. 45, 03-982 Warsaw, Poland, tax ID (NIP): 113-199-93-64.",
          "For any matters concerning personal data you can contact me by e-mail: magdalena.fiejdasz@gmail.com.",
        ],
      },
      {
        heading: "2. What data I process",
        paragraphs: ["I process the data you provide in the contact form on this website:"],
        items: [
          "first and last name,",
          "e-mail address,",
          "phone number (if you provide it),",
          "the content of your message,",
          "the language version of the website from which the message was sent.",
        ],
      },
      {
        heading: "3. Purpose and legal basis",
        paragraphs: [
          "I process the data to reply to your message and to carry on correspondence. The legal basis is your consent (Art. 6(1)(a) GDPR), given by ticking the checkbox in the form.",
          "If you include information about your health in your message, I process it on the basis of your consent (Art. 9(2)(a) GDPR). You are not required to provide it. We can discuss the details of your situation during a conversation.",        ],
      },
      {
        heading: "4. Providing data is voluntary",
        paragraphs: [
          "Providing data is voluntary, but your name, e-mail address and the content of the message are necessary for me to reply. The phone number is optional.",
        ],
      },
      {
        heading: "5. Retention period",
        paragraphs: [
          "I keep messages from the form for 12 months after the correspondence ends, and then delete them. If you withdraw your consent earlier, I will delete them without delay.",
        ],
      },
      {
        heading: "6. Recipients of data",
        paragraphs: ["Data from the form is passed to the providers of the technical services I use:"],
        items: [
          "Netlify, Inc. – website hosting and handling of the contact form (including the Akismet spam filter),",
          "Google Ireland Limited – e-mail service (Gmail).",
        ],
        after: [
          "Messages from the form are stored on Netlify servers in the United States, i.e. outside the European Economic Area. The transfer is based on a European Commission adequacy decision (EU-U.S. Data Privacy Framework) or standard contractual clauses.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: ["You have the right to:"],
        items: [
          "access your data and receive a copy of it,",
          "rectify your data,",
          "erase your data,",
          "restrict processing,",
          "data portability,",
          "withdraw your consent at any time, without affecting the lawfulness of processing carried out before its withdrawal.",
        ],
        after: [
          "To exercise these rights, write to magdalena.fiejdasz@gmail.com.",
          "You also have the right to lodge a complaint with the President of the Personal Data Protection Office (Urząd Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warsaw, Poland).",
        ],
      },
      {
        heading: "8. Cookies and server logs",
        paragraphs: [
          "This website does not use cookies or analytics and marketing tools. The hosting provider may automatically record basic technical connection data (e.g. the IP address) in server logs to ensure the security and proper operation of the website.",
        ],
      },
    ] as PrivacySection[],
    back: "Back to the home page",
  },
  notFound: {
    title: "404",
    metaTitle: "Page not found – Magdalena Fiejdasz",
    text: "Page not found",
    back: "Back to the home page",
  },
};
