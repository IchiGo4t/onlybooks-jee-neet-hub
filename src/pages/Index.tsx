import SubjectCard from "@/components/SubjectCard";
import ContactSection from "@/components/ContactSection";
import { BookOpen, Calculator, FlaskConical, Microscope, GraduationCap, FileText, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const coreSubjects = [
    {
      title: "Physics",
      description: "Complete physics study materials with HC Verma, Resnick Halliday",
      fileCount: 1,
      variant: "physics" as const,
      icon: <FlaskConical className="h-5 w-5 text-white" />,
      slug: "physics"
    },
    {
      title: "Mathematics", 
      description: "Advanced mathematics resources and problem sets",
      fileCount: 0,
      variant: "math" as const,
      icon: <Calculator className="h-5 w-5 text-white" />,
      slug: "mathematics"
    },
    {
      title: "Chemistry",
      description: "Organic, Inorganic & Physical Chemistry guides", 
      fileCount: 0,
      variant: "chemistry" as const,
      icon: <FlaskConical className="h-5 w-5 text-white" />,
      slug: "chemistry"
    },
    {
      title: "Biology",
      description: "NEET Biology preparation materials",
      fileCount: 0,
      variant: "biology" as const,
      icon: <Microscope className="h-5 w-5 text-white" />,
      slug: "biology"
    },
    {
      title: "NCERT Solutions", 
      description: "Complete NCERT textbooks and detailed solutions",
      fileCount: 0,
      variant: "ncert" as const,
      icon: <BookOpen className="h-5 w-5 text-white" />,
      slug: "ncert-solutions"
    }
  ];

  const extraResources = [
    {
      title: "Coaching Modules",
      description: "Premium coaching institute study materials",
      fileCount: 0,
      variant: "default" as const,
      icon: <GraduationCap className="h-5 w-5 text-white" />,
      slug: "coaching-modules"
    },
    {
      title: "Previous Year Papers",
      description: "JEE & NEET question papers collection", 
      fileCount: 0,
      variant: "default" as const,
      icon: <FileText className="h-5 w-5 text-white" />,
      slug: "previous-year-papers"
    },
    {
      title: "Test Series",
      description: "Mock tests and practice series",
      fileCount: 0,
      variant: "default" as const,
      icon: <Target className="h-5 w-5 text-white" />,
      slug: "test-series"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Kyu nahi ho rahi padhai??
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            For all the JEE and NEET crackheads <span className="text-red-300">❤</span>
          </p>
          <Button variant="secondary" size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Clock className="mr-2 h-5 w-5" />
            Start Learning Now
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Subjects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2">Core Subjects</h2>
          <p className="text-muted-foreground mb-8">Master the fundamentals with our comprehensive study materials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSubjects.map((subject, index) => (
              <SubjectCard key={index} {...subject} />
            ))}
          </div>
        </section>

        {/* Extra Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2">
            Extras & Resources <span className="text-red-500">❤</span>
          </h2>
          <p className="text-muted-foreground mb-8">Additional materials to give you that competitive edge</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraResources.map((resource, index) => (
              <SubjectCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
