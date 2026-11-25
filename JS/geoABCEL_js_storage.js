// Guarda todas as pesquisas e Interagir com o JSgear

/**
 * B_id = O id do elemento na pagina html
 * txt = O texto que quer por dentro daquele elemento html
 * P_id = Id de destino, utilizado apenas para os botões da toolbar, onde ao clicar sai do id do botão("B_id") ao id destino que é o "P_id"
 */

// ToolBar
const TBi = [

    { // indice 0
        B_id:"B-part-I",
        P_id:"part-I",
        txt:"Introdução"
    },

    { // indice 1
        B_id:"B-part-1",
        P_id:"part-1",
        txt:"O que são minerais críticos?"
    },

    {
        B_id:"B-part-1/2",
        P_id:"part-1/2",
        txt:"As leis ambientais"
    },

    { // indice 2
        B_id:"B-part-2",
        P_id:"part-2",
        txt:"Mapa do Brasil"
    },

    { // indice 3
        B_id:"B-part-3",
        P_id:"part-3",
        txt:"Como essa mineração influencia no ambiente ao redor?"
    },

    { // indice 4
        B_id:"B-part-4",
        P_id:"part-4",
        txt:"Referências"

},
    {
        B_id:"B-part-5",
        P_id:"part-5",
        txt:"Referências"
    }
]

// Introdução
const itd = [
    { // indice 0
        B_id:"I0-T-itd",
        txt: "Do solo ao celular: como a tecnologia na mineração de minerais críticos influencia a sociedade do Brasil"
    },

    { // indice 1
        B_id:"I0-t-itd",
        txt: "A sociedade brasileira é diretamente influenciada pelas tecnologias presentes na mineração de minerais críticos, aqueles que afetam o desenvolvimento econômico e possuem certas limitações e suas reservas de processamento e produção. Além das terras-raras presentes em Minas Gerais, Bahia, Amazonas e Goiás. Como será que esses minérios afetam o nosso cotidiano e as relações geopolíticas? É isso que veremos a seguir"
    }
]
// As leis ambientais e como elas são fiscalizadas perante os subsolos
const LAfs = [
    {
        B_id:"LA-T-0",
        txt:"As leis ambientais e como elas são fiscalizadas perante os subsolos"
    },
    {
        B_id:"LA-t-0",
        txt:"Até não muito tempo atrás, o Brasil tinha apenas o Código de Mineração de 1967 que tratava todos os minérios de maneira genérica, incluindo os minerais críticos/ estratégicos, assim tinham menos obrigações a serem cumpridas. Nos tempos atuais, foi criado um projeto de lei (n° 2870/2024) para instituir a Política Nacional de Minerais Críticos e Estratégicos (PNMCE) e o Comitê de Minerais Críticos e Estratégicos (CMCE). Com a promulgação desse projeto, espera-se que se consiga a atração de novos investidores para o setor mineral, uma redução da dependência externa de insumos estratégicos, um fortalecimento da soberania e o protagonismo do Brasil na transição energética, um desenvolvimento regional com sustentabilidade e inovação e um alinhamento com políticas industriais e ambientais. A lei também busca, além de se beneficiar, transformar e industrializar os minerais que ele mesmo exporta, fazer mineradoras investirem uma porcentagem de sua receita anual em projetos de sustentabilidade e recuperação do solo, com multa alta caso não invistam, e aumentar o controle do Estado, permitindo uma possível melhor fiscalização. Essa fiscalização é feita principalmente através de um sistema obrigatório no qual registra as transações e os agentes envolvidos desde a extração dos minerais até o consumo. O sistema exige a comprovação de origem lícita, licença ambiental, outorga mineral e dados sobre o impacto socioambiental de cada operação. Ainda mais recentemente, após pressão de ambientalistas na busca de equilibrar o lado econômico e o meio ambiente, o Governo Federal precisou publicar um novo decreto para incluir o Ministério do Meio Ambiente no comitê responsável e garantir a ele direito de voto, o que nos revela que, apesar do Brasil está avançando com a criação de leis específicas para os minerais críticos, ainda é necessário estar vigilante quanto ao equilíbrio da transição energética e os ecossistemas."  
    }
]

