const projects = [
  {
    title: 'WEB3 Wizard',
    description:
      'The Ultimate Operating System for Web3 Natives. Unifies portfolio tracking, whitelist grinding, and collab management. Features multi-chain support (EVM & Solana), real-time net worth, Google Sheets sync for whitelists, and live market intelligence.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind & Shadcn', 'Supabase', 'Wagmi', 'RainbowKit'],
    link: 'https://web3mngr.vercel.app/login',
  },
  {
    title: 'Ganba App',
    description:
      'A gamified productivity app inspired by "Ganbaru" (頑張る) — the Japanese spirit of doing your best. Features task management with priorities and deadlines, notes with tagging, progress tracking with charts, achievement badges, streak counters, and a real-time dashboard.',
    tech: ['React', 'Vite', 'Zustand', 'Tailwind CSS', 'Recharts'],
    link: '#',
  },
  {
    title: 'Collab Request Bot',
    description:
      'A Discord bot that monitors collab request channels across multiple servers. Automatically reacts to acknowledge requests and forwards details (project, requester, source server) to a centralized hub for streamlined partnership tracking.',
    tech: ['Node.js', 'Discord.js'],
    link: '#',
  },
  {
    title: 'Tweet Tracker Bot',
    description:
      'A Discord bot that monitors specific X/Twitter accounts and sends real-time notifications with tweet content to designated channels whenever the tracked users post.',
    tech: ['Node.js', 'Discord.js', 'Twitter API'],
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-6 animate-fade-in animate-delay-2">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'monospace' }}>
          Projects
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Here are some things I&apos;ve built
        </p>
      </div>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">
              {project.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button text-xs py-1 px-2.5 ml-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
