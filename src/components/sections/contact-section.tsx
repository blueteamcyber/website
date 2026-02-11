import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-14 md:py-20">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-soft">Contact</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              Let&apos;s make cyber resilience actionable
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Share your goals and we&apos;ll follow up with the right next step.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
