function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white" dir="rtl">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6 text-right">צור קשר</h1>
        <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
          <form className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-xl bg-slate-700/60 border border-white/10" placeholder="שם מלא" />
              <input className="px-4 py-3 rounded-xl bg-slate-700/60 border border-white/10" placeholder="אימייל" type="email" />
            </div>
            <input className="px-4 py-3 rounded-xl bg-slate-700/60 border border-white/10" placeholder="נושא" />
            <textarea className="px-4 py-3 rounded-xl bg-slate-700/60 border border-white/10 min-h-[120px]" placeholder="הודעה"></textarea>
            <button type="button" className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 font-semibold w-fit ml-auto">שליחה</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
