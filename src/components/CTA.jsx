function CTA({ onRegisterClick }) {
  return (
    <section className="py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-white text-right shadow-lg">
          <h3 className="text-2xl font-bold mb-2">הצטרפו לרשימת ההמתנה</h3>
          <p className="mb-6 opacity-90">קבלו גישה מוקדמת, הטבות ייחודיות ועדכונים חשובים.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <input
              type="email"
              placeholder="האימייל שלכם"
              className="px-4 py-3 rounded-xl text-slate-900 w-full sm:w-80"
            />
            <button
              onClick={onRegisterClick}
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800"
            >
              אני בפנים
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
