import {
  Home,
  ChefHat,
  Bath,
  Shirt,
  UtensilsCrossed,
  Briefcase,
  Bed,
  Tv,
  Package,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Package,
      title: "Armários Planejados",
      description:
        "Perfeitos para quartos, cozinhas, banheiros, escritórios e áreas de serviço, feitos sob medida para otimizar cada centímetro.",
    },
    {
      icon: Home,
      title: "Móveis em MDF",
      description:
        "Móveis modernos e resistentes, fabricados com MDF de alta qualidade para garantir durabilidade e beleza.",
    },
  ];

  const roomServices = [
    {
      icon: ChefHat,
      title: "Cozinha Planejada",
      description: "Funcionalidade e design para facilitar o seu dia a dia.",
    },
    {
      icon: Bath,
      title: "Banheiro Planejado",
      description: "Soluções elegantes com excelente aproveitamento de espaço.",
    },
    {
      icon: Shirt,
      title: "Área de Serviço",
      description: "Organização e praticidade com móveis feitos sob medida.",
    },
    {
      icon: UtensilsCrossed,
      title: "Área Gourmet",
      description: "Conforto, estilo e resistência para receber amigos e familiares.",
    },
    {
      icon: Briefcase,
      title: "Escritório Planejado",
      description: "Ambientes produtivos com mesas, nichos e armários exclusivos.",
    },
    {
      icon: Bed,
      title: "Quarto Planejado",
      description: "Guarda-roupas, cabeceiras e soluções personalizadas.",
    },
    {
      icon: Tv,
      title: "Sala Planejada",
      description: "Racks, painéis, estantes e móveis sofisticados.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Móveis Planejados Para Todos os <span className="text-primary">Ambientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Marcenaria referência em Belo Horizonte pela qualidade, pontualidade e acabamento
            impecável em móveis sob medida.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Room-Specific Services */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Soluções Completas em <span className="text-primary">Móveis Planejados</span> por Ambiente
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roomServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
