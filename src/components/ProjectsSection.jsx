import React from 'react';

const projects = [
  {
    title: 'Fintech Mobile App',
    description: 'End-to-end UX for a personal finance app: research, IA, flows, and high fidelity UI.',
    tags: ['Research', 'Wireframes', 'UI'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Complex information design with accessible data visualization and modular components.',
    tags: ['Design System', 'Accessibility', 'Data Viz'],
    image:
      'https://images.unsplash.com/photo-1551281044-8b89a1fdc6b8?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'E-commerce Web Experience',
    description: 'Conversion-focused storefront with thoughtful UX writing and micro-interactions.',
    tags: ['UX Writing', 'A/B Testing', 'Prototyping'],
    image:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
          <p className="mt-2 max-w-2xl text-neutral-400">
            A snapshot of recent work across mobile and web.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-md border border-white/20 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/10 md:block"
        >
          Let’s work together
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2 py-1 text-xs text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
