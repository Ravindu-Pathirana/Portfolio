import { Github, Linkedin, Mail } from 'lucide-react'
import { profile, socials } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {year} {profile.name}.
        </p>
        <div className="flex items-center gap-5 text-gray-500">
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${socials.email}`} className="hover:text-white transition" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
