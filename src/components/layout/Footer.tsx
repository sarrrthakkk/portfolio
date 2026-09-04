import { Github, Mail, Linkedin, FileDown } from "lucide-react";
import { config } from "@/lib/config";
import { profile } from "@/content";
import {
  trackSocialMedia,
  trackPortfolioInteraction,
} from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-md">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {profile.shortTitle}
            </p>
            <p className="text-sm text-muted-foreground mt-3 italic">
              {profile.footerTagline}
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © {currentYear} {profile.name}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
              onClick={() => trackSocialMedia.github("footer")}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
              onClick={() => trackSocialMedia.linkedin()}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${config.contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
              onClick={() => trackSocialMedia.email("footer")}
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Download Resume"
              onClick={() => trackPortfolioInteraction.resumeDownload()}
            >
              <FileDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
