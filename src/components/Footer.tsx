import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-safety" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SafeRide
              </span>
            </div>
            <p className="text-muted-foreground">
              Your safety is our priority. Experience ride-hailing with enhanced protection and care.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-safety" />
              Made with safety in mind
            </div>
          </div>

          {/* Safety */}
          <div className="space-y-4">
            <h4 className="font-semibold">Safety Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button className="hover:text-foreground transition-colors">Emergency SOS</button></li>
              <li><button className="hover:text-foreground transition-colors">Safe Women Rides</button></li>
              <li><button className="hover:text-foreground transition-colors">Medical Kit Policy</button></li>
              <li><button className="hover:text-foreground transition-colors">Weather Protection</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button className="hover:text-foreground transition-colors">Help Center</button></li>
              <li><button className="hover:text-foreground transition-colors">Safety Guidelines</button></li>
              <li><button className="hover:text-foreground transition-colors">Report Issue</button></li>
              <li><button className="hover:text-foreground transition-colors">Contact Support</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Emergency Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-emergency" />
                <span className="font-medium text-emergency">Emergency: 911</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Support: 1-800-SAFERIDE</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>safety@saferide.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 SafeRide. All rights reserved. Safety first, always.</p>
          <div className="flex gap-6">
            <button className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-foreground transition-colors">Terms of Service</button>
            <button className="hover:text-foreground transition-colors">Safety Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;