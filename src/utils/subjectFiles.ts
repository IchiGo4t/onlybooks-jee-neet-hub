// Utility function to get subject files and count them
export const getSubjectFiles = (subjectName: string | undefined) => {
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

export const getSubjectFileCount = (subjectName: string) => {
  return getSubjectFiles(subjectName).length;
};