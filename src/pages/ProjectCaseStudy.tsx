import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import { getCaseStudyBySlug, getProjectBySlug } from "@/content";
import {
  trackProjectInteractions,
  trackPortfolioInteraction,
} from "@/lib/analytics";

const ProjectCaseStudy = () => {
  const { slug = "" } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (caseStudy) {
      trackPortfolioInteraction.projectView(caseStudy.title);
    }
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Case study not found</h1>
        <Button asChild>
          <Link to="/projects">Back to projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All projects
          </Link>
        </Button>

        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Case Study {caseStudy.number}
        </p>
        <h1 className="text-4xl font-bold mb-3">{caseStudy.title}</h1>
        <p className="text-xl text-primary font-medium mb-8">
          {caseStudy.impactLine}
        </p>

        {caseStudy.image && (
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full rounded-lg mb-8 bg-muted object-cover max-h-80"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-10">
          {caseStudy.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-10">
          {caseStudy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
                {section.title}
              </h2>
              {section.body && (
                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {(caseStudy.github || caseStudy.liveDemo || project?.github) && (
          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t">
            {(caseStudy.github || project?.github) && (
              <Button
                variant="outline"
                asChild
                onClick={() =>
                  trackProjectInteractions.projectButtonClick(
                    caseStudy.title,
                    "github",
                    project?.id ?? 0
                  )
                }
              >
                <a
                  href={caseStudy.github || project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {(caseStudy.liveDemo || project?.liveDemo) && (
              <Button
                asChild
                onClick={() =>
                  trackProjectInteractions.projectButtonClick(
                    caseStudy.title,
                    "demo",
                    project?.id ?? 0
                  )
                }
              >
                <a
                  href={caseStudy.liveDemo || project?.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectCaseStudy;
