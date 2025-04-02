
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with payment integration and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "project1.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "project2.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website that showcases projects and skills with a clean design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "project3.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts for multiple locations.",
    technologies: ["JavaScript", "APIs", "CSS"],
    image: "project4.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A web app that helps users discover recipes based on available ingredients.",
    technologies: ["React", "Redux", "API Integration"],
    image: "project5.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media metrics across multiple platforms.",
    technologies: ["Vue.js", "Chart.js", "REST APIs"],
    image: "project6.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A showcase of my recent work and personal projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="h-48 bg-muted"></div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
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
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
