export type NavItem = {
  label: string;
  href: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  outcomes: string[];
};

const defaultSiteUrl = "https://theblueteam.io";

function parseBoolean(value: string | undefined, fallback = false): boolean {
  if (!value) return fallback;
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export const siteConfig = {
  name: "Blue Team Cyber",
  tagline: "Cyber resilience made simple*",
  subTagline: "*simple does not mean easy",
  description:
    "Blue Team Cyber helps organizations reduce technical debt, increase program maturity, and manage cyber exposure with practical resilience strategies.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  ogImage: "/opengraph-image",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  pillars: [
    {
      title: "Reduce Technical Debt",
      description:
        "Modernize security architecture and workflows to remove drag, increase reliability, and speed up secure delivery.",
    },
    {
      title: "Increase Program Maturity",
      description:
        "Build measurable governance, response, and operational rigor aligned to business risk and leadership priorities.",
    },
    {
      title: "Manage Cyber Exposure",
      description:
        "Continuously identify, prioritize, and reduce exposure across people, process, and technology.",
    },
  ] as Pillar[],
  services: [
    {
      title: "Cyber Resilience Strategy",
      description:
        "Roadmaps that connect security initiatives to business resilience outcomes and executive decision-making.",
      outcomes: [
        "Risk-informed prioritization",
        "Executive-ready reporting",
        "Practical delivery plan",
      ],
    },
    {
      title: "Program Maturity Enablement",
      description:
        "Assess current-state capabilities and operationalize repeatable, auditable security practices.",
      outcomes: [
        "Maturity baseline and targets",
        "Operating model improvements",
        "Clear accountability",
      ],
    },
    {
      title: "Exposure Reduction Services",
      description:
        "Turn complex attack-surface and control data into actionable remediation plans your teams can execute.",
      outcomes: [
        "Priority remediation backlog",
        "Faster closure on high-risk gaps",
        "Sustained resilience monitoring",
      ],
    },
  ] as ServiceItem[],
  blogUrl: "https://blog.theblueteam.io",
  analytics: {
    enabled: parseBoolean(process.env.NEXT_PUBLIC_ANALYTICS_ENABLED, false),
    provider: process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "none",
    id: process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "",
  },
};
