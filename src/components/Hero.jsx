import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for freelance
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Product-focused UX Designer crafting clean, modern experiences
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg">
          I design thoughtful interfaces with a clear process — from research and strategy to interaction design and polished visuals.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-200"
          >
            View Projects <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Get in touch <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
