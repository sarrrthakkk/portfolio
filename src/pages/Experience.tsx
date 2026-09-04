import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/content";
import ResumeButton from "@/components/ResumeButton";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-3">Experience</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Production networking and distributed systems at Nokia and AWS,
              plus systems work and teaching at ASU.
            </p>
          </div>
          <ResumeButton />
        </div>

        <div className="space-y-16">
          {experience.map((job, index) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-l-2 border-primary pl-6 md:pl-8"
            >
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">
                  {job.dates} · {job.location}
                </p>
                <h2 className="text-2xl font-bold">{job.company}</h2>
                <h3 className="text-lg text-primary font-medium mt-1">
                  {job.role}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4 max-w-3xl">
                {job.overview}
              </p>

              {job.flagshipImpact && (
                <blockquote className="border border-primary/20 bg-primary/5 rounded-md p-4 mb-6 max-w-3xl">
                  <p className="font-medium leading-relaxed">
                    {job.flagshipImpact}
                  </p>
                </blockquote>
              )}

              <div className="space-y-6 max-w-3xl">
                {job.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-semibold mb-2">{section.title}</h4>
                    {section.body && (
                      <p className="text-muted-foreground mb-2">
                        {section.body}
                      </p>
                    )}
                    {section.bullets && (
                      <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {section.impact && (
                      <p className="mt-2 text-sm font-medium text-primary">
                        Impact: {section.impact}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {job.recognition && (
                <p className="mt-6 text-sm font-medium bg-secondary inline-block px-3 py-2 rounded">
                  {job.recognition}
                </p>
              )}

              {job.technologies && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
