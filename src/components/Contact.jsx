import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Send, Download } from 'lucide-react'
import Section, { Reveal } from './Section'
import { profile } from '../data'
const info = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: Github, label: 'GitHub', value: profile.githubUser, href: profile.github },
  { icon: MapPin, label: 'Location', value: profile.location },
]
const field = 'w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent'
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setStatus('The contact form is not configured yet. Please email me directly.')
      return
    }
    setSending(true)
    setStatus('')
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            name: f.name,
            email: f.email,
            reply_to: f.email,
            subject: f.subject,
            message: f.message,
          },
        }),
      })
      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || 'The email service could not send your message.')
      }
      setStatus('Message sent! Thank you for reaching out.')
      setF({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
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
          <Reveal delay={0.24}>
            <a href={profile.resume} download="Akilan_Resume.pdf" className="glass flex items-center gap-4 p-4 transition hover:border-accent/40">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-violet"><Download size={20} aria-hidden="true" /></span>
              <div><p className="text-xs text-muted">Resume</p><p className="hover:text-violet">Download Resume</p></div>
            </a>
          </Reveal>
        </div>
        <Reveal>
          <form onSubmit={submit} className="glass space-y-4 p-6">
            <label className="block text-sm">Name<input required className={field + ' mt-1'} value={f.name} onChange={set('name')} placeholder="Your name" /></label>
            <label className="block text-sm">Email<input required type="email" className={field + ' mt-1'} value={f.email} onChange={set('email')} placeholder="you@example.com" /></label>
            <label className="block text-sm">Subject<input required className={field + ' mt-1'} value={f.subject} onChange={set('subject')} placeholder="What is this about?" /></label>
            <label className="block text-sm">Message<textarea required rows="4" className={field + ' mt-1'} value={f.message} onChange={set('message')} placeholder="Write your message" /></label>
            <button type="submit" disabled={sending} className="btn btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"><Send size={16} /> {sending ? 'Sending...' : 'Send Message'}</button>
            <p role="status" className="text-xs text-muted">{status || 'Your message will be sent directly to my email.'}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
