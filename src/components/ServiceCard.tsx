import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
}

const ServiceCard = ({ Icon, title }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center min-w-[200px] p-4 bg-white rounded-xl shadow-md transition-transform hover:scale-105">
      <Icon className="w-12 h-12 mb-3 text-warm-icon transition-colors hover:text-warm-hover" />
      <p className="text-base font-semibold text-warm-text text-center">{title}</p>
    </div>
  );
};

export default ServiceCard;