import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cpu, Puzzle, Link2, Palette } from "lucide-react";

const EnterpriseSoftware = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Enterprise Software
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Mission-critical applications with API-first design and 500+ integrations
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 shadow-card">
                Request Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Puzzle, title: "Modular Architecture", description: "Flexible components that adapt to your needs" },
                { icon: Cpu, title: "API-First Design", description: "RESTful and GraphQL APIs for seamless integration" },
                { icon: Link2, title: "500+ Integrations", description: "Connect with all your essential business tools" },
                { icon: Palette, title: "White-Label Ready", description: "Customize branding to match your identity" }
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-secondary">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnterpriseSoftware;
