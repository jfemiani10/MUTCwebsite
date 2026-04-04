import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import WhatIsTriathlon from './components/WhatIsTriathlon'
import InstagramSection from './components/InstagramSection'
import SchedulePage from './pages/SchedulePage'
import AboutPage from './pages/AboutPage'

// Homepage — assembled from section components
function HomePage() {
  return (
    <main>
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
        <Navbar />
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
