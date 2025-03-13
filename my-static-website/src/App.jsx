import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
