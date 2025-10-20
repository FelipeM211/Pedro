import { Helmet } from 'react-helmet-async'
import { useEffect, useMemo, useState } from 'react'
import PostCard from '../components/PostCard'
import { usePosts } from '../hooks/usePosts'

export default function Blog() {
  const { items, load, loading, hasMore } = usePosts(6)
  const [search, setSearch] = useState('')

  const pageSize = 6

  const filtered = useMemo(() => {
    if (!search) return items
    const s = search.toLowerCase()
    return items.filter((p) => p.title.toLowerCase().includes(s))
  }, [items, search])

  useEffect(() => {
    load(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Artigos e notícias para médicos que buscam excelência" />
      </Helmet>

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white text-center py-16 rounded-xl">
        <div className="container-page">
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="opacity-90">Artigos e notícias para médicos que buscam excelência</p>
        </div>
      </section>

      <div className="container-page mt-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <input
            aria-label="Buscar posts"
            placeholder="Buscar por título..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded border border-slate-300 px-3 py-2 bg-white dark:bg-slate-800"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="py-10 text-center">Nenhum post encontrado.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PostCard key={p.id} id={p.id} title={p.title} author={p.author} date={p.date} imageUrl={p.imageUrl} excerpt={p.excerpt} />
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => load(false)}
            disabled={loading || !hasMore}
            className="mt-8 px-5 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {hasMore ? (loading ? 'Carregando...' : 'Carregar mais') : 'Fim' }
          </button>
        </div>
      </div>
    </div>
  )
}


