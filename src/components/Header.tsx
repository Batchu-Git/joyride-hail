import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, User, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-safety" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SafeRide
            </span>
          </div>
          <Badge variant="secondary" className="text-xs">
            Safety First
          </Badge>
        </div>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <Button variant="hero" size="sm">
            Book a Ride
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;