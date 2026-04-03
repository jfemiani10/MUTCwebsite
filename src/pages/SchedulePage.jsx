import PracticeSchedule from '../components/PracticeSchedule'
import Events from '../components/Events'

export default function SchedulePage() {
  return (
    <main className="pt-20">
      <div className="bg-black text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">Miami Triathlon</span>
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tight text-white">Schedule</h1>
        </div>
      </div>
      <PracticeSchedule />
      <Events />
    </main>
  )
}
