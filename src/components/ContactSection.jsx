import React, { useState } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent. I will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-2xl px-6 py-20">
      <h2 className="text-3xl font-semibold sm:text-4xl">Let’s talk</h2>
      <p className="mt-2 text-neutral-400">
        Have a project in mind or want to collaborate? Drop a message.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 focus-within:border-white/20">
            <User className="h-4 w-4 text-neutral-400" />
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-transparent outline-none placeholder:text-neutral-500"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 focus-within:border-white/20">
            <Mail className="h-4 w-4 text-neutral-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full bg-transparent outline-none placeholder:text-neutral-500"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Message</label>
          <div className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 focus-within:border-white/20">
            <MessageSquare className="mt-2 h-4 w-4 text-neutral-400" />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project, timeline, and goals."
              className="w-full resize-none bg-transparent outline-none placeholder:text-neutral-500"
            />
          </div>
        </div>
        <div className="pt-2">
          <button
            type="submit"
            className="w-full rounded-md bg-white px-5 py-3 font-medium text-neutral-900 transition hover:bg-neutral-200"
          >
            Send message
          </button>
        </div>
      </form>

      {status && (
        <p className="mt-4 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
          {status}
        </p>
      )}
    </section>
  );
}
