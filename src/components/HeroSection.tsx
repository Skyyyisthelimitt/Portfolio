import Image from 'next/image';
import profileImage from '@/app/profile.png';

export default function HeroSection() {
  return (
    <section className="pt-4 pb-12 animate-fade-in">
      <p className="text-xs font-medium tracking-widest text-[var(--text-secondary)] uppercase mb-3">
        Hey It&apos;s me
      </p>
      
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={profileImage}
          alt="Angelo Sosa"
          width={120}
          height={120}
          className="object-contain flex-shrink-0 w-24 h-24 md:w-32 md:h-32"
          priority
        />
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            ANGELO SOSA
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-secondary)] mt-1" style={{ fontFamily: 'monospace' }}>
            Web Developer
          </h2>
        </div>
      </div>
      
      <p className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Based in Rizal, Philippines
      </p>
      
      <div className="space-y-4 max-w-2xl mb-8">
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">
          I <span className="highlight">develop</span> and <span className="highlight">design</span> modern websites, automation systems, Web3 tools, and Discord applications built on structure, logic, and creative problem-solving.
        </p>
        
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">
          With 3+ years of experience in Web3 and collaboration management, I’ve worked through a wide range of UI, system, and workflow challenges, shaping a strong focus on <span className="highlight">design quality,</span> <span className="highlight">efficiency,</span> and <span className="highlight">thoughtful execution.</span>
        </p>
        
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">
          As a developer and automation engineer, I value clarity, simplicity, and <span className="highlight">systems that make sense</span>. If a process can be cleaner, smarter, or more efficient, I design and build it that way.
        </p>
      </div>

      <a
        href="#connect"
        className="hire-button"
      >
        <span>Hire Me</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </section>
  );
}
