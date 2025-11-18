function Features() {
  const items = [
    {
      title: 'ניהול לקוחות חכם',
      desc: 'מעקב אחר רכישות, תיקונים והעדפות – הכל במסך אחד ברור.',
    },
    {
      title: 'קטלוג ותמחור מהיר',
      desc: 'טיפול במלאי, תמחור לפי מתכת ואבן, והצעות מחיר בלחיצת כפתור.',
    },
    {
      title: 'אוטומציות שיווק',
      desc: 'תזכורות ללקוחות לפני תאריכים חשובים וקמפיינים בקלות.',
    },
  ]

  return (
    <section className="py-16 lg:py-24" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-right">מה תקבלו</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 text-right hover:bg-slate-800/60 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{it.title}</h3>
              <p className="text-blue-100/90">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
