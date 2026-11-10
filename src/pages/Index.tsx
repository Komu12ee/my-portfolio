import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Brain,
  Cloud,
  BarChart3,
  Code2,
  Database,
  Sparkles,
  Server,
  FileText,
  Download,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profileImage from "@/assets/profile.jpg";
import { usePortfolio } from "@/context/PortfolioContext";

const Index = () => {
  const { data } = usePortfolio();
  const { personalInfo, profileTracks } = data;

  const services = [
    {
      title: "GenAI & RAG Platform Development",
      role: "AI Engineer Focus",
      description: "Building production retrieval-augmented generation systems that answer from your data — accurately, securely, and with verified citations.",
      icon: Brain,
      features: [
        "Custom RAG pipelines (LangChain, dense+sparse hybrid retrieval, RRF)",
        "Bilingual multi-department document assistants with isolated vector stores",
        "GPU-accelerated VLM OCR (Qwen VLM) with text-quality validation gates",
        "LLM API orchestration (Sarvam LLM, STT/TTS) with reliable fallbacks",
      ],
    },
    {
      title: "Applied Machine Learning & NLP",
      role: "ML Engineer Focus",
      description: "Transforming complex datasets into high-performance models — segmentation, recommendation, and text analytics.",
      icon: BarChart3,
      features: [
        "Financial Text Complexity Index (CCTI) over 200K+ corporate SEC filings",
        "Collaborative filtering & learner segmentation (PCA, K-Means, SVD)",
        "100M-scale click fraud detection on distributed 2-Node YARN Spark clusters",
        "Rigorous model evaluation, Prometheus metrics, and automated testing",
      ],
    },
    {
      title: "Forward Deployed AI & Cloud Infrastructure",
      role: "Forward Deployed Engineer Focus",
      description: "Bridging organizational stakeholder requirements with production-grade AI deployment on high-performance GPU infrastructure.",
      icon: Server,
      features: [
        "Linux VMs and NVIDIA H100 GPU operations on Yotta cloud",
        "Nginx reverse proxies, Node.js gateways, and vLLM OpenAI-compatible endpoints",
        "Client requirement scoping and DPR preparation support (CG-AIM)",
        "System reliability: 502 resolution, model endpoint monitoring, and health checks",
      ],
    },
  ];

  const whyChoose = [
    { icon: Code2, title: "Production Rigor", description: "Deployed solutions on live GPU clusters and government workflows" },
    { icon: Database, title: "End-to-End Ownership", description: "From data onboarding & OCR to APIs and client delivery" },
    { icon: Cloud, title: "Research-Backed", description: "Published in IEEE Xplore with 3 accepted conference papers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{personalInfo.roles}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                {personalInfo.headline}
              </h1>

              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">
                  {personalInfo.name} — {personalInfo.currentMissionOrg.split("@")[0]}
                </p>
                <p className="text-base">{personalInfo.mtechTitle} ({personalInfo.mtechCollege}, CGPA: {personalInfo.mtechCgpa})</p>
                <p className="text-base text-primary/90 font-medium">
                  RAG Architectures • NVIDIA H100 GPU Deployments • Government & Enterprise AI
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/projects">
                  <Button size="lg" className="group">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/resume">
                  <Button size="lg" variant="default" className="shadow-md">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume (3 Tracks)
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/10 max-w-md mx-auto lg:max-w-none">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover object-top aspect-[3/4] max-h-[580px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-background/85 backdrop-blur-md border border-border/50">
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary">{personalInfo.currentMissionTitle}</p>
                  <p className="text-sm font-medium text-foreground mt-0.5">
                    {personalInfo.currentMissionOrg}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {personalInfo.currentMissionDetails}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Categories / Three Resume Tracks Teaser */}
      <section className="section-padding bg-muted/20 border-y border-border">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-10">
            <Badge variant="outline" className="border-primary/40 text-primary uppercase tracking-widest text-[11px]">
              Specialized Engineering Tracks
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Building for Three Key Roles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Tailored experience, architecture skill sets, and dedicated resumes for each profile track.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {profileTracks.map((track) => (
              <Card
                key={track.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="font-semibold text-xs">
                      {track.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-display font-bold">{track.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{track.description}</p>
                </CardContent>

                <div className="px-6 pb-6 pt-2 space-y-2 border-t mt-4">
                  <Button asChild size="sm" className="w-full justify-center group">
                    <a href={track.resumeUrl} download={track.resumeFileName}>
                      <Download className="mr-2 h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                      Download {track.title} Resume
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/resume">
              <Button variant="outline" size="sm" className="gap-2">
                Explore Detailed Resume & Work History <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed text-left md:text-center">
              {personalInfo.aboutBio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">What I Deliver</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end engineering from system requirement discovery to robust production deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in-up flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-[11px] text-primary border-primary/30">
                      {service.role}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              Combining technical depth, on-the-ground deployment ownership, and verified research rigor.
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
