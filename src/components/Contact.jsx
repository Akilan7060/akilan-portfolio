import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Send } from 'lucide-react'
import Section, { Reveal } from './Section'
import { profile } from '../data'
const info = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: Github, label: 'GitHub', value: profile.githubUser, href: profile.github },
  { icon: MapPin, label: 'Location', value: profile.location },
]
const field = 'w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // No backend is connected: this opens the visitor's own email app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <Section id="contact" title="Get In Touch" subtitle="Open to opportunities. Reach out by email, phone or the form below.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {info.map(({ icon: I, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div className="glass flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-violet"><I size={20} aria-hidden="true" /></span>
                <div><p className="text-xs text-muted">{label}</p>
                  {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-violet">{value}</a> : <p>{value}</p>}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <form onSubmit={submit} className="glass space-y-4 p-6">
            <label className="block text-sm">Name<input required className={field + ' mt-1'} value={f.name} onChange={set('name')} placeholder="Your name" /></label>
            <label className="block text-sm">Email<input required type="email" className={field + ' mt-1'} value={f.email} onChange={set('email')} placeholder="you@example.com" /></label>
            <label className="block text-sm">Subject<input required className={field + ' mt-1'} value={f.subject} onChange={set('subject')} placeholder="What is this about?" /></label>
            <label className="block text-sm">Message<textarea required rows="4" className={field + ' mt-1'} value={f.message} onChange={set('message')} placeholder="Write your message" /></label>
            <button type="submit" className="btn btn-primary w-full justify-center"><Send size={16} /> Send Message</button>
            <p role="status" className="text-xs text-muted">{sent ? 'Your email app should have opened with the message ready to send. If not, email me directly.' : 'This form has no server. It opens your email app with the message filled in.'}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
