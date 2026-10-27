import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZNANYLEKARZ_URL = "https://www.znanylekarz.pl";

const prices = [
  { name: "Konsultacja wstępna", duration: "50 min", price: "200 zł" },
  { name: "Sesja indywidualna", duration: "50 min", price: "200 zł" },
  { name: "Sesja rodzinna", duration: "80 min", price: "300 zł" },
];

const PricingSection = () => {
  return (
    <section id="cennik" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Cennik
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            Przejrzyste zasady
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
            {prices.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center justify-between p-6 lg:p-8 ${
                  i !== prices.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {item.duration}
                  </div>
                </div>
                <span className="text-2xl font-heading font-bold text-primary">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
              <MapPin className="text-accent-foreground" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Gabinet stacjonarny</h3>
              <p className="text-sm text-muted-foreground mt-1">
                ul. Przykładowa 12/3, 60-001 Poznań · Spotkania odbywają się na miejscu w kameralnym gabinecie.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <a href={ZNANYLEKARZ_URL} target="_blank" rel="noopener noreferrer">
                Umów wizytę na ZnanyLekarz
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
