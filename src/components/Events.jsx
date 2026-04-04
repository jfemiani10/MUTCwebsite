import maxImg   from '../assets/max.jpg'
import beccaImg from '../assets/becca.jpg'

const EVENTS = [
  {
    id: 1,
    date: { month: 'MAR', day: '27' },
    name: 'USAT Collegiate Club National Championships',
    location: 'Gulfport, MS',
    detail: 'Olympic · Draft-Legal Sprint · Mixed Relay',
    status: 'Upcoming',
  },
  {
    id: 2,
    date: { month: 'SEP', day: '13' },
    name: 'Zoom RedHawk Triathlon & Multisport Festival',
    location: 'Hueston Woods State Park, College Corner, OH',
    detail: 'Sprint · Olympic · Multiple formats',
    status: 'Upcoming',
  },
  {
    id: 3,
    date: { month: 'SEP', day: '28' },
    name: 'Boilerman Triathlon',
    location: 'Lake Freeman, Monticello, IN',
    detail: 'Olympic · MECTC Championship',
    status: 'Upcoming',
  },
]

function StatusBadge({ status }) {
  const styles =
    status === 'Registration Open'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800'
  return (
    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 ${styles}`}>
      {status}
    </span>
  )
}

export default function Events() {
  return (
    <section id="schedule" className="relative py-24 overflow-hidden bg-gray-950">

      {/* Background photo collage — two photos, left and right */}
      <img
        src={maxImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2 h-full object-cover opacity-20"
      />
      <img
        src={beccaImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 h-full object-cover object-top opacity-20"
      />
      {/* Fade both halves into center */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-transparent to-gray-950/60" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-1 bg-red-700" />
          <span className="text-red-500 text-sm font-bold uppercase tracking-widest">
            Race Schedule
          </span>
        </div>

        <h2 className="text-4xl font-black text-white uppercase leading-tight mb-12">
          Upcoming <span className="text-red-600">Events</span>
        </h2>

        <div className="flex flex-col gap-4">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white/5 border border-white/10 hover:border-red-700 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0"
            >
              {/* Date block */}
              <div className="bg-red-700 text-white text-center px-6 py-5 sm:py-6 min-w-[80px] flex-shrink-0">
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                  {event.date.month}
                </div>
                <div className="text-3xl font-black leading-none">{event.date.day}</div>
              </div>

              {/* Event details */}
              <div className="flex-1 px-6 py-4">
                <h3 className="text-lg font-bold text-white">{event.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{event.location}</p>
                <p className="text-gray-500 text-xs mt-0.5">{event.detail}</p>
              </div>

              {/* Status badge */}
              <div className="px-6 py-4 flex-shrink-0">
                <StatusBadge status={event.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
