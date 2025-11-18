function Pricing() {
  const plans = [
    { name: 'בסיס', price: '₪49', features: ['עד 2 משתמשים', 'ניהול לקוחות', 'דוחות בסיסיים'] },
    { name: 'עסקי', price: '₪129', features: ['עד 10 משתמשים', 'מלאי וקטלוג', 'אוטומציות שיווק'] },
    { name: 'פרו', price: '₪249', features: ['ללא הגבלה', 'API מתקדם', 'תמיכה עדיפה'] },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white" dir="rtl">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-10 text-right">תמחור</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 text-right">
              <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
              <p className="text-4xl font-extrabold mb-4">{p.price}<span className="text-base font-medium">/חודש</span></p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="text-blue-100/90">• {f}</li>
                ))}
              </ul>
              <button className="w-full px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 font-semibold">בחירה</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Pricing
