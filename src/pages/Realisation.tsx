import { realisations } from "@/constants";
import { Building2, TrendingUp, Users, Clock } from "lucide-react";

const Realisation = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Realisation
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                See how leading organizations achieve breakthrough results with
                SarayaTech
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Building2, value: "500+", label: "Enterprise Clients" },
                { icon: TrendingUp, value: "247%", label: "Average ROI" },
                { icon: Users, value: "10M+", label: "End Users Served" },
                { icon: Clock, value: "97%", label: "Client Satisfaction" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center bg-card rounded-xl p-6 shadow-card border border-border"
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Realisation */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {realisations.map((realisation, index) => (
                <div
                  key={realisation.company}
                  className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border"
                >
                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
                        {realisation.industry}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {realisation.company}
                      </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">
                            Challenge
                          </h3>
                          <p className="text-secondary leading-relaxed">
                            {realisation.challenge}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">
                            Solution
                          </h3>
                          <p className="text-secondary leading-relaxed">
                            {realisation.solution}
                          </p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-6">
                          <blockquote className="text-foreground italic leading-relaxed mb-4">
                            "{realisation.quote}"
                          </blockquote>
                          <div className="font-semibold">
                            {realisation.author}
                          </div>
                          <div className="text-sm text-secondary">
                            {realisation.role}
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-bold mb-6">Results</h3>
                        <div className="space-y-6">
                          {realisation.results.map((result) => (
                            <div
                              key={result.label}
                              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border"
                            >
                              <div className="text-4xl font-extrabold text-primary mb-2">
                                {result.metric}
                              </div>
                              <div className="text-foreground font-semibold">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Realisation;
