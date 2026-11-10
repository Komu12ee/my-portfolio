import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import titanicProject from "@/assets/titanic-project.jpg";
import mathsPredictor from "@/assets/maths-predictor.jpg";
import primodayProject from "@/assets/primoday-project.jpg";
import nextliteProject from "@/assets/nextlite-project.jpg";
import syncnowProject from "@/assets/syncnow-project.jpg";

const categories = ["All", "AI & GenAI", "Machine Learning", "Engineering & Web"] as const;

const getImageForProject = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("titanic")) return titanicProject;
  if (lower.includes("maths") || lower.includes("financial") || lower.includes("ccti")) return mathsPredictor;
  if (lower.includes("nextlite") || lower.includes("rag")) return nextliteProject;
  if (lower.includes("syncnow") || lower.includes("seva") || lower.includes("giving") || lower.includes("daan"))
    return syncnowProject;
  return primodayProject;
};

const Projects = () => {
  const { data } = usePortfolio();
  const allProjects = data.projects;
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-10 animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Production AI platforms for government departments, research-driven machine learning models, and scalable full-stack web applications.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeFilter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(cat)}
                  className="rounded-full px-4 text-xs font-medium"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id || project.title}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group animate-fade-in-up flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image || getImageForProject(project.title)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      {project.featured && (
                        <Badge className="bg-primary text-primary-foreground text-xs shadow-sm">
                          Featured
                        </Badge>
                      )}
                    </div>
                    {project.highlight && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-[11px] font-semibold text-primary bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-primary/20 shadow-sm inline-block">
                          {project.highlight}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="pt-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-display font-semibold group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </CardContent>
                </div>

                <div className="px-6 pb-6 pt-2 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[11px] font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {(project.link || project.github || project.videoUrl) && (
                    <div className="pt-2 border-t flex flex-wrap items-center gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visit Live Portal
                        </a>
                      )}
                      {project.videoUrl && (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 hover:text-amber-400 hover:underline"
                        >
                          <Play className="h-3.5 w-3.5 fill-current" />
                          Watch Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          View Code on GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
