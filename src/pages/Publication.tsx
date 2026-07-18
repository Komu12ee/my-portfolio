import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const publications = [
  {
    title: "Optimization of 100M-Scale Click Fraud Detection Pipelines on Resource-Constrained 2-Node YARN Clusters",
    venue: "ICST 2026",
    status: "Accepted",
    description: "Designed an optimized Apache Spark and YARN pipeline to process 100 million click records on a resource-constrained two-node cluster using eager checkpointing and hardware-aware memory configuration, achieving a ROC-AUC of 0.9058 with Random Forest.",
    keywords: ["Apache Spark", "YARN", "Click Fraud Detection", "Random Forest"],
    href: "https://drive.google.com/file/d/1aEeAZF1NQUDrDOS35Mi1zpLmTygY6neX/view?usp=sharing",
  },
  {
    title: "Nonlinear Effects of Text Complexity in Corporate Disclosures (CCTI)",
    venue: "ICTIS 2026",
    status: "Accepted",
    description: "Developed a novel CCTI index and demonstrated nonlinear relationships between textual complexity and stock returns using Random Forest models.",
    keywords: ["NLP", "Text Complexity", "Financial Analytics", "Random Forest"],
    href: "https://drive.google.com/file/d/19RBirDyRtUM2-KO5GM4iu6bR1ZVIUXRi/view?usp=sharing",
  },
  {
    title: "Shift-Aware Meta-Reinforcement Learning for Robust Auto-Scaling in Serverless Clouds",
    venue: "ICTIS 2026",
    status: "Accepted",
    description: "Proposed a KL-divergence-based shift detection mechanism integrated with Meta-PPO for adaptive autoscaling under dynamic workloads.",
    keywords: ["Meta-Reinforcement Learning", "Serverless", "Auto-Scaling", "Meta-PPO"],
    href: "https://drive.google.com/file/d/1xY6dMJu-7HK_DoldoBxtgwB4Hml10mWL/view?usp=sharing",
  },
  {
    title: "Dynamic Query Handling with RAG Fusion for PDF-Based Knowledge Retrieval Systems",
    venue: "IEEE Xplore, 2025",
    status: "Published",
    description: "Proposed a retrieval-augmented framework for efficient document understanding and query handling over unstructured PDFs.",
    keywords: ["RAG Fusion", "Knowledge Retrieval", "PDF Processing", "NLP"],
    href: "https://ieeexplore.ieee.org/abstract/document/11070378",
  },
];

const Publication = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="section-padding pt-28 md:pt-32">
        <div className="container-custom max-w-5xl">
          <header className="mb-12 text-center space-y-4 animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Research</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold">Publications</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Research contributions across retrieval-augmented generation, scalable data systems, NLP, and cloud intelligence.
            </p>
          </header>

          <div className="grid gap-6">
            {publications.map((publication, index) => (
              <Card
                key={publication.title}
                className="border-2 transition-all duration-300 hover:border-primary hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="hidden h-12 w-12 shrink-0 rounded-lg bg-primary/10 sm:flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <article className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h2 className="text-xl font-display font-bold leading-snug md:text-2xl">{publication.title}</h2>
                          <p className="mt-2 text-sm font-medium text-primary">{publication.venue}</p>
                        </div>
                        <Badge variant={publication.status === "Published" ? "default" : "secondary"} className="w-fit">
                          {publication.status}
                        </Badge>
                      </div>

                      <p className="mt-4 leading-relaxed text-muted-foreground">{publication.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {publication.keywords.map((keyword) => (
                          <Badge key={keyword} variant="outline">{keyword}</Badge>
                        ))}
                      </div>

                      <Button asChild className="mt-5 group">
                        <a href={publication.href} target="_blank" rel="noreferrer">
                          View paper
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </article>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Publication;
