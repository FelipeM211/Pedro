import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function LoginModal({ onClose }) {
  const { loginWithGoogle, loginWithEmail } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleEmailLogin(e) {
    e.preventDefault()
    try {
      await loginWithEmail(email, password)
      onClose()
    } catch (err) {
      setError('Credenciais inválidas')
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle()
      onClose()
    } catch (err) {
      setError('Não foi possível entrar com Google')
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-label="Login">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl dark:bg-slate-900">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Login</h2>
          <button onClick={onClose} aria-label="Fechar" className="text-slate-500 hover:text-slate-700">×</button>
        </div>
        {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
        <form onSubmit={handleEmailLogin} className="space-y-3">
          <label className="block">
            <span className="block text-sm mb-1">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 bg-white dark:bg-slate-800"
            />
          </label>
          <label className="block">
            <span className="block text-sm mb-1">Senha</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 bg-white dark:bg-slate-800"
            />
          </label>
          <button className="w-full rounded bg-blue-700 text-white py-2 hover:bg-blue-800">Entrar</button>
        </form>
        <div className="mt-4">
          <button onClick={handleGoogle} className="w-full rounded border border-slate-300 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            Entrar com Google
          </button>
        </div>
      </div>
    </div>
  )
}


