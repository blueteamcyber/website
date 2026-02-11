import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HomeSection } from "@/components/sections/home-section";
import { ServicesSection } from "@/components/sections/services-section";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>

      <SiteHeader navItems={siteConfig.navItems} />

      <main id="main-content">
        <HomeSection
          headline={siteConfig.tagline}
          subHeadline={siteConfig.subTagline}
          pillars={siteConfig.pillars}
        />
        <AboutSection />
        <ServicesSection services={siteConfig.services} />
        <BlogSection blogUrl={siteConfig.blogUrl} />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
