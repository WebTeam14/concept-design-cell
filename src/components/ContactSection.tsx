import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling placeholder
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-dark py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className={`text-sm font-medium tracking-widest uppercase text-primary mb-3 ${isVisible ? "animate-fade-up" : "opacity-0"
              }`}
          >
            Contact
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-balance ${isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            style={{ animationDelay: "0.1s" }}
          >
            Let's Start a New Project
          </h2>
          <p
            className={`mt-4 text-section-dark-foreground/60 max-w-lg mx-auto text-pretty ${isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            style={{ animationDelay: "0.2s" }}
          >
            Contact us and lay the foundation for a new and successful relationship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div
            className={`space-y-8 ${isVisible ? "animate-slide-left" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Phone</h4>
                <a href="tel:+919999999999" className="text-section-dark-foreground/60 hover:text-primary transition-colors text-sm">
                  +91 7400453511 /  +91  9820291011
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Email</h4>
                <a href="mailto:demo@gmail.com" className="text-section-dark-foreground/60 hover:text-primary transition-colors text-sm">
                  concept_designcell@yahoo.co.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Office</h4>
                <p className="text-section-dark-foreground/60 text-sm">
                  CONCEPT DESIGN CELL <br />
                  1208, BWing , Shelton Saphhire , <br />
                  Plot No.18 & 19, Sector -15 , CBD  Belapur , Navi Mumbai-400614

                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-5 ${isVisible ? "animate-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-section-dark-foreground/20 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-section-dark-foreground/20 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-section-dark-foreground/20 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-section-dark-foreground/20 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
