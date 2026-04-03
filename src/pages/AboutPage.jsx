// About page — club details (eligibility, dues, purpose, joining)
// Sections are placeholders ready to be filled with real content

// Reusable placeholder section card
function PlaceholderSection({ title, description }) {
  return (
    <div className="border-l-4 border-red-700 pl-6 py-2">
      <h2 className="text-2xl font-black text-black uppercase mb-3">{title}</h2>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

export default function AboutPage() {
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
          <h1 className="text-5xl font-black uppercase text-white">About the Club</h1>
        </div>
      </div>

      {/* Placeholder content sections */}
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-14">

        <PlaceholderSection
          title="Club Purpose"
          description="The Miami University Triathlon Club exists to promote fitness, competition, and community among students passionate about endurance sport. Content coming soon."
        />

        <PlaceholderSection
          title="Eligibility"
          description="All currently enrolled Miami University students are eligible to join, regardless of experience level. Full eligibility details coming soon."
        />

        <PlaceholderSection
          title="Dues"
          description="Annual membership dues help cover race entry fees, equipment, and club events. Dues information and payment details coming soon."
        />

        <PlaceholderSection
          title="How to Join"
          description="Interested in joining? Attend one of our practices or reach out via Instagram or email. Onboarding details coming soon."
        />

      </div>
    </main>
  )
}
