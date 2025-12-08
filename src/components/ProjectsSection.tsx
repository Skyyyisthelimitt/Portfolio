const projects = [
  {
    title: 'WEB3 Manager',
    description:
      'A Web3 dashboard to manage NFT whitelists and collaborations, integrating Google Sheets API for real-time data tracking, quick edits, and deadline management. Features crypto overview with live charts, currency conversion, and secure login.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-8 animate-fade-in animate-delay-2">
      <h3 className="section-title">Projects</h3>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">
              {project.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
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
