import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import { researchInterests, careerObjective } from '../data.js'

export default function Research() {
  return (
    <section id="research" className="section-pad">
      <SectionTitle eyebrow="Research Interests" title="What I'm exploring" />

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex flex-wrap gap-3 content-start"
        >
          {researchInterests.map((interest, i) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-full px-4 py-2 glass text-gray-200 hover:bg-white/10 transition"
            >
              {interest}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 border-l-2 border-purple-500/50"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-300 mb-3">
            Career Objective
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">{careerObjective}</p>
        </motion.div>
      </div>
    </section>
  )
}
