export default function HeroSection() {
  return (
    <section className="py-12 animate-fade-in">
      <p className="text-xs font-medium tracking-widest text-[var(--text-secondary)] uppercase mb-4">
        Building Web3 & Web
      </p>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
        MARK ANGELO SOSA
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-light text-[var(--text-secondary)] mb-6" style={{ fontFamily: 'monospace' }}>
        Web Developer
      </h2>
      
      <p className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-6">
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
        Based in Binangonan, Rizal, Philippines
      </p>
      
      <p className="text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl">
        I&apos;m a developer specializing in Discord apps, Web3 tools, and modern web development 
        using React, Next.js, TypeScript, and Tailwind CSS. With 3 years in the crypto space 
        and experience as a collab manager, I bring strong skills in UI/UX, communication, 
        and project coordination. I&apos;m organized, detail-oriented, and committed to delivering 
        scalable, high-quality solutions.
      </p>
    </section>
  );
}
