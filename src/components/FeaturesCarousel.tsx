import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Shield, Heart, CloudRain, MapPin, Clock, Phone, Briefcase } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const features = [
  {
    id: 1,
    title: "Safe Rides for Women",
    description: "Priority matching with 4.8+ rated drivers for night rides. Enhanced safety protocols and verified driver profiles.",
    icon: Heart,
    color: "safety",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
    badge: "Safety First"
  },
  {
    id: 2,
    title: "Emergency SOS",
    description: "One-tap emergency alert system with real-time location sharing to authorities and your emergency contacts.",
    icon: Phone,
    color: "emergency",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    badge: "24/7 Support"
  },
  {
    id: 3,
    title: "Weather Smart Rides",
    description: "Rain jackets provided on rainy days. Smart route suggestions during floods and weather disruptions.",
    icon: CloudRain,
    color: "primary",
    image: "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&h=400&fit=crop",
    badge: "Weather Ready"
  },
  {
    id: 4,
    title: "Medical Kit Required",
    description: "All drivers carry certified first-aid kits. Basic medical assistance available during your journey.",
    icon: Briefcase,
    color: "warning",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    badge: "Health Safe"
  },
  {
    id: 5,
    title: "Age Verification",
    description: "Smart age-based safety measures. Under-18 riders get special protection and parental controls.",
    icon: Shield,
    color: "safety",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
    badge: "Protected"
  }
];

const FeaturesCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Shield className="h-3 w-3 mr-1" />
            Discover Our Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Safety-First <span className="bg-gradient-hero bg-clip-text text-transparent">Ride Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore how we're revolutionizing ride-hailing with cutting-edge safety features and thoughtful conveniences
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <CarouselItem key={feature.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="h-full overflow-hidden group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <Badge 
                          variant="secondary" 
                          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white border-white/30"
                        >
                          {feature.badge}
                        </Badge>
                        <div className="absolute bottom-4 left-4">
                          <div className={`bg-${feature.color}/20 backdrop-blur-sm p-2 rounded-lg`}>
                            <IconComponent className={`h-6 w-6 text-${feature.color === 'warning' ? 'warning' : feature.color}`} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {feature.description}
                        </p>
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Learn More
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg">
            Start Your Safe Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;