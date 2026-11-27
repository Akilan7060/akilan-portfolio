import { motion } from 'framer-motion'
import { Github, Mail, ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data'
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 pb-16 pt-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute inset-x-6 top-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-start gap-12">
        <motion.div id="about" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative z-10 scroll-mt-24">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-2 text-xs font-medium tracking-wide text-accent">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent" /></span>
            OPEN TO OPPORTUNITIES
          </div>
          <p className="text-lg text-muted">Hello, I’m</p>
          <div className="mt-1 flex items-center justify-between gap-8">
            <h1 className="font-display text-6xl font-bold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">{profile.name}<span className="text-accent">.</span></h1>
            <div className="relative hidden shrink-0 sm:block">
              <div className="absolute -inset-3 rounded-[1.25rem] bg-gradient-to-br from-accent/25 to-violet/20 blur-xl" />
              <img src={profile.photo} alt="Portrait of Akilan" width="640" height="640" fetchpriority="high" className="relative h-52 w-40 rounded-[1.25rem] border border-white/10 object-cover object-center shadow-glow md:h-60 md:w-48" />
            </div>
          </div>
          <p className="mt-5 max-w-xl bg-gradient-to-r from-accent to-violet bg-clip-text font-display text-2xl font-semibold text-transparent sm:text-3xl">{profile.title}</p>
          <h2 className="mt-7 font-display text-xl font-semibold">About Me</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted">{profile.intro}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/80"><Sparkles size={15} className="text-accent" />{profile.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary"><ArrowDown size={16} /> Explore My Work</a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Resume</a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="glass glass-hover p-3"><Github size={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email Akilan" className="glass glass-hover p-3"><Mail size={20} /></a>
            <span className="ml-2 h-px w-12 bg-white/15" />
            <span className="flex items-center gap-1.5 text-sm text-muted"><MapPin size={15} className="text-accent" />{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
