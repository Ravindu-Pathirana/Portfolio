import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { socials } from '../data.js'

const cards = [
  { label: 'Phone', value: socials.phone, href: `tel:${socials.phone}`, Icon: Phone },
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'Connect with me', href: socials.linkedin, Icon: Linkedin },
  { label: 'GitHub', value: 'See my code', href: socials.github, Icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative glass rounded-3xl p-10 sm:p-14 overflow-hidden text-center"
      >
        <div className="absolute inset-0 glow pointer-events-none" />
        <div className="relative">
          <SectionTitle eyebrow="Contact" title="" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white -mt-8">
            Let's build something <span className="gradient-text">intelligent</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-400">
            I'm open to internships and collaborations in AI, Machine Learning, Data Science and
            Full-Stack Software Engineering. Feel free to reach out.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
            {cards.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group glass rounded-2xl p-5 hover:bg-white/10 transition flex items-center justify-between"
              >
                <span>
                  <span className="flex items-center gap-2 text-gray-400 text-sm">
                    <Icon size={16} /> {label}
                  </span>
                  <span className="block mt-1 text-white font-medium truncate">{value}</span>
                </span>
                <ArrowUpRight size={18} className="text-gray-500 group-hover:text-white transition" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
