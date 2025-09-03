import Image from "next/image"

export function Header() {
  return (
    <header className="bg-[#012809] text-white py-6 px-6 border-b border-[#FBDE54]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/celieve-brand-logo.jpeg"
            alt="CELIEVE BRAND Logo"
            width={150}
            height={90}
            className="object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-12">
          <a
            href="#sobre"
            className="text-lg font-light hover:text-[#FBDE54] transition-all duration-300 hover:tracking-wide"
          >
            Sobre
          </a>

          <a
            href="#colecao"
            className="text-lg font-light hover:text-[#FBDE54] transition-all duration-300 hover:tracking-wide"
          >
            Coleção
          </a>
          <a
            href="#contato"
            className="text-lg font-light hover:text-[#FBDE54] transition-all duration-300 hover:tracking-wide"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
