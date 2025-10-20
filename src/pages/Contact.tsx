import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Let's Start a Conversation
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Our team is ready to help you transform your business. Reach out
                today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-secondary leading-relaxed">
                    Have questions? We're here to help. Our team typically
                    responds within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Headquarters</div>
                      <div className="text-secondary text-sm">
                        2765 s Hamilton
                        <br />
                        rd Columbus oh 43232
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-secondary text-sm">
                        +1 (614)-783-0443
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-secondary text-sm">
                        info@sarayatech.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <div className="text-secondary text-sm">
                        Monday - Friday: 9am - 6pm EST
                        <br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input placeholder="Your Company Name" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <Input type="tel" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership Opportunity
                          </SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your needs..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-light shadow-card"
                    >
                      Send Message
                    </Button>

                    <p className="text-sm text-secondary text-center">
                      We respect your privacy. Your information will never be
                      shared.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.0877519854157!2d-82.88723862460068!3d39.91705238590096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387d37fcc2e35d%3A0x6c3ae3509bc1bb63!2s2765%20S%20Hamilton%20Rd%2C%20Columbus%2C%20OH%2043232%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2ssn!4v1760957415959!5m2!1sfr!2ssn"
            style={{
              width: "100%",
              height: "384px",
              border: "none",
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default Contact;
