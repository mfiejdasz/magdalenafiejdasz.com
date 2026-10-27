import { Phone, MessageCircle, Armchair, Route } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Kontakt",
    description: "Zadzwoń lub umów się online przez ZnanyLekarz. Odpowiem na Twoje pierwsze pytania.",
  },
  {
    icon: MessageCircle,
    title: "Pierwsza rozmowa",
    description: "Spotkanie trwa ok. 50 minut. Poznajemy się, rozmawiamy o Twoich potrzebach i oczekiwaniach.",
  },
  {
    icon: Armchair,
    title: "Bezpieczna przestrzeń",
    description: "Nie musisz się przygotowywać. Wystarczy, że przyjdziesz taką/takim, jaką/jakim jesteś.",
  },
  {
    icon: Route,
    title: "Plan terapii",
    description: "Wspólnie ustalamy cele i częstotliwość spotkań. Ty decydujesz o swoim tempie.",
  },
];

const FirstVisitSection = () => {
  return (
    <section id="pierwsza-wizyta" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Pierwsza wizyta
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Czego się spodziewać?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Wiem, że pierwszy krok bywa najtrudniejszy. Oto jak wygląda
            droga do pierwszego spotkania.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <step.icon className="text-accent-foreground" size={28} />
              </div>
              <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 text-xs font-bold text-primary/40 font-body">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstVisitSection;
