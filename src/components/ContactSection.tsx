import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Heart, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <Card className="bg-gradient-hero text-white border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-red-300" />
          Thank me later
        </CardTitle>
        <CardDescription className="text-white/80 text-lg">
          PS: I'll keep adding files every week... you can contact me here
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
          <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            <MessageCircle className="mr-2 h-4 w-4" />
            Join Community
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-4">
          For security concerns or suggestions, reach out to us
        </p>
      </CardContent>
    </Card>
  );
};

export default ContactSection;