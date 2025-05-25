import { motion } from "framer-motion";

const skills = [
  "Python", "Shell Scripting", "PHP", "Perl", "Java", "C", "C++", "Go",
  "Linux", "Docker", "Kubernetes", "AWS", "MongoDB", "MySQL",
  "Apache Kafka", "NAT Gateways", "API Gateways", "LaTeX", "MATLAB"
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
            <p className="text-muted-foreground">Backend Developer & System Administrator</p>
            <div className="mt-4">
              <p className="text-sm">📧 smish147@asu.edu</p>
              <p className="text-sm">📞 623-276-7027</p>
              <p className="text-sm">💼 <a href="https://linkedin.com/in/sarthakishraftw" className="text-primary hover:underline">LinkedIn Profile</a></p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Experienced professional with 4 years in backend development, system administration, and IT infrastructure management with a strong 
                ability to troubleshoot and optimize IT systems.
              </p>
              
              <p className="text-lg mb-8">
                Adept at Linux administration, web development, cloud computing, and 
                database management, with a proven track record of implementing efficient and secure technical solutions.
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
              
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium">Master of Science in Computer Science</h4>
                  <p className="text-muted-foreground">Arizona State University, Tempe, AZ • Graduating Jan 2027</p>
                  <p className="mt-2">Ira A. Fulton Schools of Engineering</p>
                  <p className="mt-1">Relevant Coursework: CSE575-Statistical Machine Learning; CSE551-Foundation of Algorithms; CSE548-Advanced Computer Network Security</p>
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
