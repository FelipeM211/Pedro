import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, isAdmin, loading } = useAuth()
  const location = useLocation()

  if (loading) return <div className="text-center py-10">Carregando...</div>
  if (!user || !isAdmin) return <Navigate to="/" state={{ from: location }} replace />
  return children
}


