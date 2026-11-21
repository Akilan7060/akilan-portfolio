import { Github, CheckCircle2 } from 'lucide-react'
import Section, { Reveal } from './Section'
import Icon from './Icon'
import { projects, profile } from '../data'
export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built with machine learning and full-stack tools.">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="glass glass-hover group flex h-full flex-col overflow-hidden">
              <div className="relative grid h-40 place-items-center bg-gradient-to-br from-accent/30 via-violet/10 to-transparent">
                <Icon name={p.icon} size={64} className="text-violet transition duration-500 group-hover:scale-110" />
                <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs text-muted">{p.date}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (<li key={f} className="flex gap-2 text-sm text-white/85"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet" aria-hidden="true" />{f}</li>))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (<li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">{t}</li>))}
                </ul>
                <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost mt-6 self-start !py-2"><Github size={16} /> View on GitHub</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
