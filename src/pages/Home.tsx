import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";
import TypewriterEffect from "@/components/TypewriterEffect";
import {
  trackNavigation,
  trackProjectInteractions,
  trackSocialMedia,
  trackPortfolioInteraction,
} from "@/lib/analytics";
import { profile, featuredProjects } from "@/content";
import { config } from "@/lib/config";

const typewriterWords = [
  "Sarthak Mishra",
  "a Systems Engineer",
  "a Network Engineer",
  "into Distributed Systems",
  "into AI Infrastructure",
];

const highlightProjects = featuredProjects
  .filter((p) => p.hasCaseStudy)
  .slice(0, 3);

const Home = () => {
  const handleCTAClick = (ctaType: string, location: string) => {
    trackNavigation.ctaClick(ctaType, location);
  };

  return (
    <div>
      {/* Hero — one composition */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_60%,hsl(var(--background)))]" />

        <div className="container mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-bold tracking-tight leading-[1.15] mb-6">
              <span className="whitespace-nowrap">
                Hi, I&apos;m{" "}
                <TypewriterEffect words={typewriterWords} typingSpeed={90} />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              {profile.heroLead}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button
                asChild
                size="lg"
                onClick={() => handleCTAClick("view_experience", "hero")}
              >
                <Link to="/experience">
                  View Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => handleCTAClick("explore_projects", "hero")}
              >
                <Link to="/projects">Projects</Link>
              </Button>
            </div>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a
                href={config.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm hover:text-foreground transition-colors"
                onClick={() => trackPortfolioInteraction.resumeDownload()}
              >
                <FileDown className="h-4 w-4" />
                Resume
              </a>
              <span className="h-3 w-px bg-border" aria-hidden />
              <a
                href={config.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                onClick={() => trackSocialMedia.linkedin()}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={config.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
                onClick={() => trackSocialMedia.github("hero")}
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-muted-foreground/40 to-muted-foreground/80 animate-pulse" />
        </motion.div>
      </section>

      {/* Impact — below fold, compact */}
      <section className="border-y border-border/60 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {profile.impact.map((metric, i) => (
              <motion.div
                key={metric.value}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <p className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work — list, not card wall */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex items-baseline justify-between gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Selected work
            </h2>
            <Link
              to="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              onClick={() => handleCTAClick("view_all_projects", "featured")}
            >
              All projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ul className="divide-y divide-border border-t border-b">
            {highlightProjects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                onAnimationComplete={() =>
                  trackProjectInteractions.projectCardView(
                    project.title,
                    project.technologies
                  )
                }
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-7 md:py-9 transition-colors"
                  onClick={() => handleCTAClick("case_study", project.slug)}
                >
                  <span className="text-sm text-muted-foreground font-mono w-8 shrink-0">
                    0{index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 truncate">
                      {project.tagline}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block shrink-0" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Let&apos;s connect
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {profile.opportunities}
            </p>
            <Button
              size="lg"
              asChild
              onClick={() => handleCTAClick("get_in_touch", "cta_section")}
            >
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
