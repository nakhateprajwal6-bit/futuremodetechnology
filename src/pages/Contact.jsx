import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programInterest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        programInterest: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="contact-subtitle" data-testid="contact-subtitle">
            Ready to start your tech journey? Contact us today and let's
            discuss your goals.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info-section">
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
          <div className="contact-form-container">
            <h3 className="contact-form-title" data-testid="contact-form-title">
              Send us a message
            </h3>

            {submitStatus && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="contact-form"
              data-testid="contact-form"
            >
              <div className="form-row">
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

              <div className="form-field">
                <label htmlFor="programInterest" className="form-label">
                  Program Interest
                </label>
                <select
                  id="programInterest"
                  className="form-select"
                  value={formData.programInterest}
                  onChange={(e) =>
                    handleInputChange("programInterest", e.target.value)
                  }
                  data-testid="select-program-interest"
                >
                  <option value="">Select a program</option>
                  <option value="robotics-engineering">
                    Robotics Engineering
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="iot-remote-robotics">
                    IoT & Remote Robotics
                  </option>
                  <option value="software-development">
                    Software Development
                  </option>
                  <option value="artificial-intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell us about your goals and interests..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  required
                  data-testid="textarea-message"
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, title, text, testId }) {
  return (
    <div className="contact-info-item" data-testid={testId}>
      <div className="contact-info-icon">
        <Icon />
      </div>
      <div className="contact-info-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function FormField({ id, label, value, onChange, testId, type = "text" }) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="form-input"
        placeholder={`Enter ${label.toLowerCase()}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testId}
      />
    </div>
  );
}
