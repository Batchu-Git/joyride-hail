import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, CloudRain, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="SafeRide App Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">
              <Shield className="h-3 w-3 mr-1" />
              Safety First Platform
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Your <span className="bg-gradient-hero bg-clip-text text-transparent">Safety</span> is Our Priority
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience ride-hailing reimagined with enhanced safety features, 
              weather-aware convenience, and emergency support that cares about you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg">
              Start Your Safe Journey
            </Button>
            <Button variant="safety" size="lg" className="text-lg">
              Learn About Safety
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8">
            <div className="flex items-center gap-3">
              <div className="bg-safety/10 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-safety" />
              </div>
              <span className="font-medium">Safe Rides for Women</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <CloudRain className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Weather Convenience</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emergency/10 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-emergency" />
              </div>
              <span className="font-medium">Emergency SOS</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
        
        {/* Quick Booking Card */}
        <div className="lg:justify-self-end">
          <Card className="p-8 shadow-strong bg-gradient-glass backdrop-blur-md border border-white/20">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Quick Ride Booking</h3>
                <p className="text-muted-foreground">Where would you like to go?</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">From</label>
                  <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Current Location</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">To</label>
                  <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Where to?"
                      className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  Find Your Safe Ride
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;