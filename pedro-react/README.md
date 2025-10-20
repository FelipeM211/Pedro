# Consultoria Médica – React + Vite

Aplicação React moderna com Vite, TailwindCSS, Firebase (Auth, Firestore, Storage), rotas, painel admin e blog dinâmico.

## Requisitos
- Node 18+
- Conta Firebase com projeto criado

## Setup
1. Instale dependências:
   ```bash
   npm install
   ```
2. Crie `.env` na raiz com base em:
   ```bash
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   VITE_ADMIN_EMAILS=admin@example.com
   ```
3. No Firebase Console, habilite:
   - Authentication: Email/Senha e Google
   - Firestore Database (modo de segurança recomendado)
   - Storage (regras conforme necessidade)

## Scripts
```bash
npm run dev     # desenvolvimento
npm run build   # produção
npm run preview # pré-visualização do build
npm run lint    # checagem ESLint
```

## Estrutura
```
src/
 ├─ components/
 ├─ pages/
 ├─ context/
 ├─ hooks/
 ├─ services/
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

## Funcionalidades
- Login email/senha e Google. Somente emails de `VITE_ADMIN_EMAILS` acessam `/admin`.
- CRUD de posts no Firestore com upload de capa (Storage).
- Blog com paginação incremental, busca, SEO dinâmico e layout responsivo.
- Dark mode persistente (localStorage).
- PWA básico via `public/manifest.json`.

## Notas
- Ajuste os textos/imagens na Home conforme necessidade.
- Para SEO avançado, configure títulos/descriptions por página (`react-helmet-async`).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
