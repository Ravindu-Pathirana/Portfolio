import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Sparkles, Code } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { profile } from '../data.js'

function Avatar() {
  if (profile.photo) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${profile.photo.replace(/^\//, '')}`}
        alt={profile.name}
        className="w-full h-full object-cover rounded-3xl"
      />
    )
  }
  const initials = profile.name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
      <span className="text-6xl font-extrabold gradient-text">{initials}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionTitle eyebrow="About" title="Who I am" />
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="relative aspect-square max-w-sm mx-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl" />
            <div className="relative glass rounded-3xl p-2 h-full">
              <Avatar />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3"
        >
          <p className="text-lg text-gray-300 leading-relaxed">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-gray-300">
              <MapPin size={16} className="text-blue-400" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-gray-300">
              <GraduationCap size={16} className="text-purple-400" /> University of Moratuwa
            </span>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-gray-300">
              <Sparkles size={16} className="text-blue-400" /> AI · ML · Data Science
            </span>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-gray-300">
              <Code size={16} className="text-blue-400" /> Software Engineering · Web Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
