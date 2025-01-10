import { RoadmapCard } from "@/components/RoadmapCard";

const roadmapData = [
  {
    icon: "/lovable-uploads/bbb60384-306d-4232-b4ad-594a78b3eed7.png",
    title: "Development Environment Setup",
    week: 1,
    description: "Set up your complete DevOps workstation with essential tools",
    tasks: [
      "Install VS Code, Git, Docker Desktop",
      "Configure GCP SDK, k8s SDK",
      "Verify installations and basic commands"
    ]
  },
  {
    icon: "/lovable-uploads/35b2fdf7-ee92-4c9e-bbf4-6c2214398c28.png",
    title: "Version Control with GitHub",
    week: 2,
    description: "Master Git and GitHub fundamentals",
    tasks: [
      "Create GitHub account and repositories",
      "Learn essential Git commands",
      "Connect local to remote repos"
    ]
  },
  // ... Add more weeks following the same pattern
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">DevOps Engineering Internship</h1>
          <p className="text-xl text-gray-600">Your 10-week journey to becoming a DevOps practitioner</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roadmapData.map((item) => (
            <RoadmapCard key={item.week} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;