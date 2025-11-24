import { Award, Users, Wrench } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "MDF de primeira linha e ferragens importadas para máxima durabilidade",
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Mais de 10 anos transformando ambientes em BH e região",
    },
    {
      icon: Wrench,
      title: "Projetos Personalizados",
      description: "Soluções exclusivas pensadas para seu estilo de vida",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-primary">nós</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com mais de 10 anos de experiência no mercado, a Marcenaria RC desenvolve móveis 
            planejados com alto padrão de acabamento, priorizando durabilidade, estética e 
            aproveitamento inteligente de espaço. Nossa equipe oferece soluções personalizadas 
            para residências e empresas em Belo Horizonte e região metropolitana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
