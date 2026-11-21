import { GraduationCap } from 'lucide-react'
import Section, { Reveal } from './Section'
import { education } from '../data'
export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative space-y-6 border-l border-accent/40 pl-8">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[41px] top-5 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-accent to-violet" aria-hidden="true"><GraduationCap size={11} /></span>
              <div className="glass glass-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-muted">{e.years}</span>
                </div>
                <p className="mt-1 text-violet">{e.school}</p>
                <p className="mt-2 text-sm text-muted">{e.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
