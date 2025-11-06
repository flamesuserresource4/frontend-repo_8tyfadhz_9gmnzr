import React from 'react';
import { Search, Layers, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'Stakeholder interviews, competitive analysis, and user research to align on goals.',
  },
  {
    icon: Layers,
    title: 'Define',
    desc: 'Translate insights into personas, journeys, IA, and clear problem statements.',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Wireframes to high-fidelity UI, micro-interactions, and accessible components.',
  },
  {
    icon: Rocket,
    title: 'Deliver',
    desc: 'Prototypes, specs, and design system assets with ongoing iteration after launch.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold sm:text-4xl">Process</h2>
      <p className="mt-2 max-w-2xl text-neutral-400">
        A collaborative and transparent workflow that scales from MVPs to mature products.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
