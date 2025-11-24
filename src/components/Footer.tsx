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
            <p className="text-white/80 mb-2">
              <a
<<<<<<< HEAD
                href="tel:+553192518560"
=======
                href="tel:+5531925185560"
>>>>>>> 99fc4a57b5b5911ab255614cbaccafe8b8c77d0c
                className="hover:text-primary transition-colors"
              >
                (31) 9251-8560
              </a>
            </p>
            <p className="text-white/60 text-sm mb-1">
              R. Argentina, 273 - Novo Boa Vista
            </p>
            <p className="text-white/60 text-sm">
              Contagem - MG
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Marcenaria RC. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
