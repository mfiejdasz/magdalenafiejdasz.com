import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const ZNANYLEKARZ_URL = "https://www.znanylekarz.pl";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />

      <div className="relative z-10 container-narrow section-padding w-full">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Psychoterapia · Poznań
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight mb-6">
            Znajdź spokój
            <br />
            <span className="text-primary">i zrozumienie</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Profesjonalna pomoc psychologiczna dla dorosłych i rodzin.
            Bezpieczna przestrzeń, w której możesz być sobą.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={ZNANYLEKARZ_URL} target="_blank" rel="noopener noreferrer">
                Umów wizytę
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#o-mnie">Dowiedz się więcej</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
