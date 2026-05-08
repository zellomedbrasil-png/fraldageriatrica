import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Code splitting
const Fralda = lazy(() => import("./pages/Fralda"));
const Funil = lazy(() => import("./pages/Funil"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Adv = lazy(() => import("./pages/Adv"));

const queryClient = new QueryClient();

// Loader super leve
const PageLoader = () => (
  <div className="min-h-screen bg-[#070B12] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Fralda />} />
            <Route path="/fralda" element={<Fralda />} />
            <Route path="/funil" element={<Funil />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/adv" element={<Adv />} />
            {/* CATCH-ALL ROUTE REDIRECTS TO FRALDA */}
            <Route path="*" element={<Navigate to="/fralda" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
