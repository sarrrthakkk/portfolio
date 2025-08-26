import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import { useGoogleAnalytics } from "./hooks/use-google-analytics";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

// Component to handle dynamic page titles
const PageTitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Sarthak Mishra | Portfolio";

    // Set specific titles for each route
    switch (path) {
      case "/":
        title = "Sarthak Mishra | Full Stack Developer & AI Researcher - Home";
        break;
      case "/about":
        title = "Sarthak Mishra | About Me - Skills, Experience & Education";
        break;
      case "/projects":
        title = "Sarthak Mishra | Projects - Portfolio & Work Showcase";
        break;
      case "/contact":
        title = "Sarthak Mishra | Contact Me - Get In Touch";
        break;
      default:
        title = "Sarthak Mishra | Portfolio";
    }

    // Update document title
    document.title = title;
  }, [location]);

  return null;
};

const AppRoutes = () => {
  useGoogleAnalytics(); // Initialize Google Analytics

  return (
    <>
      <PageTitleHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
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
