import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/content";
import {
  trackProjectInteractions,
  trackPortfolioInteraction,
} from "@/lib/analytics";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProjectCardView = (projectName: string, technologies: string[]) => {
    trackProjectInteractions.projectCardView(projectName, technologies);
  };

  const handleProjectButtonClick = (
    projectName: string,
    buttonType: "github" | "demo",
    projectId: number
  ) => {
    trackProjectInteractions.projectButtonClick(
      projectName,
      buttonType,
      projectId
    );
  };

  const handleTechnologyHover = (technology: string) => {
    trackPortfolioInteraction.skillHover(technology);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
          Case studies and systems work across network infrastructure,
          distributed platforms, and AI/ML systems — one coherent story, not a
          random project list.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onAnimationComplete={() =>
                handleProjectCardView(project.title, project.technologies)
              }
            >
              <Card className="h-full flex flex-col overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover bg-muted"
                  />
                ) : (
                  <div className="h-44 w-full bg-gradient-to-br from-primary/15 via-muted to-secondary flex items-end p-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <p className="text-xs text-muted-foreground mb-1">
                    {project.tagline}
                  </p>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        onMouseEnter={() => handleTechnologyHover(tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 justify-between">
                  {project.hasCaseStudy && (
                    <Button size="sm" asChild>
                      <Link to={`/projects/${project.slug}`}>
                        Case study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  <div className="flex gap-2 ml-auto">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        onClick={() =>
                          handleProjectButtonClick(
                            project.title,
                            "github",
                            project.id
                          )
                        }
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        onClick={() =>
                          handleProjectButtonClick(
                            project.title,
                            "demo",
                            project.id
                          )
                        }
                      >
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkIcon className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
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
