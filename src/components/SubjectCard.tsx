import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SubjectCardProps {
  title: string;
  description: string;
  fileCount: number;
  variant: "physics" | "math" | "chemistry" | "biology" | "ncert" | "default";
  icon?: React.ReactNode;
  slug?: string;
}

const SubjectCard = ({ title, description, fileCount, variant, icon, slug }: SubjectCardProps) => {
  const navigate = useNavigate();
  
  const handleExplore = () => {
    const subjectSlug = slug || title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/subject/${subjectSlug}`);
  };
  const getGradientClass = () => {
    switch (variant) {
      case "physics":
        return "bg-gradient-physics";
      case "math":
        return "bg-gradient-math";
      case "chemistry":
        return "bg-gradient-chemistry";
      case "biology":
        return "bg-gradient-biology";
      default:
        return "bg-gradient-hero";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
      <div className={`h-2 ${getGradientClass()}`} />
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getGradientClass()}`}>
              {icon || <BookOpen className="h-5 w-5 text-white" />}
            </div>
            <div>
              <CardTitle className="text-lg font-bold">{title}</CardTitle>
              <Badge variant="secondary" className="mt-1">
                {fileCount} files available
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed mb-4">
          {description}
        </CardDescription>
        <Button 
          variant={variant === "default" ? "default" : variant as any}
          className="w-full group-hover:scale-105 transition-transform duration-200"
          onClick={handleExplore}
        >
          <Target className="mr-2 h-4 w-4" />
          Explore
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;