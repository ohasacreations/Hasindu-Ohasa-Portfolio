import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { TiktokSection } from "@/components/portfolio/tiktok-section";
import { PublicationsSection } from "@/components/portfolio/publications-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { CursorFollower } from "@/components/portfolio/cursor-follower";
import { ScrollToTop } from "@/components/portfolio/scroll-to-top";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <CursorFollower />
      <ScrollToTop />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <TiktokSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
