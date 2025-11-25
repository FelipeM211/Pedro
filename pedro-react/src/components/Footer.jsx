import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] text-white border-t border-white/10 py-12">
            <div className="container-page flex flex-col items-center text-center gap-6">

                {/* Brand */}
                <div>
                    <h3 className="font-heading font-bold text-2xl mb-2">
                        Consultoria <span className="text-secondary">Médica</span>
                    </h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                        Estratégia, gestão e crescimento para sua carreira médica.
                    </p>
                </div>

                {/* Copyright */}
                <p className="text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Pedro Del Sante. Todos os direitos reservados.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.instagram.com/pedrodelsante/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pedro-del-sante-9463981ba/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
