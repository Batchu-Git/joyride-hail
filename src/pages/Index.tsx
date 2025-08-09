import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SafetyFeatures from "@/components/SafetyFeatures";
import AgeVerification from "@/components/AgeVerification";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SafetyFeatures />
        
        {/* Demo Section */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Try Our Features</h2>
              <p className="text-xl text-muted-foreground">
                Experience our safety-first approach with interactive demos
              </p>
            </div>
            
            <Tabs defaultValue="age-verification" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="age-verification">Age Verification</TabsTrigger>
                <TabsTrigger value="booking">Safe Booking</TabsTrigger>
                <TabsTrigger value="emergency">Emergency Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="age-verification" className="mt-8">
                <AgeVerification />
              </TabsContent>
              
              <TabsContent value="booking" className="mt-8">
                <Card className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Safe Ride Booking Demo</h3>
                  <p className="text-muted-foreground mb-6">
                    Experience our enhanced booking flow with safety options
                  </p>
                  <Button variant="hero" size="lg">
                    Start Demo Booking
                  </Button>
                </Card>
              </TabsContent>
              
              <TabsContent value="emergency" className="mt-8">
                <Card className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Emergency SOS Demo</h3>
                  <p className="text-muted-foreground mb-6">
                    See how our emergency features work (safe demo mode)
                  </p>
                  <Button variant="emergency" size="lg">
                    Demo Emergency Features
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
