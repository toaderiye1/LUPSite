import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Investor from "./pages/Investor";
import Landlord from "./pages/Landlord";
import WhyChooseUs from "./pages/WhyChooseUs";
import UserTypeSelection from "./pages/UserTypeSelection";
import R2SAStrategy from "./pages/R2SAStrategy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserTypeSelection />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/r2sa-strategy" element={<R2SAStrategy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
