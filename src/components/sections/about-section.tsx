export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-14 md:py-20">
      <div className="section-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-soft">About</p>
          <h2 id="about-title" className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Trusted guidance for resilient security outcomes
          </h2>
        </div>
        <div className="space-y-4 text-base leading-7 text-muted">
          <p>
            Blue Team Cyber helps organizations make cybersecurity execution more durable,
            measurable, and aligned with business priorities.
          </p>
          <p>
            We focus on pragmatic, high-leverage improvements that strengthen operations without
            adding unnecessary complexity.
          </p>
          <p>
            TODO: Add company background and leadership credibility copy.
          </p>
        </div>
      </div>
    </section>
  );
}
