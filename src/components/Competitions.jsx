import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { competitions } from '../data.js'

export default function Competitions() {
  // Hide the whole section until you add entries in src/data.js
  if (!competitions || competitions.length === 0) return null

  return (
    <section id="competitions" className="section-pad">
      <SectionTitle eyebrow="Competitions" title="Competitions & hackathons" />
      <div className="grid sm:grid-cols-2 gap-6">
        {competitions.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition"
          >
            <div className="flex items-start justify-between gap-3">
              <Trophy size={22} className="text-purple-300" />
              {c.result && (
                <span className="shrink-0 inline-flex items-center text-xs rounded-full px-2.5 py-1 bg-blue-500/15 text-blue-300 border border-blue-500/20">
                  {c.result}
                </span>
              )}
            </div>
            <h3 className="mt-3 font-semibold text-white">{c.name}</h3>
            {c.event && <p className="text-sm text-gray-400 mt-1">{c.event}</p>}
            {c.description && (
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{c.description}</p>
            )}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              {c.year && <span>{c.year}</span>}
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  View →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
