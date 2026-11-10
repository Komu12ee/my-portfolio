import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePortfolio } from "@/context/PortfolioContext";

const Contact = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Direct communication for opportunities & inquiries",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      buttonText: "Send an Email",
      isExternal: false,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Professional network, updates & messaging",
      value: personalInfo.linkedin.replace("https://www.", "").replace("https://", ""),
      href: personalInfo.linkedin,
      buttonText: "Connect on LinkedIn",
      isExternal: true,
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "Open-source code, research implementations & tools",
      value: personalInfo.github.replace("https://", ""),
      href: personalInfo.github,
      buttonText: "View GitHub Profile",
      isExternal: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="section-padding pt-32 pb-20">
        <div className="container-custom max-w-5xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-14 animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Available for full-time opportunities, government and enterprise AI initiatives, and research collaborations.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1 text-xs font-medium text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Based in {personalInfo.location} • Open to Global & Remote Roles</span>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in-up flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">{method.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {method.subtitle}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-foreground truncate" title={method.value}>
                    {method.value}
                  </p>
                </CardContent>

                <div className="p-6 pt-0">
                  <Button asChild className="w-full group" variant="default" size="default">
                    <a
                      href={method.href}
                      target={method.isExternal ? "_blank" : undefined}
                      rel={method.isExternal ? "noopener noreferrer" : undefined}
                    >
                      {method.buttonText}
                      {method.isExternal ? (
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Navigation Card */}
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center animate-fade-in-up">
            <h3 className="font-display text-lg font-semibold">Looking for resume downloads or projects?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Review my 3 specialized profile tracks (AI Engineer, ML Engineer, and Forward Deployed Engineer) or explore deployed systems.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link to="/resume">
                <Button variant="outline" size="sm">
                  View Resume (3 Tracks)
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="secondary" size="sm">
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
