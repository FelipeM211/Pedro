import { useCallback, useMemo, useState } from 'react'
import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore'
import { db } from '../services/firebase'

export function usePosts(pageSize = 6) {
  const [items, setItems] = useState([])
  const [cursor, setCursor] = useState(null)
  const [loading, setLoading] = useState(false)

  const hasMore = useMemo(() => !!cursor, [cursor])

  const load = useCallback(
    async (reset = false) => {
      setLoading(true)
      try {
        if (!db) {
          setItems([])
          setCursor(null)
          return
        }
        const base = collection(db, 'posts')
        let q = query(base, orderBy('date', 'desc'), limit(pageSize))
        if (!reset && cursor) q = query(base, orderBy('date', 'desc'), startAfter(cursor), limit(pageSize))
        const snap = await getDocs(q)
        const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
        setItems((prev) => (reset ? docs : [...prev, ...docs]))
        setCursor(snap.docs[snap.docs.length - 1] || null)
      } finally {
        setLoading(false)
      }
    },
    [cursor, pageSize]
  )

  return { items, loading, load, hasMore }
}


