import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialLinks from "@/components/SocialLinks";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container pb-16">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStack />
      </main>
      
      <footer className="container py-12">
        <SocialLinks />
        <p className="text-sm text-[var(--text-secondary)] mt-16 text-center pb-16">
          © {new Date().getFullYear()} Angelo Sosa. All rights reserved.
        </p>
      </footer>

      <Chatbot />
    </div>
  );
}
