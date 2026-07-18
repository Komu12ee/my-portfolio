import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skillGroups = [
  {
    label: "Generative AI & Retrieval",
    skills: ["RAG", "LangChain", "RAG Fusion", "Semantic Search", "Prompt Engineering", "LLM APIs"],
  },
  {
    label: "Backend & Data",
    skills: ["Python", "FastAPI", "Flask", "Node.js", "PostgreSQL", "Qdrant", "REST APIs"],
  },
  {
    label: "Machine Learning",
    skills: ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "YOLOv8", "NLP"],
  },
  {
    label: "Delivery Tools",
    skills: ["Git", "Docker", "Linux", "PDF/OCR Pipelines", "React", "JavaScript"],
  },
];

const projects = [
  {
    title: "RTI Assistant - Legal RAG & PIO Advisory System",
    context: "Production work for the Chhattisgarh Government",
    stack: "Python, Flask, Node.js, Qdrant, PostgreSQL, BGE-M3, LLM APIs",
    points: [
      "Built a legal-intelligence assistant for RTI workflows, spanning semantic document retrieval, officer-directory search, and PIO advisory generation.",
      "Implemented Qdrant-based legal retrieval and PostgreSQL-backed PIO/FAA lookup, with source-PDF citations and precedent expansion.",
      "Designed an evidence-bound advisory flow that maps issues to RTI Act provisions and adds safeguards against unsupported responses.",
    ],
  },
  {
    title: "Financial Text Complexity Analytics",
    context: "NLP and machine learning research project",
    stack: "Python, FastAPI, React, Random Forest",
    points: [
      "Developed the Corporate Communication Text Complexity Index (CCTI) across 200K+ SEC filings.",
      "Trained a Random Forest model linking text complexity to stock returns, outperforming traditional sentiment-based baselines.",
    ],
  },
  {
    title: "Real-Time Traffic Monitoring System",
    context: "Edge-cloud computer vision system",
    stack: "Python, YOLOv8, Flask, React, CUDA",
    points: [
      "Built an end-to-end vehicle detection system with a live React monitoring dashboard and REST APIs.",
      "Improved inference throughput using asynchronous, rate-limited edge-to-cloud communication.",
    ],
  },
];

