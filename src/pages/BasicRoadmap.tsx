import React from 'react';
import { Terminal, Github, Code, Box, Cloud, Database, Server, Shield, Globe, Presentation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RoadmapCard = ({ week, title, icon: Icon, description, tasks, color }: {
  week: number;
  title: string;
  icon: React.ElementType;
  description: string;
  tasks: string[];
  color: string;
}) => (
  <Card className="mb-6 hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">Week {week}</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <p className="mb-4">{description}</p>
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-blue-500 mt-2" />
            <p className="text-sm text-gray-600">{task}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const BasicRoadmap = () => {
  const modules = [
    {
      week: 1,
      title: "Development Environment Setup",
      icon: Terminal,
      color: "bg-purple-500",
      description: "Set up your complete DevOps workstation with essential tools",
      tasks: ["Install VS Code, Git, Docker Desktop", "Configure GCP SDK, k8s SDK", "Verify installations and basic commands"]
    },
    {
      week: 2,
      title: "Version Control with GitHub",
      icon: Github,
      color: "bg-gray-800",
      description: "Master Git and GitHub fundamentals",
      tasks: ["Create GitHub account and repositories", "Learn essential Git commands", "Connect local to remote repos"]
    },
    {
      week: 3,
      title: "CI/CD with GitHub Actions",
      icon: Code,
      color: "bg-green-500",
      description: "Build your first automated workflows",
      tasks: ["Create simple GitHub Actions", "Write YAML configurations", "Test automated builds"]
    },
    {
      week: 4,
      title: "Docker & Containerization",
      icon: Box,
      color: "bg-blue-500",
      description: "Learn container basics and best practices",
      tasks: ["Create Dockerfiles", "Build and manage images", "Work with Docker Compose"]
    },
    {
      week: 5,
      title: "Google Cloud Platform",
      icon: Cloud,
      color: "bg-red-500",
      description: "Explore cloud infrastructure and services",
      tasks: ["Set up GCP project", "Create cloud resources", "Manage cloud services"]
    },
    {
      week: 6,
      title: "Infrastructure as Code",
      icon: Database,
      color: "bg-purple-600",
      description: "Automate infrastructure with Terraform",
      tasks: ["Learn Terraform syntax", "Create infrastructure modules", "Manage state files"]
    },
    {
      week: 7,
      title: "Kubernetes & GKE",
      icon: Server,
      color: "bg-blue-600",
      description: "Master container orchestration",
      tasks: ["Create GKE cluster", "Deploy applications", "Manage Kubernetes resources"]
    },
    {
      week: 8,
      title: "Production Docker",
      icon: Shield,
      color: "bg-indigo-500",
      description: "Build production-ready containers",
      tasks: ["Optimize Docker images", "Implement security best practices", "Create multi-stage builds"]
    },
    {
      week: 9,
      title: "Production Deployment",
      icon: Globe,
      color: "bg-green-600",
      description: "Deploy applications to production",
      tasks: ["Create K8s manifests", "Configure services", "Set up monitoring"]
    },
    {
      week: 10,
      title: "Project Showcase",
      icon: Presentation,
      color: "bg-orange-500",
      description: "Present your DevOps journey",
      tasks: ["Document deployment process", "Prepare technical presentation", "Demo your infrastructure"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          DevOps Engineering Internship
        </h1>
        <p className="text-gray-600">Your 10-week journey to becoming a DevOps practitioner</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module) => (
          <RoadmapCard key={module.week} {...module} />
        ))}
      </div>
    </div>
  );
};

export default BasicRoadmap;
