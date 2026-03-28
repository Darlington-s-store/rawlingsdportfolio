import { useState } from "react";
import { Mail, Phone, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length > 1000) errs.message = "Message too long";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Let's <span className="text-gradient">connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, freelance projects, and interesting conversations.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a href="mailto:asomanirawlingsjunior5333@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">asomanirawlingsjunior5333@gmail.com</p>
                </div>
              </a>

              <a href="tel:+233552945333" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-sm">+233 55 294 5333</p>
                </div>
              </a>

              <a href="https://github.com/Darlington-s-store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-sm">https://github.com/Darlington-s-store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
                maxLength={100}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your@email.com"
                maxLength={255}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell me about your project..."
                maxLength={1000}
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full rounded-xl" size="lg">
              <Send size={16} className="mr-2" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
