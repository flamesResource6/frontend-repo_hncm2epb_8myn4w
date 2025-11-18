import { useState } from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'

function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <Hero onRegisterClick={() => setShowWaitlist(true)} onDemoClick={() => setShowDemo(true)} />
      <Features />
      <CTA onRegisterClick={() => setShowWaitlist(true)} />

      {/* Simple modals */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowWaitlist(false)}>
          <div className="bg-slate-800 border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()} dir="rtl">
            <h3 className="text-xl font-semibold mb-3">הרשמה לרשימת המתנה</h3>
            <p className="text-blue-100/90 mb-4">השאירו פרטים ונחזור אליכם עם הזמנה מוקדמת.</p>
            <form className="space-y-3">
              <input className="w-full px-4 py-3 rounded-xl bg-slate-700/60 border border-white/10" placeholder="שם מלא" />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-700/60 border border-white/10" placeholder="אימייל" type="email" />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-700/60 border border-white/10" placeholder="טלפון (לא חובה)" />
              <button type="button" onClick={() => setShowWaitlist(false)} className="w-full px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 font-semibold">שליחה</button>
            </form>
          </div>
        </div>
      )}

      {showDemo && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowDemo(false)}>
          <div className="bg-slate-800 border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()} dir="rtl">
            <h3 className="text-xl font-semibold mb-3">התחברות לדמו</h3>
            <p className="text-blue-100/90 mb-4">נפתח לכם הדגמה עם נתוני דוגמא.</p>
            <button onClick={() => setShowDemo(false)} className="w-full px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 font-semibold">כניסה לדמו</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
