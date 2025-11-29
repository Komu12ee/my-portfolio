import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import titanicProject from "@/assets/titanic-project.jpg";
import mathsPredictor from "@/assets/maths-predictor.jpg";
import primodayProject from "@/assets/primoday-project.jpg";
import nextliteProject from "@/assets/nextlite-project.jpg";
import syncnowProject from "@/assets/syncnow-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Titanic Survival Predictor",
      description: "Predicts the probability of survival of Titanic passengers using machine learning, based on features like age, gender, class, and family aboard. Built with Python, scikit-learn, and Flask for a web interface.",
      image: titanicProject,
      tags: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
    },
    {
      title: "Maths Marks Predictor",
      description: "Student marks prediction project using machine learning algorithms to forecast student performance based on various academic and demographic factors.",
      image: mathsPredictor,
      tags: ["Python", "ML", "Data Analysis", "Predictive Modeling"],
    },
    {
      title: "Visodream Forum Development",
      description: "Developed a new forum platform for the Visodream community with modern features and user-friendly interface.",
      image: primodayProject,
      tags: ["Web Development", "Community Platform", "Full Stack"],
    },
    {
      title: "Primoday Corporate Website Redesign",
      description: "Complete redesign of their corporate website and platform with modern UI/UX principles and enhanced functionality.",
      image: primodayProject,
      tags: ["Web Design", "Corporate", "UI/UX", "Redesign"],
    },
    {
      title: "Nextlite Video Editing Web App",
      description: "Created a custom video editing and upload web application with intuitive interface and powerful editing capabilities.",
      image: nextliteProject,
      tags: ["Web App", "Video Editing", "React", "Media Processing"],
    },
    {
      title: "SyncNow Corporate Websites",
      description: "Developed multiple corporate websites with focus on performance, SEO, and modern design principles.",
      image: syncnowProject,
      tags: ["Corporate", "Web Development", "SEO", "Performance"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold">Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Listed below are some of the most representative projects I've worked on. 
              They range from basic to advanced Machine Learning and Deep Learning projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
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