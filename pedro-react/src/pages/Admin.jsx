import { useEffect, useMemo, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import toast from 'react-hot-toast'
import PostEditor from '../components/PostEditor'
import { storage } from '../services/firebase'
import { createPost, listPosts, removePost, updatePost } from '../services/postsRepository'
import { useAuth } from '../context/AuthContext'

export default function Admin() {
  const [posts, setPosts] = useState([])
  const [editing, setEditing] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [search, setSearch] = useState('')
  const { user } = useAuth()

  async function load() {
    const { items } = await listPosts({ pageSize: 50 })
    items.sort((a, b) => new Date(b.date) - new Date(a.date))
    setPosts(items)
  }

  useEffect(() => {
    load()
  }, [])

  async function handleSubmit({ title, content, imageFile }) {
    setSubmitting(true)
    try {
      if (!user) throw new Error('Usuário não autenticado')
      let imageUrl = editing?.imageUrl || ''
      if (imageFile) {
        if (!storage) throw new Error('Storage não configurado')
        const storageRef = ref(storage, `covers/${Date.now()}_${imageFile.name}`)
        await uploadBytes(storageRef, imageFile)
        imageUrl = await getDownloadURL(storageRef)
      }

      if (editing) {
        await updatePost(editing.id, { title, content, imageUrl })
        toast.success('Post atualizado com sucesso')
      } else {
        await createPost({
          title,
          content,
          imageUrl,
          author: user?.displayName || user?.email || 'Admin',
        })
        toast.success('Post publicado com sucesso')
      }
      setEditing(null)
      await load()
    } catch (e) {
      toast.error('Erro ao salvar post')
    } finally {
      setSubmitting(false)
    }
  }

  async function onDelete(id) {
    if (!confirm('Tem certeza que deseja excluir este post?')) return
    await removePost(id)
    toast.success('Post excluído')
    await load()
  }

  const filtered = useMemo(() => {
    const s = search.toLowerCase()
    if (!s) return posts
    return posts.filter((p) => p.title.toLowerCase().includes(s))
  }, [posts, search])

  return (
    <div className="container-page">
      <h1 className="text-2xl font-bold mb-4">Painel de Administração</h1>

      <div className="mb-8 p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
        <h2 className="font-semibold mb-4">{editing ? 'Editar Post' : 'Novo Post'}</h2>
        <PostEditor initial={editing || undefined} onSubmit={handleSubmit} onCancel={() => setEditing(null)} submitting={submitting} />
      </div>

      <div>
        <h2 className="font-semibold mb-3">Posts Existentes</h2>
        <div className="mb-3">
          <input
            aria-label="Buscar"
            placeholder="Buscar por título..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-sm rounded border border-slate-300 px-3 py-2 bg-white dark:bg-slate-800"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-2">Título</th>
                <th className="p-2">Data</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="p-2">{p.title}</td>
                  <td className="p-2">{new Date(p.date).toLocaleDateString('pt-BR')}</td>
                  <td className="p-2 space-x-2">
                    <button className="px-3 py-1 rounded bg-green-600 text-white" onClick={() => setEditing(p)}>
                      Editar
                    </button>
                    <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => onDelete(p.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


