import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Why from './components/Why'
import How from './components/How'
import Capabilities from './components/Capabilities'
import Interfaces from './components/Interfaces'
import Scenarios from './components/Scenarios'
import Boundary from './components/Boundary'
import Quickstart from './components/Quickstart'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Why />
        <How />
        <Capabilities />
        <Interfaces />
        <Scenarios />
        <Boundary />
        <Quickstart />
      </main>
      <Footer />
    </div>
  )
}
