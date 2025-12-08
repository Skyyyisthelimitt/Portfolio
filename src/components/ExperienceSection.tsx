const experiences = [
  {
    company: 'CMT Holdings, Inc.',
    type: 'Internship',
    role: 'IT Intern',
    period: 'Feb 2025 - June 2025',
    location: 'Philippines',
    responsibilities: [
      'Developed an asset management system to track all company assets, including deployment, returns, and status monitoring.',
      'Tested and evaluated the company\'s ERP system, identified areas for improvement, and created clear step-by-step documentation for employee use.',
      'Provided technical support by troubleshooting and resolving issues with laptops, printers, and other IT equipment.',
      'Deployed new devices and ensured proper configuration, setup, and assignment to the correct departments.',
    ],
  },
  {
    company: 'Multiple NFT & Web3 Projects',
    type: 'Freelance',
    role: 'Collab Manager',
    period: 'Dec 2023 - Jan 2025',
    location: 'Remote',
    responsibilities: [
      'Managed collaborations between projects and various NFT/Web3 communities to expand reach and strengthen partnerships.',
      'Created and maintained organized spreadsheets for each project to track deadlines, deliverables, and partnership details.',
      'Planned marketing strategies, including tweet coordination, engagement optimization, and collaboration-driven promotion.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-6 animate-fade-in animate-delay-2">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'monospace' }}>
          Experience
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Here is my work experience
        </p>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="experience-card">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {exp.company}
                  </h3>
                  <span className="experience-badge">{exp.type}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{exp.role}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-[var(--text-secondary)]">{exp.period}</p>
                <p className="text-xs text-[var(--text-secondary)] opacity-70">{exp.location}</p>
              </div>
            </div>
            
            <ul className="experience-list">
              {exp.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
