import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZNANYLEKARZ_URL = "https://www.znanylekarz.pl";

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            Porozmawiajmy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map placeholder */}
          <div className="rounded-3xl overflow-hidden bg-muted h-80 lg:h-auto min-h-[320px] flex items-center justify-center">
            <iframe
              title="Lokalizacja gabinetu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.397!2d16.9252!3d52.4064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI0JzIzLjAiTiAxNsKwNTUnMzAuNyJF!5e0!3m2!1spl!2spl!4v1"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Adres</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    ul. Przykładowa 12/3<br />60-001 Poznań
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Telefon</h3>
                  <p className="text-muted-foreground text-sm mt-1">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">E-mail</h3>
                  <p className="text-muted-foreground text-sm mt-1">kontakt@psychoterapia.pl</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <a href={ZNANYLEKARZ_URL} target="_blank" rel="noopener noreferrer">
                  Umów wizytę na ZnanyLekarz
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
