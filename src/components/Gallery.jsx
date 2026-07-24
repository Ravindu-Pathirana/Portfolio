import SectionTitle from './SectionTitle.jsx'
import { gallery } from '../data.js'

export default function Gallery() {
  // Hide the whole section until you add photos in src/data.js
  if (!gallery || gallery.length === 0) return null

  const items = [...gallery, ...gallery] // duplicated for a seamless loop

  return (
    <section id="gallery" className="section-pad">
      <SectionTitle eyebrow="Gallery" title="Moments & milestones" />

      <div className="relative -mx-6 sm:-mx-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-ink to-transparent z-10" />

        <div className="flex gap-6 px-6 sm:px-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <figure
              key={i}
              className="shrink-0 w-64 sm:w-72 glass rounded-2xl overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.src.replace(/^\//, '')}`}
                alt={item.caption || ''}
                loading="lazy"
                className="w-full h-44 sm:h-48 object-cover"
              />
              {item.caption && (
                <figcaption className="px-4 py-3 text-sm text-gray-400">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
