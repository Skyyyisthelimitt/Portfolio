const techStack = [
  {
    name: 'TypeScript',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect width="24" height="24" rx="2" fill="#3178C6"/>
        <path d="M14.5 12v6.5h2V16h2v-2h-2v-2h3v-2h-5z" fill="white"/>
        <path d="M5 12h6v2H8.5v6.5h-2V14H5v-2z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M6 18.5l1.5-1c.3.5.6.9 1.2.9.6 0 1-.3 1-1v-5h2v5c0 1.5-1 2.5-2.5 2.5-1.3 0-2.1-.7-2.7-1.4zm6.5-.3l1.5-1c.4.6 1 1.1 2 1.1.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8s-.9.3-.9.7c0 .5.3.7 1.1 1l.5.2c1.7.7 2.6 1.4 2.6 3 0 1.7-1.4 2.7-3.2 2.7-1.8 0-3-.9-3.5-2z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#61DAFB" className="w-5 h-5">
        <circle cx="12" cy="12" r="2.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
        <circle cx="12" cy="12" r="11" fill="currentColor"/>
        <path d="M9.5 8v8l6-4-6-4z" fill="var(--bg-primary)"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#06B6D4" className="w-5 h-5">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F05032" className="w-5 h-5">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M8.5 2a3.5 3.5 0 0 0 0 7h3.5V2H8.5z" fill="#F24E1E"/>
        <path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z" fill="#FF7262"/>
        <path d="M12 9h3.5a3.5 3.5 0 0 1 0 7H12V9z" fill="#1ABCFE"/>
        <path d="M8.5 9a3.5 3.5 0 0 0 0 7H12V9H8.5z" fill="#A259FF"/>
        <path d="M8.5 16a3.5 3.5 0 0 0 0 7 3.5 3.5 0 0 0 3.5-3.5V16H8.5z" fill="#0ACF83"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2L2 20h20L12 2z"/>
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="py-8 animate-fade-in animate-delay-3">
      <h3 className="section-title">Tech Stack</h3>
      
      <div className="flex flex-wrap gap-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="tech-icon"
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
