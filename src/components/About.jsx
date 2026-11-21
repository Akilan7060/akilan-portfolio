import { GraduationCap, Cpu, Target } from 'lucide-react'
import Section, { Reveal } from './Section'
import { profile } from '../data'
const cards = [
  { icon: GraduationCap, t: 'Education', d: 'B.Tech in AI & Data Science, Kamaraj College of Engineering and Technology (2022–2026), CGPA 7.3/10.' },
  { icon: Cpu, t: 'Technical interests', d: 'Machine learning, deep learning image classification, conversational AI and semantic search.' },
  { icon: Target, t: 'Career goal', d: 'Seeking a role where I can apply machine learning and data skills to real-world problems.' },
]
export default function About() {
  return (
    <Section id="about" title="About Me">
      <div>
        <Reveal><p className="max-w-4xl text-lg leading-relaxed text-muted">{profile.intro}</p></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-5">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-violet"><I size={22} aria-hidden="true" /></span>
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
