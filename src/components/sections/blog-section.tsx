import Link from "next/link";

type BlogSectionProps = {
  blogUrl: string;
};

export function BlogSection({ blogUrl }: BlogSectionProps) {
  return (
    <section id="blog" aria-labelledby="blog-title" className="py-14 md:py-20">
      <div className="section-container">
        <div className="glass-panel rounded-3xl p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-soft">Blog</p>
          <h2 id="blog-title" className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Insights from the front lines of resilience
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Explore practical guidance, thought leadership, and implementation patterns on our
            dedicated blog.
          </p>
          <Link
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-brand/70 bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Visit blog.theblueteam.io
          </Link>
        </div>
      </div>
    </section>
  );
}
