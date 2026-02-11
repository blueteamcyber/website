import type { ServiceItem } from "@/lib/site-config";

type ServicesSectionProps = {
  services: ServiceItem[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" aria-labelledby="services-title" className="py-14 md:py-20">
      <div className="section-container">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-soft">Services</p>
        <h2 id="services-title" className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
          Practical services that advance cyber resilience
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
