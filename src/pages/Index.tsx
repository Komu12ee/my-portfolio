import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Cloud, BarChart3, Code2, Database, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const services = [
    {
      title: "GenAI & RAG Chatbot Development",
      description: "Building retrieval-augmented chatbots that answer from your data - accurately, with citations.",
      icon: Brain,
      features: [
        "Custom RAG pipelines (LangChain, vector search)",
        "Document/PDF-based Q&A systems",
        "LLM API integration & orchestration",
        "Citation-backed, hallucination-resistant responses",
      ],
    },
    {
      title: "Applied Machine Learning",
      description: "Turning messy data into working models - segmentation, recommendation, and text analytics.",
      icon: BarChart3,
      features: [
        "Recommendation systems (collaborative filtering)",
        "Clustering & customer/learner segmentation",
        "NLP & text complexity analysis",
        "Model evaluation & optimization",
      ],
    },
    {
      title: "Backend & System Integration for AI Apps",
      description: "The engineering that makes an AI system usable, not just a notebook demo.",
      icon: Workflow,
      features: [
        "API development (Flask, FastAPI)",
        "Vector database integration (Qdrant)",
        "PostgreSQL-backed data pipelines",
        "End-to-end deployment (prototype to working app)",
      ],
    },
  ];

  const whyChoose = [
    { icon: Code2, title: "Technical Depth", description: "Strong engineering mindset" },
    { icon: Database, title: "Clean Code", description: "Modular, scalable systems" },
    { icon: Cloud, title: "Cloud Native", description: "Production-ready deployments" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                I build{" "}
                <span className="text-gradient glow-text">GenAI systems</span>{" "}
                 that retrieve, reason, and cite — not just generate.
              </h1>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">Komendra Sahu — CM-IT Fellow, IIIT Naya Raipur</p>
                <p className="text-base">M.Tech in Data Science & Artificial Intelligence</p>
                <p className="text-base">Generative AI • ML Engineer • Data-Driven Problem Solver</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects">
                  <Button size="lg" className="group">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </Link>
                <Link to="/resume">
                  <Button size="lg" variant="secondary">
                    Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Komendra Sahu"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a <strong className="text-foreground">CM-IT Fellow</strong> 
                pursuing an M.Tech in Data Science & AI at IIIT Naya Raipur.
              </p>
              <p>
                 I build GenAI and RAG-based chatbot systems that turn messy, real-world data into reliable, cited answers — most notably a legal-intelligence chatbot deployed for the Chhattisgarh government, handling RTI (Right to Information) workflows end-to-end.
                I work across the full pipeline: data ingestion and retrieval (Qdrant, vector search), backend systems (Python, Flask, FastAPI, PostgreSQL), and LLM orchestration (LangChain, RAG Fusion). My research background — published in IEEE Xplore — means I care about why a retrieval system works, not just whether it does.
              </p>
              {/* <p>
                Technically, I work with tools like <strong className="text-foreground">Python, Pandas, NumPy, Scikit-learn, TensorFlow, Flask, Docker, Kubernetes, MLflow, DVC, AWS, and Seldon</strong>, 
                blending data science with modern deployment practices.
              </p> */}
              <p>
                Beyond coding, I'm a district-level basketball player, and I believe the game has taught me <strong className="text-foreground">teamwork, discipline, and leadership</strong> 
                — qualities I bring into every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I help startups, businesses, and creators turn their ideas into real, scalable products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Why Work With Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I combine technical expertise with clear communication, reliability, and a problem-solving mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className="text-center space-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
