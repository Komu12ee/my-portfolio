import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blogs = () => {
  const featuredBlog = {
    title: "My First Kaggle Competition — A Journey That Sparked My Data Science Passion",
    excerpt: "On October 6th, I came across the Road Accident Severity Prediction competition on Kaggle. Out of curiosity, I clicked on it — and within minutes, I was completely drawn in.",
    date: "November 1, 2025",
    category: "Medium",
    link: "https://medium.com/@komendra/my-first-kaggle-competition-a-journey-that-sparked-my-data-science-passion-25fdfe8f20bc",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold">Blogs</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing my journey, insights, and learnings in data science and machine learning.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Featured Blog</h2>
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{featuredBlog.category}</Badge>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredBlog.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold hover:text-primary transition-colors">
                    {featuredBlog.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  
                  <a
                    href={featuredBlog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-xl font-display font-semibold">More blogs coming soon!</h3>
              <p className="text-muted-foreground">
                Stay tuned for more articles on machine learning, MLOps, and data science.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;