import { Link } from 'react-router-dom'

export default function PostCard({ id, title, author, date, imageUrl, excerpt }) {
  const formatted = new Date(date).toLocaleDateString('pt-BR')
  return (
    <article className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      {imageUrl ? (
        <img src={imageUrl} alt="Capa do post" className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-2 bg-blue-700" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 mb-3">Por {author} • {formatted}</p>
        <p className="text-slate-700 dark:text-slate-300 line-clamp-3">{excerpt}</p>
        <div className="mt-4">
          <Link to={`/post/${id}`} className="text-blue-700 hover:text-blue-800">Ler mais</Link>
        </div>
      </div>
    </article>
  )
}


