import Section, { Reveal } from './Section'
import Icon from './Icon'
import { skills } from '../data'
export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Tools and technologies from my resume and projects.">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="glass glass-hover h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-violet"><Icon name={s.icon} size={22} /></span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((k) => (<li key={k} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-white/90">{k}</li>))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
