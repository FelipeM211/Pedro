export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container-page py-8 text-center text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center justify-center gap-4 mb-3">
          <a href="https://www.instagram.com/pedrodelsante/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:underline">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/pedro-del-sante-9463981ba/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:underline">
            LinkedIn
          </a>
        </div>
        <p>&copy; 2025 Consultoria Estratégica para Médicos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}


