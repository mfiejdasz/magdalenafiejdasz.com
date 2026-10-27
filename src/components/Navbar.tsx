import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const ZNANYLEKARZ_URL = "https://www.znanylekarz.pl";

const navLinks = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Oferta", href: "#oferta" },
  { label: "Pierwsza wizyta", href: "#pierwsza-wizyta" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-6 lg:px-0">
        <a href="#" className="font-heading text-xl font-semibold text-foreground tracking-tight">
          Psychoterapia
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button variant="nav" size="sm" asChild>
            <a href={ZNANYLEKARZ_URL} target="_blank" rel="noopener noreferrer">
              Umów wizytę
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 animate-fade-in">
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href={ZNANYLEKARZ_URL} target="_blank" rel="noopener noreferrer">
                Umów wizytę
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
