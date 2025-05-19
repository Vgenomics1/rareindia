
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // In a real application, you would handle form submission here
    
    toast({
      title: "Application submitted",
      description: "Thank you for your interest in RARE-INDIA. We'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">Join RARE-INDIA</h2>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Application Form</CardTitle>
              <CardDescription className="text-center">
                Complete the form below to join the RARE-INDIA program as a patient or collaborator.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="font-medium">First Name</label>
                    <Input id="firstName" placeholder="First name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Last name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="Your email address" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium">Phone Number</label>
                  <Input id="phone" placeholder="Your phone number" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="role" className="font-medium">I am a</label>
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="patient">Patient/Family Member</SelectItem>
                      <SelectItem value="clinician">Clinician</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="hospital">Hospital Representative</SelectItem>
                      <SelectItem value="advocacy">Patient Advocacy Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="organization" className="font-medium">Organization/Hospital (if applicable)</label>
                  <Input id="organization" placeholder="Your organization or hospital" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">Additional Information</label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide any relevant details about your interest in the RARE-INDIA program" 
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full gradient-bg hover:opacity-90 py-6 h-auto text-lg">
                    Submit Application
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 text-center pt-4">
                  By submitting this form, you agree to our terms and privacy policy. 
                  We'll contact you regarding the next steps.
                </p>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-2">Instructions for Applicants</h3>
            <ul className="list-disc text-left max-w-xl mx-auto space-y-2">
              <li><span className="font-medium">Complete All Sections:</span> Ensure all relevant questions are answered accurately.</li>
              <li><span className="font-medium">Attach Required Documents:</span> Email any referral letters, medical records, and supporting documentation.</li>
              <li><span className="font-medium">Submit the Form:</span> Complete and submit this application form online.</li>
              <li><span className="font-medium">Await Notification:</span> You will be contacted regarding the status of your application and next steps.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
