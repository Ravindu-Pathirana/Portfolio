import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
    </motion.div>
  )
}
