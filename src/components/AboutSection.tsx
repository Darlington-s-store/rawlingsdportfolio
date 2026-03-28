import { Code2, CreditCard, Server, Globe, Users, Zap } from "lucide-react";

const highlights = [
  { icon: Server, title: "Backend Architecture", desc: "Scalable APIs, microservices, and database design" },
  { icon: CreditCard, title: "Payment Systems", desc: "Stripe, mobile money, and secure checkout flows" },
  { icon: Code2, title: "Frontend Engineering", desc: "React, Next.js, responsive and accessible UIs" },
  { icon: Globe, title: "Cloud & DevOps", desc: "Azure, GCP, CI/CD pipelines, and deployment" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">About</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
          Who I <span className="text-gradient">am</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm Rawlings — a full-stack developer based in Accra, Ghana with 5 years of hands-on
              experience building web applications that handle real users, real money, and real scale.
            </p>
            <p>
              My work sits at the intersection of backend engineering and product thinking. I've built
              payment-integrated platforms (Stripe, mobile money), logistics systems managing hundreds
              of daily trips, and e-commerce solutions from checkout to order fulfillment.
            </p>
            <p>
              I care about writing code that's maintainable, APIs that are fast, and user experiences
              that just work. When I'm not coding, I'm usually exploring new tools or helping other
              developers level up.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
