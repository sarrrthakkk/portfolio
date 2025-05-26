import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TypewriterEffect from "@/components/TypewriterEffect";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    id: 1,
    title: "Microservice Architecture Implementation",
    description: "Designed and implemented containerized microservices architecture for a high-traffic application, improving scalability and maintainability.",
    technologies: ["Docker", "Kubernetes", "Python", "CI/CD", "MongoDB"],
    github: "https://github.com/sarrrthakkk",
    liveDemo: "https://example.com"
  },
  {
    id: 2,
    title: "Automated System Administration Tool",
    description: "Developed a suite of shell scripts for automating common system administration tasks, reducing manual intervention by 40%.",
    technologies: ["Bash", "Shell Scripting", "Linux", "Cron Jobs"],
    github: "https://github.com/sarrrthakkk",
    liveDemo: "https://example.com"
  },
  {
    id: 3,
    title: "Backend API for E-commerce Platform",
    description: "Built a scalable REST API backend system for an e-commerce platform handling 10,000+ daily transactions.",
    technologies: ["Python", "AWS Lambda", "API Gateway", "DynamoDB"],
    github: "https://github.com/sarrrthakkk",
    liveDemo: "https://example.com"
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-primary">
                <TypewriterEffect 
                  words={["Sarthak Mishra", "a Full Stack Developer", "an AI Researcher", "a Cloud Engineer"]}
                  typingSpeed={100}
                />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I build efficient and secure technical solutions with expertise in backend development and IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              I'm currently available for freelance work or full-time positions.
              If you're interested in working together, please get in touch!
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
