import Image from "next/image";

import type { Pillar } from "@/lib/site-config";

type HomeSectionProps = {
  headline: string;
  subHeadline: string;
  pillars: Pillar[];
};

export function HomeSection({ headline, subHeadline, pillars }: HomeSectionProps) {
  return (
    <section id="home" aria-labelledby="home-title" className="pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand">
              Blue Team Cyber
            </p>
            <h1
              id="home-title"
              className="max-w-2xl text-4xl leading-tight font-semibold text-foreground md:text-5xl"
            >
              {headline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{subHeadline}</p>
          </div>
          <div className="glass-panel rounded-3xl p-6 shadow-2xl shadow-[#05131b]/70">
            <Image
              src="/globe.svg"
              alt="Global cyber resilience illustration"
              width={480}
              height={420}
              className="mx-auto h-auto w-full max-w-sm"
              priority
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-panel rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-foreground">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
