import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import { useGoogleAnalytics } from "./hooks/use-google-analytics";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCaseStudyBySlug } from "./content/projects";

const queryClient = new QueryClient();

const PageTitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Sarthak Mishra | Systems Engineer";

    if (path.startsWith("/projects/") && path !== "/projects") {
      const slug = path.replace("/projects/", "");
      const caseStudy = getCaseStudyBySlug(slug);
      title = caseStudy
        ? `Sarthak Mishra | ${caseStudy.title}`
        : "Sarthak Mishra | Project Case Study";
    } else {
      switch (path) {
        case "/":
          title =
            "Sarthak Mishra | Systems Engineer — Networking • Distributed Systems • AI/ML Infrastructure";
          break;
        case "/experience":
          title = "Sarthak Mishra | Experience — AWS, Nokia, ASU";
          break;
        case "/about":
          title =
            "Sarthak Mishra | About — Systems Engineer, Research & Skills";
          break;
        case "/projects":
          title =
            "Sarthak Mishra | Projects — Infrastructure, Networking & AI Systems";
          break;
        case "/contact":
          title = "Sarthak Mishra | Contact";
          break;
        default:
          title = "Sarthak Mishra | Systems Engineer";
      }
    }

    document.title = title;
  }, [location]);

  return null;
};

const AppRoutes = () => {
  useGoogleAnalytics();

  return (
    <>
      <PageTitleHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
