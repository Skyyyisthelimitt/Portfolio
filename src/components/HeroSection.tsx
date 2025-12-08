export default function HeroSection() {
  return (
    <section className="pt-4 pb-12 animate-fade-in">
      <p className="text-xs font-medium tracking-widest text-[var(--text-secondary)] uppercase mb-3">
        Hey It&apos;s me
      </p>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
        MARK ANGELO SOSA
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-light text-[var(--text-secondary)] mb-6" style={{ fontFamily: 'monospace' }}>
        Web Developer
      </h2>
      
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
      
      <div className="space-y-4 max-w-2xl">
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">
          I <span className="highlight">develop</span> and <span className="highlight">design</span> Discord apps, Web3 tools, and modern websites — projects built on structure, logic, and creative thinking.
        </p>
        
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">
          3+ years of experience in crypto and collab management exposed me to every kind of UI and workflow problem, which turned me into someone who cares deeply about <span className="highlight">design</span> and <span className="highlight">detail</span>.
        </p>
        
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">
          I&apos;m all about clarity, simplicity, and <span className="highlight">systems that make sense</span>. If something can be cleaner or smarter, I&apos;ll <span className="highlight">build</span> it that way.
        </p>
      </div>
    </section>
  );
}

