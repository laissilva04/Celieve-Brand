export function HeroSection() {
  return (
  <section className="bg-[#012809] text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#FBDE54] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#FBDE54] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-0.5 bg-[#FBDE54]"></div>
              <p className="text-[#FBDE54] font-light tracking-widest uppercase text-sm">Moda Feminina de Luxo</p>
            </div>

                        <h1 className="text-6xl md:text-7xl font-serif font-light leading-tight text-balance">
              Confiança.
              <br />
              <span className="text-[#FBDE54] italic">Estilo</span>.
              <br />
              Liberdade.
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light">
              Mais do que vestir, queremos transformar. A moda como expressão do seu poder interior, celebrando a força
              e elegância feminina.
            </p>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FBDE54]/20 to-transparent rounded-lg"></div>
              <div className="h-[400px] rounded-lg overflow-hidden relative">
                <img
                  src="/elegancia-feminina-vintage.jpeg"
                  alt="Elegância Feminina - Mulheres vintage elegantes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012809]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-light text-lg">Elegância Feminina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
