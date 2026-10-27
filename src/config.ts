export const siteConfig = {
  name: "Magdalena Fiejdasz",
  businessName: "Psychoterapia Magdalena Fiejdasz",
  author: {
    name: "pawelek.dev",
    url: "https://pawelek.dev",
  },
  phone: "+48 123 456 789",
  email: "kontakt@psychoterapia.pl",
  address: {
    street: "ul. Przykładowa 12/3",
    postalCode: "00-000",
    city: "Miasto",
  },
};

export const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
export const emailHref = `mailto:${siteConfig.email}`;
