export function AboutSection() {
  return (
    <section className="bg-[#012809] py-32 px-6 relative" id="sobre">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-32 text-[#FBDE54] text-9xl font-serif">"</div>
        <div className="absolute bottom-32 left-32 text-[#FBDE54] text-9xl font-serif rotate-180">"</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="w-24 h-0.5 bg-[#FBDE54] mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-4">
              O que é <span className="text-[#FBDE54] italic">Celieve Brand</span>?
            </h2>
            <div className="w-24 h-0.5 bg-[#FBDE54] mt-6"></div>
          </div>
        </div>

       <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-6 bg-[#FBDE54]/10 rounded-lg"></div>
            <div className="bg-gray-600/20 h-96 rounded-lg overflow-hidden backdrop-blur-sm border border-[#FBDE54]/30 relative">
              <img
                src="/teste.png"
                alt="Mulher Confiante - Elegant woman in green dress with pearl jewelry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012809]/60 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-300 font-light">
                A nossa marca tem como propósito fazer com que as mulheres possuam{" "}
                <span className="text-[#FBDE54] font-normal">confiança em si mesmas</span>. Mais do que vestir, queremos
                transformar.
              </p>

              <p className="text-xl leading-relaxed text-gray-300 font-light">
                A Celieve Brand é feita para mulheres que vivem com{" "}
                <span className="text-[#FBDE54] font-normal">intensidade, estilo e liberdade</span>, mas que também
                sabem que ainda há batalhas a vencer.
              </p>

              <p className="text-xl leading-relaxed text-gray-300 font-light">
                Lutamos pela equidade de gênero no mercado de trabalho e por um mundo onde cada mulher possa ocupar seu
                espaço com <span className="text-[#FBDE54] font-normal">confiança, amor próprio e poder</span>.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-[#FBDE54]"></div>
                <p className="text-[#FBDE54] font-light tracking-widest uppercase text-sm">Empoderamento Feminino</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
