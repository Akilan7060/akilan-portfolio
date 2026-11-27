import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const href = (n) => `#${n.toLowerCase()}`
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/75 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-xl font-bold tracking-tight">Akilan<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (<li key={n}><a href={href(n)} className="text-[13px] font-medium text-muted transition hover:text-accent">{n}</a></li>))}
        </ul>
        <button className="rounded-lg border border-white/10 p-2 text-muted transition hover:border-accent/40 hover:text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-charcoal/95 px-6 pb-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 py-3">
            {nav.map((n) => (<li key={n}><a href={href(n)} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-muted hover:bg-white/5 hover:text-white">{n}</a></li>))}
          </ul>
        </div>
      )}
    </header>
  )
}
