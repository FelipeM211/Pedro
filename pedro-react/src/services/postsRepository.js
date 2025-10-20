// Abstração do repositório de posts para facilitar troca de backend
// Implementação padrão: Firebase Firestore

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  query,
  limit,
  startAfter,
  getDoc,
} from 'firebase/firestore'
import { db } from './firebase'

const COLLECTION = 'posts'

export async function listPosts({ pageSize = 6, cursor = null } = {}) {
  if (!db) {
    return { docs: [], items: [], nextCursor: null }
  }
  const base = collection(db, COLLECTION)
  let q = query(base, orderBy('date', 'desc'), limit(pageSize))
  if (cursor) q = query(base, orderBy('date', 'desc'), startAfter(cursor), limit(pageSize))
  const snap = await getDocs(q)
  return { docs: snap.docs, items: snap.docs.map((d) => ({ id: d.id, ...d.data() })), nextCursor: snap.docs.at(-1) || null }
}

export async function getPost(id) {
  if (!db) return null
  const ref = doc(db, COLLECTION, id)
  const snap = await getDoc(ref)
  return snap.exists() ? { id: snap.id, ...snap.data() } : null
}

export async function createPost({ title, content, imageUrl, author }) {
  const payload = {
    title,
    content,
    imageUrl: imageUrl || '',
    author,
    date: new Date().toISOString(),
    excerpt: extractExcerpt(content),
    createdAt: serverTimestamp(),
  }
  const ref = await addDoc(collection(db, COLLECTION), payload)
  return ref.id
}

export async function updatePost(id, { title, content, imageUrl }) {
  const ref = doc(db, COLLECTION, id)
  await updateDoc(ref, { title, content, imageUrl: imageUrl || '', updatedAt: serverTimestamp() })
}

export async function removePost(id) {
  await deleteDoc(doc(db, COLLECTION, id))
}

function extractExcerpt(html) {
  const el = globalThis.document?.createElement?.('div')
  if (!el) return ''
  el.innerHTML = html
  const text = el.textContent || ''
  return text.length > 160 ? text.slice(0, 160) + '…' : text
}


