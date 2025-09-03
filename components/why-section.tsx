export function WhySection() {
  return (
    <section className="bg-[#012809] py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-[#FBDE54] rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-[#FBDE54] rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <p className="text-[#FBDE54] font-light tracking-widest uppercase text-sm mb-4">Nossa Origem</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6">
              Por que <span className="text-[#FBDE54] italic">Celieve Brand</span>?
            </h2>
            <div className="w-32 h-0.5 bg-[#FBDE54]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-[#FBDE54]/30"></div>
                <p className="text-xl leading-relaxed text-gray-300 font-light pl-8">
                  Celieve Brand nasce da palavra <span className="text-[#FBDE54] font-normal italic">believe</span> —
                  acreditar. Acreditar na força da mulher, na beleza que vem de dentro, e no poder de ser quem se é.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-[#FBDE54]/30"></div>
                <p className="text-xl leading-relaxed text-gray-300 font-light pl-8">
                  Mas Celieve Brand também carrega história: é a união de{" "}
                  <span className="text-[#FBDE54] font-normal">Célia e Evelyn</span>, duas mulheres marcantes do livro
                  Os Sete Maridos de Evelyn Hugo.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-[#FBDE54]/30"></div>
                <p className="text-xl leading-relaxed text-gray-300 font-light pl-8">
                  Assim como elas, nossa marca acredita no{" "}
                  <span className="text-[#FBDE54] font-normal">amor-próprio, na liberdade</span> e em mulheres que
                  escrevem suas próprias histórias.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-[#FBDE54]"></div>
                <p className="text-[#FBDE54] font-light tracking-widest uppercase text-sm">Believe in Yourself</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#FBDE54]/10 to-transparent rounded-2xl"></div>
            <div className="bg-gray-600/20 h-96 rounded-xl overflow-hidden backdrop-blur-sm border border-[#FBDE54]/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBDE54]/5 to-transparent"></div>
              <img
                src="/inspiracao-literaria-celieve.jpeg"
                alt="Inspiração Literária - Os Sete Maridos de Evelyn Hugo com sapatos elegantes e colar de pérolas"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#012809]/90 to-transparent p-6">
                <p className="text-[#FBDE54] font-light text-lg">Inspiração Literária</p>
                <p className="text-sm text-gray-300 font-light">Os Sete Maridos de Evelyn Hugo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
