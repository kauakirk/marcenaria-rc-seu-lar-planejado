import { Button } from "./ui/button";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
<<<<<<< HEAD
    window.open("https://wa.me/553192518560", "_blank");
=======
    window.open("https://wa.me/5531925185560", "_blank");
>>>>>>> 99fc4a57b5b5911ab255614cbaccafe8b8c77d0c
  };

  return (
    <section
      id="contact"
      className="py-20 bg-secondary text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fale <span className="text-primary">Conosco</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Tem um projeto em mente? Envie uma mensagem e responderemos o mais
              rápido possível!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Telefone</h3>
                  <a
<<<<<<< HEAD
                    href="tel:+553192518560"
=======
                    href="tel:+5531925185560"
>>>>>>> 99fc4a57b5b5911ab255614cbaccafe8b8c77d0c
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    (31) 9251-8560
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                  <p className="text-white/80">
                    Atendimento rápido e personalizado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-primary/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar seu ambiente?
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Entre em contato agora e solicite seu orçamento personalizado sem
              compromisso!
            </p>
            <Button
              variant="gold"
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Service Area */}
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-2">
              📍 R. Argentina, 273 - Novo Boa Vista, Contagem - MG
            </p>
            <p className="text-white/60 text-sm">
              Atendemos Belo Horizonte e toda a região metropolitana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
