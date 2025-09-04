export function QuoteSection() {
  return (
    <section className="bg-[#012809] py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-[#FBDE54] text-[200px] font-serif leading-none">"</div>
        <div className="absolute bottom-20 right-20 text-[#FBDE54] text-[200px] font-serif leading-none rotate-180">
          "
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="w-24 h-0.5 bg-[#FBDE54] mx-auto"></div>

          <blockquote className="text-2xl md:text-3xl font-serif font-light text-white leading-relaxed text-balance italic">
            Na década do glamour e da censura, algumas mulheres usaram a moda como{" "}
            <span className="text-[#FBDE54] not-italic font-normal">megafone</span>. Entre o brilho dos holofotes e as
            sombras do machismo: a moda como <span className="text-[#FBDE54] not-italic font-normal">voz feminina</span>
            .
          </blockquote>

          <div className="pt-8">
            <div className="w-16 h-0.5 bg-[#FBDE54] mx-auto mb-4"></div>
            <cite className="text-lg text-gray-400 font-light tracking-widest uppercase not-italic">@celieve</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
