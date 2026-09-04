import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";
import { trackSocialMedia, trackPortfolioInteraction } from "@/lib/analytics";
import {
  about,
  skillDomains,
  education,
  timeline,
  certifications,
  profile,
} from "@/content";
import { config } from "@/lib/config";
import ResumeButton from "@/components/ResumeButton";

const About = () => {
  const handleContactClick = (
    type: "email" | "phone" | "linkedin",
    context: string
  ) => {
    switch (type) {
      case "email":
        trackSocialMedia.email(context);
        break;
      case "phone":
        trackSocialMedia.phone(context);
        break;
      case "linkedin":
        trackSocialMedia.linkedin();
        break;
    }
  };

  const handleSkillHover = (skill: string) => {
    trackPortfolioInteraction.skillHover(skill);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-1">
            <img
              src={aboutPhoto}
              alt="Sarthak Mishra"
              className="bg-muted aspect-square rounded-full overflow-hidden mb-4 object-cover w-full h-auto"
            />
            <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
            <p className="text-muted-foreground text-sm mb-4">
              {profile.shortTitle}
            </p>
            <div className="space-y-2 text-sm mb-4">
              <a
                href={`mailto:${config.contact.email}`}
                className="flex items-center gap-2 text-primary hover:underline"
                onClick={() => handleContactClick("email", "about_page")}
              >
                <Mail className="h-4 w-4" />
                {config.contact.email}
              </a>
              <a
                href={`tel:+1${config.contact.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-primary hover:underline"
                onClick={() => handleContactClick("phone", "about_page")}
              >
                <Phone className="h-4 w-4" />
                {config.contact.phone}
              </a>
              <a
                href={config.contact.linkedin}
                className="flex items-center gap-2 text-primary hover:underline"
                onClick={() => handleContactClick("linkedin", "about_page")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
            <ResumeButton size="default" className="w-full" />
          </div>

          <div className="md:col-span-2 space-y-4">
            {about.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">How I Engineer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.howIEngineer.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-primary pl-4 py-1"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{item.body}</p>
                {"example" in item && item.example && (
                  <p className="text-sm font-medium text-primary">
                    {item.example}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Research & Technical Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.researchInterests.map((area) => (
              <div key={area.title} className="bg-secondary/50 rounded-lg p-5">
                <h3 className="font-semibold mb-3">{area.title}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {area.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills by Domain</h2>
          <div className="space-y-8">
            {skillDomains.map((domain) => (
              <div key={domain.title}>
                <h3 className="font-semibold mb-3">{domain.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {domain.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                      onMouseEnter={() => handleSkillHover(skill)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Career Timeline</h2>
          <div className="relative border-l-2 border-primary ml-3 space-y-8">
            {timeline.map((item) => (
              <div key={`${item.year}-${item.title}`} className="pl-8 relative">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <p className="text-sm font-bold text-primary">{item.year}</p>
                <p className="text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.degree}
                className="border-l-2 border-primary pl-4"
              >
                <h3 className="text-lg font-medium">{item.degree}</h3>
                <p className="text-muted-foreground">
                  {item.school} · {item.dates}
                </p>
                <p className="mt-1">{item.details}</p>
                {item.areas.length > 0 && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Focus areas: {item.areas.join(" · ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Production Systems at Global Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary/50 rounded-lg p-5">
              <h3 className="font-semibold mb-2">AWS</h3>
              <p className="text-sm text-muted-foreground">
                {about.customers.aws}
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-5">
              <h3 className="font-semibold mb-2">Nokia</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {about.customers.nokia.description}
              </p>
              <p className="text-sm font-medium">
                {about.customers.nokia.names.join(" · ")}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Awards</h2>
          {about.awards.map((award) => (
            <div
              key={award.title}
              className="border border-primary/20 bg-primary/5 rounded-lg p-5 max-w-2xl"
            >
              <p className="text-sm text-primary font-medium mb-1">
                {award.date}
              </p>
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-muted-foreground">{award.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((group) => (
              <div key={group.issuer}>
                <h3 className="font-semibold mb-2">{group.issuer}</h3>
                <ul className="list-disc ml-5 text-muted-foreground space-y-1">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
