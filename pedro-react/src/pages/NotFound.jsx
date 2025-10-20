import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page text-center py-20">
      <h1 className="text-3xl font-bold mb-2">Página não encontrada</h1>
      <p className="mb-6">A página que você procura não existe.</p>
      <Link className="text-blue-700 hover:text-blue-800" to="/">Voltar ao início</Link>
    </div>
  )
}