// Mapa do Brasil
const mpB = [
    { // indice 0
        B_id:"M0-T-mpB", // T = titulo
        txt: "Mapa do Brasil e reservas de terras raras"
    },

    { // indice 1
        B_id:"M0-t-mpB", // t = texto
        txt: "O Brasil possui grandes reservas de terras raras, principalmente em Minas Gerais, Goiás, Amazonas e Bahia. Esses minerais são importantes para fabricar celulares, computadores, baterias e carros elétricos."
    },

    { // indice 2
        B_id:"BttMpB", // btt = botão(bottom)
        txt: "O que são terras raras?"
    }
]
// C.F.M. (Como era, é, e pode ser feita a mineração? E quais são as tecnologias usadas?)
const CFM = [
    { // indice 0
        B_id:"C0-T-CFM",
        txt:"Como era, é e pode ser feita a mineração?"
    },
    { // indice 1
        B_id:"C0-t1-CFM",
        txt:"Antigamente era feita com ferramentas simples e muito trabalho manual."
    },
    { // indice 2
        B_id:"C0-t2-CFM",
        txt:"Atualmente utiliza máquinas, escavadeiras, perfuradoras e processos químicos para separar os minerais"
    },
    { // indice 3
        B_id:"C0-t3-CFM",
        txt:"No futuro poderá utilizar robôs, inteligência artificial e tecnologias menos poluentes."
    },
    { // indice 4
        B_id:"C0-t4-CFM",
        txt:"Tecnologias utilizadas são escavadeiras, sensores, separação magnética, processos químicos e equipamentos automatizados."
    }

]

// O que são minerais críticos?
const MC = [
    { // indice 0
        B_id:"MC-T-0",
        txt:"O que são minerais críticos?"
    },
    { // indice 1
        B_id:"MC-t-0",
        txt:"Os minerais críticos são aqueles que podem obter certas limitações em suas reservas, produção, processamento, refino e ligas metálicas, de maneira que se pode ocasionar disrupturas nas cadeias globais de suprimento, principalmente por questões geopolíticas, afetando significativamente o desenvolvimento econômico dos países importadores. Eles são recursos minerais fundamentais para a produção de defesa territorial, tecnologia e primordialmente para a transição energética global. "
    },
    { // indice 2
        B_id:"MC-t-1",
        txt:"Esses recursos são de extrema importância para a economia de um país e para o processo de transição energética de um território, e o fornecimento dos mesmos é limitado e está em risco gerando problemas de abastecimento, devido ao baixo número de reservas, limitação de países produtores e a superexploração vinda da alta demanda em escala plenária. Por consequência, a ausência dos minerais críticos geram grandes impactos sociais, ambientais, de abastecimento de energia,de inviabilizar os custos de produção, de segurança e econômicos. Ademais, envolve uma pluralidade de riscos de abastecimento como: dependência externa, limitações tecnológicas, concentração geográfica da produção, interrupção no fornecimento, dificuldade de produção e a instabilidade geopolítica que força países a adotarem ações estratégicas  para garantir a segurança do suplemento. "
    },
    { // indice 3
        B_id:"MC-t-2",
        txt:"Vale ressaltar que recursos minerais são considerados recursos naturais não renováveis com diferentes aplicações em amplos setores da indústria e ainda possuem uma demanda alta em infraestrutura, produção energética, agropecuária, tecnologia aeroespacial e defesa. Esses recursos naturais desempenham um papel crucial em diversas áreas como na fabricação de componentes eletrônicos (supercomputadores e baterias de carregamento elétrico), na concepção de  carros elétricos e de equipamentos para smartphones e computadores, na fabricação de tecnologia de ponta ( baterias, semicondutores, turbinas eólicas e painéis solares ) e nas inovações tecnológicas do setor elétrico.  "
    },
    { // indice 4
        B_id:"MC-t-3",
        txt:"O tratado internacional do Acordo de Paris acordou uma demanda por uma economia mais carbonizada, isto é, com menor dependência nos combustíveis fósseis, resultando na transição energética que mostra subordinação aos minerais e materiais específicos para proporcionar as tecnologias de geração e armazenamento de energia limpa. Isso se aplica por exemplo nos veículos elétricos que utilizam por volta de 60 kg de cobre e 3 kg de metais terras-raras, já um veículo convencional à combustão utiliza 24 kg de cobre e de metais terras-raras apenas cerca de 100 mg. Ou seja, um carro elétrico precisa de seis vezes mais insumos comparando com um carro convencional. Outro exemplo da aplicação desses minerais se encontra em parques eólicos, em que uma única usina eólica offshore precisa de 8 toneladas de cobre para cada megawatt gerado. Além disso, um parque eólico terrestre chega a requerer nove vezes mais recursos do que uma usina á gás. "
    },
        { // indice 5
        B_id:"MC-t-4",
        txt:"Os minerais classificados como críticos podem variar em cada país do globo conforme sua disponibilidade ou conforme a vulnerabilidade de seus depósitos e essa definição tende a se modificar caso haja mudanças econômicas subjacentes. Todavia, de acordo com as principais potências mundiais, eles são classificados conforme a contribuição para suas cadeias produtivas e os principais minerais críticos em escala mundial são: elementos de terras-raras (ETR), que compreendem os lantanídeos, o ítrio e o escândio,  cobalto, cobre, crômio, érbio, lítio, nióbio, níquel, antimônio, grafite, tungstênio, alumínio, fluorita, etc.  "
    },
    { // indice 6
        B_id:"MC-t-5",
        txt:"O Brasil possui uma posição privilegiada quanto à oferta e produção dos principais minerais críticos, destacando-se no nióbio. O país detém cerca de 90% da produção mundial do mesmo e é detentor de 94% das reservas desse mineral em todo o mundo. As principais reservas nacionais encontram-se pelos estados de Minas Gerais, Goiás e Amazonas. A nação possui uma das maiores reservas de alumínio e manganês do planeta e é um dos maiores produtores de estanho e grafita. Além disso, o território brasileiro importa molibdênio, fosfato, potássio e enxofre.  "
    }
];

