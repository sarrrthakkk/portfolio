import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TypewriterEffect from "@/components/TypewriterEffect";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import guardiansImg from "@/assets/guardians-of-the-playlists.jpg";
import llama2Img from "@/assets/llama-2-snip.png";
import { trackNavigation, trackProjectInteractions, trackPortfolioInteraction } from "@/lib/analytics";

const featuredProjects = [
  {
    id: 1,
    title: "Llama-2: Optimizing LLMs for Efficient Inference & Adaptation",
    description: "This project investigates optimization techniques for Large Language Models (LLMs), focusing on LLaMA-2. It integrates efficient architectural improvements and inference methods to reduce memory usage and speed up text generation without compromising model quality.",
    technologies: ["Python", "PyTorch", "LLaMA-2", "LoRA", "Transformer", "NLP"],
    github: "https://github.com/vibhu-dixit/Llama-2",
    liveDemo: "https://docs.google.com/presentation/d/1nD79Gjl_E-mwHx-hff1kB3_GH-QSa4MjRQ56aXW-Kag/edit?slide=id.p#slide=id.p",
    image: llama2Img
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
    title: "Guardians of the Playlist",
    description: "A Flask web app to export all your Spotify playlists and tracks to a CSV file, ready for download. No files are stored on the server—your data is streamed directly to you!",
    technologies: ["Python", "Flask", "Spotify API", "OAuth", "CSV"],
    github: "https://github.com/sarrrthakkk/guardians-of-the-playlist",
    liveDemo: "https://youtu.be/t9MeMAa7Tlk",
    image: guardiansImg
  }
];

const Home = () => {
  const handleCTAClick = (ctaType: string, location: string) => {
    trackNavigation.ctaClick(ctaType, location);
  };

  const handleProjectInteraction = (projectName: string, action: 'github' | 'demo') => {
    trackProjectInteractions.projectButtonClick(projectName, action, 0);
  };

  const handleNavigationClick = (page: string) => {
    trackNavigation.pageView(page);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20 md:py-32 relative">
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
              I build scalable applications, implement advanced AI models, and architect robust cloud solutions with a focus on performance and security
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                size="lg"
                onClick={() => handleCTAClick('view_work', 'hero')}
              >
                <Link to="/projects" onClick={() => handleNavigationClick('projects')}>View My Work</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                onClick={() => handleCTAClick('contact', 'hero')}
              >
                <Link to="/contact" onClick={() => handleNavigationClick('contact')}>
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <span className="animate-bounce text-muted-foreground">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0-7-7m7 7 7-7"/></svg>
          </span>
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
                className="bg-card rounded-lg overflow-hidden shadow-md h-full flex flex-col"
                onAnimationComplete={() => trackProjectInteractions.projectCardView(project.title, project.technologies)}
              >
                <img src={project.image || `https://placehold.co/600x240?text=Project+${project.id}`} alt={project.title} className="h-48 w-full object-cover bg-muted" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      onClick={() => handleProjectInteraction(project.title, 'github')}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      asChild
                      onClick={() => handleProjectInteraction(project.title, 'demo')}
                    >
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
            <Button 
              asChild
              onClick={() => handleCTAClick('view_all_projects', 'featured_section')}
            >
              <Link to="/projects" onClick={() => handleNavigationClick('projects')}>View All Projects</Link>
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
            <Button 
              size="lg" 
              asChild
              onClick={() => handleCTAClick('get_in_touch', 'cta_section')}
            >
              <Link to="/contact" onClick={() => handleNavigationClick('contact')}>Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
