"use client"
import React, { useState } from 'react'
import H1 from '../H1'

interface LegendFooter {
  author: string
  date: string
  informant?: string
  contact?: string
}

interface Legend {
  title: string
  content: string[]
  footer: LegendFooter
}

interface Legends {
  papuda: Legend
  torto: Legend
}

const legends: Legends = {
  papuda: {
    title: 'A Lenda da Papuda',
    content: [
      'Fomos buscar na fumaça dos tempos, o registro oral do que foi passado de geração para geração, há pelo menos um século e maio.',
      'Ao acontecer a povoação do Planalto Central deste nosso país, um casal adquiriu terras às margens do córrego Santo Antônio, afluente da margem direita do rio São Bartolomeu.',
      'Sabe-se apenas, que eram sertanejos goianos e que a mulher tinha um papo, um bócio avantajado, capaz de chamar a atenção da vizinhança.',
      'Os moradores da região não havia ninguém com tal anomalia ou enfermidade e a curiosidade foi total. Todos ficavam admirados em ver a papuda, quando comparecia nos ajuntamentos de pessoas para as rezas domingueiras, as "treições" que terminavam em pagodes de fins-de-semana, as festas de casamentos, as desobrigas e outras funções, pois, gente com o pescoço grosso era novidade.',
      'O casal, era desunido, socialmente e o Sr. Adão contava, que no lugar no qual Dona Rita fora criada, a água era alcalina, pura e não continha iodo, por isso, sua esposa era papuda.',
      'O casal formou fazenda, produzindo agricultura de subsistência e criando gado.',
      'Anos mais tarde, o Sr. Adão morreu derrepente e Dona Rita continuou à frente da administração do patrimônio da família. E por ser muito enérgica, trabalhadora, decidida à maneira das feministas de nossos dias, ficou conhecida no mundo dos negócios e por estar sua fazenda situada às margens da estrada boiadeira rumo a Noroeste de Minas Gerais e ao Estado da Bahia, ponto de pouso de boiada, o lugar tornou-se conhecido por região da Papuda.',
      'A hipertrofia da glândula tiróide, criou em dona Rita, o papo tiroideano, que o povo dá o nome de papo-de-cordão, que cresceu até a altura do umbigo, permitindo colocá-lo no seio da camisa de algodão usa pelas mulheres daquele tempo ou então o jogava para as costas.',
      'Havia comentário corrente em todo o Planalto Central, que Dona Rita, quando ia cuar café, fazer comida e fritar toicinho de porco gordo, cozinhar carnes fritas para guardar na manteiga de capado, por vezes se descuidava e o papo rolava-lhe dos seios ou das costas, caindo dentro da caçarola da água do café, da panela ou do tacho de preparo dos alimentos, o que provocava nojo a quem ouvia tal narrativa, além de Dona Rita deixar aparecer cicatrizes em seu papo, da estimação.',
      'Todos conheciam os fatos folclóricos da matriarca do clã existente na FAZENDA PAPUDA.',
      'Dona Rita, foi uma enfermidade e na sequência de sucessão da herança, estiveram muitos proprietários do patrimônio deixado por ela, sendo o Sr. Florentino Meireles, da cidade de Luziânia, o último deles muito popular e conhecido pelo apelido de Zico da Papuda.',
      'Zico da Papuda recebeu a indenização, combinada pelas partes a preço de venda, naqueles dias, custo alqueire e voltou com a esposa e filhos para viver em Luziânia-GO.',
      'Brasília foi construída a partir de 1956 e inaugurada a 21 de abril de 1960. Mudou-se a Capital Federal Brasileira para cá e ao sul do Plano Piloto, além da Escola Fazendária, do Ministério da Fazenda, à margem da rodovia, que vai para Unaí-MG, vertentes do rio São Bartolomeu, onde era sede da Fazenda de Dona Rita que tinha papo, foi construída a Penitenciária da Papuda, mantida e administrada pelo GDF.',
      'Esta é mais uma influência dos nomes lendários, nos lugares do Distrito Federal.',
      'E assim caminha um povo na sucessão dos fatos de sua história.',
    ],
    footer: {
      author: 'Olimpio Pereira Neto',
      date: 'Lenda inédita colhida a 31.3.1996, em Luziânia-GO',
      informant: 'Informante: Dona América Meireles, (Da. Neném)',
    },
  },
  torto: {
    title: 'Uma Lenda e a Granja do Torto',
    content: [
      'A tradição oral de geração para geração registra as notícias transmitidas pelos antigos moradores do território brasiliense, a respeito de um cidadão cujo nome era Abdias Lombroso Medrado, proveniente de lugarejo entre as cidades de Porto Seguro e Ilhéus, litoral sul do Estado da Bahia, que na condição de imigrante chegou para morar nas barrancas do ribeirão, próximo aos Magalhães, aqui no então Planalto Goiano, hoje em dia, mundialmente famoso com o nome de Planalto Central Brasileiro.',
      'Dentre os muitos filhos que tiveram o Sr. Abdias e Dona Pascoalita Ribeiro Medrado, havia o Antonio que era portador de necessidades especiais, pois tinha a coluna cervical rija, encurvada para frente, tipo ao qual o povo chamava de corcunda e na parte da escadeira, a coluna do rapaz entortou para um dos lados a dificultar-lhe o caminhar, além de lhe entortar os braços e as pernas, porém a fisionomia dele era perfeita, o que lhe conferia contagiante expressão de bondade e simpatia no trato com as pessoas nos negócios e pela prática de boas maneiras a gerar cordialidade.',
      'O Antonio Medrado Ribeiro, quando adolescente os coleguinhas de brincadeiras deram a ele o apelido de "Tortinho", o que era muito desagradável para o rapazinho e para os pais que reagiam aqui e acolá.',
      'Por ter o tórax, os braços, as mãos e as pernas atrofiadas, o Antonio do Sr. Abdias, assim ficou conhecido em ambientes sérios e respeitosos, formou-se adulto sem condições para lidar em trabalhos pesados, que exigissem maiores esforços físicos, mas o juízo dele sem defeito e administrava muito bem a sua propriedade.',
      'Os pais do Antonio Medrado trocaram ideias, consultaram aos outros filhos e tiveram os consentimentos deles no propósito de separar algumas tarefas de terras, construir uma casa e instalações para criar animais domésticos, fechar grande quintal para o "Tortinho" plantar um rico e belo pomar, que tornou-se muito bem plantado em arbustos, árvores frutíferas de variadas qualidades cujos frutos de sabores diferentes se tornassem preferidos pelos habitantes das aldeias vizinhas.',
      'Era início do Século XIX, foi estabelecida e consolidada a posse das terras com a construção das moradias, foi feito o plantio de lavouras para produzir o sustento da família; no quintal foram plantadas árvores frutíferas, além de serem construídos chiqueiros para porcos, galinheiros para galinhas, cercados para serem criadas outras aves e mangueirões, onde foram empastados equinos, bovinos e ovinos.',
      'HISTÓRICO',
      'A partir 1740, devido às novas rotas dos Bandeirantes e a fixação da residência do Urbano do Couto por estas bandas, a povoação do Planalto Central Brasileiro intensificou-se pela chegada de imigrantes vindos dos Estados de Minas Gerais, da Bahia, do Piauí, de Pernambuco e de outros lugares.',
      'Certo viajante chegou das bandas da Bahia e após longas marchas, sentiu-se fatigado, estacionou sua comitiva nas margens de um riacho de muita água limpa, pura, cristalina e gostosa, que corre no sentido longitudinal do noroeste para o sudeste sob um céu, abobadamente azulado, em um leito não muito profundo, características dos veios de água existentes no Planalto Goiano.',
      'O viandante após ter ficado de pé sob o sol a pino e a sombra ter descido colada ao corpo da cabeça aos pés, durante algumas horas do dia, gostou do lugar e resolveu ficar por aqui, fixar morada em definitivo nas aprazíveis paragens, quase no centro do Brasil, próximas das beiradas do ribeirão sem nome. Ali desceu as bruscas das cangalhas, tirou as amarras dos apetrechos e soltou a tropa para descansar.',
      'Reconhecidas as redondezas do ponto no qual se achava instalado, o Sr. Abdias Lombroso Medrado descobriu que os terrenos pertenciam ao patrimônio imobiliário do Estado de Goiás, a que na linguagem forense, tinham o nome de "terras devolutas".',
      'O Sr. Abdias em companhia da esposa e de um dos filhos, tomou o caminho do Urbano do Couto, conhecido como "a picada de Goiás", passaram pelas povoações já existentes, tais quais, Corumbá de Goiás, Meia Ponte (Pirenópolis), Jaraguá de Goiás, também, pelos lugarejos - Uruana e Itaberaí - cruzaram a Serra Dourada e alcançaram a capital "Vila Buena de Goiás".',
      'Na capital do Estado de Goiás, o ainda posseiro, Sr. Abdias Lombroso Medrado, juntamente, com a esposa e um filho, procuraram o Departamento Estadual de Terras Públicas, recebeu a documentação, que legalizou a propriedade de suas terras nas vertentes do ribeirão de águas límpidas, que nascia no noroeste do Planalto Goiano, município de Santa Luzia e mais tarde esta área virou município de Planaltina, território desmembrado da comarca, anteriormente, controladora daquela parte do território luzianiense.',

      'Do outro lado deste ribeiro de águas cristalinas, mais acima, havia alguns indígenas Tamimínós, ancestrais dos remanescentes dos Tocantintins, dos aldeados "Paranoás", que viviam ao lado dos autóctones "Araés", ramo do nação dos Acroas, dois segmentos de povos indígenas encontradiços nesta parte do Planalto Central do Brasil.',
      'Na outra margem deste belo veio de água, largo, arenoso, os Magalhães estavam estabelecidos desde 1780, criavam gado na larga, possuíam mangueirões para animais domados e em faze de reprodução. Os Magalhães vieram dos arredores de Salvador, Capital da Bahia, os filhos frequentavam escolas religiosas, pois constituíam e constituem estirpe nobre de pensamentos ativos no exercício de vocações e profissões de destaques na Igreja Católica, nas Forças Armadas e na Sociedade Civil em geral.',
      'Geograficamente, o lugar da Quinta do Torto, situava-se ao norte do município de Santa Luzia/Luziânia, região Nordeste do Estado de Goiás, arriba no espigão, por onde foi aberta a Picada de Goiás, à época, estrada boiadeira no trecho entre São Sebastião do Mestre Darmas, a se encaminhar para o noroeste goiano, pouso do Rabiador, fazenda dos Braz/Brazlândia, rumo a Corumbazinho/Corumbá de Goiás e a Meia Ponte/Pirenópolis...',
      'Narrativas orais diversas dizem que a sede do Sítio do Torto, há um dia de marcha entre a fazenda Bananal e a de Sobradinho do João de Barro, virou pouso de tropeiros e de boiadas procedentes do Paraguai, do Mato Grosso e do Sudoeste Goiano, que por aqui passavam com destino aos Estados de Minas Gerais e outros do Nordeste Brasileiro.',
      'A fama da família do Sr. Abdias Lombroso Medrado teve início e foi propalada, primeiro por viajantes, que eram acolhidos nestes gerais de Deus nos Sítios e pelas crianças dos vizinhos, que gostavam de buscar frutas no quintal do "Torto", pois eram recebidos, primorosamente, pelo Sr. Antonio do Abidias a oferecer a elas, frutas as mais bonitas, sadias e saborosas existentes em terras do Planalto Brasileiro.',
      'No mundo dos negócios, o Antonio Medrado Ribeiro era conhecido pelo apelido de o "Torto", afamado por sua solidariedade cristã, pela humildade no trato e pela alegria em servir às crianças no pomar, aos vizinhos nas suas emergências e a outras pessoas que procurassem a ele, não as deixava de mãos vazias, pois haveria de receber pelo menos uma palavra de manifesto da sua vontade em servi-las.',
      'O Antonio Ribeiro Medrado, o "Torto", como ficou conhecido, faleceu ao viver mais de oitenta anos e seus herdeiros da família Lombroso Medrado, desapareceram na sucessão de gerações espalhadas no mundo do Planalto Brasileiro e por outras bandas deste país continental.',
      'Dada à bondade cristã, prática da solidariedade, levada a efeito pelo Sr. Antonio Medrado Ribeiro, portador de necessidades especiais, que ainda em vida foi homenageado pelos habitantes das aldeias circunvizinhas ao batizarem com o seu codinome "Torto", a partir do sítio ou seja o lugar que ele morava; o ribeirão que corria nos fundos do quintal passou a se chamar "Torto" e virou ponto de referência por toda parte; afluente da margem esquerda do ribeirão, o córrego dos índios, recebeu a denominação de "Córrego do Tortinho; esse conjunto de designações referenciais deu origens à "fazenda Torto", daí para a frente expande sem parar, inclusive hodiernamente.',
      'Nos cartórios de aforamentos jurídicos e sucessões das terras da região a fazenda Torto, sempre foi um conhecido ponto de referência no progresso e no desenvolvimento do Planalto Central Brasileiro, até à desapropriação das terras do Sítio Castanho, pelo então Governador de Goiás, José Ludovico de Almeida, com o ideal de cooperar para tornar mais fácil a construção de Brasília e para a mudança da Capital Federal, para o centro do Brasil.',
      'Os Engenheiros Bernardo Sayão de Araújo e Jofre Parada sugeriram aos órgãos que administravam o patrimônio imobiliário do futuro Distrito Federal, que os lugares demarcados por eles, conservassem os nomes lendários ou de maiores referências em cada aldeia, pois é um ponto de efluência da vida na vizinhança.',
      'Prezados leitores, vejam a predestinação e as coincidências da existência do pomar e do criatorio de animais domésticos no sítio do especialíssimo Antonio Ribeiro Medrado, o "Torto" e a criação da Granja do Torto para as mesmas finalidades e com a destinação à maior de residência oficial dos governantes do Brasil.',
      'A Granja do Torto contígua ao Parque Nacional de Brasília, ambos retirados dos territórios da fazenda Bananal, pertencentes aos Guimarães-Lobo e da fazenda Torto, por herança de inventário, membros da família Magalhães, grupos de habitantes do Planalto Central, que com grandes sacrifícios muito colaboraram na fundação e na consolidação de Brasília.',
      'É...',
      'É na rodovia BR-020, que está o Viaduto no qual passam as pessoas que vão para a Granja do Torto;',
      'É ali ao lado que foi construído o antigo Agroparque do Torto e atual Parque de Exposições de Brasília, onde acontecem grandes exposições de gado, de máquinas agrícolas e são realizados leilões milionários de animais, de máquinas agrícolas e de produtos ali expostos. Também, por essas ocasiões acontecem superespetáculos artístico-musicais e por vezes promovem-se bonitos eventos folclóricos regionais.',
      'É do tempo que existiam só algumas residências de trabalhadores na Granja do Torto e no Agroparque, a povoação, que depois se tornou na simpática Vila do Torto, mais tarde rebatizada por vila "Weslian Roriz", já bem estruturada em favor das pessoas residentes por lá.',
      'É na região da Granja do Torto, no Distrito Federal, que se encontra, em construção, a Cidade Digital de Brasília destinada à instalação e ao desenvolvimento das indústrias de informática, não poluentes, alta tecnologia aplicada em busca de conhecimentos tecnológicos superiores.',
      'É no Distrito Federal que o termo "Torto", tem emprego polissêmico a designar nomes delimitados por espaços geográficos os quais ficam ao norte de quem sai do Plano Piloto pela Asa Norte de Brasília.',
      'A Granja do Torto, é mais um caso da influência dos nomes lendários, nos lugares do Distrito Federal.',
    ],
    footer: {
      author: 'OLIMPIO PEREIRA NETO',
      date: 'Brasília-DF, 20 de janeiro de 2013',
      contact: 'Telefones (061) 3381 9091 e 9975 3620/Autor do Livro LENDAS E CONTOS NO PLANALTO CENTRAL DO BRASIL',
    },
  },
}

