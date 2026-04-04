import swimImg  from '../assets/openWater.jpg'
import bikeImg  from '../assets/bike.jpg'
import runImg   from '../assets/run.jpg'
import antonImg from '../assets/anton.jpg'
import theaImg  from '../assets/thea.jpg'

const LEGS = [
  {
    label: 'Swim',
    image: swimImg,
    description: 'The first leg. Races begin in open water or a pool. Athletes pace themselves to conserve energy for what follows.',
  },
  {
    label: 'Bike',
    image: bikeImg,
    description: 'The longest leg by time. Cyclists push hard on the road course before transitioning to the final discipline.',
  },
  {
    label: 'Run',
    image: runImg,
    description: 'The final leg. Athletes dig deep on fatigued legs to cross the finish line — the defining moment of every race.',
  },
]

const RACE_TYPES = [
  {
    num: '01',
    name: 'Sprint',
    distances: '750m swim · 20km bike · 5km run',
    description: 'The most beginner-friendly format. Fast, exciting, and the perfect entry point into the sport.',
  },
  {
    num: '02',
    name: 'Draft-Legal Sprint',
    distances: '750m swim · 20km bike · 5km run',
    description: 'Same distances as Sprint, but cyclists can draft — pack tactics and raw speed become decisive.',
  },
  {
    num: '03',
    name: 'Olympic',
    distances: '1500m swim · 40km bike · 10km run',
    description: 'The classic distance. Double the Sprint, this format rewards endurance and consistent pacing over every leg.',
  },
]

function LegCard({ leg }) {
  return (
    <div className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={leg.image}
          alt={leg.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute bottom-4 left-6">
          <h3 className="text-2xl font-black uppercase text-gray-900 tracking-tight">{leg.label}</h3>
        </div>
      </div>
      <div className="px-6 pb-8 pt-2">
        <p className="text-gray-500 text-sm leading-relaxed">{leg.description}</p>
      </div>
      <div className="h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  )
}

function RaceCard({ race }) {
  return (
    <div className="relative bg-white border border-gray-100 p-8 hover:border-red-200 hover:shadow-md transition-all duration-200">
      <span className="absolute top-4 right-6 text-5xl font-black text-gray-100 leading-none select-none">
        {race.num}
      </span>
      <h3 className="text-lg font-black uppercase text-gray-900 mb-2 tracking-tight">{race.name}</h3>
      <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-4">{race.distances}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{race.description}</p>
    </div>
  )
}

export default function WhatIsTriathlon() {
  return (
    <>
      <section id="what-is-triathlon" className="pt-32 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-bold uppercase tracking-[.2em]">The Sport</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 uppercase leading-tight tracking-tight mb-20">
            What is a <span className="text-red-600">Triathlon?</span>
          </h2>

          <p className="text-xs font-bold uppercase tracking-[.2em] text-gray-400 mb-8">The Three Legs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEGS.map((leg) => <LegCard key={leg.label} leg={leg} />)}
          </div>
        </div>
      </section>

      {/* Photo strip — Anton | quote | Thea */}
      <div className="flex h-72 md:h-96">

        {/* Left photo — Anton */}
        <div className="relative w-1/4 overflow-hidden hidden sm:block">
          <img src={antonImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black" />
        </div>

        {/* Center — black with quote */}
        <div className="relative flex-1 bg-black flex items-center justify-center px-6">
          <p className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight text-center whitespace-nowrap">
            Swim. <span className="text-red-500">Bike.</span> Run.
          </p>
        </div>

        {/* Right photo — Thea */}
        <div className="relative w-1/4 overflow-hidden hidden sm:block">
          <img src={theaImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-black" />
        </div>

      </div>

      <section className="pt-24 pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-gray-400 mb-8">Race Formats</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RACE_TYPES.map((race) => <RaceCard key={race.name} race={race} />)}
          </div>
        </div>
      </section>
    </>
  )
}
