// WhatIsTriathlon — explains the sport for newcomers
// Two subsections: The Three Legs and Race Types

const LEGS = [
  {
    label: 'Swim',
    image: '/swim.jpg',
    // object-top shows the top of the image
    imageClass: 'object-cover object-top',
    description:
      'The first leg. Races begin in open water or a pool. Athletes pace themselves to conserve energy for what follows.',
  },
  {
    label: 'Bike',
    image: '/bike.jpg',
    // scale-125 zooms in; parent overflow-hidden keeps it clipped
    imageClass: 'object-cover object-center scale-125',
    description:
      'The longest leg by time. Cyclists push hard on the road course before transitioning to the final discipline.',
  },
  {
    label: 'Run',
    image: '/run.jpg',
    // object-top shows the top of the image
    imageClass: 'object-cover object-top',
    description:
      'The final leg. Athletes dig deep on fatigued legs to cross the finish line — the defining moment of every race.',
  },
]

const RACE_TYPES = [
  {
    name: 'Sprint',
    distances: '750m Swim · 20km Bike · 5km Run',
    description:
      'The most beginner-friendly format. Fast, exciting, and a great entry point into the sport.',
  },
  {
    name: 'Draft-Legal Sprint',
    distances: '750m Swim · 20km Bike · 5km Run',
    description:
      'Same distances as a Sprint, but cyclists are allowed to draft — making pack tactics and speed critical.',
  },
  {
    name: 'Olympic',
    distances: '1500m Swim · 40km Bike · 10km Run',
    description:
      'The classic distance. Double the Sprint, this format rewards endurance and consistent pacing.',
  },
]

// A single discipline card (used in "The Three Legs")
function LegCard({ leg }) {
  return (
    <div className="bg-white border border-gray-100 flex flex-col hover:shadow-md hover:border-red-200 transition-all duration-200 overflow-hidden">
      {/* Image with fade-out at the bottom */}
      <div className="relative h-52">
        <img
          src={leg.image}
          alt={leg.label}
          className={`w-full h-full ${leg.imageClass}`}
        />
        {/* Gradient fades the photo into the white card body */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Card text content */}
      <div className="px-8 pb-8 flex flex-col gap-3">
        <h3 className="text-xl font-black uppercase text-black">{leg.label}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{leg.description}</p>
      </div>
    </div>
  )
}

// A single race type card (used in "Race Types")
function RaceCard({ race }) {
  return (
    <div className="bg-gray-50 border-t-4 border-red-700 p-8 flex flex-col gap-3">
      <h3 className="text-xl font-black uppercase text-black">{race.name}</h3>
      <p className="text-red-700 text-xs font-bold uppercase tracking-wider">{race.distances}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{race.description}</p>
    </div>
  )
}

export default function WhatIsTriathlon() {
  return (
    <section id="what-is-triathlon" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-1 bg-red-700" />
          <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
            The Sport
          </span>
        </div>
        <h2 className="text-4xl font-black text-black uppercase leading-tight mb-16">
          What is a <span className="text-red-700">Triathlon?</span>
        </h2>

        {/* --- Section A: The Three Legs --- */}
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          The Three Legs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {LEGS.map((leg) => (
            <LegCard key={leg.label} leg={leg} />
          ))}
        </div>

        {/* --- Section B: Race Types --- */}
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          Race Types
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RACE_TYPES.map((race) => (
            <RaceCard key={race.name} race={race} />
          ))}
        </div>
      </div>
    </section>
  )
}
