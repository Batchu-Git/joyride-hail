import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-safety/5">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit text-primary border-primary/20">
                🚗 SafeRide Platform
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Ride with
                <span className="bg-gradient-hero bg-clip-text text-transparent block">
                  Complete Safety
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience the future of ride-hailing with advanced safety features, 
                emergency support, and weather-smart convenience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg shadow-strong">
                Book Your First Ride
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Download App
              </Button>
            </div>
          </div>
          
          {/* Quick Booking Card */}
          <div className="lg:justify-self-end w-full max-w-md">
            <Card className="p-8 shadow-strong bg-gradient-glass backdrop-blur-xl border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Quick Booking</h3>
                  <p className="text-muted-foreground">Start your safe journey</p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">From</label>
                    <div className="flex items-center gap-3 p-4 bg-background/80 rounded-xl border border-border/50">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Current Location</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">To</label>
                    <div className="flex items-center gap-3 p-4 bg-background/80 rounded-xl border border-border/50 focus-within:border-primary/50 transition-colors">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Where would you like to go?"
                        className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-sm"
                      />
                    </div>
                  </div>
                  
                  <Button variant="hero" className="w-full mt-6" size="lg">
                    Find Your Safe Ride
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;