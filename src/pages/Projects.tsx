import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Microservice Architecture Implementation",
    description: "Designed and implemented containerized microservices architecture for a high-traffic application, improving scalability and maintainability.",
    technologies: ["Docker", "Kubernetes", "Python", "CI/CD", "MongoDB"],
    image: "project1.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 2,
    title: "Automated System Administration Tool",
    description: "Developed a suite of shell scripts for automating common system administration tasks, reducing manual intervention by 40%.",
    technologies: ["Bash", "Shell Scripting", "Linux", "Cron Jobs"],
    image: "project2.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 3,
    title: "Backend API for E-commerce Platform",
    description: "Built a scalable REST API backend system for an e-commerce platform handling 10,000+ daily transactions.",
    technologies: ["Python", "AWS Lambda", "API Gateway", "DynamoDB"],
    image: "project3.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 4,
    title: "Database Performance Optimization",
    description: "Optimized database queries and schema design for a legacy application, improving response times by 65%.",
    technologies: ["MySQL", "Database Optimization", "Indexing", "SQL"],
    image: "project4.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 5,
    title: "Cloud Infrastructure Migration",
    description: "Led the migration of on-premises infrastructure to AWS cloud, implementing best practices for security and cost optimization.",
    technologies: ["AWS", "Terraform", "CloudFormation", "Security"],
    image: "project5.jpg",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 6,
    title: "Kafka-based Real-time Data Processing",
    description: "Implemented a real-time data processing pipeline using Apache Kafka for streaming analytics.",
    technologies: ["Apache Kafka", "Java", "Stream Processing", "Analytics"],
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
