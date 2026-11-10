import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Play,
  Server,
  Sparkles,
  Cpu,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resume = () => {
  const { data } = usePortfolio();
  const { personalInfo, profileTracks, experience, publications, skills } = data;

  const [selectedCategory, setSelectedCategory] = useState<string>("forward-deployed-engineer");

  const categoriesWithIcons = profileTracks.map((cat) => ({
    ...cat,
    icon:
      cat.id === "ai-engineer"
        ? Sparkles
        : cat.id === "ml-engineer"
        ? Cpu
        : Server,
  }));

  const activeProfile =
    categoriesWithIcons.find((c) => c.id === selectedCategory) || categoriesWithIcons[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="section-padding pt-28 md:pt-32">
        <div className="container-custom max-w-5xl">
          {/* Header Card */}
          <section className="relative overflow-hidden rounded-3xl border bg-card p-7 shadow-soft md:p-10 animate-fade-in">
            <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Curriculum Vitae</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/40 text-primary font-medium">
                    Profile Tracks: 3 Roles
                  </Badge>
                </div>
              </div>

              <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-6xl">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-base font-semibold text-primary md:text-lg">
                {personalInfo.roles}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Engineer who builds and deploys production AI platforms for government departments: capturing requirements,
                integrating APIs and model services, deploying on Linux/GPU servers (NVIDIA H100 GPUs on Yotta cloud), and
                resolving live issues. Experienced in RAG, hybrid retrieval, and LLM/OCR pipelines.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {personalInfo.location}
                </span>
                <a
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                  href={`mailto:${personalInfo.email}`}
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {personalInfo.email}
                </a>
                <a
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                  LinkedIn
                </a>
                <a
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4 text-primary" />
                  GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Three Profile Categories / Resume Section */}
          <section className="mt-8 rounded-3xl border-2 border-primary/20 bg-gradient-to-b from-card to-secondary/20 p-6 md:p-8 animate-fade-in-up">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase">
                  <Layers className="h-4 w-4" /> Tailored Engineering Profiles
                </div>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Choose Resume Category
                </h2>
                <p className="text-sm text-muted-foreground">
                  Select a category to view tailored competencies, architectural scope, and direct resume downloads.
                </p>
              </div>
            </div>

            {/* Tabs for Three Categories */}
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="mt-6 w-full"
            >
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto p-1.5 gap-1.5 bg-muted/60 rounded-xl">
                {categoriesWithIcons.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="flex items-center justify-center gap-2 py-3 px-3 text-sm font-semibold rounded-lg transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{cat.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {categoriesWithIcons.map((cat) => (
                <TabsContent key={cat.id} value={cat.id} className="mt-6 focus-visible:outline-none">
                  <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display text-2xl font-bold">{cat.title}</h3>
                          <Badge variant="secondary" className="font-semibold text-xs">
                            {cat.badge}
                          </Badge>
                          <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                            {cat.statusBadge}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm font-medium text-primary">{cat.subtitle}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-3xl">
                          {cat.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 pt-2 sm:pt-0">
                        <Button asChild size="default" className="group shadow-sm">
                          <a href={cat.resumeUrl} download={cat.resumeFileName}>
                            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                            Download {cat.title} Resume
                          </a>
                        </Button>
                        <Button asChild size="default" variant="outline">
                          <a href={cat.resumeUrl} target="_blank" rel="noreferrer">
                            <Eye className="mr-2 h-4 w-4" />
                            Preview PDF
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="mt-5 border-t pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Track Highlights & Deliverables
                      </p>
                      <div className="grid gap-2.5 md:grid-cols-3">
                        {cat.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border bg-secondary/30 p-3 text-xs leading-relaxed text-muted-foreground flex gap-2"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-semibold text-muted-foreground mr-1">Target Stack:</span>
                      {cat.keySkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Quick Download All Three Options Bar */}
            <div className="mt-6 rounded-2xl border bg-background/80 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Direct Resume Downloads
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm" variant={selectedCategory === "ai-engineer" ? "default" : "outline"}>
                    <a href="/ai-engineer-resume.pdf" download="Komendra-Sahu-AI-Engineer-Resume.pdf">
                      <Download className="mr-1.5 h-3.5 w-3.5" /> AI Engineer
                    </a>
                  </Button>
                  <Button asChild size="sm" variant={selectedCategory === "ml-engineer" ? "default" : "outline"}>
                    <a href="/ml-engineer-resume.pdf" download="Komendra-Sahu-ML-Engineer-Resume.pdf">
                      <Download className="mr-1.5 h-3.5 w-3.5" /> ML Engineer
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant={selectedCategory === "forward-deployed-engineer" ? "default" : "outline"}
                  >
                    <a
                      href="/forward-deployed-engineer-resume.pdf"
                      download="Komendra-Sahu-Forward-Deployed-Engineer-Resume.pdf"
                    >
                      <Download className="mr-1.5 h-3.5 w-3.5" /> Forward Deployed Engineer
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Experience and Sidebar Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              {/* Professional Experience */}
              <Card className="border-2 animate-fade-in-up">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold">Professional Experience</h2>
                  </div>
                  <div className="space-y-7">
                    {experience.map((exp, expIdx) => (
                      <article key={exp.id || expIdx} className={expIdx > 0 ? "border-t pt-6" : ""}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{exp.role}</h3>
                            <p className="text-sm font-medium text-primary">{exp.organization}</p>
                          </div>
                          <Badge variant="secondary" className="w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                          {exp.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Selected Work / Projects */}
              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-center gap-3">
                    <Code2 className="h-6 w-6 text-primary" />
                    <div>
                      <h2 className="text-2xl font-display font-semibold">Selected Work & Production Systems</h2>
                      <p className="text-sm text-muted-foreground">Production platforms, legal RAG, enterprise architectures & ML pipelines.</p>
                    </div>
                  </div>
                  {data.projects.map((project, index) => (
                    <article key={project.id || project.title} className={index === 0 ? "" : "border-t pt-6"}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <p className="text-sm font-medium text-primary">{project.highlight || project.category}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline transition-colors"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Live Site
                            </a>
                          )}
                          {project.videoUrl && (
                            <a
                              href={project.videoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-amber-500 hover:underline transition-colors"
                            >
                              <Play className="h-3.5 w-3.5 fill-current" />
                              Demo Video
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="h-3.5 w-3.5" />
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono font-medium text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </article>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Aside: Skills, Education, GATE */}
            <aside className="space-y-8">
              {/* Technical Skills */}
              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold">Technical Skills</h2>
                  </div>
                  <div className="space-y-5">
                    {skills.map((group) => (
                      <div key={group.label}>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {group.label}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {group.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="font-medium text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold">Education</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-base">{personalInfo.mtechTitle}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{personalInfo.mtechCollege}</p>
                      <div className="mt-1 flex items-center justify-between text-xs font-semibold">
                        <span className="text-muted-foreground">{personalInfo.mtechYear}</span>
                        <Badge variant="outline" className="border-primary/40 text-primary">
                          CGPA: {personalInfo.mtechCgpa}
                        </Badge>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <h3 className="font-semibold text-base">{personalInfo.btechTitle}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{personalInfo.btechCollege}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{personalInfo.btechYear}</p>
                    </div>
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">GATE 2025 (Computer Science)</span>
                        <Badge variant="default" className="text-xs">Score: {personalInfo.gateScore}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* Research & Publications */}
          <Card className="mt-8 border-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CardContent className="pt-6">
              <div className="mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="text-2xl font-display font-semibold">Research & Publications</h2>
                  <p className="text-sm text-muted-foreground">
                    Applied work across retrieval-augmented generation, scalable big data pipelines, NLP, and cloud intelligence.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {publications.map((publication) => (
                  <article key={publication.id || publication.title} className="rounded-xl border bg-secondary/30 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold leading-snug text-sm">{publication.title}</h3>
                        <a
                          href={publication.href}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 rounded-md border border-input bg-background px-2.5 py-1 text-xs font-semibold transition-colors hover:border-primary hover:text-primary flex items-center gap-1"
                        >
                          Paper
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <p className="mt-2 text-xs font-medium text-primary">{publication.venue}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{publication.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
                <Award className="h-5 w-5 shrink-0 text-primary" />
                Published in IEEE Xplore and author of three accepted 2026 conference research papers.
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
