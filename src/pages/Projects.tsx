import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import guardiansImg from "@/assets/guardians-of-the-playlists.jpg";
import llama2Img from "@/assets/llama-2-snip.png";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Microservice Architecture Implementation",
    description: "Designed and implemented containerized microservices architecture for a high-traffic application, improving scalability and maintainability.",
    technologies: ["Docker", "Kubernetes", "Python", "CI/CD", "MongoDB"],
    image: "project1.jpg",
    github: "https://github.com/sarrrthakkk",
    liveDemo: "https://example.com"
  },
  {
    id: 2,
    title: "Automated System Administration Tool",
    description: "Developed a suite of shell scripts for automating common system administration tasks, reducing manual intervention by 40%.",
    technologies: ["Bash", "Shell Scripting", "Linux", "Cron Jobs"],
    image: "project2.jpg",
    github: "https://github.com/sarrrthakkk",
    liveDemo: "https://example.com"
  },
  {
    id: 3,
    title: "Guardians of the Playlist",
    description: "A Flask web app to export all your Spotify playlists and tracks to a CSV file, ready for download. No files are stored on the server—your data is streamed directly to you!",
    technologies: ["Python", "Flask", "Spotify API", "OAuth", "CSV"],
    image: guardiansImg,
    github: "https://github.com/sarrrthakkk/guardians-of-the-playlist",
    liveDemo: "https://example.com"
  },
  {
    id: 4,
    title: "Llama-2: Optimizing LLMs for Efficient Inference & Adaptation",
    description: "This project investigates optimization techniques for Large Language Models (LLMs), focusing on LLaMA-2. It integrates efficient architectural improvements and inference methods to reduce memory usage and speed up text generation without compromising model quality. Features include Rotary Positional Encoding, Grouped Multi-Query Attention, Key-Value Caching, SwiGLU activation, and LoRA integration.",
    technologies: ["Python", "PyTorch", "LLaMA-2", "LoRA", "Transformer", "NLP"],
    image: llama2Img,
    github: "https://github.com/vibhu-dixit/Llama-2",
    liveDemo: "https://docs.google.com/presentation/d/1nD79Gjl_E-mwHx-hff1kB3_GH-QSa4MjRQ56aXW-Kag/edit?slide=id.p#slide=id.p"
  },
  {
    id: 5,
    title: "Cloud Infrastructure Automation",
    description: "Created infrastructure as code templates for automated cloud resource provisioning and management.",
    technologies: ["Terraform", "AWS", "Ansible", "Jenkins"],
    image: "project5.jpg",
    github: "https://github.com/sarrrthakkk",
    liveDemo: "https://example.com"
  },
  {
    id: 6,
    title: "Real-time Data Processing Pipeline",
    description: "Built a real-time data processing pipeline handling 1M+ events per day with 99.9% uptime.",
    technologies: ["Kafka", "Spark", "Python", "Redis"],
    image: "project6.jpg",
    github: "https://github.com/sarrrthakkk",
    liveDemo: "https://example.com"
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <img src={project.image || `https://placehold.co/600x240?text=Project+${project.id}`} alt={project.title} className="h-48 w-full object-cover bg-muted" />
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
