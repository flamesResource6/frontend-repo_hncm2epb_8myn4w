function Hero({ onRegisterClick, onDemoClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.15),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" dir="rtl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              CRM חכם ונקי לעולם התכשיטים
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              נהל לקוחות, הזמנות ושיווק במקום אחד פשוט ומהיר. מותאם במיוחד לצורפים וחנויות תכשיטים.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onRegisterClick}
                className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
              >
                הצטרפות לרשימת המתנה
              </button>
              <button
                onClick={onDemoClick}
                className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold shadow border border-white/20 hover:bg-white/20 transition"
              >
                התחברות לדמו
              </button>
            </div>
            <p className="text-blue-200/80 text-sm mt-4">אין צורך בכרטיס אשראי • ביטול בכל עת</p>
          </div>
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
              <video className="w-full h-full object-cover" controls poster="/video-poster.jpg">
                <source src="/demo.mp4" type="video/mp4" />
                הדפדפן שלך אינו תומך בווידאו.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
