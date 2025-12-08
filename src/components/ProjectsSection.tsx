const projects = [
  {
    title: 'Ganba App',
    description:
      'A gamified productivity app inspired by "Ganbaru" (頑張る) — the Japanese spirit of doing your best. Features task management with priorities and deadlines, notes with tagging, progress tracking with charts, achievement badges, streak counters, and a real-time dashboard.',
    tech: ['React', 'Vite', 'Zustand', 'Tailwind CSS', 'Recharts'],
    link: '#',
  },
  {
    title: 'WEB3 Manager',
    description:
      'A Web3 dashboard to manage NFT whitelists and collaborations, integrating Google Sheets API for real-time data tracking, quick edits, and deadline management. Features crypto overview with live charts, currency conversion, and secure login.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Collab Request Bot',
    description:
      'A Discord bot that monitors collab request channels across multiple servers. Automatically reacts to acknowledge requests and forwards details (project, requester, source server) to a centralized hub for streamlined partnership tracking.',
    tech: ['Node.js', 'Discord.js'],
    link: 'https://github.com/Skyyyisthelimitt/collab-request-bot',
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
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
