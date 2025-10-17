import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Factory, Heart, ShoppingCart, GraduationCap, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    { icon: Landmark, name: "Financial Services", description: "Secure, compliant solutions for banking and finance" },
    { icon: Factory, name: "Manufacturing", description: "Digital transformation for modern production" },
    { icon: Heart, name: "Healthcare", description: "HIPAA-compliant platforms for patient care" },
    { icon: ShoppingCart, name: "Retail & E-commerce", description: "Omnichannel commerce solutions" },
    { icon: GraduationCap, name: "Education", description: "Modern learning management systems" },
    { icon: Building2, name: "Enterprise", description: "Scalable solutions for large organizations" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Specialized technology platforms tailored to your industry's unique challenges
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.name}
                    to="#"
                    className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all group"
                  >
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {industry.name}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {industry.description}
                    </p>
                  </Link>
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

export default Industries;
