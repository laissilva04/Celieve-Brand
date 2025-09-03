"use client"

import { useState } from "react"

export function BlogSection() {
  const [openModal, setOpenModal] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Audrey Hapburn",
      subtitle: "A Elegância Minimalista",
      content:
        'Audrey foi uma atriz britânica que, após a Segunda Guerra Mundial, tornou-se embaixadora da UNICEF, dedicando seus últimos anos de vida ao trabalho comunitário. Seu legado inclui um ícone de estilo na moda, rompendo com o padrão sensual da época (a la Marilyn Monroe) Audrey popularizou a silhueta andrógina e minimalista, cortes retos, calças cigarrette, sapatilhas e vestidos simples. Dessa forma, mostrou que a feminilidade podia vir da elegância e não necessariamente da hipersexualização, virando símbolo visual para as mulheres que não queriam seguir o padrão "pin-up"',
      fullStory:
        'Audrey Kathleen Ruston nasceu em Bruxelas em 1929, filha de uma baronesa holandesa e um cidadão britânico-austríaco. Durante a Segunda Guerra Mundial, viveu sob ocupação nazista na Holanda, experiência que moldou profundamente sua visão de mundo e compaixão pelos necessitados.\n\nSua carreira cinematográfica decolou com "Férias Romanas" (1953), onde sua performance lhe rendeu um Oscar de Melhor Atriz. Mas foi sua parceria com o estilista Hubert de Givenchy que revolucionou a moda feminina. Juntos, criaram um novo ideal de elegância: minimalista, sofisticado e acessível.\n\nAudrey popularizou o "little black dress", as sapatilhas bailarinas, calças capri e a silhueta andrógina que contrastava com as curvas exuberantes da era Marilyn Monroe. Seu estilo representava uma nova feminilidade: intelectual, independente e elegante sem ser provocativa.\n\nNos últimos anos de vida, dedicou-se inteiramente ao trabalho humanitário como Embaixadora da Boa Vontade da UNICEF, viajando para países em desenvolvimento e usando sua fama para chamar atenção para causas importantes. Seu legado transcende a moda e o cinema, representando uma nova forma de ser mulher no século XX.',
      author: "Por CELIEVE BRAND Editorial",
      image: "/audrey-hepburn-portrait-clean.jpeg",
    },
    {
      id: 2,
      title: "Bettie Page",
      subtitle: "A Rainha das Pin-ups",
      content:
        'Bettie foi uma modelo icônica que tornou-se famosa graças ao seu cabelo preto e franja característica, tendo como apelido "Rainha das Pin-ups". Foi modelo em Nova Iorque e rapidamente foi crescendo no ramo, se tornou uma das primeiras "Playmates do mês" da revista Playboy em janeiro de 1955. Mantinha sua estética ousada com figurinos de couro e látex e cortes de cabelo que viraram assinatura. Bettie usava a sensualidade conscientemente, flertava com o fetichismo e questionava a censura na América ultraconservadora, foi alvo do Senado por "ameaçar os valores da família" e virou um mito libertário.',
      fullStory:
        'Betty Mae Page nasceu no Tennessee em 1923, em uma família de sete filhos. Sua infância foi marcada pela pobreza e abuso, experiências que moldaram sua personalidade resiliente e sua busca por independência.\n\nEm 1950, mudou-se para Nova York com o sonho de se tornar atriz. Foi descoberta por um fotógrafo na praia de Coney Island, e sua beleza exótica - cabelos negros com franja geométrica, olhos azuis penetrantes e sorriso cativante - rapidamente a tornaram uma das modelos mais requisitadas da época.\n\nBettie revolucionou a fotografia pin-up ao trazer uma sensualidade consciente e empoderada. Diferente de outras modelos da época, ela controlava sua imagem e carreira, escolhendo cuidadosamente seus trabalhos. Suas sessões com o fotógrafo Irving Klaw, incluindo imagens fetichistas com couro e látex, desafiaram as normas conservadoras da sociedade americana dos anos 1950.\n\nSua influência foi tão significativa que chegou a ser investigada pelo Senado americano por "corromper a moral pública". Paradoxalmente, Bettie era uma cristã devota que via seu trabalho como uma forma de arte e expressão feminina. Ela se aposentou da modelagem em 1957, mas seu legado como símbolo de liberdade sexual e empoderamento feminino perdura até hoje.',
      author: "Por CELIEVE BRAND Editorial",
      image: "/bettie-page-portrait-clean.jpeg",
    },
    {
      id: 3,
      title: "Josephine Baker",
      subtitle: "Glamour e Ativismo",
      content:
        'Josephine foi uma dançarina, cantora e ativista que se tornou a primeira grande estrela negra do music hall francês. Ganhou notoriedade fazendo sua "dança da banana" e se destacou com espiã para a França Livre durante a Segunda Guerra Mundial. Baker foi uma fervorosa ativista antirracista, tanto nos EUA, onde combateu a segregação, quanto na Europa, onde foi a 1ª mulher negra a ser sepultada no Panteão de Paris. Usava figurinos exuberantes em shows e eventos políticos, transformando o corpo negro em palco de afirmação estética cultural. Confrontou o racismo usando moda como afirmação cultural, unindo glamour e ativismo.',
      fullStory:
        'Freda Josephine McDonald nasceu em St. Louis, Missouri, em 1906, em uma família pobre. Desde criança, enfrentou o racismo e a segregação do sul americano, experiências que moldaram sua determinação em lutar por igualdade racial.\n\nEm 1925, aos 19 anos, mudou-se para Paris e rapidamente se tornou a sensação dos cabarets parisienses. Sua "Danse Sauvage", onde dançava seminua com uma saia de bananas, chocou e encantou o público europeu. Josephine transformou estereótipos racistas em poder, usando sua sensualidade e talento para conquistar uma posição única na sociedade francesa.\n\nDurante a Segunda Guerra Mundial, trabalhou como espiã para a Resistência Francesa, usando sua fama para coletar informações sobre os nazistas. Suas partituras musicais continham mensagens codificadas, e ela transportava segredos militares escritos com tinta invisível em suas roupas.\n\nNos anos 1950 e 1960, tornou-se uma ativista fervorosa pelos direitos civis. Recusou-se a se apresentar para plateias segregadas nos EUA e foi a única mulher a discursar na Marcha sobre Washington em 1963, ao lado de Martin Luther King Jr. Josephine adotou 12 crianças de diferentes etnias, criando sua "tribo arco-íris" como símbolo de harmonia racial.\n\nSeu funeral em 1975 foi o primeiro de uma mulher americana a receber honras militares francesas, e em 2021 tornou-se a primeira mulher negra a ser sepultada no Panteão de Paris.',
      author: "Por CELIEVE BRAND Editorial",
      image: "/josephine-baker-portrait-clean.jpeg",
    },
    {
      id: 4,
      title: "Elsa Schiaparelli",
      subtitle: "Moda Surrealista",
      content:
        "Elsa foi uma estilista italiana conhecida por sua moda inovadora inspirada no surrealismo, tornando-se uma figura proeminente da alta-costura entre as guerras. Colaborando com artistas como Salvador Dalí, Elsa introduziu designs conceituais, cor rosa-choque como assinatura, chapéus absurdos e bordados ousados e influenciou artistas e criadoras a ver moda como arte e provocação social.",
      fullStory:
        'Elsa Schiaparelli nasceu em Roma em 1890, em uma família aristocrática intelectual. Seu tio era um famoso astrônomo, e ela cresceu em um ambiente que valorizava a criatividade e o pensamento não-convencional.\n\nEm 1922, mudou-se para Paris e começou a desenhar roupas por necessidade financeira. Sua primeira criação foi um suéter com um laço trompe-l\'oeil tricotado, que chamou a atenção da elite parisiense e lançou sua carreira.\n\nSchiaparelli revolucionou a moda ao tratá-la como arte conceitual. Suas colaborações com artistas surrealistas como Salvador Dalí, Jean Cocteau e Alberto Giacometti resultaram em peças icônicas: o vestido "Lagosta" (1937), o chapéu "Sapato", bolsas em formato de telefone e o famoso "Shocking Pink" - uma cor rosa vibrante que se tornou sua assinatura.\n\nSua abordagem era radicalmente diferente de Coco Chanel, sua principal rival. Enquanto Chanel buscava simplicidade e funcionalidade, Schiaparelli celebrava o fantástico e o teatral. Ela introduziu o conceito de "moda conceitual", onde cada peça contava uma história ou transmitia uma ideia.\n\nDurante a Segunda Guerra Mundial, fechou sua casa de moda e se mudou para os Estados Unidos. Embora tenha tentado retomar os negócios após a guerra, o mundo da moda havia mudado. Sua influência, no entanto, é imensurável - ela pavimentou o caminho para designers conceituais como Vivienne Westwood, Alexander McQueen e Rei Kawakubo.',
      author: "Por CELIEVE BRAND Editorial",
      image: "/elsa-schiaparelli-portrait-clean.jpeg",
    },
    {
      id: 5,
      title: "Dovima",
      subtitle: "A Arte do Espetáculo",
      content:
        'Ave foi uma modelo descoberta nas ruas de Nova Iorque por um editor da Vogue e tornou-se no seu tempo uma das modelos mais bem pagas do mundo e um ícone de estilo até os dias de hoje. Dovima transpirava elegância e chamava atenção por seu porte e imponência. Se tornou um símbolo visual para a moda dos anos 50, a famosa foto "Dovima with Elephants" virou ícone cultural, usando um belíssimo Christian Dior, primeiro vestido desenhado pelo então assistente de Dior, o jovem Yves Saint Laurent, ela mostrou o poder da moda como arte e espetáculo.',
      fullStory:
        'Dorothy Virginia Margaret Juba, conhecida como Dovima, nasceu no Bronx em 1927. Filha de um policial irlandês e uma mãe de origem polonesa, cresceu em uma família de classe média que não tinha conexões com o mundo da moda.\n\nSua descoberta foi quase acidental: em 1949, enquanto trabalhava como vendedora em uma loja de departamentos, foi abordada por um editor da Vogue que ficou impressionado com sua altura (1,75m) e presença marcante. Seu nome artístico "Dovima" foi criado combinando as primeiras duas letras de seus três nomes.\n\nDovima rapidamente se tornou a modelo mais bem paga de sua época, ganhando $60 por hora quando a média era $25. Sua elegância natural e capacidade de transmitir sofisticação a tornaram a musa de fotógrafos como Richard Avedon, Irving Penn e Cecil Beaton.\n\nSeu momento mais icônico veio em 1955, na famosa fotografia "Dovima with Elephants" de Richard Avedon. Vestindo um vestido de noite Dior (o primeiro criado pelo jovem assistente Yves Saint Laurent), ela posou entre elefantes do Cirque d\'Hiver em Paris. A imagem capturou perfeitamente a tensão entre elegância e selvageria, tornando-se uma das fotografias de moda mais reproduzidas da história.\n\nDovima representou uma nova era na modelagem, onde as modelos não eram apenas cabides, mas personalidades que traziam drama e narrativa às roupas. Ela ajudou a estabelecer a modelagem como uma forma de arte performática, influenciando gerações futuras de supermodelos.',
      author: "Por CELIEVE BRAND Editorial",
      image: "/dovima-portrait-clean.jpeg",
    },
  ]

  const openPersonaModal = (id: number) => {
    setOpenModal(id)
  }

  const closeModal = () => {
    setOpenModal(null)
  }

  return (
    <section className="py-24 px-4 bg-[#012809]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="relative">
            <h2 className="text-6xl md:text-7xl font-serif text-[#FBDE54] mb-2 tracking-tight">Histórias de Poder</h2>
            <div className="text-2xl md:text-3xl font-serif text-white/70 italic -mt-2 mb-8">Fashionably</div>
            <div className="w-32 h-px bg-[#FBDE54] mx-auto mb-8"></div>
          </div>
          <p className="text-lg text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
            Na década do glamour e da censura, algumas mulheres usaram a moda como megafone. Entre o brilho dos
            holofotes e as sombras do machismo: a moda como voz feminina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Featured Story - Large */}
          <article className="lg:col-span-8 group cursor-pointer" onClick={() => openPersonaModal(blogPosts[0].id)}>
            <div className="relative overflow-hidden h-[600px] bg-gradient-to-br from-[#441511]/20 to-transparent">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[#FBDE54] text-sm font-medium tracking-wider uppercase mb-2">
                  História em Destaque
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-3 leading-tight">{blogPosts[0].title}</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-4 line-clamp-3">
                  {blogPosts[0].content.substring(0, 200)}...
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[#FBDE54] text-sm font-medium">{blogPosts[0].author}</div>
                  <button className="text-[#FBDE54] text-sm font-medium hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                    Ver mais
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Side Stories */}
          <div className="lg:col-span-4 space-y-6">
            {blogPosts.slice(1, 3).map((post, index) => (
              <article key={post.id} className="group">
                <div className="relative overflow-hidden h-[285px]">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-serif text-white mb-2 leading-tight">{post.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-3">
                      {post.content.substring(0, 120)}...
                    </p>
                    <button className="text-[#FBDE54] text-xs font-medium hover:text-white transition-colors duration-300 flex items-center gap-1 cursor-pointer">
                      Ver mais
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif text-[#FBDE54] mb-4">Ícones Atemporais</h3>
            <div className="w-24 h-px bg-[#FBDE54] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.slice(3).map((post, index) => (
              <article key={post.id} className="group">
                <div className="relative overflow-hidden mb-6 h-[400px]">
                  <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-3xl font-serif text-[#FBDE54] mb-2">{post.title}</h4>
                    <p className="text-white/70 italic text-lg">{post.subtitle}</p>
                    <div className="w-12 h-px bg-[#FBDE54] mt-3"></div>
                  </div>

                  <p className="text-white/90 leading-relaxed">{post.content}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-[#FBDE54] text-sm font-medium tracking-wider uppercase">{post.author}</span>
                    <button
                      onClick={() => openPersonaModal(post.id)}
                      className="group inline-flex items-center text-white/70 hover:text-[#FBDE54] transition-colors duration-300 cursor-pointer"
                    >
                      <span className="text-sm">Ver mais</span>
                      <svg
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-24 pt-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-serif text-[#FBDE54] mb-6 leading-tight">
              Inspire-se em Suas Histórias
            </h3>
            <p className="text-white/80 mb-10 text-lg leading-relaxed">
              Cada mulher tem sua própria história de poder. Descubra como a CELIEVE BRAND pode ajudar você a escrever a
              sua através da moda que expressa sua essência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/celievebrand"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FBDE54] text-[#012809] px-8 py-4 font-medium tracking-wider uppercase hover:bg-[#FBDE54]/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
              >
                Conheça Nossa Coleção
              </a>
              <a
                href="https://instagram.com/celievebrand"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#FBDE54] text-[#FBDE54] px-8 py-4 font-medium tracking-wider uppercase hover:bg-[#FBDE54] hover:text-[#012809] transition-all duration-300 flex items-center justify-center"
              >
                Leia Mais Histórias
              </a>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="bg-[#012809] border border-[#FBDE54]/20 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#012809] border-b border-[#FBDE54]/20 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-3xl font-serif text-[#FBDE54]">
                  {blogPosts.find((post) => post.id === openModal)?.title}
                </h2>
                <p className="text-white/70 italic">{blogPosts.find((post) => post.id === openModal)?.subtitle}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-white/70 hover:text-[#FBDE54] transition-colors duration-300 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden h-[400px] md:h-[500px]">
                    <img
                      src={blogPosts.find((post) => post.id === openModal)?.image || "/placeholder.svg"}
                      alt={blogPosts.find((post) => post.id === openModal)?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="w-16 h-px bg-[#FBDE54]"></div>
                    <div className="text-white/90 leading-relaxed space-y-4">
                      {blogPosts
                        .find((post) => post.id === openModal)
                        ?.fullStory.split("\n\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-[#FBDE54] text-sm font-medium tracking-wider uppercase">
                        {blogPosts.find((post) => post.id === openModal)?.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
