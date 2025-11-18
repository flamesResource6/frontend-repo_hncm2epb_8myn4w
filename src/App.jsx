import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-white/10 py-8 text-center text-blue-200/70" dir="rtl">
        <p>© {new Date().getFullYear()} תכשיט CRM — כל הזכויות שמורות</p>
      </footer>
    </div>
  )
}

export default App
