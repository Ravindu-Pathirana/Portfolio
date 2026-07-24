import { motion } from 'framer-motion'
import { HeartHandshake } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { volunteering } from '../data.js'

export default function Volunteering() {
  // Hide the whole section until you add entries in src/data.js
  if (!volunteering || volunteering.length === 0) return null

  return (
    <section id="volunteering" className="section-pad">
      <SectionTitle eyebrow="Volunteering" title="Giving back" />

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/40 to-transparent" />
        <div className="space-y-8">
          {volunteering.map((v, i) => (
            <motion.div
              key={`${v.role}-${v.organization}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16"
            >
              <span className="absolute left-0 top-1 grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/20">
                <HeartHandshake size={18} />
              </span>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{v.role}</h3>
                  {v.period && (
                    <span className="text-xs rounded-full px-3 py-1 bg-white/5 border border-white/10 text-gray-300">
                      {v.period}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-blue-300">{v.organization}</p>
                {v.description && (
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">{v.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
