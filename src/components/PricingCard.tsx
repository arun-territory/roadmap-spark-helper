import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (title === "Basic") {
      navigate("/basic-roadmap");
    } else {
      navigate("/roadmap");
    }
  };

  return (
    <Card className={`w-full ${isPopular ? "border-primary shadow-lg" : ""}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold">${price}</span> / month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={isPopular ? "default" : "outline"}
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}