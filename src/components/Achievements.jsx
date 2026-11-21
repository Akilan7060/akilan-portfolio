import Section, { Reveal } from './Section'
import Icon from './Icon'
import { achievements } from '../data'
export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.07}>
            <div className="glass glass-hover h-full p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-violet"><Icon name={a.icon} size={22} /></span>
                <span className="text-sm text-violet">{a.type}</span>
              </div>
              <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
