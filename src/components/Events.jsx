// Events — upcoming race schedule
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

// Badge color varies by race status
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
    <section id="schedule" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-1 bg-red-700" />
          <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
            Race Schedule
          </span>
        </div>

        <h2 className="text-4xl font-black text-black uppercase leading-tight mb-12">
          Upcoming <span className="text-red-700">Events</span>
        </h2>

        {/* Event list */}
        <div className="flex flex-col gap-4">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-100 hover:border-red-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0"
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
                <h3 className="text-lg font-bold text-black">{event.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{event.location}</p>
                <p className="text-gray-400 text-xs mt-0.5">{event.detail}</p>
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
