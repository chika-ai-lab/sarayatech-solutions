import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, TrendingUp, Users, Clock } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      company: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Legacy infrastructure couldn't handle growing transaction volumes, causing system crashes during peak hours.",
      solution: "Migrated to SarayaTech Cloud Platform with auto-scaling capabilities and implemented real-time analytics.",
      results: [
        { metric: "315%", label: "Efficiency Increase" },
        { metric: "99.99%", label: "Uptime Achieved" },
        { metric: "60%", label: "Cost Reduction" }
      ],
      quote: "SarayaTech transformed our entire digital infrastructure. The platform's scalability allowed us to handle 10x growth without breaking a sweat.",
      author: "Michael Chen",
      role: "CTO"
    },
    {
      company: "Manufacturing Leader Inc",
      industry: "Manufacturing",
      challenge: "Disconnected systems across 25 factories prevented real-time visibility into operations and supply chain.",
      solution: "Deployed Enterprise Software Platform with custom integrations across all facilities and real-time dashboard.",
      results: [
        { metric: "40%", label: "Cost Reduction" },
        { metric: "85%", label: "Faster Insights" },
        { metric: "100%", label: "Facility Coverage" }
      ],
      quote: "The analytics platform gave us insights we never knew existed. We reduced operational costs by 40% in the first quarter alone.",
      author: "Sarah Martinez",
      role: "VP of Operations"
    },
    {
      company: "Healthcare Solutions Ltd",
      industry: "Healthcare",
      challenge: "HIPAA compliance requirements and data security concerns delayed innovation and new feature releases.",
      solution: "Implemented secure cloud infrastructure with built-in compliance controls and automated security monitoring.",
      results: [
        { metric: "60%", label: "Faster Deployment" },
        { metric: "100%", label: "HIPAA Compliant" },
        { metric: "5M+", label: "Patients Served" }
      ],
      quote: "Implementation was seamless, integration was flawless, and support has been exceptional. Our time-to-market decreased by 60%.",
      author: "David Thompson",
      role: "Chief Innovation Officer"
    }
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
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                See how leading organizations achieve breakthrough results with SarayaTech
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
                { icon: Clock, value: "97%", label: "Client Satisfaction" }
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center bg-card rounded-xl p-6 shadow-card border border-border">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {stories.map((story, index) => (
                <div key={story.company} className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border">
                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
                        {story.industry}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{story.company}</h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">Challenge</h3>
                          <p className="text-secondary leading-relaxed">{story.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">Solution</h3>
                          <p className="text-secondary leading-relaxed">{story.solution}</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-6">
                          <blockquote className="text-foreground italic leading-relaxed mb-4">
                            "{story.quote}"
                          </blockquote>
                          <div className="font-semibold">{story.author}</div>
                          <div className="text-sm text-secondary">{story.role}</div>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-bold mb-6">Results</h3>
                        <div className="space-y-6">
                          {story.results.map((result) => (
                            <div key={result.label} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
                              <div className="text-4xl font-extrabold text-primary mb-2">{result.metric}</div>
                              <div className="text-foreground font-semibold">{result.label}</div>
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

      <Footer />
    </div>
  );
};

export default SuccessStories;