const LegendsSection = () => {
  const [currentLegend, setCurrentLegend] = useState<keyof Legends>('papuda')

  const legend = legends[currentLegend]

  return (
    <div className='container mx-auto py-20 max-md:px-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Navigation */}
        <div className='flex justify-center gap-4 mb-12'>
          <button
            onClick={() => setCurrentLegend('papuda')}
            className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
              currentLegend === 'papuda'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            A Lenda da Papuda
          </button>
          <button
            onClick={() => setCurrentLegend('torto')}
            className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
              currentLegend === 'torto'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            A Lenda da Granja do Torto
          </button>
        </div>

        {/* Content */}
        <div>
          <div className='space-y-6 mb-12'>
            <H1>{legend.title}</H1>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Uma das lendas escritas por Olimpio Pereira durante sua residência em Brasília,
              registrando a história e o folclore local.
            </p>
          </div>

          <div className='space-y-8'>
            {legend.content.map((paragraph, index) => (
              <p key={index} className='text-lg text-gray-800 leading-relaxed'>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer */}
          <div className='mt-12 pt-8 border-t border-gray-200 space-y-2 text-gray-600'>
            <p>{legend.footer.author}</p>
            <p>{legend.footer.date}</p>
            {'informant' in legend.footer && <p>{legend.footer.informant}</p>}
            {'contact' in legend.footer && <p>{legend.footer.contact}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegendsSection
