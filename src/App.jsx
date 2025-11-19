import Hero from './components/Hero'
import BadgesGallery from './components/BadgesGallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <a id="hero" />
      <Hero />
      <BadgesGallery />
      <Footer />
    </div>
  )
}

export default App
