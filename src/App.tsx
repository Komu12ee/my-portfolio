import { useEffect } from "react";
import { Toaster as ShadcnToaster } from "@/components/ui/Toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PortfolioProvider } from "@/context/PortfolioContext";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Resume from "./pages/Resume";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PortfolioProvider>
        {/* Toast Providers */}
        <ShadcnToaster />
        <SonnerToaster />

        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
