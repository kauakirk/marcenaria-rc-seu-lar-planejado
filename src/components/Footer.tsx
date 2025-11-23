const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-white">Marcenaria</span>{" "}
              <span className="text-primary">RC</span>
            </h3>
            <p className="text-white/60 text-sm">
              Móveis Planejados em Belo Horizonte
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/80 mb-1">
              <a
                href="tel:+5531926185560"
                className="hover:text-primary transition-colors"
              >
                (31) 92618-5560
              </a>
            </p>
            <p className="text-white/60 text-sm">
              Belo Horizonte e Região Metropolitana
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Marcenaria RC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
