import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  staggerItemVariants,
} from "@/constants/animations";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Enterprise Clients",
      description: "Trusted by Fortune 500 companies"
    },
    {
      icon: TrendingUp,
      value: "247%",
      label: "Average ROI",
      description: "Measured client growth in first year"
    },
    {
      icon: Globe,
      value: "40+",
      label: "Countries",
      description: "Global presence and support"
    },
    {
      icon: Award,
      value: "97%",
      label: "Client Satisfaction",
      description: "Industry-leading retention rate"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Delivering Measurable Impact
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Our commitment to excellence translates into tangible results for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-smooth border border-white/20">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>
                </div>
                <div className={`text-5xl md:text-6xl font-extrabold mb-3 ${isVisible ? 'animate-count-up' : 'opacity-0'}`}>
                  <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
