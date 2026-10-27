export const siteConfig = {
  bookingUrl: "https://www.znanylekarz.pl",
  phone: "+48 123 456 789",
  email: "kontakt@psychoterapia.pl",
  address: {
    street: "ul. Przykładowa 12/3",
    postalCode: "60-001",
    city: "Poznań",
  },
};

export const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
export const emailHref = `mailto:${siteConfig.email}`;
