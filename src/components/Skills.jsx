import { motion } from 'framer-motion'
import { Code2, Brain, Globe, Database, Wrench, BookOpen } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { skills } from '../data.js'

const icons = {
  'Programming Languages': Code2,
  'AI & Machine Learning': Brain,
  'Web Development': Globe,
  Databases: Database,
  'Tools & Technologies': Wrench,
  'Core CS': BookOpen,
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionTitle eyebrow="Skills" title="Technologies I work with" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => {
          const Icon = icons[group.category] || Code2
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 group-hover:scale-110 transition">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs rounded-full px-3 py-1 bg-white/5 border border-white/10 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
