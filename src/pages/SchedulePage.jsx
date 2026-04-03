import PracticeSchedule from '../components/PracticeSchedule'
import Events from '../components/Events'

// Full schedule page — practice times and race events
export default function SchedulePage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-1 bg-red-700" />
            <span className="text-red-500 text-sm font-bold uppercase tracking-widest">
              Miami Triathlon
            </span>
          </div>
          <h1 className="text-5xl font-black uppercase text-white">Schedule</h1>
        </div>
      </div>

      {/* Content: practice table then race events */}
      <PracticeSchedule />
      <Events />
    </main>
  )
}
