import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import CompletedProjects from "./pages/CompletedProjects.tsx";
import OngoingProjects from "./pages/OngoingProjects.tsx";
import LiasioningProjects from "./pages/LiasioningProjects.tsx";
import UpcomingProjects from "./pages/UpcomingProjects.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const MainContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <CustomCursor />
      <ScrollToTop />

      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/completed" element={<CompletedProjects />} />
          <Route path="/projects/ongoing" element={<OngoingProjects />} />
          <Route path="/projects/liasioning" element={<LiasioningProjects />} />
          <Route path="/projects/upcoming" element={<UpcomingProjects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ✅ HashRouter fixes GitHub Pages routing */}
        <HashRouter>
          <MainContent />
        </HashRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;