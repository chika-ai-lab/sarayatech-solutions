import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-95" />
        <img
          src={heroBg}
          alt="Technology background"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Trusted by 500+ Enterprises
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
                Business
              </span>{" "}
              with Enterprise Technology
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Unlock exponential growth with our cloud-native platforms,
              advanced analytics, and AI-powered solutions.{" "}
              <span className="font-semibold text-gold">
                97% client satisfaction
              </span>{" "}
              across industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground shadow-accent text-lg px-8 h-14 group"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/realisation">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 h-14 backdrop-blur-sm group"
                >
                  <Play
                    className="mr-2 group-hover:scale-110 transition-smooth"
                    size={20}
                  />
                  View Realisation
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10 text-lg px-8 h-14"
                >
                  Talk to Expert
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-gold mb-1">500+</div>
                <div className="text-sm text-white/80">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-1">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-1">97%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-xl p-4 shadow-elegant animate-bounce-slow z-10">
                <div className="text-sm font-semibold text-foreground mb-1">
                  Revenue Growth
                </div>
                <div className="text-2xl font-bold text-accent">+247%</div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-4 shadow-elegant animate-bounce-slow animation-delay-300 z-10">
                <div className="text-sm font-semibold text-foreground mb-1">
                  Active Users
                </div>
                <div className="text-2xl font-bold text-primary">2.4M</div>
              </div>

              {/* Main Dashboard */}
              <div className="relative rounded-2xl overflow-hidden shadow-glow border-4 border-white/20 hover-lift">
                <img
                  src={dashboardMockup}
                  alt="SarayaTech Dashboard Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background">
        <svg
          className="absolute bottom-0 w-full h-24 text-primary"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
