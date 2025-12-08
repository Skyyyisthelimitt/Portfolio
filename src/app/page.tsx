import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialLinks from "@/components/SocialLinks";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container pb-16">
        <HeroSection />
        <SocialLinks />
        <ExperienceSection />
        <ProjectsSection />
        <TechStack />
      </main>
      
      <footer className="container py-8 border-t border-[var(--border)]">
        <p className="text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Mark Angelo Sosa. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
