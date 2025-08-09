import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UserCheck, Calendar, Clock, Shield } from "lucide-react";

const AgeVerification = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [isMinor, setIsMinor] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    
    return calculatedAge;
  };

  const handleDateChange = (value: string) => {
    setDateOfBirth(value);
    if (value) {
      const calculatedAge = calculateAge(value);
      setAge(calculatedAge);
      setIsMinor(calculatedAge < 18);
    }
  };

  const handleVerification = () => {
    if (age !== null) {
      setIsVerified(true);
    }
  };

  if (isVerified) {
    return (
      <Card className="max-w-md mx-auto shadow-medium">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-safety/10 rounded-full">
              <UserCheck className="h-8 w-8 text-safety" />
            </div>
          </div>
          <CardTitle className="text-xl">Age Verification Complete</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-2">
              Age: {age} years
            </Badge>
            {isMinor && (
              <Alert className="mt-4">
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  <strong>Restricted Hours:</strong> Rides not available after 10 PM without parental consent.
                </AlertDescription>
              </Alert>
            )}
          </div>
          <Button variant="hero" className="w-full">
            Continue to Booking
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto shadow-medium">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-xl">Age Verification Required</CardTitle>
        <p className="text-muted-foreground">
          We need to verify your age to ensure appropriate safety measures
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="dob" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date of Birth
          </Label>
          <Input
            id="dob"
            type="date"
            value={dateOfBirth}
            onChange={(e) => handleDateChange(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        {age !== null && (
          <div className="space-y-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground">Calculated Age</p>
              <p className="text-2xl font-bold">{age} years</p>
            </div>

            {isMinor && (
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  <strong>Safety Notice:</strong> Users under 18 have restricted booking hours 
                  (rides not available after 10 PM) unless parental consent is provided.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        <Button 
          variant="hero" 
          className="w-full" 
          onClick={handleVerification}
          disabled={!dateOfBirth || age === null}
        >
          Verify Age & Continue
        </Button>

        <div className="text-xs text-muted-foreground text-center">
          Your date of birth is used solely for age verification and safety compliance.
        </div>
      </CardContent>
    </Card>
  );
};

export default AgeVerification;