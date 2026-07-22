import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { projects } from '../data.js'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-2xl p-6 flex flex-col overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        {project.status && (
          <span className="shrink-0 inline-flex items-center gap-1 text-xs rounded-full px-2.5 py-1 bg-blue-500/15 text-blue-300 border border-blue-500/20">
            <Sparkles size={12} /> {project.status}
          </span>
        )}
      </div>

      <p className="relative mt-3 text-gray-400 leading-relaxed flex-1">{project.description}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs rounded-md px-2 py-1 bg-white/5 border border-white/10 text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-4 text-sm">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition">
            <Github size={16} /> Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-gray-600" title="Add your repo link in src/data.js">
            <Github size={16} /> Coming soon
          </span>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition">
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionTitle eyebrow="Projects" title="Featured work" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
