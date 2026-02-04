const projects = [
  {
    title: 'WEB3 Wizard',
    description:
      'The Ultimate Operating System for Web3 Natives. Unifies portfolio tracking, whitelist grinding, and collab management. Features multi-chain support (EVM & Solana), real-time net worth, Google Sheets sync for whitelists, and live market intelligence.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind & Shadcn', 'Supabase','RainbowKit'],
    link: 'https://web3mngr.vercel.app/login',
  },
  {
    title: 'Nagare',
    description:
      'A minimalist Neobrutalist productivity platform focused on flow. It features an enhanced focus timer (Flow & Pomodoro modes), Kanban workspace management, and an AI-driven music experience via Gemini AI and YouTube integration.',
    tech: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Gemini AI', 'YouTube API'],
    link: 'https://nagareflow.vercel.app/',
  },
  {
    title: 'Meowgram',
    description:
      'A cat-focused social media app that allows owners to create profiles for their cats and share photos in a wholesome, low-pressure environment.',
    tech: ['Next.js 15', 'TypeScript', 'Supabase'],
    link: 'https://meowgram.vercel.app/',
  },
  {
    title: 'Collab Manager Portfolio',
    description:
      'Sky Portfolio – Collab Manager is a professional, neo-brutalist portfolio built for a Web3 and community collaboration manager, featuring bold visuals, real-time Discord status, and interactive sections designed for clarity and impact.',
    tech: ['Next.js 15', 'TypeScript', 'Vanilla CSS', 'Framer Motion'],
    link: 'https://skyyyportfolio.vercel.app/',
  },
  {
    title: 'Multi-Inbox Gmail to Telegram Automation',
    description:
      'A high-frequency n8n automation that monitors multiple Gmail inboxes and delivers unified, cleaned, and context-rich email alerts directly to Telegram.',
    tech: ['n8n'],
    link: '#',
  },
  {
    title: 'AI Voice Task Automation',
    description:
      'An n8n automation that converts Telegram voice notes into structured Markdown tasks using AI transcription and stores them seamlessly in Google Drive and Obsidian.',
    tech: ['n8n'],
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
