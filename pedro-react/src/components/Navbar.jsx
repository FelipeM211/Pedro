import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun, Menu, X, LogIn, LogOut, Shield } from 'lucide-react'
import LoginModal from './LoginModal'

export default function Navbar() {
  const { user, isAdmin, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Blog', path: '/blog' },
  ]

  const contactLink = "https://api.whatsapp.com/send/?phone=5511996536110&text=Ol%C3%A1+Pedro%2C%0A%0AEstou+interessado%28a%29+na+consultoria+estrat%C3%A9gica+m%C3%A9dica.%0A%0ANome+completo%3A%0AEspecialidade+m%C3%A9dica%3A%0APrincipal+objetivo+profissional%3A%0A%0AAgrade%C3%A7o+o+retorno%21&type=phone_number&app_absent=0"

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-primary/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container-page h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl font-bold text-primary dark:text-white tracking-tight">
            Consultoria <span className="text-secondary">Médica</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'text-secondary dark:text-secondary'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href={contactLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors duration-200"
            >
              Contato
            </a>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Auth Actions */}
            {user ? (
              <div className="flex items-center gap-3">
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary dark:text-white bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Shield size={16} />
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-xl transition-colors shadow-lg shadow-primary/20"
                >
                  <LogOut size={16} />
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary-dark rounded-xl transition-colors shadow-lg shadow-secondary/25"
              >
                <LogIn size={16} />
                Login
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-primary border-b border-slate-200 dark:border-slate-800 shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 ${isActive
                      ? 'text-secondary'
                      : 'text-slate-600 dark:text-slate-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href={contactLink}
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-slate-600 dark:text-slate-300 py-2"
              >
                Contato
              </a>

              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />

              <div className="flex items-center justify-between py-2">
                <span className="text-slate-600 dark:text-slate-300 font-medium">Tema</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {user ? (
                <div className="flex flex-col gap-3 pt-2">
                  {isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-primary dark:text-white font-medium"
                    >
                      <Shield size={18} />
                      Painel Admin
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-medium"
                  >
                    <LogOut size={18} />
                    Sair
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary text-white font-medium"
                >
                  <LogIn size={18} />
                  Área do Cliente
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
    </>
  )
}


