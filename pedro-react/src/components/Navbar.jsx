import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Moon, Sun } from 'lucide-react'
import LoginModal from './LoginModal'

export default function Navbar() {
  const { user, isAdmin, logout } = useAuth()
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="container-page h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold text-blue-800 dark:text-blue-300">
          Consultoria Médica
        </Link>

        <button
          className="sm:hidden p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <div id="nav-menu" className={`$${''} hidden sm:flex items-center gap-6 ${open ? 'absolute top-16 right-4 sm:static sm:top-auto sm:right-auto sm:flex' : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-700 font-medium' : 'text-slate-700 dark:text-slate-200')}>Início</NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-blue-700 font-medium' : 'text-slate-700 dark:text-slate-200')}>Blog</NavLink>
          <a
            href="https://api.whatsapp.com/send/?phone=5511996536110&text=Ol%C3%A1+Pedro%2C%0A%0AEstou+interessado%28a%29+na+consultoria+estrat%C3%A9gica+m%C3%A9dica.%0A%0ANome+completo%3A%0AEspecialidade+m%C3%A9dica%3A%0APrincipal+objetivo+profissional%3A%0A%0AAgrade%C3%A7o+o+retorno%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 dark:text-slate-200"
          >
            Contato
          </a>

          {/* Admin link no menu removido para dar lugar ao botão ao lado de Sair */}

          <button
            aria-label="Alternar tema"
            className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              {isAdmin && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `px-3 py-1 rounded border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 ${isActive ? 'bg-slate-100 dark:bg-slate-800' : ''}`
                  }
                >
                  Admin
                </NavLink>
              )}
              <button
                onClick={logout}
                className="px-3 py-1 rounded bg-blue-700 text-white hover:bg-blue-800"
              >
                Sair
              </button>
            </div>
          ) : (
            <LoginModalTrigger />
          )}
        </div>
      </nav>
    </header>
  )
}

function LoginModalTrigger() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="px-3 py-1 rounded border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
        Login
      </button>
      {open && <LoginModal onClose={() => setOpen(false)} />}
    </>
  )
}


