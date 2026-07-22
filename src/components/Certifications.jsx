import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { certifications } from '../data.js'

export default function Certifications() {
  // Hide the whole section until you add certificates in src/data.js
  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="section-pad">
      <SectionTitle eyebrow="Certifications" title="Credentials" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.url || undefined}
            target={c.url ? '_blank' : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition"
          >
            <Award size={22} className="text-purple-300 mb-3" />
            <h3 className="font-semibold text-white">{c.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{c.issuer}</p>
            {c.year && <p className="text-xs text-gray-500 mt-2">{c.year}</p>}
          </motion.a>
        ))}
      </div>
    </section>
  )
}
