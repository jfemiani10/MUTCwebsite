import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default App