const publications = [
  {
    title: "Dynamic Query Handling with RAG Fusion for PDF-Based Knowledge Retrieval Systems",
    venue: "IEEE Xplore, 2025",
    detail: "Retrieval-augmented framework for document understanding and query handling over unstructured PDFs.",
    href: "https://ieeexplore.ieee.org/abstract/document/11070378",
  },
  {
    title: "Optimization of 100M-Scale Click Fraud Detection Pipelines on Resource-Constrained 2-Node YARN Clusters",
    venue: "ICST 2026 - Accepted",
    detail: "Apache Spark/YARN pipeline for 100M records; achieved ROC-AUC 0.9058 with Random Forest.",
    href: "https://drive.google.com/file/d/1aEeAZF1NQUDrDOS35Mi1zpLmTygY6neX/view?usp=sharing",
  },
  {
    title: "Nonlinear Effects of Text Complexity in Corporate Disclosures (CCTI)",
    venue: "ICTIS 2026 - Accepted",
    detail: "Established nonlinear links between disclosure complexity and stock returns using Random Forest models.",
    href: "https://drive.google.com/file/d/19RBirDyRtUM2-KO5GM4iu6bR1ZVIUXRi/view?usp=sharing",
  },
  {
    title: "Shift-Aware Meta-Reinforcement Learning for Robust Auto-Scaling in Serverless Clouds",
    venue: "ICTIS 2026 - Accepted",
    detail: "Proposed KL-divergence shift detection integrated with Meta-PPO for adaptive autoscaling.",
    href: "https://drive.google.com/file/d/1xY6dMJu-7HK_DoldoBxtgwB4Hml10mWL/view?usp=sharing",
  },
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="section-padding pt-28 md:pt-32">
        <div className="container-custom max-w-5xl">
          <section className="relative overflow-hidden rounded-3xl border bg-card p-7 shadow-soft md:p-10 animate-fade-in">
            <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Resume</p>
                <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Komendra Sahu</h1>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  GenAI and RAG developer building dependable AI systems - from data ingestion and retrieval to production-ready experiences.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Raipur, India</span>
                  <a className="flex items-center gap-2 transition-colors hover:text-primary" href="mailto:sahukomendra721@gmail.com">
                    <Mail className="h-4 w-4 text-primary" />sahukomendra721@gmail.com
                  </a>
                  <a className="flex items-center gap-2 transition-colors hover:text-primary" href="https://www.linkedin.com/in/komendrasahu" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4 text-primary" />LinkedIn
                  </a>
                  <a className="flex items-center gap-2 transition-colors hover:text-primary" href="https://github.com/Komu12ee" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 text-primary" />GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <p className="font-display text-lg font-semibold">Built for two audiences</p>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Placement:</span> applied AI, ML engineering, data, and research roles.</p>
                  <p><span className="font-semibold text-foreground">Freelance:</span> practical RAG, semantic search, and AI automation engagements.</p>
                </div>
              </div>
            </div>

            <div className="relative mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <a href="/placement-resume.pdf" download="Komendra-Sahu-Placement-Resume.pdf">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download placement resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <a href="/freelance-resume.pdf" download="Komendra-Sahu-Freelance-Resume.pdf">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download freelance resume
                </a>
              </Button>
            </div>
          </section>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <Card className="border-2 animate-fade-in-up">
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold">Professional experience</h2>
                  </div>
                  <div className="space-y-6">
                    <article>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">CMIT Fellow</h3>
                          <p className="text-sm text-muted-foreground">Chhattisgarh government AI initiatives</p>
                        </div>
                        <Badge variant="secondary" className="w-fit">Present</Badge>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Developing GenAI and RAG chatbot solutions for government departments, from unstructured data ingestion through deployment.</li>
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Working within practical infrastructure, compliance, and real-world data constraints.</li>
                      </ul>
                    </article>
                    <article className="border-t pt-5">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">Machine Learning Intern - Unified Mentor</h3>
                          <p className="text-sm text-muted-foreground">Remote</p>
                        </div>
                        <Badge variant="secondary" className="w-fit">Jan 2026 - Apr 2026</Badge>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Built student segmentation and course-recommendation systems using PCA, K-Means, and SVD-based collaborative filtering.</li>
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Identified learner groups with a Silhouette Score of 0.633 to support personalized EduPro recommendations.</li>
                      </ul>
                    </article>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-center gap-3">
                    <Code2 className="h-6 w-6 text-primary" />
                    <div>
                      <h2 className="text-2xl font-display font-semibold">Selected work</h2>
                      <p className="text-sm text-muted-foreground">Production-minded projects with measurable scope.</p>
                    </div>
                  </div>
                  {projects.map((project, index) => (
                    <article key={project.title} className={index === 0 ? "" : "border-t pt-6"}>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <p className="text-sm font-medium text-primary">{project.context}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm italic text-muted-foreground">{project.stack}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {project.points.map((point) => <li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{point}</li>)}
                      </ul>
                    </article>
                  ))}
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-8">
              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold">Core skills</h2>
                  </div>
                  <div className="space-y-5">
                    {skillGroups.map((group) => (
                      <div key={group.label}>
                        <h3 className="mb-2 text-sm font-semibold text-muted-foreground">{group.label}</h3>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => <Badge key={skill} variant="secondary" className="font-medium">{skill}</Badge>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold">Education</h2>
                  </div>
                  <div>
                    <h3 className="font-semibold">M.Tech, Data Science & AI</h3>
                    <p className="mt-1 text-sm text-muted-foreground">IIIT Naya Raipur</p>
                    <p className="mt-1 text-sm font-medium text-primary">2025 - 2027 · CGPA: 9.16</p>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="font-semibold">B.Tech, Computer Science & Engineering</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Government Engineering College, Raipur</p>
                    <p className="mt-1 text-sm font-medium text-primary">2021 - 2025</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-3 text-sm">
                    <span className="font-semibold">GATE 2025 (CSE)</span><br />
                    <span className="text-muted-foreground">Score: 585</span>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>

          <Card className="mt-8 border-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CardContent className="pt-6">
              <div className="mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="text-2xl font-display font-semibold">Research & publications</h2>
                  <p className="text-sm text-muted-foreground">Applied work across retrieval, scalable data systems, NLP, and cloud intelligence.</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {publications.map((publication) => (
                  <article key={publication.title} className="rounded-xl border bg-secondary/30 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold leading-snug">{publication.title}</h3>
                      <a
                        href={publication.href}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 rounded-md border border-input bg-background px-2.5 py-0.5 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                      >
                        View paper
                      </a>
                    </div>
                    <p className="mt-2 text-sm font-medium text-primary">{publication.venue}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{publication.detail}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
                <Award className="h-5 w-5 shrink-0 text-primary" />
                Published in IEEE Xplore and author of three accepted 2026 conference papers.
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
