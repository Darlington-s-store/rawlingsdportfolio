import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import TechStackPage from "./pages/TechStackPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ExperiencePage from "./pages/ExperiencePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [key, setKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setKey((k) => k + 1);
  }, [location.pathname]);

  return (
    <div key={key} className="page-enter">
      {children}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <BackToTop />
        <Routes>
          <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/tech-stack" element={<PageWrapper><TechStackPage /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="/project/:id" element={<PageWrapper><ProjectDetailPage /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
