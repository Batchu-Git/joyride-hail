import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  Heart, 
  Cross, 
  CloudRain, 
  Navigation,
  Clock,
  Star,
  Phone,
  UserCheck
} from "lucide-react";
import safetyShield from "@/assets/safety-shield.png";
import sosIcon from "@/assets/sos-icon.png";

const SafetyFeatures = () => {
  const features = [
    {
      icon: Heart,
      title: "Safe Rides for Women",
      description: "Special night ride protection with verified drivers rated 4.8+ stars",
      badge: "Night Safety",
      color: "safety",
      details: [
        "High-rated drivers only (4.8+ stars)",
        "Night ride experience verification",
        "Enhanced background checks",
        "Real-time ride monitoring"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Emergency SOS",
      description: "Instant access to emergency services with one-tap location sharing",
      badge: "Emergency",
      color: "emergency",
      details: [
        "One-tap emergency alert",
        "Automatic location sharing",
        "Emergency contact notification",
        "Direct connection to local services"
      ]
    },
    {
      icon: Cross,
      title: "Medical Kit Requirement",
      description: "All drivers carry mandatory medical kits for emergency first aid",
      badge: "Health Safety",
      color: "warning",
      details: [
        "Basic first aid supplies",
        "Verified kit inspection",
        "Monthly compliance checks",
        "Emergency medical guidance"
      ]
    },
    {
      icon: CloudRain,
      title: "Weather Protection",
      description: "Rain jackets and weather alerts to keep you comfortable",
      badge: "Weather Care",
      color: "primary",
      details: [
        "Complimentary rain jackets",
        "Weather-based notifications",
        "Storm route adjustments",
        "Flood avoidance alerts"
      ]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Shield className="h-3 w-3 mr-1" />
            Safety Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Built for Your <span className="bg-gradient-safety bg-clip-text text-transparent">Protection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed with your safety and comfort in mind. We go beyond transportation 
            to provide peace of mind for every journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-${feature.color}/10`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Section */}
        <Card className="p-8 bg-gradient-to-r from-emergency/5 to-emergency/10 border-emergency/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src={sosIcon} alt="SOS Emergency" className="h-16 w-16" />
                <div>
                  <h3 className="text-2xl font-bold text-emergency">Emergency SOS</h3>
                  <p className="text-muted-foreground">Help is always one tap away</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emergency mt-1" />
                  <div>
                    <p className="font-medium">Instant Emergency Response</p>
                    <p className="text-sm text-muted-foreground">
                      Connects directly to local emergency services with your exact location
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <UserCheck className="h-5 w-5 text-emergency mt-1" />
                  <div>
                    <p className="font-medium">Emergency Contact Alert</p>
                    <p className="text-sm text-muted-foreground">
                      Automatically notifies your chosen emergency contacts
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="emergency" size="lg" className="text-lg">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Emergency SOS Demo
              </Button>
            </div>
            
            <div className="flex justify-center">
              <img src={safetyShield} alt="Safety Shield" className="h-64 w-64 object-contain" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SafetyFeatures;