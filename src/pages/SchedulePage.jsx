import PracticeSchedule from '../components/PracticeSchedule'
import Events from '../components/Events'
import tentImg from '../assets/tent.jpg'

export default function SchedulePage() {
  return (
    <main className="pt-20">

      {/* Header with photo background */}
      <div className="relative bg-black text-white py-28 px-8 overflow-hidden">
        <img
          src={tentImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">Miami Triathlon</span>
          </div>
          <h1 className="text-7xl font-black uppercase tracking-tight text-white leading-none">
            Schedule
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-md leading-relaxed">
            Weekly practices and upcoming races for the 2025 season.
          </p>
        </div>
      </div>

      <PracticeSchedule />
      <Events />
    </main>
  )
}
