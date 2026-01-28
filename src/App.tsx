import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const detectBrowserLanguage = (): "pl" | "en" => {
  if (typeof navigator !== "undefined") {
    const lang = navigator.language?.toLowerCase();
    if (lang?.startsWith("pl")) {
      return "pl";
    }
  }
  return "en";
};

const AutoLangRedirect = () => {
  const targetLang = detectBrowserLanguage();
  return <Navigate to={`/${targetLang}`} replace />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/:lang/*" element={<Index />} />
          <Route path="/" element={<AutoLangRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
