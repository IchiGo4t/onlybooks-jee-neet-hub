import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calculator, FlaskConical, Microscope, GraduationCap, FileText, Target, Download, Eye } from "lucide-react";

const Subject = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  const getSubjectInfo = (subjectName: string | undefined) => {
    switch (subjectName?.toLowerCase()) {
      case 'physics':
        return {
          title: 'Physics',
          description: 'Complete physics study materials with HC Verma, Resnick Halliday',
          icon: <FlaskConical className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-physics',
          color: 'physics'
        };
      case 'mathematics':
        return {
          title: 'Mathematics',
          description: 'Advanced mathematics resources and problem sets',
          icon: <Calculator className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-math',
          color: 'math'
        };
      case 'chemistry':
        return {
          title: 'Chemistry',
          description: 'Organic, Inorganic & Physical Chemistry guides',
          icon: <FlaskConical className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-chemistry',
          color: 'chemistry'
        };
      case 'biology':
        return {
          title: 'Biology',
          description: 'NEET Biology preparation materials',
          icon: <Microscope className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-biology',
          color: 'biology'
        };
      case 'ncert-solutions':
        return {
          title: 'NCERT Solutions',
          description: 'Complete NCERT textbooks and detailed solutions',
          icon: <BookOpen className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-hero',
          color: 'ncert'
        };
      case 'coaching-modules':
        return {
          title: 'Coaching Modules',
          description: 'Premium coaching institute study materials',
          icon: <GraduationCap className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-hero',
          color: 'default'
        };
      case 'previous-year-papers':
        return {
          title: 'Previous Year Papers',
          description: 'JEE & NEET question papers collection',
          icon: <FileText className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-hero',
          color: 'default'
        };
      case 'test-series':
        return {
          title: 'Test Series',
          description: 'Mock tests and practice series',
          icon: <Target className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-hero',
          color: 'default'
        };
      default:
        return {
          title: 'Subject Not Found',
          description: 'The requested subject could not be found',
          icon: <BookOpen className="h-8 w-8 text-white" />,
          gradient: 'bg-gradient-hero',
          color: 'default'
        };
    }
  };

  const subjectInfo = getSubjectInfo(subject);

  // Subject-specific files - in a real app, this would come from an API
  const getSubjectFiles = (subjectName: string | undefined) => {
    switch (subjectName?.toLowerCase()) {
      case 'physics':
        return [
          { 
            name: "HC Verma", 
            type: "PDF", 
            size: "45 MB", 
            description: "Complete HC Verma Physics textbook with solutions",
            downloadUrl: "https://drive.google.com/file/d/1T7lMIQdh4rsdlBdoxwc0KCMxjrTX0ySc/view?usp=drive_link"
          },
          { name: "Resnick Halliday", type: "PDF", size: "Coming Soon", description: "Physics fundamentals and problem solving" }
        ];
      case 'mathematics':
        return [
          { name: "RD Sharma", type: "PDF", size: "Coming Soon", description: "Mathematics for JEE Main & Advanced" },
          { name: "ML Khanna", type: "PDF", size: "Coming Soon", description: "Problem book in mathematics" }
        ];
      case 'chemistry':
        return [
          { name: "OP Tandon", type: "PDF", size: "Coming Soon", description: "Organic Chemistry for competitions" },
          { name: "JD Lee", type: "PDF", size: "Coming Soon", description: "Concise inorganic chemistry" },
          { 
            name: "VJ Sir Inorganic Chemistry", 
            type: "PDF", 
            size: "25 MB", 
            description: "Complete inorganic chemistry notes and solutions",
            downloadUrl: "https://drive.google.com/file/d/1wOAchPw0N32CVPOHqfyWcBHUHywoPK4E/view?usp=drive_link"
          }
        ];
      case 'biology':
        return [
          { name: "NCERT Biology", type: "PDF", size: "Coming Soon", description: "Class 11 & 12 Biology textbooks" },
          { name: "Trueman's Biology", type: "PDF", size: "Coming Soon", description: "Objective biology for NEET" }
        ];
      case 'ncert-solutions':
        return [
          { name: "NCERT Class 11", type: "PDF", size: "Coming Soon", description: "Complete solutions for Class 11" },
          { name: "NCERT Class 12", type: "PDF", size: "Coming Soon", description: "Complete solutions for Class 12" }
        ];
      case 'coaching-modules':
        return [
          { 
            name: "Allen Modules", 
            type: "PDF", 
            size: "Multiple Files", 
            description: "Complete Allen coaching materials",
            downloadUrl: "https://drive.google.com/drive/folders/1k7fR6OWJ-LFOzBY795xzwhfNfMvqmeZ8?usp=drive_link"
          },
          { 
            name: "Resonance DLP", 
            type: "PDF", 
            size: "Multiple Files", 
            description: "Distance learning program modules",
            downloadUrl: "https://drive.google.com/drive/folders/1f_lKyRaWYt-pz9Dyr-X6Q9qJ18UBekeM?usp=drive_link"
          }
        ];
      case 'previous-year-papers':
        return [
          { name: "JEE Main 2023", type: "PDF", size: "Coming Soon", description: "Complete question papers with solutions" },
          { name: "NEET 2023", type: "PDF", size: "Coming Soon", description: "All shifts question papers" }
        ];
      case 'test-series':
        return [
          { name: "Mock Test Series", type: "PDF", size: "Coming Soon", description: "Weekly practice tests" },
          { name: "Chapter-wise Tests", type: "PDF", size: "Coming Soon", description: "Topic-specific test papers" }
        ];
      default:
        return [
          { name: "Stay Tuned!", type: "Update", size: "0 MB", description: "More content is on the way" }
        ];
    }
  };

  const mockFiles = getSubjectFiles(subject);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`${subjectInfo.gradient} text-white py-12 px-4`}>
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="secondary" 
            className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-lg bg-white/20">
              {subjectInfo.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{subjectInfo.title}</h1>
              <p className="text-xl text-white/90 mt-2">{subjectInfo.description}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              {mockFiles.length} files available
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              Updated weekly
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Available Materials</h2>
            
            {mockFiles.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No files yet!</h3>
                  <p className="text-muted-foreground">Files will be added every week. Stay tuned!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {mockFiles.map((file: any, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{file.name}</CardTitle>
                          <CardDescription>{file.description}</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{file.type}</Badge>
                          <Badge variant="outline">{file.size}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled={!file.downloadUrl}>
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          disabled={!file.downloadUrl}
                          onClick={() => file.downloadUrl && window.open(file.downloadUrl, '_blank')}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Total Files</h4>
                  <p className="text-2xl font-bold">{mockFiles.length}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Last Updated</h4>
                  <p>Coming Soon</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">File Types</h4>
                  <p>PDF, Images, Videos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Keep Learning! 🚀</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  More files are being added every week. Bookmark this page and check back regularly!
                </p>
                <Button 
                  variant={subjectInfo.color as any} 
                  size="sm" 
                  className="w-full"
                  onClick={() => navigate('/')}
                >
                  Explore Other Subjects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;