// Impactos Ambientais e Sociais (Clara)
const IAS = [
    { B_id: "IAS-T-0", txt: "Como a mineração influencia no ambiente ao redor? E no meio ambiente? E quais são os impactos sociais?" },

    { B_id: "IAS-t-0", txt: "Com a necessidade cada vez maior de aparelhos eletrônicos e a busca por utilizar mais energia limpa, não nos atentamos às consequências de minerar os materiais usados nessa produção. A mineração de minerais críticos (como as terras-raras ou o lítio), quando feita de maneira indevida, pode trazer diversas consequências socioambientais e algumas irreversíveis, como a mudança na paisagem e no ecossistema após a mineração." },

    { B_id: "IAS-t-1", txt: "Se tratando dos recursos hídricos, podemos dar destaque ao consumo excessivo de água que, de acordo com a Exame, em 2024, 240 mil toneladas da produção mundial de lítio usavam 456 bilhões de litros de água, o que poderia suprir as necessidades anuais de 62 milhões de pessoas na África Subsaariana." },

    { B_id: "IAS-t-2", txt: "Outro problema é o rebaixamento dos lençóis freáticos, o que diminui sua vazão e qualidade. Falando de qualidade, a contaminação de corpos d'água é um problema sério, pois os rejeitos da mineração, quando não possuem um bom descarte ou uso, reagem com o ambiente e se tornam ácidos, o que pode chegar em corpos d'água e contaminá-los, por exemplo no rompimento da barragem desses rejeitos em Brumadinho, em que a bacia do rio Paraopeba e seus arredores foram contaminadas e, sendo essa bacia responsável por boa parte do abastecimento de água na região, a saúde de diversas pessoas esteve em risco, da mesma forma que a fauna e flora, pois o evento fez com que cerca de 146 hectares da já desmatada Floresta Atlântica fossem destruídos." },

    { B_id: "IAS-t-3", txt: "Mudando para as consequências no próprio solo, podemos começar logo pela primeira etapa, que no Brasil, como é mais comum minas a céu aberto, temos o desmatamento da região, o que traz diversas consequências muito bem conhecidas, mas além disso, temos a remoção do solo fértil, que é tratado como estéril, logo sendo simplesmente empilhado no próprio solo, o que pode prejudicar a flora da região, porém, indo ainda mais além, essa remoção deixa um solo exposto que se torna suscetível a erosão e provoca dificuldades para regenerar a vegetação após a mineração. Algo que requer ainda mais atenção também é a contaminação do solo de produções agrícolas próximas a essas atividades." },

    { B_id: "IAS-t-4", txt: "Agora, falando sobre a poluição do ar e sonora, as explosões usadas durante a mineração são um dos principais problemas, pois, além do ruído que causam, o que pode ameaçar estruturas próximas e a saúde de pessoas que vivem nas proximidades, elas podem liberar nuvens de poeira que prejudicam o ar, assim podem causar problemas de saúde principalmente aos próprios trabalhadores que estão constantemente nesse ambiente." },

    { B_id: "IAS-t-5", txt: "Como podemos ver, além de problemas ambientais, a mineração está diretamente relacionada à saúde, saneamento básico, desigualdade social e, principalmente, avanço tecnológico." },

    { B_id: "IAS-t-6", txt: "Apesar de existirem diversos problemas, existem algumas soluções para amenizar os impactos, como a contaminação da água poder ser amenizada com técnicas de remoção ou impermeabilização dos rejeitos, como reaterrar e replantar as áreas onde ocorreu a mineração, apesar do ambiente nunca mais ser o mesmo, como controlar a erosão com cortes com taludes, entre muitas outras." },

    { B_id: "IAS-t-7", txt: "Diante desses desafios não devemos desistir de buscar avanço, mas devemos buscar de maneira a não ocorrer exatamente o que não queremos. Devemos tomar cuidado para que, buscando ser mais ecológicos, não destruirmos o próprio ambiente que queremos proteger." }
];


