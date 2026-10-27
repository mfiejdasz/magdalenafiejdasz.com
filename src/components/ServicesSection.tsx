import { User, Users } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Terapia dla dorosłych",
    description:
      "Indywidualne spotkania pomagające zrozumieć siebie, radzić sobie z lękiem, depresją, stresem i trudnościami w relacjach. Pracujemy w Twoim tempie.",
    points: ["Lęk i ataki paniki", "Depresja i obniżony nastrój", "Kryzysy życiowe", "Trudności w relacjach"],
  },
  {
    icon: Users,
    title: "Terapia dla rodzin",
    description:
      "Wspólne sesje dla rodzin, które chcą poprawić komunikację, rozwiązać konflikty i odbudować bliskość. Bezpieczna przestrzeń dla każdego członka rodziny.",
    points: ["Konflikty rodzinne", "Problemy z komunikacją", "Wsparcie w kryzysie", "Budowanie więzi"],
  },
];

const ServicesSection = () => {
  return (
    <section id="oferta" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Oferta
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            Jak mogę Ci pomóc?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <service.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
