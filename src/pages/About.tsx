import { motion } from "framer-motion";

const skills = [
  // Cloud & Infrastructure
  "Kubernetes", "Docker", "AWS", "Linux",
  // Programming Languages
  "Python", "Shell Scripting", "PHP", "Perl", "Java", "C", "C++", "Go",
  // Databases & Data Processing
  "MongoDB", "MySQL", "Apache Kafka", "NumPy",
  // Networking & APIs
  "NAT Gateways", "API Gateways",
  // AI & Machine Learning
  "PyTorch", "Transformer Architecture", "Attention Mechanisms", 
  "Key-Value Caching", "Grouped Query Attention", "Rotary Positional Embeddings",
  "RMSNorm", "Language Modeling", "Sequence Modeling", "Deep Learning", 
  "Neural Networks", "Model Optimization",
  // Tools & Others
  "Git", "LaTeX", "MATLAB"
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
            <h2 className="text-2xl font-semibold mb-2">Sarthak Mishra</h2>
            <p className="text-muted-foreground">Full Stack Developer, AI Researcher & Cloud Engineer</p>
            <div className="mt-4">
              <p className="text-sm">📧 <a href="mailto:smish147@asu.edu" className="text-primary hover:underline">smish147@asu.edu</a></p>
              <p className="text-sm">📞 <a href="tel:+16232767027" className="text-primary hover:underline">623-276-7027</a></p>
              <p className="text-sm">💼 <a href="https://linkedin.com/in/sarthakmishraftw" className="text-primary hover:underline">LinkedIn Profile</a></p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Experienced professional with expertise in full-stack development, artificial intelligence research, and cloud engineering. 
                Specialized in building scalable applications, implementing advanced AI models, and architecting robust cloud solutions.
              </p>
              
              <p className="text-lg mb-8">
                Proficient in transformer architectures, deep learning frameworks, and cloud infrastructure. 
                Demonstrated success in developing efficient AI solutions, optimizing model performance, and implementing 
                secure cloud-based systems with a focus on scalability and reliability.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Master of Science in Computer Science</h4>
                  <p className="text-muted-foreground">Arizona State University, Tempe, AZ • Graduating December 2026</p>
                  <p className="mt-2">Ira A. Fulton Schools of Engineering</p>
                  <p className="mt-1">Relevant Coursework: CSE575-Statistical Machine Learning; CSE551-Foundation of Algorithms; CSE548-Advanced Computer Network Security</p>
                  <p className="mt-1">GPA: 3.9/4</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Bachelor of Technology in Computer Science and Engineering</h4>
                  <p className="text-muted-foreground">SRM Institute of Science and Technology, India • Graduated: May 2021</p>
                  <p className="mt-2">GPA: 3.48/4 (91.03%)</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Software Developer - Project Management Consultant, EOSS Technology Team</h4>
                  <p className="text-muted-foreground">Arizona State University, Tempe, AZ • April 2025 - Present</p>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Develop and maintain backend scripts for Airtable integration and automation</li>
                    <li>Contribute to the development of SmartDart, a university-wide transportation app for booking golf carts</li>
                    <li>Collaborate with cross-functional teams to enhance campus mobility solutions</li>
                    <li>Implement efficient backend solutions to support the university's digital transformation initiatives</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Technical Lead, Nokia</h4>
                  <p className="text-muted-foreground">December 2020 - December 2024</p>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Led core backend development projects based on microservice architecture with CI/CD pipelines</li>
                    <li>Streamlined workflows and increased operational efficiency by 20%</li>
                    <li>Conducted extensive data analysis and reporting to support client requirements</li>
                    <li>Supported in bug fixing, feature development and other deliveries every release</li>
                    <li>Mentored junior engineers, enhancing team performance and knowledge-sharing</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Community Head, Aaruush Techno-Management Fest, SRM IST</h4>
                  <p className="text-muted-foreground">May 2018 - Sep 2020</p>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Organized events for 72,000+ participants, managing logistics, sponsorships, and guest relations</li>
                    <li>Secured sponsorships totaling $15,000, enhancing the scope and quality of events</li>
                    <li>Organized fitness and wellness-related events, securing sponsorships and coordinating with high-profile guests</li>
                    <li>Developed time management and conflict resolution skills through fast-paced event execution</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8">Certifications</h3>
              <ul className="list-disc ml-5">
                <li>AWS Solution Architect Associate Certification (SimpliLearn)</li>
                <li>Linux CLI Certification (CompTIA)</li>
                <li>Architecting with Google Compute Engine Specialization Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
