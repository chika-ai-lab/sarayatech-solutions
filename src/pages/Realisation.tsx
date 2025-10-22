import { realisations } from "@/constants";
import {
  Code2,
  Smartphone,
  Globe,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Realisation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Animated Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 grid-animated"></div>
        </div>

        {/* Floating Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="float-circle-1 absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="float-circle-2 absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="float-circle-3 absolute top-40 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Nos Réalisations
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Des solutions digitales conçues pour répondre aux besoins
              spécifiques de nos clients
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Corporate */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code2, value: "50+", label: "Projets Développés" },
              { icon: Smartphone, value: "35+", label: "Applications Mobiles" },
              { icon: Globe, value: "25+", label: "Plateformes Web" },
              { icon: Layers, value: "15+", label: "Logiciels Sur Mesure" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {realisations.map((realisation, index) => (
              <div
                key={realisation.company}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative h-80 lg:h-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    {realisation.image ? (
                      <img
                        src={realisation.image}
                        alt={realisation.company}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <div className="text-center">
                          <Code2 className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                          <p className="text-primary/50 font-semibold">
                            {realisation.company}
                          </p>
                        </div>
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-block bg-white text-primary rounded-md px-4 py-2 text-sm font-bold shadow-md">
                        {realisation.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {realisation.company}
                      </h2>

                      {/* Challenge */}
                      <div>
                        <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">
                          Défi
                        </h3>
                        <p className="text-secondary leading-relaxed">
                          {realisation.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">
                          Solution
                        </h3>
                        <p className="text-secondary leading-relaxed">
                          {realisation.solution}
                        </p>
                      </div>

                      {/* Results Grid */}
                      <div className="pt-4">
                        <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-4">
                          Résultats
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {realisation.results.map((result) => (
                            <div
                              key={result.label}
                              className="text-center p-4 bg-muted/50 rounded-lg border border-border"
                            >
                              <div className="text-2xl font-bold text-primary mb-1">
                                {result.metric}
                              </div>
                              <div className="text-xs text-secondary font-medium leading-tight">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="pt-4 border-t border-border">
                        <blockquote className="text-foreground italic mb-3">
                          "{realisation.quote}"
                        </blockquote>
                        <div>
                          <div className="font-bold text-foreground text-sm">
                            {realisation.author}
                          </div>
                          <div className="text-xs text-secondary">
                            {realisation.role}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                          <span>En savoir plus</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Corporate */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Un projet en tête ?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Discutons de vos besoins et créons ensemble la solution adaptée à
              votre entreprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-white text-primary hover:bg-white/90 font-semibold py-4 px-8 rounded-md transition-colors duration-300">
                Démarrer un projet
              </button>
              <button className="bg-transparent text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-md transition-colors duration-300 border-2 border-white">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisation;
