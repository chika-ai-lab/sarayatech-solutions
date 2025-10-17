import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Cloud,
  Zap,
  Shield,
  Globe,
  Database,
  Cpu,
  Lock,
  TrendingUp,
  BarChart3,
  Brain,
  Puzzle,
  Link2,
  Palette,
  Users,
  Star,
  Heart,
  Share2,
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SOLUTIONS_DATA } from "@/constants/solutions";

const SolutionDetails = () => {
  const { solutionId } = useParams();
  const solution = SOLUTIONS_DATA[solutionId as keyof typeof SOLUTIONS_DATA];
  const [activeTab, setActiveTab] = useState("overview");

  if (!solution) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
            <p className="text-secondary mb-8">
              The requested solution could not be found.
            </p>
            <Link to="/solutions">
              <Button>View All Solutions</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const icons: {
      [key: string]: React.ComponentType<{ className?: string }>;
    } = {
      Cloud,
      Zap,
      Shield,
      Globe,
      Database,
      Cpu,
      Lock,
      TrendingUp,
      BarChart3,
      Brain,
      Puzzle,
      Link2,
      Palette,
      Users,
    };
    return icons[iconName] || Cloud;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link to="/solutions" className="hover:text-primary">
                Solutions
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{solution.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Card */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      {React.createElement(
                        getIcon(solution.features[0]?.icon || "Cloud"),
                        {
                          className: "w-8 h-8 text-white",
                        }
                      )}
                    </div>
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2">
                        {solution.title}
                      </h1>
                      <p className="text-gray-600 mb-4">{solution.subtitle}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <img
                            src="https://i.pravatar.cc/32?img=1"
                            alt=""
                            className="w-6 h-6 rounded-full"
                          />
                          <img
                            src="https://i.pravatar.cc/32?img=2"
                            alt=""
                            className="w-6 h-6 rounded-full -ml-2"
                          />
                          <img
                            src="https://i.pravatar.cc/32?img=3"
                            alt=""
                            className="w-6 h-6 rounded-full -ml-2"
                          />
                          <span className="ml-1 text-gray-600">
                            +2.5k users
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="font-medium">4.9</span>
                          <span className="text-gray-600">(127 reviews)</span>
                        </div>

                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Active
                        </span>

                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {solution.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preview Image */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
                      <div className="space-y-4">
                        <div className="h-3 bg-slate-600 rounded w-1/3"></div>
                        <div className="grid grid-cols-6 gap-2 h-32">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-blue-500 rounded"
                              style={{ height: `${30 + i * 15}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>City Items</span>
                          <span>2.3/unit</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-400">
                            Progress Metric
                          </span>
                          <span className="text-xs text-slate-300">85%</span>
                        </div>
                        <div className="space-y-1">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="h-2 bg-pink-500/30 rounded"
                              style={{ width: `${(i + 1) * 12}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-slate-400">
                            Cred Type
                          </span>
                        </div>
                        <div className="h-20 flex items-end justify-between gap-1">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-blue-500 rounded-t"
                              style={{ height: `${20 + Math.random() * 60}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <div className="w-16 h-12 bg-white rounded border-2 border-primary flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-16 h-12 bg-slate-800/50 rounded border border-slate-700 flex items-center justify-center">
                      <Database className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="w-16 h-12 bg-slate-800/50 rounded border border-slate-700 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="w-16 h-12 bg-slate-800/50 rounded border border-slate-700 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b">
                  <div className="flex">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`px-6 py-3 border-b-2 font-medium transition-colors ${
                        activeTab === "overview"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab("features")}
                      className={`px-6 py-3 border-b-2 font-medium transition-colors ${
                        activeTab === "features"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Features
                    </button>
                    <button
                      onClick={() => setActiveTab("specifications")}
                      className={`px-6 py-3 border-b-2 font-medium transition-colors ${
                        activeTab === "specifications"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => setActiveTab("reviews")}
                      className={`px-6 py-3 border-b-2 font-medium transition-colors ${
                        activeTab === "reviews"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Reviews
                    </button>
                    <button
                      onClick={() => setActiveTab("support")}
                      className={`px-6 py-3 border-b-2 font-medium transition-colors ${
                        activeTab === "support"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Support
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === "overview" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        Solution Overview
                      </h2>
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        {solution.overview.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {solution.features.slice(0, 4).map((feature) => (
                          <div key={feature.title} className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              {React.createElement(getIcon(feature.icon), {
                                className: "w-6 h-6 text-primary",
                              })}
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">
                                {feature.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "features" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">All Features</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {solution.features.map((feature) => (
                          <div
                            key={feature.title}
                            className="flex gap-4 p-4 rounded-lg border hover:border-primary/50 transition-colors"
                          >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              {React.createElement(getIcon(feature.icon), {
                                className: "w-6 h-6 text-primary",
                              })}
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">
                                {feature.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "specifications" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">
                        Technical Specifications
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            System Requirements
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm font-medium text-gray-900 mb-1">
                                Deployment
                              </p>
                              <p className="text-sm text-gray-600">
                                Cloud, On-premise, Hybrid
                              </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm font-medium text-gray-900 mb-1">
                                Integration
                              </p>
                              <p className="text-sm text-gray-600">
                                REST API, Webhooks, SDKs
                              </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm font-medium text-gray-900 mb-1">
                                Security
                              </p>
                              <p className="text-sm text-gray-600">
                                SOC 2, GDPR, ISO 27001
                              </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm font-medium text-gray-900 mb-1">
                                Scalability
                              </p>
                              <p className="text-sm text-gray-600">
                                Auto-scaling, Load balancing
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            Performance Metrics
                          </h3>
                          <div className="space-y-3">
                            {solution.benefits.map((benefit) => (
                              <div
                                key={benefit.label}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                              >
                                <span className="font-medium">
                                  {benefit.label}
                                </span>
                                <span className="text-2xl font-bold text-primary">
                                  {benefit.metric}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">
                        Customer Reviews
                      </h2>
                      <div className="space-y-6">
                        <div className="flex items-center gap-8 p-6 bg-gray-50 rounded-lg">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">
                              4.9
                            </div>
                            <div className="flex gap-1 mb-2">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <p className="text-sm text-gray-600">
                              Based on 127 reviews
                            </p>
                          </div>
                          <div className="flex-1 space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                              <div
                                key={rating}
                                className="flex items-center gap-3"
                              >
                                <span className="text-sm w-12">
                                  {rating} stars
                                </span>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-primary rounded-full"
                                    style={{
                                      width: `${
                                        rating === 5
                                          ? 85
                                          : rating === 4
                                          ? 10
                                          : 3
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600 w-12">
                                  {rating === 5 ? 108 : rating === 4 ? 13 : 6}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          {[
                            {
                              name: "Sarah Johnson",
                              role: "Data Analyst",
                              rating: 5,
                              comment:
                                "Excellent platform with powerful analytics capabilities. Has transformed how we handle our data.",
                            },
                            {
                              name: "Michael Chen",
                              role: "CTO",
                              rating: 5,
                              comment:
                                "Best investment we've made this year. The ROI was visible within the first month.",
                            },
                            {
                              name: "Emily Rodriguez",
                              role: "Product Manager",
                              rating: 4,
                              comment:
                                "Great features overall. Support team is very responsive and helpful.",
                            },
                          ].map((review, i) => (
                            <div key={i} className="p-6 border rounded-lg">
                              <div className="flex items-start gap-4 mb-4">
                                <img
                                  src={`https://i.pravatar.cc/48?img=${i + 10}`}
                                  alt={review.name}
                                  className="w-12 h-12 rounded-full"
                                />
                                <div className="flex-1">
                                  <h4 className="font-semibold">
                                    {review.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {review.role}
                                  </p>
                                </div>
                                <div className="flex gap-1">
                                  {[...Array(review.rating)].map((_, j) => (
                                    <Star
                                      key={j}
                                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "support" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">
                        Support & Resources
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 border rounded-lg hover:border-primary/50 transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Shield className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">
                            24/7 Support
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Our dedicated support team is available round the
                            clock to help you with any questions or issues.
                          </p>
                          <Button variant="outline" size="sm">
                            Contact Support
                          </Button>
                        </div>

                        <div className="p-6 border rounded-lg hover:border-primary/50 transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Database className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">
                            Documentation
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Comprehensive guides, API references, and tutorials
                            to help you get the most out of our platform.
                          </p>
                          <Button variant="outline" size="sm">
                            View Docs
                          </Button>
                        </div>

                        <div className="p-6 border rounded-lg hover:border-primary/50 transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">
                            Community Forum
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Connect with other users, share best practices, and
                            get answers from the community.
                          </p>
                          <Button variant="outline" size="sm">
                            Join Community
                          </Button>
                        </div>

                        <div className="p-6 border rounded-lg hover:border-primary/50 transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Brain className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">
                            Training & Webinars
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Regular training sessions and webinars to help your
                            team master the platform.
                          </p>
                          <Button variant="outline" size="sm">
                            View Schedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Features Section */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="space-y-6">
                  {solution.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature.title}
                      className="flex gap-4 pb-6 border-b last:border-0 last:pb-0"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {React.createElement(getIcon(feature.icon), {
                          className: "w-6 h-6 text-primary",
                        })}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Enterprise Plan</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Unlimited dashboards</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>24/7 support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Demo
                  </Button>
                </div>
              </div>

              {/* Provider Card */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-bold mb-4">Solution Provider</h3>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">DT</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">DataTech Solutions</h4>
                    <p className="text-sm text-gray-600">Verified Partner</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-medium">2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employees</span>
                    <span className="font-medium">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Headquarters</span>
                    <span className="font-medium">San Francisco</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </div>

              {/* Related Solutions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-bold mb-4">Related Solutions</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Data Warehouse Pro",
                      desc: "Cloud data storage",
                      color: "bg-green-500",
                    },
                    {
                      name: "ML Intelligence Suite",
                      desc: "Machine learning platform",
                      color: "bg-orange-500",
                    },
                    {
                      name: "Integration Hub",
                      desc: "API management",
                      color: "bg-purple-500",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div
                        className={`w-10 h-10 ${item.color} rounded-lg flex-shrink-0`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-600 truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionDetails;
