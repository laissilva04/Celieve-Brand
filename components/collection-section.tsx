
export function CollectionSection() {
  return (
    <section className="bg-[#012809] text-white py-32 px-6 relative overflow-hidden" id="colecao">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 text-[#FBDE54] text-8xl font-serif italic">Little</div>
        <div className="absolute bottom-40 right-20 text-[#FBDE54] text-8xl font-serif italic">Women</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block space-y-6">
             <p className="text-[#FBDE54] font-light tracking-widest uppercase text-sm">Coleção Exclusiva</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light">
              Nossa Coleção: <span className="text-[#FBDE54] italic">Little Women</span>
            </h2>
            <div className="w-32 h-0.5 bg-[#FBDE54] mx-auto"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <p className="text-center text-xl leading-relaxed font-light text-gray-300">
            Nossa nova coleção é um tributo à força feminina retratada em{" "}
            <span className="text-[#FBDE54] italic">Os Sete Maridos de Evelyn Hugo</span>. Little Women é um filme
            presente no livro, sendo também símbolo da luta silenciosa (e poderosa) que travaram para conquistar espaço
            em uma indústria marcada por desigualdade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* First row - Célia and Evelyn */}
          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FBDE54]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-[#FBDE54]/30 rounded-xl p-8 hover:border-[#FBDE54]/60 transition-all duration-300">
              <div className="bg-gray-600/20 h-56 rounded-lg mb-6 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FBDE54]/5 to-transparent"></div>
                <img src="/modelo-celia.jpeg" alt="Modelo Célia" className="w-full h-full object-cover z-10" style={{objectPosition: '0% 30%', transform: 'scale(1.15)'}} />
              </div>
              <h3 className="text-2xl font-serif font-light mb-4 text-[#FBDE54]">Modelo Célia</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Elegância com atitude, inspirada na força silenciosa de Célia. Uma peça que combina sofisticação
                clássica com detalhes contemporâneos, perfeita para a mulher que valoriza a discrição poderosa.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FBDE54]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-[#FBDE54]/30 rounded-xl p-8 hover:border-[#FBDE54]/60 transition-all duration-300">
              <div className="bg-gray-600/20 h-56 rounded-lg mb-6 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FBDE54]/5 to-transparent"></div>
                <img src="/modelo-evelyn.jpeg" alt="Modelo Evelyn" className="w-full h-full object-cover z-10" style={{objectPosition: '0% 20%'}} />
              </div>
              <h3 className="text-2xl font-serif font-light mb-4 text-[#FBDE54]">Modelo Evelyn</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Glamour e ousadia, refletindo a personalidade marcante de Evelyn Hugo. Uma criação que exala confiança e
                magnetismo, ideal para momentos em que você quer ser inesquecível.
              </p>
            </div>
          </div>

          {/* Second row - Two additional collection pieces */}
          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FBDE54]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-[#FBDE54]/30 rounded-xl p-8 hover:border-[#FBDE54]/60 transition-all duration-300">
              <div className="bg-gray-600/20 h-56 rounded-lg mb-6 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FBDE54]/5 to-transparent"></div>
                <img src="/modelo-resiliente.jpeg" alt="Modelo Resiliente" className="w-full h-full object-cover z-10" style={{objectPosition: '0% 10%'}} />
              </div>
              <h3 className="text-2xl font-serif font-light mb-4 text-[#FBDE54]">Modelo Resiliente</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Uma peça que celebra a capacidade feminina de se reinventar. Com linhas fluidas e estrutura firme,
                representa a mulher que enfrenta desafios com graça e determinação, transformando obstáculos em
                oportunidades.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FBDE54]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-[#FBDE54]/30 rounded-xl p-8 hover:border-[#FBDE54]/60 transition-all duration-300">
              <div className="bg-gray-600/20 h-56 rounded-lg mb-6 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FBDE54]/5 to-transparent"></div>
                <img src="/modelo-protagonista.jpeg" alt="Modelo Protagonista" className="w-full h-full object-cover z-10" style={{objectPosition: '0% 15%'}} />
              </div>
              <h3 className="text-2xl font-serif font-light mb-4 text-[#FBDE54]">Modelo Protagonista</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                A essência da mulher que escreve sua própria história. Esta peça combina elementos clássicos com toques
                modernos, criada para quem não aceita papéis secundários e sempre busca ser a protagonista de sua vida.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-center text-xl leading-relaxed font-light text-gray-300">
            Assim como Célia e Evelyn, nós acreditamos que toda mulher merece ser reconhecida pelo seu{" "}
            <span className="text-[#FBDE54]">talento, sua voz e sua coragem</span>. A Little Women de hoje é tudo, menos
            pequena: ela se impõe, se ama e não aceita ser invisível. Essa coleção é para ela — para você.
          </p>
        </div>

        {/* Removed botão "Descobrir Catálogo Completo" */}
      </div>
    </section>
  )
}
