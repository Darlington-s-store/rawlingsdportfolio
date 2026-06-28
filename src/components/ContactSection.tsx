import { useState } from "react";
import { Mail, Phone, Github, Send, Linkedin, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      if (WEB3FORMS_KEY) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        if (!res.ok) throw new Error("Failed to send");
      }
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setSuccess(true);
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Could not send your message. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Let's <span className="text-gradient">connect</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <ScrollReveal variant="left">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Have an idea, a project you want to build, or looking to hire? Reach out and let's talk about how I can help.
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
                    <p className="font-medium text-xs leading-relaxed">+233 55 294 5333 / +233 20 031 0301 / +233 25 750 1827</p>
                  </div>
                </a>

                <a href="https://github.com/Darlington-s-store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-sm">github.com/Darlington-s-store</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-sm">linkedin.com/in/rawlings-junior-asomani</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form / Success Card */}
          {success ? (
            <ScrollReveal variant="right">
              <div className="bg-card rounded-2xl border border-border p-8 text-center flex flex-col items-center justify-center space-y-5 min-h-[418px]">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  <Check className="w-6 h-6" strokeWidth={3} />
                </div>
                <h3 className="font-display text-2xl font-bold">Message sent!</h3>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Thanks for reaching out! I appreciate you taking the time to write, and I'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setSuccess(false)} variant="outline" className="rounded-xl mt-2 px-6">
                  Send another message
                </Button>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal variant="right">
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
                    placeholder="How can I help you?"
                    maxLength={1000}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full rounded-xl" size="lg" disabled={sending}>
                  {sending ? <Loader2 size={16} className="mr-2 animate-spin" /> : <Send size={16} className="mr-2" />}
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
