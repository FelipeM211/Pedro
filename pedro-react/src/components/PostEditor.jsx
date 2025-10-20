import { useEffect, useMemo, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function PostEditor({ initial, onSubmit, onCancel, submitting }) {
  const [title, setTitle] = useState(initial?.title || '')
  const [content, setContent] = useState(initial?.content || '')
  const [imageFile, setImageFile] = useState(null)
  const fileRef = useRef(null)

  useEffect(() => {
    setTitle(initial?.title || '')
    setContent(initial?.content || '')
  }, [initial])

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link'],
        ['clean'],
      ],
    }),
    []
  )

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({ title, content, imageFile })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Título</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded border border-slate-300 px-3 py-2 bg-white dark:bg-slate-800"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Capa (opcional)</label>
        <input ref={fileRef} type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
      </div>
      <div>
        <label className="block text-sm mb-1">Conteúdo</label>
        <ReactQuill value={content} onChange={setContent} modules={modules} theme="snow" />
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
          Cancelar
        </button>
        <button disabled={submitting} className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-60">
          {submitting ? 'Salvando...' : 'Salvar'}
        </button>
      </div>
    </form>
  )
}


