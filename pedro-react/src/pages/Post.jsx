import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import DOMPurify from 'dompurify'
import { getPost } from '../services/postsRepository'

export default function Post() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      setLoading(true)
      const data = await getPost(id)
      setPost(data)
      setLoading(false)
    }
    fetchPost()
  }, [id])

  if (loading) return <div className="text-center py-10">Carregando...</div>
  if (!post) return <div className="text-center py-10">Post não encontrado.</div>

  const date = new Date(post.date).toLocaleDateString('pt-BR')

  const safeHtml = useMemo(() => ({ __html: DOMPurify.sanitize(post.content) }), [post.content])

  return (
    <article className="container-page max-w-3xl">
      <Helmet>
        <title>{post.title} - Blog</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Helmet>
      <Link to="/blog" className="inline-block mb-4 text-blue-700 hover:text-blue-800">&larr; Voltar para o blog</Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-slate-500 mb-6">Por {post.author} • {date}</p>
      {post.imageUrl && <img src={post.imageUrl} alt="Capa do post" className="rounded mb-6" />}
      <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={safeHtml} />
    </article>
  )
}


