import PracticeSchedule from '../components/PracticeSchedule'
import Events from '../components/Events'
import scheduleImg from '../assets/schedule1.png'

export default function SchedulePage() {
  return (
    <main id="main-content" className="pt-16">

      {/* Hero banner */}
      <div className="bg-black text-white relative overflow-hidden min-h-[320px] flex items-center">

        {/* Right-half photo */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <img src={scheduleImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        {/* Text content */}
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
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
