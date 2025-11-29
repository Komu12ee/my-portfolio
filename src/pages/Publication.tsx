import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Download, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Publication = () => {
  const publication = {
    title: "Dynamic Query Handling with RAG Fusion for PDF-Based Knowledge Retrieval Systems",
    year: "2025",
    publisher: "IEEE Xplore",
    abstract: "This paper presents a novel approach to dynamic query handling using RAG (Retrieval-Augmented Generation) Fusion for PDF-based knowledge retrieval systems. The research explores innovative methods for improving information extraction and query processing in document-based AI systems.",
    keywords: ["RAG Fusion", "Knowledge Retrieval", "PDF Processing", "Natural Language Processing", "Machine Learning"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold">Publication</h1>
            <p className="text-muted-foreground text-lg">
              Research contributions to the field of AI and Machine Learning
            </p>
          </div>

          <Card className="border-2 animate-fade-in-up">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-2">
                      {publication.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>Year: {publication.year}</span>
                      <span>•</span>
                      <span>Publisher: {publication.publisher}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Abstract</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {publication.abstract}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="group">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on IEEE
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 bg-muted/30 rounded-lg p-8 text-center space-y-4">
            <h3 className="text-xl font-display font-semibold">More publications coming soon!</h3>
            <p className="text-muted-foreground">
              Stay tuned for more research contributions in AI, ML, and MLOps.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publication;