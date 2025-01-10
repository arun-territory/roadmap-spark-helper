import { PricingCard } from "@/components/PricingCard";

const Index = () => {
  const plans = [
    {
      title: "Basic",
      price: "299",
      features: [
        "Complete infrastructure as code implementation",
        "Production-grade CI/CD pipeline setup",
        "Build and Deploy Containerized apps",
        "Multi-environment deployment strategy using GKE cluster"
      ]
    },
    {
      title: "Intermediate",
      price: "500",
      features: [
        "Advanced CI/CD pipeline setup",
        "Advanced Docker & Kubernetes",
        "Infrastructure as Code",
        "1-on-1 mentoring sessions"
      ],
      isPopular: true
    },
    {
      title: "Advanced",
      price: "700",
      features: [
        "Everything in Intermediate",
        "Cloud architecture mastery",
        "Enterprise DevOps practices",
        "Career placement support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Learning Path</h1>
          <p className="text-xl text-gray-600">Select the plan that best fits your learning goals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;