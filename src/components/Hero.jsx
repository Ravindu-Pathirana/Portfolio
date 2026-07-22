import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react'
import { profile, socials } from '../data.js'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 glow pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] [background-size:32px_32px] pointer-events-none" />

      <div className="section-pad relative w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest uppercase text-blue-400 mb-4"
        >
          {profile.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed"
        >
          {profile.title} building intelligent applications across{' '}
          <span className="text-gray-200">Machine Learning</span>,{' '}
          <span className="text-gray-200">Deep Learning</span> and{' '}
          <span className="text-gray-200">Full-Stack Software</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass text-gray-200 hover:bg-white/10 transition"
          >
            Contact me
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass text-gray-200 hover:bg-white/10 transition"
            >
              <FileDown size={18} /> Resume
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex items-center gap-5 text-gray-400"
        >
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${socials.email}`} className="hover:text-white transition" aria-label="Email">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
