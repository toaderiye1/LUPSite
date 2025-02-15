import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Investor = lazy(() => import("./pages/Investor"));
const Landlord = lazy(() => import("./pages/Landlord"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const UserTypeSelection = lazy(() => import("./pages/UserTypeSelection"));
const R2SAStrategy = lazy(() => import("./pages/R2SAStrategy"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ErrorBoundary>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnimatePresence mode="wait">
              <Suspense>
                <Routes>
                  <Route path="/" element={<UserTypeSelection />} />
                  <Route path="/investor" element={<Investor />} />
                  <Route path="/landlord" element={<Landlord />} />
                  <Route path="/why-choose-us" element={<WhyChooseUs />} />
                  <Route path="/r2sa-strategy" element={<R2SAStrategy />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </BrowserRouter>
        </TooltipProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
