import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-white/10' : 'text-blue-100 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" dir="rtl">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="לוגו" className="w-8 h-8" />
            <Link to="/" className="text-white font-semibold">
              תכשיט CRM
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass} end>
              בית
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              אודות
            </NavLink>
            <NavLink to="/pricing" className={navLinkClass}>
              תמחור
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              צור קשר
            </NavLink>
          </nav>
          <div className="md:hidden">
            {/* Simple mobile menu: just a contact button for now */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600"
            >
              יצירת קשר
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
