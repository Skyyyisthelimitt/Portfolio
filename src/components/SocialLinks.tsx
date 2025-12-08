const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/markangelososa/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <rect width="24" height="24" rx="3" fill="currentColor"/>
        <path d="M6 9h2.4v7.2H6V9zm1.2-3.84c.77 0 1.4.63 1.4 1.4 0 .78-.63 1.4-1.4 1.4-.78 0-1.4-.62-1.4-1.4 0-.77.62-1.4 1.4-1.4zM10.2 9h2.3v.98h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.68v4.77h-2.4v-4.23c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.24v4.3h-2.4V9z" fill="var(--bg-primary)"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Skyyyisthelimitt',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com/0xSkyisthelimit',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:markgelooo14@gmail.com',
    icon: (
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <section id="connect" className="py-6 animate-fade-in animate-delay-1">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'monospace' }}>
          Connect
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Get in touch with me
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
