import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Users2, Building2 } from "lucide-react";

export default function UserTypeSelection() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <img
          src="/lovable-uploads/7d7ccab6-6209-4246-b447-9746d0a8b474.png"
          alt="Level Up People Property"
          className="h-64 mb-6 mx-auto"
        />
        <h2 className="text-2xl font-semibold text-[#E5C7A3]">Are you a...</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Link to="/investor">
          <Card className="p-8 hover:border-[#E5C7A3] transition-all duration-300 bg-[#1C1C1C] border-[#E5C7A3]/20 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <Users2 className="w-16 h-16 text-[#E5C7A3]" />
              <h2 className="text-2xl font-semibold text-white">Investor</h2>
              <p className="text-[#E5C7A3]/80">Looking for high-ROI property deals</p>
            </div>
          </Card>
        </Link>

        <Link to="/landlord">
          <Card className="p-8 hover:border-[#E5C7A3] transition-all duration-300 bg-[#1C1C1C] border-[#E5C7A3]/20 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <Building2 className="w-16 h-16 text-[#E5C7A3]" />
              <h2 className="text-2xl font-semibold text-white">Landlord</h2>
              <p className="text-[#E5C7A3]/80">Want to maximise property revenue</p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
