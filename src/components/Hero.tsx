import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/553192518560", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Móveis planejados de luxo - Marcenaria RC em Belo Horizonte"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-scale-in">
            <span className="text-primary font-semibold text-sm">
              Belo Horizonte e Região Metropolitana
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Móveis Planejados Sob Medida
            <span className="block text-primary">em Belo Horizonte</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Transforme seu ambiente com móveis planejados feitos sob medida,
            unindo <span className="text-primary font-semibold">qualidade</span>
            , <span className="text-primary font-semibold">estilo</span> e{" "}
            <span className="text-primary font-semibold">funcionalidade</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg group"
            >
              Solicite seu Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-lg border-white text-white hover:bg-white hover:text-secondary"
            >
              Conheça nosso trabalho
            </Button>
          </div>

          <p className="text-white/80 mt-8 text-sm">
            Atendemos Belo Horizonte e toda a região metropolitana
          </p>
        </div>
      </div>

      {/* Scroll Indicator removed per request */}
    </section>
  );
};

export default Hero;
