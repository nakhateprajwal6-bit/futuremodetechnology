import { useState } from "react";
import { MapPin, Phone, Mail, Clock, X } from "lucide-react";
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

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        toast({
          title: "Invalid phone number",
          description: "Please enter a valid phone number.",
          variant: "destructive",
        });
        return;
      }
    }

    contactMutation.mutate({
      ...formData,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim()
    });
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
            Ready to start your tech journey? Contact us today and let's discuss your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <ContactInfo
              icon={MapPin}
              title="Address"
              text="Mumbai Thane Bhiwandi Pin 421302, IND"
              testId="contact-address"
            />
            <ContactInfo
              icon={Phone}
              title="Phone"
              text="+91 8308211268"
              testId="contact-phone"
            />
            <ContactInfo
              icon={Mail}
              title="Email"
              text="info@futuremodetchnology.com"
              testId="contact-email"
            />
            <ContactInfo
              icon={Clock}
              title="Hours"
              text="Monday - Friday: 9:00 AM - 6:00 PM"
              testId="contact-hours"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-form-title">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  id="firstName"
                  label="First Name *"
                  value={formData.firstName}
                  onChange={(val) => handleInputChange("firstName", val)}
                  testId="input-first-name"
                />
                <FormField
                  id="lastName"
                  label="Last Name *"
                  value={formData.lastName}
                  onChange={(val) => handleInputChange("lastName", val)}
                  testId="input-last-name"
                />
              </div>

              <FormField
                id="email"
                label="Email *"
                value={formData.email}
                onChange={(val) => handleInputChange("email", val)}
                testId="input-email"
                type="email"
              />

              <FormField
                id="phone"
                label="Phone"
                value={formData.phone}
                onChange={(val) => handleInputChange("phone", val)}
                testId="input-phone"
                type="tel"
              />

              <div>
                <Label htmlFor="programInterest" className="text-sm font-medium text-card-foreground mb-2">
                  Program Interest
                </Label>
                <Select onValueChange={(val) => handleInputChange("programInterest", val)} data-testid="select-program-interest">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="robotics-engineering">Robotics Engineering</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="iot-remote-robotics">IoT & Remote Robotics</SelectItem>
                    <SelectItem value="software-development">Software Development</SelectItem>
                    <SelectItem value="embedded-systems">Embedded Systems</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="artificial-intelligence">Artificial Intelligence</SelectItem>
                    <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                    <SelectItem value="mechatronics-automation">Mechatronics & Automation</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="control-systems">Control Systems</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="computer-vision">Computer Vision</SelectItem>
                    <SelectItem value="devops-engineering">DevOps Engineering</SelectItem>
                    <SelectItem value="blockchain-development">Blockchain Development</SelectItem>
                    <SelectItem value="cad-designing">CAD Designing</SelectItem>
                    <SelectItem value="pcb-designing">PCB Designing</SelectItem>
                    <SelectItem value="r-and-d-services">R & D Services</SelectItem>
                    <SelectItem value="3d-printing">3D Printing</SelectItem>
                    <SelectItem value="industrial-training">Industrial Training</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
                className="w-full px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90"
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

function ContactInfo({ icon: Icon, title, text, testId }: { icon: any; title: string; text: string; testId: string }) {
  return (
    <div className="flex items-start space-x-4" data-testid={testId}>
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  testId,
  type = "text"
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  testId: string;
  type?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-card-foreground mb-2">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={`Enter ${label.toLowerCase()}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testId}
      />
    </div>
  );
}
