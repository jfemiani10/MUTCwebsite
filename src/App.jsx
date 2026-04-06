import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import WhatIsTriathlon from './components/WhatIsTriathlon'
import InstagramSection from './components/InstagramSection'
import SchedulePage from './pages/SchedulePage'
import AboutPage from './pages/AboutPage'
import ExecTeamPage from './pages/ExecTeamPage'

// Homepage — assembled from section components
function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <div className="h-3 bg-black" />
      <AboutPreview />
      <WhatIsTriathlon />
      <InstagramSection />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        {/* Skip to main content — visually hidden until focused (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-red-700 focus:font-bold focus:px-4 focus:py-2 focus:outline focus:outline-2 focus:outline-red-700 focus:rounded"
        >
          Skip to main content
        </a>
        <Navbar />
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/exec"     element={<ExecTeamPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
