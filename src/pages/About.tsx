import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Globe, Users, Target, Heart, Zap, Shield, TrendingUp } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our mission. We partner deeply to achieve your business goals."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build lasting relationships founded on transparency and ethical practices."
    },
    {
      icon: TrendingUp,
      title: "Continuous Excellence",
      description: "We never settle. Every day we strive to deliver better results and exceed expectations."
    }
  ];

  const leadership = [
    {
      name: "James Anderson",
      role: "Chief Executive Officer",
      bio: "15+ years leading technology transformations at Fortune 500 companies."
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Technology Officer",
      bio: "Former VP Engineering at leading cloud platforms. PhD in Computer Science."
    },
    {
      name: "David Kim",
      role: "Chief Operating Officer",
      bio: "Scaled operations from startup to enterprise serving 500+ global clients."
    },
    {
      name: "Sarah Thompson",
      role: "Chief Strategy Officer",
      bio: "20 years consulting experience with Fortune 100, driving digital strategies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={teamPhoto} alt="SarayaTech Team" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90" />
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Building the Future of{" "}
                <span className="text-gold">Enterprise Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Since 2009, we've been empowering organizations to achieve extraordinary outcomes through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
                <div className="space-y-4 text-lg text-secondary leading-relaxed">
                  <p>
                    At SarayaTech, we believe that technology should empower, not complicate. Our mission is to deliver enterprise-grade solutions that are powerful yet accessible, scalable yet secure.
                  </p>
                  <p>
                    We partner with organizations across industries to navigate complex digital challenges and unlock new opportunities for growth. Through innovation, expertise, and unwavering commitment, we transform how businesses operate in the digital age.
                  </p>
                  <p>
                    Based in Columbus, Ohio, we serve 500+ enterprise clients across 40+ countries, delivering measurable impact and sustainable competitive advantage.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: "500+", label: "Clients" },
                  { icon: Globe, value: "40+", label: "Countries" },
                  { icon: Award, value: "15+", label: "Years" },
                  { icon: Zap, value: "97%", label: "Satisfaction" }
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                      <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-secondary">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-secondary leading-relaxed">
                These principles guide every decision we make and every solution we deliver
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elegant transition-all group">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-secondary leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-secondary leading-relaxed">
                Industry veterans driving innovation and excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader) => (
                <div key={leader.name} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all group">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-end justify-center">
                    <div className="w-40 h-40 rounded-full bg-muted mb-4" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <div className="text-sm text-primary font-semibold mb-3">{leader.role}</div>
                    <p className="text-sm text-secondary leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              We're always looking for talented individuals to join our team
            </p>
            <Link to="/careers">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground shadow-accent">
                View Open Positions
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
