import { Briefcase } from 'lucide-react'
import Section, { Reveal } from './Section'
import { internship as e } from '../data'
export default function Experience() {
  return (
    <Section id="experience" title="Internship Experience">
      <div className="relative border-l border-accent/40 pl-8">
        <span className="absolute -left-[17px] top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-violet"><Briefcase size={16} aria-hidden="true" /></span>
        <Reveal>
          <div className="glass glass-hover p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div><h3 className="font-display text-xl font-semibold">{e.role}</h3><p className="text-violet">{e.company}</p></div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-muted">{e.duration}</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted marker:text-accent">
              {e.points.map((p) => (<li key={p}>{p}</li>))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {e.tools.map((t) => (<li key={t} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs">{t}</li>))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
