import { Card } from "@/components/ui/card";

interface RoadmapCardProps {
  icon: string;
  title: string;
  week: number;
  description: string;
  tasks: string[];
}

export function RoadmapCard({ icon, title, week, description, tasks }: RoadmapCardProps) {
  return (
    <Card className="roadmap-card">
      <div className="flex items-center space-x-4 mb-4">
        <img src={icon} alt={title} className="w-12 h-12" />
        <div>
          <p className="week-label">Week {week}</p>
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="feature-list">
        {tasks.map((task, index) => (
          <li key={index} className="feature-item">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}