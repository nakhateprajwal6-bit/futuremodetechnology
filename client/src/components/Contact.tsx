import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  programInterest: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programInterest: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        programInterest: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to start your tech journey? Contact us today and let's discuss your goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4" data-testid="contact-address">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">123 Technology Drive, Innovation Hub, Tech City 12345</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-testid="contact-phone">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-testid="contact-email">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">info@futuremodetech.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-testid="contact-hours">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-form-title">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-card-foreground mb-2">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-card-foreground mb-2">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-card-foreground mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-card-foreground mb-2">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="programInterest" className="text-sm font-medium text-card-foreground mb-2">
                  Program Interest
                </Label>
                <Select onValueChange={(value) => handleInputChange("programInterest", value)} data-testid="select-program-interest">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-development">Software Development</SelectItem>
                    <SelectItem value="artificial-intelligence">Artificial Intelligence</SelectItem>
                    <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-card-foreground mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your goals and interests..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary text-primary-foreground hover:bg-blue-700"
                disabled={contactMutation.isPending}
                data-testid="button-submit"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
