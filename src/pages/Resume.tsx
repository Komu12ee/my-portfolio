import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resume = () => {
  const skills = [
    "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Flask",
    "Docker", "Kubernetes", "MLflow", "DVC", "AWS", "Seldon",
    "Git", "CI/CD", "Model Deployment", "Data Pipelines"
  ];

  const tools = [
    "PowerBI", "Tableau", "Plotly", "Jupyter", "VS Code",
    "Figma", "Photoshop", "Illustrator", "Adobe XD"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold">Resume</h1>
            <p className="text-muted-foreground text-lg">
              My professional journey and expertise
            </p>
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="space-y-8">
            {/* About Summary */}
            <Card className="border-2 animate-fade-in-up">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  About
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  CM-IT Fellow and M.Tech student in Data Science & Artificial Intelligence at IIIT Naya Raipur. 
                  Passionate about solving real-world problems with machine learning, building end-to-end ML models, 
                  and creating scalable MLOps systems. Focused on clean, modular code and production-ready AI solutions.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </h2>
                <div>
                  <h3 className="text-lg font-semibold">M.Tech in Data Science & Artificial Intelligence</h3>
                  <p className="text-muted-foreground">IIIT Naya Raipur</p>
                  <p className="text-sm text-muted-foreground mt-1">Current</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Experience
                </h2>
                <div>
                  <h3 className="text-lg font-semibold">CM-IT Fellow</h3>
                  <p className="text-muted-foreground">IIIT Naya Raipur</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Collaborating with government departments to identify regional challenges and design AI/ML 
                    architecture solutions. Building scalable AI systems for long-term innovation and impact.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-display font-semibold">Technical Skills</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">ML & Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Tools & Design</h3>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-display font-semibold">Achievements</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">District-level basketball player</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Published research paper in IEEE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">CM-IT Fellowship recipient</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resume;