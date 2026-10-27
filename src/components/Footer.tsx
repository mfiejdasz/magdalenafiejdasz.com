const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-heading font-semibold text-foreground">Psychoterapia</span>
        <span>© {new Date().getFullYear()} Wszelkie prawa zastrzeżone</span>
      </div>
    </footer>
  );
};

export default Footer;
