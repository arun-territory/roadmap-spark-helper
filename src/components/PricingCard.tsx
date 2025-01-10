import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  const navigate = useNavigate();

  return (
    <div className={`p-6 rounded-2xl ${isPopular ? 'ring-2 ring-primary bg-white' : 'bg-white'}`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold">${price}</span>
        <span className="ml-1 text-gray-500">/month</span>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full mt-8"
        onClick={() => navigate("/roadmap")}
      >
        Get Started
      </Button>
    </div>
  );
}