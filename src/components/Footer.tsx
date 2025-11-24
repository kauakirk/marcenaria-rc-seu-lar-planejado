import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              npm
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
                href="tel:+553192518560"
                className="hover:text-primary transition-colors"
              >
                (31) 9251-8560
              </a>
            </p>
            <p className="text-white/60 text-sm mb-1">
              R. Argentina, 273 - Novo Boa Vista
            </p>
            <p className="text-white/60 text-sm mb-2">Contagem - MG</p>
            <a
              href="https://www.instagram.com/rc_marcenaria_bh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              @rc_marcenaria_bh
            </a>
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
