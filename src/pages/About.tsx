
import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js",
  "JavaScript", "CSS/Tailwind", "UI/UX Design", "GraphQL"
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-muted aspect-square rounded-lg overflow-hidden mb-4"></div>
            <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
            <p className="text-muted-foreground">Full-Stack Developer</p>
          </div>
          
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Hello! I'm a passionate developer with over 5 years of experience building web applications.
                I specialize in creating responsive, accessible, and performant websites using modern technologies.
              </p>
              
              <p className="text-lg mb-4">
                My journey in web development started during college when I built my first website for a local business.
                Since then, I've worked with startups and established companies to deliver impactful digital solutions.
              </p>
              
              <p className="text-lg mb-8">
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new recipes in the kitchen.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Senior Frontend Developer</h4>
                  <p className="text-muted-foreground">Tech Company • 2021 - Present</p>
                  <p className="mt-2">Led frontend development for multiple projects using React and TypeScript.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Full-Stack Developer</h4>
                  <p className="text-muted-foreground">Agency Inc. • 2018 - 2021</p>
                  <p className="mt-2">Built full-stack web applications for clients across various industries.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Junior Developer</h4>
                  <p className="text-muted-foreground">Startup LLC • 2016 - 2018</p>
                  <p className="mt-2">Developed and maintained web applications using JavaScript and PHP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
