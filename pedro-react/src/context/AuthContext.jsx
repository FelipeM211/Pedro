import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'
import { auth, googleProvider, getAdminEmails } from '../services/firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      setUser(null)
      setLoading(false)
      return
    }
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const adminEmails = useMemo(() => {
    const list = getAdminEmails()
    return new Set((list && list.length ? list : ['felipebmurad@gmail.com']).map((e) => e.toLowerCase()))
  }, [])
  const isAdmin = !!(user?.email && adminEmails.has(user.email.toLowerCase()))

  async function loginWithEmail(email, password) {
    if (!auth) throw new Error('Auth não configurado')
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function loginWithGoogle() {
    if (!auth) throw new Error('Auth não configurado')
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      // Fallback para redirect caso popup seja bloqueado
      await signInWithRedirect(auth, googleProvider)
    }
  }

  async function logout() {
    if (!auth) {
      setUser(null)
      return
    }
    await signOut(auth)
  }

  const value = useMemo(
    () => ({ user, loading, isAdmin, loginWithEmail, loginWithGoogle, logout }),
    [user, loading, isAdmin]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider')
  return ctx
}


