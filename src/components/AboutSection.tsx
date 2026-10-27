import therapistImg from "@/assets/therapist.jpg";

const AboutSection = () => {
  return (
    <section id="o-mnie" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={therapistImg}
                alt="Psychoterapeuta w gabinecie"
                className="w-full h-auto object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/50 -z-10" />
          </div>

          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              O mnie
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6 leading-snug">
              Bezpieczna przestrzeń
              <br />
              dla Twojego rozwoju
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jestem certyfikowaną psychoterapeutką z wieloletnim doświadczeniem
                w pracy z dorosłymi i rodzinami. Wierzę, że każdy człowiek nosi
                w sobie zasoby do zmiany — czasem potrzebuje jedynie bezpiecznej
                przestrzeni, aby je odkryć.
              </p>
              <p>
                W mojej pracy kieruję się zasadą pełnej akceptacji. Gabinet to
                miejsce, w którym możesz być sobą — bez oceniania, bez
                pośpiechu. Wspólnie szukamy zrozumienia dla Twoich
                doświadczeń i budujemy drogę do lepszego samopoczucia.
              </p>
              <p>
                Pracuję w nurcie integracyjnym, łącząc podejście
                psychodynamiczne z elementami terapii systemowej i
                poznawczo-behawioralnej.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
