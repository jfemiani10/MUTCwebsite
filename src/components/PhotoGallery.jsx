import antonImg  from '../assets/anton.jpg'
import joeyImg   from '../assets/joeyFinish.jpg'
import maxImg    from '../assets/max.jpg'
import tentImg   from '../assets/tent.jpg'
import theaImg   from '../assets/thea.jpg'
import allieImg  from '../assets/allie.jpg'
import beccaImg  from '../assets/becca.jpg'

// 7 unique photos — no repeats.
// Each has a tilt, a vertical nudge (translateY), and a size.
// The last two photos have a large positive translateY so they
// physically hang down into the Instagram section below.
const PHOTOS = [
  {
    src: tentImg,
    alt: 'Team tent at the race',
    cls: 'w-72 h-80',
    tilt: '-rotate-3',
    nudge: 'translate-y-6',
  },
  {
    src: allieImg,
    alt: 'Allie',
    cls: 'w-64 h-96',
    tilt: 'rotate-2',
    nudge: '-translate-y-4',
  },
  {
    src: maxImg,
    alt: 'Max',
    cls: 'w-80 h-72',
    tilt: '-rotate-1',
    nudge: 'translate-y-12',
  },
  {
    src: antonImg,
    alt: 'Open water swim',
    cls: 'w-72 h-88',
    tilt: 'rotate-4',
    nudge: '-translate-y-8',
  },
  {
    src: beccaImg,
    alt: 'Becca',
    cls: 'w-64 h-80',
    tilt: '-rotate-2',
    nudge: 'translate-y-4',
  },
  // These two "leak" — large downward nudge pushes them into the next section
  {
    src: joeyImg,
    alt: 'Joey crossing the finish',
    cls: 'w-72 h-96',
    tilt: 'rotate-3',
    nudge: 'translate-y-32',
  },
  {
    src: theaImg,
    alt: 'Thea',
    cls: 'w-64 h-80',
    tilt: '-rotate-4',
    nudge: 'translate-y-44',
  },
]

export default function PhotoGallery() {
  return (
    // overflow-visible lets the leaking photos spill into the section below.
    // -mb-56 pulls the Instagram section up so it overlaps the leaking images.
    <section className="relative overflow-visible bg-white pb-12 -mb-56 z-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap justify-center items-start gap-5">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`
                relative flex-shrink-0 ${photo.cls} ${photo.tilt} ${photo.nudge}
                shadow-2xl overflow-hidden
                transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-20
              `}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
