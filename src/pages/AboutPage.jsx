import { Link } from 'react-router-dom'

function Section({ title, description }) {
  return (
    <div className="py-10 border-b border-gray-100 last:border-0">
      <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-3">{title}</h2>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <div className="bg-black text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">Miami Triathlon</span>
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tight text-white">About the Club</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-20">
        <Section title="Club Purpose"
          description="The Miami University Triathlon Club exists to promote fitness, competition, and community among students passionate about endurance sport. Content coming soon." />
        <Section title="Eligibility"
          description="All currently enrolled Miami University students are eligible to join, regardless of experience level. Full eligibility details coming soon." />
        <Section title="Dues"
          description="Annual membership dues help cover race entry fees, equipment, and club events. Dues information and payment details coming soon." />
        <Section title="How to Join"
          description="Interested in joining? Attend one of our practices or reach out via Instagram or email. Onboarding details coming soon." />
      </div>
    </main>
  )
}
