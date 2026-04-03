// PracticeSchedule — weekly training sessions table
const SCHEDULE = [
  {
    day: 'Monday',
    time: '5:30pm – 7:30pm',
    activity: 'Swim',
    location: 'Miami University Recreational Sports Center',
  },
  {
    day: 'Tuesday',
    time: '4:30pm',
    activity: 'Run',
    location: 'Richard and Carole Cocks Art Museum (Parking lot)',
  },
  {
    day: 'Wednesday',
    time: '4:30pm',
    activity: 'Cycling',
    location: 'Miami University – Student Health Services (South side)',
  },
  {
    day: 'Thursday',
    time: '5:30pm – 7:30pm',
    activity: 'Swim',
    location: 'Miami University Recreational Sports Center',
  },
  {
    day: 'Friday',
    time: '4:30pm',
    activity: 'Run',
    location: 'Richard and Carole Cocks Art Museum (Parking lot)',
  },
]

// Color-coded pill for each sport
function ActivityBadge({ activity }) {
  const colors = {
    Swim: 'bg-blue-100 text-blue-800',
    Run: 'bg-green-100 text-green-800',
    Cycling: 'bg-yellow-100 text-yellow-800',
  }
  return (
    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${colors[activity] ?? 'bg-gray-100 text-gray-700'}`}>
      {activity}
    </span>
  )
}

export default function PracticeSchedule() {
  return (
    <section id="practices" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-1 bg-red-700" />
          <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
            Training
          </span>
        </div>
        <h2 className="text-4xl font-black text-black uppercase leading-tight mb-12">
          Practice <span className="text-red-700">Schedule</span>
        </h2>

        {/* Horizontal scroll wrapper for small screens */}
        <div className="overflow-x-auto rounded-sm border border-gray-100 shadow-sm">
          <table className="w-full text-sm text-left min-w-[600px]">
            <thead>
              <tr className="bg-black text-white uppercase text-xs tracking-widest">
                <th className="px-6 py-4 font-semibold">Day</th>
                <th className="px-6 py-4 font-semibold">Time</th>
                <th className="px-6 py-4 font-semibold">Activity</th>
                <th className="px-6 py-4 font-semibold">Location</th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row, index) => (
                <tr
                  key={row.day}
                  // Alternate row shading for readability
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-4 font-bold text-black border-b border-gray-100">
                    {row.day}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-100 whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    <ActivityBadge activity={row.activity} />
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-100">
                    {row.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small note below the table */}
        <p className="text-gray-400 text-xs mt-4 italic">
          * Schedule is subject to change. Follow our Instagram for updates.
        </p>
      </div>
    </section>
  )
}
