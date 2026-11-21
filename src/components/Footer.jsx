import { Github, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal/70 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="text-sm text-muted">{profile.tagline}</p>
          <p className="mt-2 text-xs text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass glass-hover p-3"><Github size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="glass glass-hover p-3"><Mail size={18} /></a>
          <a href="#home" aria-label="Back to top" className="btn btn-primary !p-3"><ArrowUp size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
