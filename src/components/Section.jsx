import { motion } from 'framer-motion'
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative scroll-mt-20 px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Portfolio / {id}</p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-xl text-muted">{subtitle}</p>}
          <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-accent to-violet" />
        </motion.div>
        {children}
      </div>
    </section>
  )
}
export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>{children}</motion.div>
)
