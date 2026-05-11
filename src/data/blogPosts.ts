export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; body: string; variant: "info" | "tip" | "warning" }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface PexelsImage {
  id: number;
  src: string;
  srcMedium: string;
  width: number;
  height: number;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

export interface BlogPostFaq {
  question: string;
  answer: string;
}

export interface BlogPostData {
  slug: string;
  category: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  dateIso: string;
  readTime: string;
  image: PexelsImage;
  content: ContentBlock[];
  authorName?: string;
  authorCrm?: string;
  authorSpecialty?: string;
  lastReviewedDate?: string;
  faqs?: BlogPostFaq[];
}

export const blogPosts: BlogPostData[] = [
  // ─────────────────────────────────────────────────────────────
  // POST — fralda-geriatrica-farmacia-popular-documentos
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fralda-geriatrica-farmacia-popular-documentos",
    category: "Farmácia",
    title: "Fralda Geriátrica na Farmácia Popular: Documentos Necessários em 2025",
    description:
      "Lista exata de documentos para retirar fralda geriátrica gratuita na Farmácia Popular em 2025. O que a portaria exige — e o que é invenção do atendente.",
    keywords:
      "fralda geriátrica Farmácia Popular documentos, documentos para retirar fralda SUS, lista documentos fralda idoso, laudo médico Farmácia Popular",
    date: "10 mai. 2025",
    dateIso: "2025-05-10",
    readTime: "6 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-05-10",
    image: {
      id: 8657374,
      src: "https://images.pexels.com/photos/8657374/pexels-photo-8657374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      srcMedium: "https://images.pexels.com/photos/8657374/pexels-photo-8657374.jpeg?auto=compress&cs=tinysrgb&h=350",
      width: 6720,
      height: 4480,
      alt: "Idosa conversando com farmacêutica sobre medicamentos em farmácia",
      photographer: "cottonbro studio",
      photographerUrl: "https://www.pexels.com/@cottonbro",
    },
    faqs: [
      {
        question: "Quais documentos são obrigatórios para retirar fralda na Farmácia Popular?",
        answer:
          "Pela Portaria GM/MS nº 3.073/2024, são obrigatórios apenas três: laudo médico com CRM ativo, documento de identidade do paciente e CPF. Comprovante de residência e comprovante de renda não são exigidos pela portaria — mas algumas farmácias pedem na prática.",
      },
      {
        question: "O laudo emitido por telemedicina é aceito na Farmácia Popular?",
        answer:
          "Sim. A Resolução CFM 2.314/2022 regulamenta a telemedicina no Brasil e garante validade jurídica plena aos documentos emitidos por teleconsulta. O programa Farmácia Popular não exige que a consulta tenha sido presencial — exige apenas laudo de médico com CRM ativo.",
      },
      {
        question: "O familiar pode retirar a fralda sem que o idoso esteja presente?",
        answer:
          "Pode. Familiar, cuidador ou representante legal pode retirar mediante apresentação do laudo e do documento de identidade do paciente. Não é necessário o idoso estar presente.",
      },
      {
        question: "Comprovante de renda é necessário para retirar fralda na Farmácia Popular?",
        answer:
          "Não. O programa Farmácia Popular para fralda geriátrica não tem critério de renda. O único requisito clínico é a necessidade médica documentada em laudo.",
      },
      {
        question: "O que fazer se a farmácia recusar o laudo?",
        answer:
          "Primeiro, verifique se o laudo está dentro das normas da portaria (médico com CRM, diagnóstico e indicação de uso contínuo). Se estiver correto, o cidadão pode acionar a Ouvidoria do Ministério da Saúde pelo 136 ou registrar reclamação no PROCON. Farmácias credenciadas não podem recusar laudo tecnicamente correto.",
      },
    ],
    content: [
      {
        type: "p",
        text: "Três documentos. A maioria das farmácias pede mais de dez. Saber a diferença entre o que a <strong>Portaria GM/MS nº 3.073/2024</strong> efetivamente exige e o que o atendente decidiu acrescentar por conta própria pode ser o que separa sua família da fralda gratuita — ou de mais um mês pagando R$ 350 no varejo.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Manda esse link pro grupo da família",
        body: "R$ 350/mês em fraldas — ou zero. O que separa os dois é uma lista de três documentos e um laudo médico. A portaria diz isso. O atendente às vezes não sabe.",
      },
      {
        type: "h2",
        text: "O que a Portaria 3.073/2024 realmente exige",
      },
      {
        type: "p",
        text: "A <a href='https://www.gov.br/saude/pt-br/assuntos/farmacia-popular' target='_blank' rel='noopener' class='text-sky-400 hover:underline'>Portaria GM/MS nº 3.073/2024</a>, que regulamenta o programa Farmácia Popular, define os requisitos mínimos para a entrega de fralda geriátrica. São três:",
      },
      {
        type: "ul",
        items: [
          "Laudo médico com CRM ativo, contendo diagnóstico de incontinência (urinária e/ou fecal) ou condição clínica que justifique uso contínuo — assinado pelo médico com data vigente.",
          "Documento de identidade do paciente — RG, CNH ou equivalente com foto.",
          "CPF do paciente — ou do responsável legal no caso de menores ou incapazes.",
        ],
      },
      {
        type: "p",
        text: "Comprovante de renda: <strong>não exigido</strong>. O programa não tem critério de renda — é direito de qualquer idoso com 60 anos ou mais ou PCD com indicação clínica. Comprovante de internação hospitalar prévia: <strong>não exigido</strong>. Receita de médico especialista: <strong>não exigido</strong> — qualquer médico com CRM ativo pode emitir o laudo.",
      },
      {
        type: "h2",
        text: "Por que algumas farmácias pedem mais do que deveriam",
      },
      {
        type: "p",
        text: "Farmácias credenciadas têm certa autonomia operacional e, na prática, algumas adotam protocolos internos mais restritivos que a portaria. O comprovante de residência é o exemplo mais comum: não é obrigatório por lei, mas muitas unidades exigem na prática para vincular o paciente ao território de atendimento. A orientação é levar por precaução — mesmo que a portaria não obrigue.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "R$ 4.200 por ano — ou zero",
        body: "Uma fralda geriátrica de absorção alta custa entre R$ 2,80 e R$ 4,50 no varejo. Para um uso médio de 4 fraldas por dia, o gasto mensal fica entre R$ 336 e R$ 540. Em 12 meses, a família que não usa o programa paga entre R$ 4.000 e R$ 6.480 por algo que é gratuito por lei.",
      },
      {
        type: "h2",
        text: "Passo a passo para ir à farmácia sem ser mandado embora",
      },
      {
        type: "ol",
        items: [
          "Obtenha o laudo médico — o único documento que a família geralmente não tem. O laudo precisa ter CRM ativo, diagnóstico de incontinência ou condição clínica equivalente e indicação de uso contínuo. Pode ser obtido por teleconsulta.",
          "Separe o RG (ou CNH) e o CPF do paciente. Se o idoso não puder ir pessoalmente, o familiar leva também o próprio documento de identidade.",
          "Localize a farmácia credenciada mais próxima pelo localizador oficial do <a href='https://www.gov.br/saude/pt-br/assuntos/farmacia-popular/localizacao-de-farmacias' target='_blank' rel='noopener' class='text-sky-400 hover:underline'>Ministério da Saúde</a>.",
          "Leve também comprovante de residência — não é obrigatório, mas evita a segunda viagem.",
          "Na farmácia, solicite o cadastro no programa e apresente os documentos. O primeiro cadastro pode levar mais tempo — as retiradas seguintes são mais rápidas.",
        ],
      },
      {
        type: "h2",
        text: "A família que voltou com a portaria no celular",
      },
      {
        type: "p",
        text: "Uma família levou o laudo à Farmácia Popular e o atendente disse que 'não aceitava receita de telemedicina'. Estava errado — a <a href='https://portal.cfm.org.br' target='_blank' rel='noopener' class='text-sky-400 hover:underline'>Resolução CFM 2.314/2022</a> garante validade jurídica plena aos laudos emitidos por teleconsulta, e a portaria do programa não restringe a modalidade de consulta. A família voltou no dia seguinte com a informação correta impressa no celular. O gerente conferiu a legislação, reconheceu o erro do atendente e liberou o cadastro. Desde então, retiram todo mês sem problema. Voltou com a portaria no celular. Saiu com as fraldas na sacola.",
      },
      {
        type: "h2",
        text: "O laudo: o único documento que você precisa conseguir",
      },
      {
        type: "p",
        text: "RG e CPF a família tem. O laudo médico é o obstáculo real — e o único que exige ação. Ele precisa ser emitido por <a href='/dr-roberto-arcanjo' class='text-sky-400 hover:underline'>médico com CRM ativo</a>, conter o diagnóstico correto e a indicação de uso contínuo. Quem tem acompanhamento regular em UBS pode solicitar o documento na próxima consulta. Para quem não tem médico de referência ou não consegue esperar, o laudo pode ser obtido por teleconsulta — veja como funciona em <a href='/laudo-medico-online' class='text-sky-400 hover:underline'>laudo médico online para fralda</a>.",
      },
      {
        type: "h2",
        text: "Quanto tempo leva e quanto custa obter cada documento",
      },
      {
        type: "table",
        headers: ["Documento", "Custo", "Prazo médio", "Onde obter"],
        rows: [
          ["Laudo médico (UBS)", "Gratuito", "Depende da fila", "UBS com médico de família"],
          ["Laudo médico (teleconsulta)", "R$ 49", "Até 24h úteis", "fraldageriatrica.com"],
          ["RG / CNH", "Gratuito (2ª via: até R$ 40)", "Imediato se já tem", "Posto de identificação"],
          ["CPF", "Gratuito", "Imediato se já tem", "Receita Federal / CAIXA / Correios"],
          ["Comprovante de residência", "Gratuito", "Imediato", "Conta de água, luz ou telefone recente"],
        ],
      },
      {
        type: "h2",
        text: "Quando você não precisa do nosso serviço",
      },
      {
        type: "p",
        text: "Se o idoso tem consulta marcada com médico de família na UBS nos próximos dias, peça o laudo diretamente — é gratuito e o médico já conhece o histórico do paciente. Muitas UBSs emitem sem nenhum custo adicional para quem já está em acompanhamento.",
      },
      {
        type: "p",
        text: "O <a href='/laudo-medico-online' class='text-sky-400 hover:underline'>serviço de laudo online por R$ 49</a> resolve o caso de quem não tem médico de referência ativo, precisa do documento com urgência ou mora em área sem UBS próxima. Não é a única solução — é a mais rápida quando as outras não estão disponíveis. Para o guia completo sobre o benefício, veja <a href='/fralda-geriatrica-gratis-sus' class='text-sky-400 hover:underline'>como retirar fralda geriátrica grátis pelo SUS</a>.",
      },
      {
        type: "callout",
        variant: "info",
        title: "E se a farmácia continuar recusando?",
        body: "O cidadão pode registrar reclamação na Ouvidoria do Ministério da Saúde pelo telefone 136 (gratuito) ou pelo portal ouvidoria.saude.gov.br. Farmácias credenciadas pelo programa têm obrigação contratual de cumprir as portarias. Reclamações formais costumam resolver o problema em poucos dias.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // POST 7 — fralda-geriatrica-por-telemedicina
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fralda-geriatrica-por-telemedicina",
    category: "Telemedicina",
    title: "Fralda geriátrica por telemedicina: como obter o laudo online em 2025",
    description:
      "Seu familiar não pode sair de casa? O laudo médico para fralda geriátrica gratuita pode ser obtido 100% por teleconsulta. Sem deslocamento, válido em todo o Brasil.",
    keywords:
      "fralda geriátrica por telemedicina, laudo fralda online, teleconsulta laudo fralda, fralda idoso sem sair de casa",
    date: "10 mai. 2025",
    dateIso: "2025-05-10",
    readTime: "5 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-05-10",
    image: {
      id: 8376222,
      src: "https://images.pexels.com/photos/8376222/pexels-photo-8376222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      srcMedium: "https://images.pexels.com/photos/8376222/pexels-photo-8376222.jpeg?auto=compress&cs=tinysrgb&h=350",
      width: 5710,
      height: 3807,
      alt: "Médico idoso em jaleco branco realizando teleconsulta online para emissão de laudo médico",
      photographer: "Tima Miroshnichenko",
      photographerUrl: "https://www.pexels.com/@tima-miroshnichenko",
    },
    faqs: [
      {
        question: "O laudo emitido por telemedicina é aceito na Farmácia Popular?",
        answer: "Sim. A Portaria GM/MS nº 3.073/2024 e a Resolução CFM 2.314/2022 garantem a validade dos laudos emitidos por telemedicina. Se uma unidade recusar, o gerente pode verificar e confirmar a validade — ou você pode acionar o Disque Saúde (136).",
      },
      {
        question: "Preciso estar presente na teleconsulta ou o familiar pode participar?",
        answer: "Idealmente, o paciente participa da videochamada. Se o idoso não tiver condições (por exemplo, está acamado ou tem déficit cognitivo severo), um familiar ou cuidador pode participar em seu nome, descrevendo o quadro clínico. O médico avalia caso a caso.",
      },
      {
        question: "Qual a validade do laudo emitido por telemedicina?",
        answer: "O laudo por telemedicina tem a mesma validade que o presencial — geralmente de 6 a 12 meses para uso contínuo. Ao vencer, basta uma nova teleconsulta para renovar, sem repetir exames.",
      },
      {
        question: "Um procurador pode retirar a fralda na farmácia com o laudo de telemedicina?",
        answer: "Sim. Se o idoso não puder comparecer, um familiar ou cuidador autorizado pode retirar apresentando os documentos do idoso (RG e CPF), seu próprio documento de identidade e o laudo médico.",
      },
      {
        question: "O laudo de telemedicina funciona em todo o Brasil?",
        answer: "Sim. O laudo tem validade nacional e é aceito em qualquer unidade do programa Farmácia Popular credenciada no Brasil, independentemente do estado onde foi emitido ou onde o idoso reside.",
      },
    ],
    content: [
      {
        type: "p",
        text: "Sua família paga em torno de R$ 350 por mês em fraldas geriátricas. A retirada gratuita exige um laudo médico. Esse laudo pode sair por teleconsulta — sem deslocamento, sem sala de espera, sem consulta que dura três horas para ouvir 'está tudo bem'. A <a href=\"https://portal.cfm.org.br/noticias/cfm-publica-resolucao-que-regulamenta-a-telemedicina-no-brasil/\" target=\"_blank\" rel=\"noopener\" class=\"text-sky-400 hover:underline\">Resolução CFM 2.314/2022</a> regulamenta a telemedicina no Brasil e o laudo emitido com assinatura digital ICP-Brasil tem o mesmo valor legal que o presencial.",
      },
      {
        type: "callout",
        title: "Manda pro grupo da família",
        body: "Laudo médico para fralda geriátrica pode ser obtido 100% online, por telemedicina. Ninguém precisa sair de casa. Aceito em qualquer Farmácia Popular do Brasil.",
        variant: "tip",
      },
      { type: "h2", text: "O que a Resolução CFM 2.314/2022 mudou" },
      {
        type: "p",
        text: "Antes de 2022, a telemedicina no Brasil vivia em zona cinzenta — tolerada durante a pandemia, sem base legal permanente. A resolução acabou com a ambiguidade. Hoje, qualquer médico com CRM ativo pode realizar teleconsulta, emitir prescrições e assinar laudos remotamente, desde que o documento tenha assinatura digital com certificado ICP-Brasil.",
      },
      {
        type: "p",
        text: "Para o laudo de <a href=\"/blog/fralda-geriatrica-gratis-sus\" class=\"text-sky-400 hover:underline\">fralda geriátrica gratuita pelo SUS</a>, os requisitos legais são: médico com CRM ativo, diagnóstico que justifique o uso contínuo e assinatura digital válida. Onde o médico está fisicamente na hora da assinatura, a legislação não exige que seja no mesmo endereço que o paciente.",
      },
      {
        type: "ul",
        items: [
          "O laudo por telemedicina tem validade jurídica idêntica ao presencial",
          "A assinatura digital ICP-Brasil garante autenticidade e não pode ser repudiada",
          "O documento pode ser enviado por e-mail em PDF — não precisa imprimir",
          "Qualquer Farmácia Popular credenciada é obrigada a aceitar (Portaria GM/MS nº 3.073/2024)",
        ],
      },
      { type: "h2", text: "Como obter o laudo por telemedicina — passo a passo" },
      {
        type: "ol",
        items: [
          "Acesse a plataforma de teleconsulta e agende com médico geriatra ou clínico geral.",
          "Na hora marcada, o paciente ou familiar participa da videochamada — dura de 10 a 20 minutos.",
          "O médico avalia o histórico, confirma a necessidade de uso contínuo e emite o laudo.",
          "O laudo chega por e-mail em PDF com assinatura digital ICP-Brasil, em até 24 horas úteis.",
          "Leve o laudo (impresso ou no celular), RG e CPF do idoso à <a href=\"/blog/farmacia-popular-perto-de-mim\" class=\"text-sky-400 hover:underline\">Farmácia Popular mais próxima</a>.",
          "Retire as fraldas. A partir do segundo mês, só o laudo vigente é necessário.",
        ],
      },
      {
        type: "callout",
        title: "48 horas para o primeiro mês gratuito",
        body: "Do agendamento até a retirada na farmácia, o processo completo leva em média 48 horas úteis. Se sua família está pagando R$ 350 este mês, pode ser o último.",
        variant: "warning",
      },
      { type: "h2", text: "3.000 km de distância, resolvido pelo celular" },
      {
        type: "p",
        text: "Um neto de 28 anos, morando em São Paulo, precisava resolver a fralda da avó de 82 anos no interior do Ceará. A avó não podia sair de casa. Ele não tinha como ir até lá. Quando descobriu que o <a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">laudo médico</a> podia ser emitido por telemedicina e que um procurador podia fazer a retirada, o problema passou a ter solução. Teleconsulta na quarta-feira, laudo no e-mail na quinta, retirada na sexta.",
      },
      {
        type: "p",
        text: "Não era preguiça nem descaso — era lógica. Quando o deslocamento é inviável por distância, por condição clínica ou por impossibilidade de deixar o paciente sozinho, a telemedicina não é atalho. É o único caminho. <strong>Resolveu pelo celular, do outro lado do Brasil.</strong>",
      },
      { type: "h2", text: "Quanto custa e quanto tempo leva" },
      {
        type: "p",
        text: "A teleconsulta para emissão de laudo de fralda custa entre R$ 49 e R$ 150, dependendo da plataforma. É pagamento único — o laudo vale 6 a 12 meses. No primeiro mês, você paga a consulta e já começa a economizar em fraldas. A partir do segundo mês, a economia é integral.",
      },
      {
        type: "table",
        headers: ["Item", "Custo", "Frequência"],
        rows: [
          ["Teleconsulta + laudo", "R$ 49 a R$ 150", "A cada 6–12 meses"],
          ["Fralda pelo SUS com laudo", "R$ 0", "Todo mês"],
          ["Fralda paga sem laudo", "R$ 300 a R$ 500", "Todo mês"],
        ],
      },
      { type: "h2", text: "Quando a telemedicina não é a melhor opção" },
      {
        type: "p",
        text: "Se o idoso já tem médico de família, geriatra particular ou acompanhamento regular na UBS, a opção mais simples é pedir o <a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">laudo</a> a esse mesmo médico na próxima consulta — é gratuito e evita qualquer custo adicional. A telemedicina faz sentido quando não há médico de referência, quando o deslocamento é inviável ou quando a consulta presencial levaria semanas.",
      },
      {
        type: "p",
        text: "Alguns municípios oferecem o laudo gratuitamente via CRAS ou UBS especializada em atenção ao idoso. Vale ligar antes para o serviço de <a href=\"https://www.gov.br/saude/pt-br\" target=\"_blank\" rel=\"noopener\" class=\"text-sky-400 hover:underline\">saúde municipal</a> e perguntar. Se a resposta for 'pode vir pegar amanhã', não há motivo para pagar teleconsulta.",
      },
      {
        type: "callout",
        title: "A farmácia pode recusar o laudo de telemedicina?",
        body: "Tecnicamente, não. A Portaria GM/MS nº 3.073/2024 e a Resolução CFM 2.314/2022 garantem a validade do documento. Se o atendente recusar, peça para falar com o gerente e mostre as portarias. Na prática, o gerente confirma e o laudo é aceito. Se a recusa persistir, acione o Disque Saúde: 136.",
        variant: "info",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 1
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fralda-geriatrica-gratis-sus",
    category: "Direitos",
    title: "Como retirar fralda geriátrica de graça pelo SUS em 2025",
    description:
      "Sua família pode estar pagando R$ 350 por mês em algo que o SUS cobre inteiro. Entenda quem tem direito, o que levar e como retirar fralda geriátrica grátis pela Farmácia Popular.",
    keywords:
      "fralda geriátrica grátis SUS, Farmácia Popular fralda, retirar fralda idoso, fralda geriátrica gratuita 2025",
    date: "2 mai. 2025",
    dateIso: "2025-05-02",
    readTime: "5 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-05-02",
    image: {
      id: 7551596,
      src: "/images/blog/7551596-large.jpg",
      srcMedium: "/images/blog/7551596-medium.jpg",
      width: 940,
      height: 627,
      alt: "Familiar ajudando idoso a acessar direitos de saúde pelo SUS",
      photographer: "Kampus Production",
      photographerUrl: "https://www.pexels.com/@kampus",
    },
    faqs: [
      { question: "Quem tem direito à fralda geriátrica gratuita pelo SUS?", answer: "Idosos com 60 anos ou mais e PCDs com incontinência, além de pacientes em cuidados paliativos, conforme a Portaria GM/MS nº 3.073/2024." },
      { question: "Precisa de Cadastro Único (CadÚnico) para retirar fralda no SUS?", answer: "Não. A Farmácia Popular não exige CadÚnico. Basta apresentar o laudo médico, identidade e CPF do paciente." },
      { question: "Qual a validade do laudo médico para retirar fraldas?", answer: "Em geral, os laudos de uso contínuo para fraldas têm validade de 6 a 12 meses, devendo ser renovados ao vencimento." },
      { question: "Familiar pode retirar a fralda para o idoso?", answer: "Sim. Se o idoso não puder comparecer, um familiar ou cuidador pode fazer a retirada apresentando os documentos do idoso, seu próprio documento de identidade e o laudo médico." },
      { question: "Qual a quantidade mensal de fraldas que o SUS libera?", answer: "A quantidade máxima mensal é baseada estritamente na prescrição que consta no laudo médico, que define o uso diário, respeitando os tetos do programa." }
    ],
    content: [
      {
        type: "p",
        text: "Sua família paga em torno de R$ 350 por mês em fraldas geriátricas. O governo cobre esse gasto inteiro — e esse direito existe desde 2017. Em 2025, a maioria das famílias ainda não sabe porque nenhum médico, nenhuma UBS e nenhuma assistente social foi obrigada a contar.",
      },
      {
        type: "callout",
        title: "Mande no grupo da família",
        body: "Idosos com 60 anos ou mais e PCDs têm direito a fralda grátis pela Farmácia Popular do SUS (Portaria GM/MS nº 3.073/2024). Precisa só de laudo médico. Pode ser feito 100% online.",
        variant: "tip",
      },
      { type: "h2", text: "Quem tem direito — e por quê quase ninguém retira" },
      {
        type: "p",
        text: "A <a href=\"https://www.gov.br/saude/pt-br\" target=\"_blank\" rel=\"noopener\" class=\"text-sky-400 hover:underline\">Portaria GM/MS nº 3.073/2024</a> e a Portaria nº 937/2017 do Ministério da Saúde garantem fralda geriátrica gratuita pelo programa Farmácia Popular. São beneficiários: idosos com 60 anos ou mais com incontinência, mobilidade reduzida ou em situação de acamamento; pessoas com deficiência de qualquer idade com necessidade contínua; e pacientes em cuidados paliativos domiciliares.",
      },
      {
        type: "p",
        text: "O programa existe. O estoque existe. A lei existe. O que falta, em geral, é o único documento que o sistema exige: o <a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">laudo médico</a>. Sem ele, a farmácia não pode liberar. Com ele, a retirada é mensal, gratuita e ilimitada dentro do que o médico prescrever.",
      },
      {
        type: "p",
        text: "Uma família de classe média, com renda confortável, jamais imaginou pedir coisa do governo. Quando a mãe começou a precisar de fralda, os R$ 350 mensais incomodavam mas não apertavam. Quando descobriram que era direito legal, a percepção mudou. <strong>Não é esmola. É o imposto da minha mãe voltando pra ela.</strong> E tinha razão.",
      },
      { type: "h2", text: "O que é o laudo médico — e por que o governo exige um" },
      {
        type: "p",
        text: "Para receber a fralda gratuitamente, o idoso precisa de um laudo assinado por médico com CRM ativo provando que precisa de fralda. É o equivalente burocrático de pedir atestado para confirmar que está chovendo. Mas é o que a lei determina — e a Resolução CFM 2.314/2022 é clara: só médico assina.",
      },
      {
        type: "p",
        text: "A boa notícia: esse laudo pode ser obtido 100% online, por teleconsulta, sem nenhum deslocamento. O documento é emitido com assinatura digital ICP-Brasil, tem validade jurídica idêntica ao laudo presencial e é aceito em qualquer unidade do programa.",
      },
      {
        type: "callout",
        title: "R$ 4.200 por ano — ou zero",
        body: "R$ 350 por mês em fraldas equivale a R$ 4.200 por ano. Para uma família que usa o teto de absorção (6 fraldas/dia), pode chegar a R$ 7.200. Esse valor continua saindo do bolso de quem não tem o laudo.",
        variant: "warning",
      },
      { type: "h2", text: "Passo a passo para retirar a fralda pelo SUS" },
      {
        type: "ol",
        items: [
          "Obtenha o laudo médico — por teleconsulta online, sem sair de casa.",
          "Localize a <a href=\"/blog/farmacia-popular-perto-de-mim\" class=\"text-sky-400 hover:underline\">Farmácia Popular mais próxima</a> no site oficial do Ministério da Saúde ou no app Meu SUS Digital.",
          "Vá com o laudo (impresso ou PDF), documento de identidade e CPF do paciente.",
          "O farmacêutico registra o benefício no sistema e entrega as fraldas conforme a prescrição.",
          "Repita todo mês com o laudo vigente. Quando vencer, renove por teleconsulta.",
        ],
      },
      { type: "h2", text: "Quanto tempo leva — e quanto custa o laudo" },
      {
        type: "p",
        text: "O laudo por teleconsulta sai em até 24 horas úteis. O custo é o da consulta médica — geralmente entre R$ 49 e R$ 150, pagamento único. A fralda em si é zero. A lógica é simples: você paga pelo ato médico (que é obrigatório por lei), não pelo produto.",
      },
      {
        type: "p",
        text: "Para ter uma ideia da proporção: no primeiro mês, com o laudo, você já recupera o custo da consulta e ainda economiza R$ 200 ou mais. Do segundo mês em diante, é tudo economia. <strong>Se o seu familiar precisa de fralda agora, esse cálculo começa hoje.</strong>",
      },
      { type: "h2", text: "O laudo tem validade? Precisa renovar?" },
      {
        type: "p",
        text: "Sim. Em geral, laudos para uso contínuo têm validade de 6 a 12 meses. Quando vencer, uma nova teleconsulta é suficiente para renovar — sem precisar repetir exames ou ir pessoalmente ao médico. Configure um lembrete 30 dias antes do vencimento para não ter lacuna na retirada.",
      },
      {
        type: "callout",
        title: "E se a farmácia disser que não aceita?",
        body: "Se uma unidade recusar um laudo válido emitido por telemedicina, ela está descumprindo portaria federal. A Resolução CFM 2.314/2022 regulamenta a validade do documento. Você pode acionar o Disque Saúde (136) ou retornar com a portaria em mãos — geralmente resolve na hora.",
        variant: "info",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 2
  // ─────────────────────────────────────────────────────────────
  {
    slug: "laudo-medico-fralda-o-que-e",
    category: "Telemedicina",
    title: "O que é o laudo médico para fralda e por que ele é obrigatório",
    description:
      "Um documento de uma página separa sua família de até R$ 7.200 por ano. Saiba o que precisa constar no laudo, por que a maioria das farmácias exige e como obtê-lo sem sair de casa.",
    keywords:
      "laudo médico fralda, laudo fralda Farmácia Popular, laudo fralda geriátrica online, teleconsulta laudo fralda",
    date: "18 abr. 2025",
    dateIso: "2025-04-18",
    readTime: "4 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-04-18",
    image: {
      id: 7195114,
      src: "/images/blog/7195114-large.jpg",
      srcMedium: "/images/blog/7195114-medium.jpg",
      width: 940,
      height: 627,
      alt: "Médico em teleconsulta online emitindo laudo médico para fralda geriátrica",
      photographer: "Kaboompics",
      photographerUrl: "https://www.pexels.com/@karola-g",
    },
    faqs: [
      { question: "O que precisa estar escrito no laudo médico para fralda?", answer: "O documento deve conter o nome e CPF do paciente, o CID da condição que justifica o uso contínuo, a quantidade de fraldas por dia, tamanho, e a assinatura digital ICP-Brasil do médico com CRM ativo." },
      { question: "Farmácia Popular aceita laudo de telemedicina?", answer: "Sim. A Resolução CFM 2.314/2022 garante a validade legal do laudo médico emitido por telemedicina e com assinatura digital ICP-Brasil, devendo ser aceito em qualquer farmácia credenciada." },
      { question: "Posso usar uma receita comum ou atestado da UBS?", answer: "Não. Atestados ou declarações genéricas não têm os campos técnicos exigidos pelo Ministério da Saúde e normalmente são recusados pelo sistema da Farmácia Popular." },
      { question: "O que fazer se a farmácia se recusar a aceitar o laudo online?", answer: "Caso o documento seja válido (ICP-Brasil), a farmácia está descumprindo portaria federal. Você pode registrar a reclamação ligando para o Disque Saúde no 136." },
      { question: "O laudo tem validade nacional?", answer: "Sim. Um laudo médico emitido por teleconsulta, com certificação digital nacional, pode ser usado para retirar as fraldas em qualquer uma das mais de 34.000 farmácias credenciadas no Brasil." }
    ],
    content: [
      {
        type: "p",
        text: "Um documento de uma página separa sua família de até R$ 7.200 por ano. Esse documento chama-se laudo médico para fralda — e tem requisitos técnicos específicos que uma receita comum ou uma declaração de UBS não satisfaz.",
      },
      { type: "h2", text: "Por que o laudo é obrigatório — e não é burocracia à toa" },
      {
        type: "p",
        text: "O programa <a href=\"/blog/fralda-geriatrica-gratis-sus\" class=\"text-sky-400 hover:underline\">Farmácia Popular</a> classifica a fralda geriátrica como insumo de uso contínuo, o que exige comprovação de necessidade clínica. A Resolução CFM 2.314/2022 determina que qualquer prescrição — mesmo por telemedicina — só tem validade jurídica se assinada por médico com CRM ativo.",
      },
      {
        type: "p",
        text: "Na prática, o governo pede prova técnica de que a pessoa precisa do produto. É o equivalente burocrático de pedir laudo para confirmar que está chovendo — mas a portaria é clara, e a farmácia não pode liberar sem ele. O caminho mais curto é simplesmente conseguir o documento certo da primeira vez.",
      },
      {
        type: "callout",
        title: "Atenção: nem todo 'papel do médico' funciona",
        body: "Declarações genéricas, atestados assinados por enfermeiros, receitas de clínica popular sem assinatura digital ICP-Brasil — tudo isso costuma ser recusado. O laudo precisa seguir o padrão exigido pelo programa. Farmácia que aceita qualquer coisa está em desacordo com a portaria.",
        variant: "warning",
      },
      { type: "h2", text: "O que precisa estar no laudo — campo por campo" },
      {
        type: "ul",
        items: [
          "<strong>Identificação do paciente:</strong> nome completo, CPF e data de nascimento.",
          "<strong>CID da condição:</strong> o código da doença que justifica o uso contínuo (incontinência, mobilidade reduzida, acamamento).",
          "<strong>Justificativa clínica:</strong> texto descrevendo a necessidade — sem isso, a farmácia pode questionar.",
          "<strong>Quantidade e tamanho:</strong> número de fraldas por dia e <a href=\"/blog/tamanho-certo-fralda-adulto\" class=\"text-sky-400 hover:underline\">tamanho indicado</a> (P, M, G ou XG).",
          "<strong>Assinatura digital ICP-Brasil:</strong> com número do CRM e carimbo do médico.",
          "<strong>Data e validade:</strong> sem data, o sistema da farmácia pode bloquear.",
        ],
      },
      {
        type: "p",
        text: "Cada campo tem uma função. O CID, por exemplo, não é detalhe: é o que permite ao farmacêutico registrar o benefício no sistema do Ministério da Saúde. Um laudo sem CID correto pode ser aceito visualmente e rejeitado pelo sistema — o que significa volta à estaca zero.",
      },
      { type: "h2", text: "Como obter o laudo online — sem sair de casa" },
      {
        type: "p",
        text: "Com a regulamentação da telemedicina (Resolução CFM 2.314/2022), é legal e válido obter o laudo por videochamada. O processo funciona assim:",
      },
      {
        type: "ol",
        items: [
          "Preencha os dados do paciente no site da clínica de telemedicina.",
          "Envie os documentos básicos: RG, CPF, comprovante de residência e, se houver, laudos anteriores.",
          "Faça a teleconsulta por vídeo — dura de 10 a 20 minutos.",
          "Receba o laudo assinado digitalmente em ICP-Brasil por WhatsApp ou e-mail.",
        ],
      },
      {
        type: "p",
        text: "Uma família levou o laudo à Farmácia Popular e o atendente disse que <strong>não aceitava receita de telemedicina</strong>. Estava errado. A família voltou com a Portaria GM/MS e a Resolução CFM 2.314/2022 no celular. O gerente conferiu, reconheceu o erro e o laudo foi aceito. Desde então, retiram todo mês sem problema. <strong>Voltou com a portaria no celular. Saiu com as fraldas na sacola.</strong>",
      },
      { type: "h2", text: "O laudo online tem a mesma validade do presencial?" },
      {
        type: "p",
        text: "Sim — desde que assinado com certificado ICP-Brasil e emitido por médico com CRM ativo. As farmácias credenciadas são orientadas pelo Ministério da Saúde a aceitar o documento digital. Se uma unidade recusar, a orientação é registrar reclamação no Disque Saúde (136) e, se necessário, retornar com a documentação legal.",
      },
      {
        type: "callout",
        title: "Se a farmácia recusar um laudo válido",
        body: "1. Peça que o gerente verifique no sistema do Farmácia Popular. 2. Ligue para o Disque Saúde: 136 (gratuito). 3. Entre em contato com a clínica emissora — ajustes pontuais de formatação são feitos sem custo adicional.",
        variant: "info",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────────────────────
  {
    slug: "cuidar-de-idoso-em-casa-guia",
    category: "Cuidadores",
    title: "Guia prático para cuidar de idoso em casa: o que você precisa saber",
    description:
      "Queda é a principal causa de hospitalização de idosos no Brasil — e acontece mais no banheiro do que na rua. Guia direto de higiene, medicamentos, alimentação e direitos do cuidador.",
    keywords:
      "cuidar de idoso em casa, guia cuidador idoso, rotina idoso acamado, cuidados idoso incontinência",
    date: "10 abr. 2025",
    dateIso: "2025-04-10",
    readTime: "8 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-04-10",
    image: {
      id: 18459193,
      src: "/images/blog/18459193-large.jpg",
      srcMedium: "/images/blog/18459193-medium.jpg",
      width: 940,
      height: 627,
      alt: "Cuidador servindo chá para idosa em casa, demonstrando cuidado e atenção diária",
      photographer: "Jsme MILA",
      photographerUrl: "https://www.pexels.com/@jsme-mila-523821574",
    },
    faqs: [
      { question: "Qual a causa mais comum de hospitalização em idosos?", answer: "A queda, especialmente em ambientes domésticos como o banheiro, é a principal causa evitável de hospitalizações severas no Brasil." },
      { question: "Como evitar quedas no banheiro de idosos?", answer: "A instalação de barras de apoio ao lado do vaso sanitário e dentro do box, além da remoção de tapetes soltos e o uso de calçado adequado." },
      { question: "Quantas vezes por dia devo trocar a fralda geriátrica?", answer: "Recomenda-se a troca a cada 3 ou 4 horas para manter a pele seca e evitar dermatites, ou imediatamente após evacuação." },
      { question: "Creme de barreira é necessário a cada troca de fralda?", answer: "Sim. O creme à base de óxido de zinco protege a pele contra a umidade constante, prevenindo assaduras, dermatites e infecções fúngicas." },
      { question: "O que fazer se o idoso recusa beber água?", answer: "Ofereça líquidos de forma ativa em pequenos goles durante todo o dia, e inclua alimentos ricos em água na dieta, como frutas, gelatinas e caldos." }
    ],
    content: [
      {
        type: "p",
        text: "Queda é a principal causa de hospitalização de idosos no Brasil. O lugar onde acontece com mais frequência não é a rua, nem a escada — é o banheiro. E na maioria dos casos, a mudança que teria evitado custaria menos de R$ 80.",
      },
      {
        type: "p",
        text: "Cuidar de um familiar idoso em casa é, ao mesmo tempo, a coisa mais difícil e a mais importante que uma família pode fazer. Este guia não vai romantizar isso. Vai dar o que você precisa: informação densa, passo a passo, e os direitos que a maioria das famílias desconhece.",
      },
      { type: "h2", text: "1. Adapte o ambiente antes de precisar" },
      {
        type: "p",
        text: "Barras de apoio no banheiro, ao lado do vaso e dentro do box, são a intervenção de maior impacto por menor custo. Instalar depois de uma queda é prevenção atrasada. Instalar antes é prevenção real.",
      },
      {
        type: "ul",
        items: [
          "Barras de apoio: ao lado do vaso sanitário e dentro do box — parafusadas na parede, não ventosas.",
          "Tapetes: remover todos os soltos do quarto ao banheiro. Antiderrapante fixo no box é diferente.",
          "Iluminação: sensor de presença no corredor e no banheiro — o idoso não vai ligar a luz às 3h.",
          "Cama: altura que permita apoiar os dois pés no chão ao sentar. Ajustar com regulagem ou calço.",
          "Calçados: chinelo de solado mole é risco. Calçado fechado antiderrapante é a alternativa.",
        ],
      },
      {
        type: "callout",
        title: "O que custa uma queda vs. o que custa prevenir",
        body: "Uma internação por fratura de quadril pode ultrapassar R$ 15.000 entre cirurgia, UTI e reabilitação. Um kit de barras de apoio custa entre R$ 60 e R$ 200. A conta é simples.",
        variant: "tip",
      },
      { type: "h2", text: "2. Rotina de higiene para quem usa fralda" },
      {
        type: "p",
        text: "Para idosos com <a href=\"/blog/incontinencia-urinaria-idosos\" class=\"text-sky-400 hover:underline\">incontinência</a>, a higiene inadequada não é apenas desconforto — é porta de entrada para infecção urinária, dermatite e úlcera de pressão. Os três problemas juntos são responsáveis por internações que poderiam ter sido evitadas.",
      },
      {
        type: "ol",
        items: [
          "Troca a cada 3-4 horas, independente de estar molhada — ou imediatamente após evacuação.",
          "Limpeza com lenço umedecido sem álcool, sempre da frente para trás nas mulheres.",
          "Creme de barreira com óxido de zinco a cada troca — não é opcional.",
          "Região íntima seca antes de fechar a nova fralda. Umidade prolongada é o ambiente favorito de fungo.",
          "Sabonete de pH neutro no banho — sem esfregar. Enxágue completo.",
        ],
      },
      {
        type: "p",
        text: "Vermelhidão que não melhora em 48h com o creme de barreira, bolhas ou pele descamada são sinais de dermatite que exige avaliação médica. Pode ser infecção fúngica ou bacteriana — e o tratamento é diferente para cada uma.",
      },
      { type: "h2", text: "3. Medicamentos: o maior risco subestimado" },
      {
        type: "p",
        text: "Idosos tomam, em média, cinco ou mais medicamentos por dia. Polifarmácia — o uso de múltiplos remédios — aumenta o risco de interações, esquecimentos e reações adversas que frequentemente são confundidas com 'o idoso está piorando'. Com frequência, é o remédio.",
      },
      {
        type: "ul",
        items: [
          "Organizador semanal com divisão por horário — não por dia.",
          "Lista atualizada de todos os medicamentos com dose e horário, sempre na bolsa para consultas.",
          "Alarme no celular para cada horário — não para 'manhã', para '8h15'.",
          "Nunca suspender medicamento de uso contínuo sem orientação médica, mesmo que o idoso diga que 'não precisa mais'.",
          "Local de armazenamento: fresco, seco, fora do alcance de crianças — nunca na cozinha ou no banheiro.",
        ],
      },
      { type: "h2", text: "4. Alimentação e hidratação" },
      {
        type: "p",
        text: "Idosos têm menor sensação de sede — não por capricho, mas por uma alteração fisiológica real nos receptores de osmolaridade. Esperar o idoso pedir água é esperar tarde demais. Ofereça líquidos ativamente ao longo do dia.",
      },
      {
        type: "p",
        text: "Disfagia — a dificuldade de engolir — afeta um percentual significativo de idosos e frequentemente passa despercebida. Sinais: tosse durante ou após refeições, voz molhada após engolir, recusa de líquidos. Se houver suspeita, fonoaudiólogo é a referência.",
      },
      { type: "h2", text: "5. Os direitos que a maioria dos cuidadores desconhece" },
      {
        type: "p",
        text: "Uma cuidadora profissional atendia três famílias. Cada uma gastava entre R$ 300 e R$ 500 por mês em fraldas. Quando ela descobriu o programa <a href=\"/blog/fralda-geriatrica-gratis-sus\" class=\"text-sky-400 hover:underline\">Farmácia Popular</a> e ajudou as três a se cadastrarem, a economia combinada ultrapassou R$ 1.000 por mês. Uma das famílias usou o dinheiro para contratar fisioterapia semanal para o idoso. <strong>O dinheiro da fralda virou fisioterapia.</strong>",
      },
      {
        type: "ul",
        items: [
          "<strong>Fralda gratuita:</strong> Idosos 60+ e PCDs têm direito pela Farmácia Popular — basta o <a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">laudo médico</a>.",
          "<strong>BPC (Benefício de Prestação Continuada):</strong> Para idosos de baixa renda — vale consultar o INSS.",
          "<strong>CAPS:</strong> Apoio psicológico gratuito para o cuidador — não só para o paciente.",
          "<strong>Centros-dia:</strong> Municípios maiores têm serviços de apoio diurno para idosos — reduz a sobrecarga do cuidador.",
        ],
      },
      {
        type: "callout",
        title: "Cuide de quem cuida",
        body: "Burnout do cuidador não é fraqueza — é consequência previsível de uma rotina que não tem folga. Se você cuida de um idoso em casa, o CAPS da sua cidade oferece apoio psicológico gratuito. Pergunte sobre o programa de atenção ao cuidador.",
        variant: "info",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 4
  // ─────────────────────────────────────────────────────────────
  {
    slug: "incontinencia-urinaria-idosos",
    category: "Saúde",
    title: "Incontinência urinária em idosos: causas, tratamento e convívio",
    description:
      "Três em cada dez idosos brasileiros têm incontinência urinária — e menos da metade chega a um especialista. O motivo raramente é falta de acesso. Entenda causas, tipos e como tratar.",
    keywords:
      "incontinência urinária idosos, tratamento incontinência urinária, tipos incontinência, incontinência idosos causas",
    date: "28 mar. 2025",
    dateIso: "2025-03-28",
    readTime: "6 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-03-28",
    image: {
      id: 5790822,
      src: "/images/blog/5790822-large.jpg",
      srcMedium: "/images/blog/5790822-medium.jpg",
      width: 940,
      height: 627,
      alt: "Casal de idosos monitorando saúde em casa, representando cuidado e autonomia",
      photographer: "Vlada Karpovich",
      photographerUrl: "https://www.pexels.com/@vlada-karpovich",
    },
    faqs: [
      { question: "Incontinência urinária em idosos tem cura?", answer: "Dependendo da causa, pode haver cura total. Em outros casos, há tratamentos fisioterápicos ou medicamentosos que promovem um controle significativo ou a resolução do problema." },
      { question: "Fisioterapia pélvica funciona para incontinência?", answer: "Sim. É o tratamento de primeira linha para incontinência de esforço e tem eficácia amplamente documentada no fortalecimento da musculatura pélvica." },
      { question: "Infecção urinária causa incontinência?", answer: "Sim. Infecções urinárias podem gerar incontinência aguda, além de sintomas como confusão mental e agitação em idosos. É uma causa tratável e reversível." },
      { question: "Homens também sofrem de incontinência urinária?", answer: "Sim. Em homens idosos, a incontinência está frequentemente relacionada ao aumento benigno da próstata, resultando em incontinência por transbordamento." },
      { question: "Quais remédios causam incontinência em idosos?", answer: "O uso de diuréticos, relaxantes musculares, alguns antidepressivos e medicamentos para pressão alta podem agravar ou desencadear perda urinária temporária." }
    ],
    content: [
      {
        type: "p",
        text: "Três em cada dez idosos brasileiros têm incontinência urinária. Menos da metade chega a um médico especialista. O motivo raramente é falta de acesso — é a palavra que ninguém quer dizer em voz alta durante o almoço de família.",
      },
      {
        type: "callout",
        title: "Incontinência não é envelhecimento — é condição médica",
        body: "Aceitar a incontinência como consequência inevitável da idade é o erro mais comum. Dependendo do tipo e da causa, pode ser tratada, controlada ou significativamente melhorada. A primeira conversa precisa ser com um urologista ou geriatra — não com a prateleira de fraldas da farmácia.",
        variant: "tip",
      },
      { type: "h2", text: "Os cinco tipos — e por que o tipo importa" },
      {
        type: "p",
        text: "Tratar incontinência sem saber o tipo é como tomar antibiótico sem saber qual bactéria. Pode não funcionar, pode piorar. O diagnóstico correto é o que define se o tratamento será fisioterapia, medicamento, cirurgia ou adaptação de rotina.",
      },
      {
        type: "ul",
        items: [
          "<strong>De esforço:</strong> perda ao tossir, espirrar, rir ou fazer esforço físico. Mais comum em mulheres após partos vaginais. Responde bem à fisioterapia pélvica.",
          "<strong>De urgência (bexiga hiperativa):</strong> vontade súbita e intensa, seguida de perda involuntária. Tem medicamentos específicos eficazes.",
          "<strong>Mista:</strong> combinação das duas acima. Tratamento é combinado.",
          "<strong>Por transbordamento:</strong> bexiga não esvazia completamente e transborda. Mais comum em homens com próstata aumentada.",
          "<strong>Funcional:</strong> bexiga funciona normalmente, mas o idoso não chega ao banheiro a tempo por limitação de mobilidade ou cognição.",
        ],
      },
      { type: "h2", text: "O que causa incontinência em idosos" },
      {
        type: "ul",
        items: [
          "Enfraquecimento dos músculos do assoalho pélvico com o envelhecimento.",
          "Hiperplasia benigna de próstata — em homens, frequentemente a causa principal.",
          "<strong>Infecção urinária — causa tratável e reversível.</strong> Sempre descartar primeiro.",
          "Efeito colateral de medicamentos: diuréticos, hipnóticos e alguns antidepressivos.",
          "Doenças neurológicas: Parkinson, AVC, demência com corpos de Lewy.",
          "Diabetes não controlada — afeta os nervos que controlam a bexiga.",
          "Mobilidade reduzida que impede chegar ao banheiro a tempo.",
        ],
      },
      {
        type: "p",
        text: "A infecção urinária merece atenção especial: em idosos, pode se apresentar sem os sintomas clássicos de ardor e frequência. A primeira manifestação pode ser confusão mental, agitação ou queda súbita de função cognitiva. Muitas famílias interpretam como piora da demência quando é infecção tratável com antibiótico.",
      },
      { type: "h2", text: "Como é feito o diagnóstico" },
      {
        type: "p",
        text: "O diagnóstico começa com histórico clínico, lista de medicamentos em uso e exame de urina simples para descartar infecção. Em casos mais complexos, o médico pode solicitar um estudo urodinâmico — um exame que avalia como a bexiga armazena e libera urina. Não é obrigatório na maioria dos casos.",
      },
      { type: "h2", text: "Opções de tratamento" },
      { type: "h3", text: "Sem medicamento" },
      {
        type: "ul",
        items: [
          "<strong>Fisioterapia pélvica:</strong> exercícios de Kegel supervisionados por fisioterapeuta especializado. Para incontinência de esforço, é o tratamento de primeira escolha — com eficácia documentada.",
          "<strong>Treinamento vesical:</strong> programação de idas ao banheiro em intervalos regulares, aumentando gradualmente o tempo entre uma e outra.",
          "<strong>Ajuste de ingestão de líquidos:</strong> distribuir a hidratação ao longo do dia, reduzir perto da hora de dormir.",
          "<strong>Perda de peso:</strong> cada quilo a menos reduz a pressão sobre a bexiga. Para obesidade, o impacto é relevante.",
        ],
      },
      { type: "h3", text: "Com medicamento" },
      {
        type: "p",
        text: "Para bexiga hiperativa, existem anticolinérgicos e beta-3 agonistas — classes diferentes com perfis de efeito colateral diferentes. Para homens com próstata aumentada, bloqueadores alfa e inibidores da 5-alfa-redutase. Nenhum desses medicamentos deve ser iniciado sem avaliação médica — a escolha depende do tipo de incontinência e das condições clínicas do paciente.",
      },
      { type: "h2", text: "O que fazer enquanto o tratamento avança" },
      {
        type: "p",
        text: "Tratamento de incontinência leva semanas a meses para mostrar resultado. Nesse período — ou quando a condição é definitiva — a fralda geriátrica é o recurso que garante qualidade de vida, higiene e dignidade. Pelo programa Farmácia Popular, idosos com 60 anos ou mais têm direito a retirar gratuitamente, mediante <a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">laudo médico</a>.",
      },
      {
        type: "p",
        text: "Um pai de 74 anos recusava usar fralda. Dizia que não estava tão ruim assim. A filha encontrava evidências diárias de que estava. A virada aconteceu quando ela trocou o termo: parou de falar fralda e começou a falar <strong>roupa íntima descartável</strong>. O pai aceitou experimentar. Nunca mais voltou ao assunto. <strong>Às vezes o problema não é a fralda. É a palavra 'fralda'.</strong>",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 5
  // ─────────────────────────────────────────────────────────────
  {
    slug: "tamanho-certo-fralda-adulto",
    category: "Dicas",
    title: "Como escolher o tamanho certo da fralda para adultos",
    description:
      "Vazamento não é culpa da marca nem da absorção — na maioria dos casos, é culpa do tamanho. Aprenda a medir, veja a tabela por quadril e entenda por que as marcas não são equivalentes.",
    keywords:
      "tamanho fralda adulto, tabela tamanho fralda geriátrica, como medir fralda adulto, fralda adulto tamanho certo",
    date: "15 mar. 2025",
    dateIso: "2025-03-15",
    readTime: "3 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-03-15",
    image: {
      id: 6129576,
      src: "/images/blog/6129576-large.jpg",
      srcMedium: "/images/blog/6129576-medium.jpg",
      width: 940,
      height: 627,
      alt: "Profissional de saúde organizando insumos médicos, representando cuidado com materiais",
      photographer: "RDNE Stock project",
      photographerUrl: "https://www.pexels.com/@rdne",
    },
    faqs: [
      { question: "Como medir o tamanho certo da fralda de adulto?", answer: "Use uma fita métrica paralela ao chão para medir o perímetro do quadril, a parte mais larga passando pelas nádegas. Não utilize a cintura como referência principal." },
      { question: "O que acontece se a fralda for grande demais?", answer: "Tamanhos grandes não vedam as coxas corretamente, formando bolsões sem capacidade de retenção que causam vazamentos imediatos nas laterais e nas pernas." },
      { question: "A fralda vaza, devo comprar um tamanho menor?", answer: "Vazamentos frequentemente indicam tamanho errado, seja maior ou menor. Verifique a medida do quadril do paciente na tabela do fabricante para corrigir." },
      { question: "Tamanho M é o mesmo em todas as marcas de fralda?", answer: "Não. Não há padronização brasileira. O tamanho M de uma marca pode ter as mesmas dimensões da fralda G de outro fabricante. Confira sempre a tabela." },
      { question: "Posso escolher a marca da fralda no SUS?", answer: "Não. A Farmácia Popular dispensa as marcas disponíveis em estoque. Por isso o laudo deve atestar apenas o tamanho recomendado e a necessidade clínica." }
    ],
    content: [
      {
        type: "p",
        text: "Vazamento não é culpa da marca. Não é culpa da absorção. Em nove casos em cada dez, é culpa do tamanho — e o tamanho errado não é só inconveniente, é o caminho mais rápido para dermatite, irritação e troca de roupa de cama às 2 da manhã.",
      },
      {
        type: "callout",
        title: "Mande no grupo da família",
        body: "Na dúvida entre dois tamanhos de fralda adulto, escolha sempre o maior. O velcro ajusta; o vazamento não perdoa. A medida que importa é o quadril — não a cintura.",
        variant: "tip",
      },
      { type: "h2", text: "Por que o tamanho errado causa problemas" },
      {
        type: "ul",
        items: [
          "<strong>Fralda pequena demais:</strong> aperta na virilha e na cintura, cria canais de escape laterais, pode abrir o velcro com o movimento e marca a pele.",
          "<strong>Fralda grande demais:</strong> não veda as pernas e a cintura corretamente, forma bolsões sem absorção e vaza pelas folgas.",
          "<strong>Tamanho certo:</strong> distribui a absorção uniformemente, se ajusta ao corpo sem apertar e mantém a pele seca entre as trocas.",
        ],
      },
      { type: "h2", text: "A medida certa — e não é a cintura" },
      {
        type: "p",
        text: "A medida que define o tamanho da fralda adulto é o <strong>perímetro do quadril</strong> — a parte mais larga, que passa pelas nádegas. Não é a cintura, não é o peso sozinho. A fita métrica é o único instrumento necessário.",
      },
      {
        type: "ol",
        items: [
          "Passe a fita pela parte mais larga do quadril, passando pelas nádegas.",
          "Mantenha a fita paralela ao chão — inclinada, a medida muda.",
          "Leia sem apertar e sem folgar. Apenas em contato.",
          "Se o idoso oscila de peso, meça no maior quadril registrado no mês.",
        ],
      },
      {
        type: "table",
        headers: ["Tamanho", "Quadril (cm)", "Peso aproximado"],
        rows: [
          ["P", "60 – 80 cm", "40 – 60 kg"],
          ["M", "80 – 100 cm", "55 – 80 kg"],
          ["G", "100 – 130 cm", "75 – 100 kg"],
          ["XG", "120 – 160 cm", "95 – 130 kg"],
        ],
      },
      {
        type: "p",
        text: "Note as sobreposições na tabela — elas são intencionais. Quando o quadril cai entre dois tamanhos, escolha o maior. O velcro dá para apertar; a fralda pequena não dá para esticar.",
      },
      { type: "h2", text: "Por que uma 'M' de uma marca não é igual à 'M' de outra" },
      {
        type: "p",
        text: "Não existe padronização de tamanhos entre fabricantes no Brasil. Uma fralda M da Bigfral, uma da Tena e uma da Plenitud podem ter medidas completamente diferentes. Sempre consulte a tabela da embalagem — é o único número que vale.",
      },
      {
        type: "p",
        text: "Isso também significa que, se você trocar de marca, precisa reverificar o tamanho. Não é incomum uma família que usava G numa marca precisar de XG em outra para obter o mesmo ajuste.",
      },
      { type: "h2", text: "E na Farmácia Popular: posso pedir a marca?" },
      {
        type: "p",
        text: "Não. A Farmácia Popular distribui a marca disponível em estoque. Por isso, o <a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">laudo médico</a> deve especificar o <strong>tamanho</strong> (P, M, G ou XG) — nunca uma marca específica. Se o tamanho entregue não encaixar após a troca de marca, comunique ao médico que emitiu o laudo para ajustar a prescrição.",
      },
      {
        type: "callout",
        title: "Não sabe o quadril agora?",
        body: "Pode usar o peso como referência inicial para pedir o laudo. Mas assim que possível, meça o quadril e confirme — é a medida que o farmacêutico vai usar para argumentar substituição de tamanho se necessário.",
        variant: "info",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 6
  // ─────────────────────────────────────────────────────────────
  {
    slug: "farmacia-popular-perto-de-mim",
    category: "Direitos",
    title: "Como encontrar a Farmácia Popular mais próxima e retirar a fralda",
    description:
      "Há mais de 34.000 unidades credenciadas no Brasil. O gargalo não é encontrar uma — é saber o que levar, o que fazer se estiver sem estoque e como renovar sem perder o benefício.",
    keywords:
      "Farmácia Popular perto de mim, onde retirar fralda geriátrica, Farmácia Popular credenciada, retirar fralda SUS",
    date: "3 mar. 2025",
    dateIso: "2025-03-03",
    readTime: "4 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-03-03",
    image: {
      id: 31900637,
      src: "/images/blog/31900637-large.jpg",
      srcMedium: "/images/blog/31900637-medium.jpg",
      width: 940,
      height: 627,
      alt: "Farmacêutico organizando medicamentos em farmácia credenciada do programa Farmácia Popular",
      photographer: "Ryan Lee",
      photographerUrl: "https://www.pexels.com/@ryan-lee-706204269",
    },
    faqs: [
      { question: "Como encontro a Farmácia Popular mais próxima?", answer: "Você pode usar o localizador oficial no site do Ministério da Saúde ou consultar diretamente no aplicativo Meu SUS Digital, filtrando por 'Higiene e Saúde'." },
      { question: "A Farmácia Popular credenciada cobra algum valor pelas fraldas?", answer: "Não. O programa federal subsidia 100% do custo, fazendo com que as fraldas sejam distribuídas de forma gratuita para pacientes elegíveis com laudo médico." },
      { question: "Preciso de Cartão do SUS para retirar fralda?", answer: "O cartão do SUS pode agilizar, mas a obrigatoriedade cai em desuso. Essencialmente você precisa do CPF do paciente, RG e um laudo médico válido." },
      { question: "Posso pegar as fraldas em outra cidade se faltar na minha?", answer: "Sim. O laudo médico é válido em todo o território nacional. Você pode retirar as fraldas em qualquer uma das farmácias credenciadas pelo país." },
      { question: "O que acontece se o meu laudo médico vencer?", answer: "Se o laudo perder a validade (geralmente entre 6 a 12 meses), o sistema bloqueará a liberação. É fundamental fazer uma nova teleconsulta e renovar o documento antes do prazo." }
    ],
    content: [
      {
        type: "p",
        text: "Há mais de 34.000 unidades Farmácia Popular credenciadas no Brasil [CONFIRMAR DADO]. Se você ainda não retirou a fralda do seu familiar, o gargalo provavelmente não é encontrar uma farmácia — é saber exatamente o que levar e o que fazer quando algo não sai como esperado.",
      },
      { type: "h2", text: "Como localizar a unidade mais próxima" },
      {
        type: "ol",
        items: [
          "Acesse o <a href=\"https://vacinacao.saude.gov.br/localizacao\" target=\"_blank\" rel=\"noopener\" class=\"text-sky-400 hover:underline\">localizador oficial do Ministério da Saúde</a> ou use o app Meu SUS Digital.",
          "Digite o CEP ou o nome da cidade.",
          "Filtre por 'Higiene e Saúde' para ver apenas as unidades que dispensam fralda.",
          "Ligue antes de ir para confirmar disponibilidade de estoque — evita deslocamento desnecessário.",
        ],
      },
      {
        type: "callout",
        title: "Rede própria vs. rede credenciada — qual a diferença",
        body: "Existem dois tipos: unidades próprias do governo federal e farmácias privadas credenciadas pelo programa. As duas dispensam fralda gratuitamente. A rede credenciada é muito maior — inclui redes como Ultrafarma, Drogaria São Paulo e centenas de farmácias independentes. Provavelmente tem uma a menos de 5 km de você.",
        variant: "info",
      },
      { type: "h2", text: "O que levar no dia da retirada" },
      {
        type: "ul",
        items: [
          "<a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">Laudo médico</a> — impresso ou PDF no celular. Muitas unidades já aceitam digital.",
          "Documento de identidade do paciente (RG ou CNH).",
          "CPF do paciente.",
          "Cartão do SUS, se tiver — não é obrigatório em todas as unidades.",
        ],
      },
      {
        type: "p",
        text: "Se o paciente não puder comparecer — por acamamento, limitação de mobilidade ou distância — o familiar ou cuidador pode retirar apresentando os documentos acima mais o próprio documento de identidade. Não é necessária procuração formal.",
      },
      {
        type: "p",
        text: "Um neto de 28 anos, morando em São Paulo, precisava resolver a fralda da avó de 82 anos no interior do Ceará. A avó não podia sair de casa. Ele não podia viajar. Descobriu que o laudo podia ser emitido por telemedicina e a retirada feita por familiar na farmácia local. Resolveu em 48 horas sem ninguém sair de casa. <strong>Resolveu pelo celular, do outro lado do Brasil.</strong>",
      },
      { type: "h2", text: "Qual quantidade é dispensada por mês" },
      {
        type: "p",
        text: "A quantidade segue a prescrição médica no laudo. O laudo deve especificar o número de fraldas por dia — o que define o pacote mensal. O limite segue as diretrizes da portaria vigente. Se o médico prescrever 4 fraldas por dia, a farmácia dispensa o equivalente mensal a esse uso.",
      },
      { type: "h2", text: "E se a farmácia estiver sem estoque" },
      {
        type: "ol",
        items: [
          "Peça ao farmacêutico para registrar o atendimento mesmo sem dispensação — isso pode garantir prioridade quando o estoque chegar.",
          "Consulte outras unidades na mesma cidade pelo localizador — o laudo vale em qualquer unidade do programa.",
          "Se nenhuma unidade tiver estoque, registre reclamação no Disque Saúde (136) — ligação gratuita, 24h.",
          "Guarde o laudo vigente. Ele continua valendo até a data de vencimento, independente do desabastecimento pontual.",
        ],
      },
      { type: "h2", text: "Como funciona a renovação — e como não perder o benefício" },
      {
        type: "p",
        text: "No primeiro atendimento, a farmácia registra o benefício no sistema do Ministério da Saúde. Nos meses seguintes, o retorno é mais rápido — geralmente menos de 5 minutos. Quando o laudo vencer, uma nova teleconsulta médica é suficiente para emitir o documento renovado.",
      },
      {
        type: "callout",
        title: "Não perca o prazo de renovação",
        body: "Se o laudo vencer sem renovação, o sistema bloqueia a dispensação até um novo laudo ser apresentado — e nesse intervalo a família precisa comprar as fraldas. Configure um lembrete 30 dias antes do vencimento. Essa data está impressa no laudo.",
        variant: "warning",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // POST 7
  // ─────────────────────────────────────────────────────────────
  {
    slug: "como-conseguir-fralda-geriatrica-gratis",
    category: "Farmácia Popular",
    title: "Como conseguir fralda geriátrica de graça em 2025 — guia prático",
    description:
      "O SUS cobre fralda geriátrica gratuitamente — mas 97% das famílias não sabem como acessar. Veja o que precisa, onde retirar e como obter o laudo médico sem sair de casa.",
    keywords:
      "como conseguir fralda geriátrica de graça, fralda geriátrica farmácia popular, prescrição fralda idoso, laudo médico fralda geriátrica gratuita",
    date: "7 mai. 2025",
    dateIso: "2025-05-07",
    readTime: "6 min",
    authorName: "Dr. Roberto Arcanjo",
    authorCrm: "26.155-CE",
    authorSpecialty: "Geriatria",
    lastReviewedDate: "2025-05-07",
    image: {
      id: 8667539,
      src: "/images/blog/8667539-large.jpg",
      srcMedium: "/images/blog/8667539-medium.jpg",
      width: 940,
      height: 627,
      alt: "Familiar ajudando idosa a retirar medicamento gratuitamente na farmácia do SUS",
      photographer: "RDNE Stock project",
      photographerUrl: "https://www.pexels.com/@rdne",
    },
    faqs: [
      {
        question: "Precisa de renda mínima ou CadÚnico para conseguir fralda de graça?",
        answer:
          "Não. O programa Farmácia Popular não tem critério de renda. Qualquer família pode acessar, independentemente do salário, do CadÚnico ou do plano de saúde. O único documento exigido é o laudo médico.",
      },
      {
        question: "Qual médico pode assinar o laudo para fralda geriátrica?",
        answer:
          "Qualquer médico com CRM ativo pode assinar — geriatra, clínico geral, neurologista, urologista ou médico de família. A especialidade não é critério. O que importa é o CRM válido e a assinatura.",
      },
      {
        question: "A fralda geriátrica de graça tem limite de quantidade por mês?",
        answer:
          "A quantidade dispensada segue o que o médico prescreve no laudo — especificamente o número de fraldas por dia. O programa tem tetos operacionais, mas na prática atende a maioria dos usos clínicos documentados.",
      },
      {
        question: "Posso conseguir fralda de graça em qualquer estado do Brasil?",
        answer:
          "Sim. O programa Farmácia Popular está em 4.812 municípios brasileiros, cobrindo 97% da população. A retirada é feita na farmácia credenciada mais próxima, usando o mesmo laudo em todo o território nacional.",
      },
      {
        question: "O laudo médico online tem validade para retirar fralda na Farmácia Popular?",
        answer:
          "Tem. A Resolução CFM 2.314/2022 equipara o laudo por telemedicina ao laudo presencial em termos de validade jurídica. A assinatura digital ICP-Brasil garante autenticidade. Farmácias que recusam laudos online cometem erro — o procedimento correto é acionar a ANVISA ou o CRM local.",
      },
    ],
    content: [
      {
        type: "p",
        text: "O Farmácia Popular está instalado em 31.000 farmácias credenciadas. Cobre 97% dos municípios brasileiros. Existe desde 2017. E a maioria das famílias com idosos incontinentes ainda compra fralda do próprio bolso — gastando entre R$ 300 e R$ 600 por mês sem nenhuma necessidade.",
      },
      {
        type: "callout",
        title: "Mande no grupo da família",
        body: "Se tem idoso com 60+ anos ou PCD com incontinência em casa, a fralda é gratuita pela Farmácia Popular do SUS. Precisa de um laudo médico — pode ser feito 100% online. Não tem critério de renda.",
        variant: "tip",
      },
      {
        type: "h2",
        text: "Quem tem direito à fralda geriátrica de graça?",
      },
      {
        type: "p",
        text: "Têm direito à fralda geriátrica gratuita: idosos com 60 anos ou mais com incontinência urinária ou fecal diagnosticada; pessoas com deficiência de qualquer idade com necessidade contínua de absorvente geriátrico; e pacientes em cuidados paliativos domiciliares. O critério é clínico — não financeiro. Qualquer família acessa, independente de renda ou plano de saúde.",
      },
      {
        type: "p",
        text: "A base legal é a <a href=\"https://www.gov.br/saude/pt-br\" target=\"_blank\" rel=\"noopener\" class=\"text-sky-400 hover:underline\">Portaria GM/MS nº 3.073/2024</a>, que atualizou a Portaria nº 937/2017 e ampliou o acesso ao programa. Essas portarias determinam que a dispensação é feita nas farmácias credenciadas ao Farmácia Popular mediante apresentação de laudo médico com CRM ativo.",
      },
      {
        type: "h2",
        text: "O que você precisa para conseguir a fralda de graça",
      },
      {
        type: "p",
        text: "O processo tem dois momentos distintos: conseguir o laudo e ir à farmácia. Confundir os dois é o erro mais comum — e o que faz as famílias desistirem antes de tentar.",
      },
      {
        type: "ol",
        items: [
          "<strong>Laudo médico assinado:</strong> documento emitido por médico com CRM ativo, especificando o diagnóstico de incontinência e a necessidade de uso de fralda geriátrica. Pode ser obtido presencialmente ou por telemedicina.",
          "<strong>Documento de identidade do paciente</strong> — RG ou CNH.",
          "<strong>CPF do paciente</strong> — obrigatório para o cadastro no sistema do programa.",
          "<strong>Nada mais.</strong> Não precisa de CadÚnico, comprovante de renda, carteirinha de plano de saúde ou receita separada.",
        ],
      },
      {
        type: "p",
        text: "Se o idoso não puder ir à farmácia, um familiar ou cuidador pode fazer a retirada apresentando os documentos do paciente junto com seu próprio documento de identidade. Não há exigência de procuração para retirada.",
      },
      {
        type: "h2",
        text: "Passo a passo para conseguir a fralda geriátrica gratuitamente",
      },
      {
        type: "ol",
        items: [
          "<strong>Obtenha o laudo médico:</strong> consulte o médico do seu familiar — geriatra, clínico geral ou médico de família. Se não houver médico acessível ou a fila for longa, a teleconsulta é uma opção legal e rápida.",
          "<strong>Encontre a farmácia credenciada mais próxima:</strong> acesse o site do Farmácia Popular (gov.br) ou use o buscador de <a href=\"/blog/farmacia-popular-perto-de-mim\" class=\"text-sky-400 hover:underline\">farmácia popular perto de mim</a>. São mais de 31.000 unidades em todo o país.",
          "<strong>Leve os documentos na primeira retirada:</strong> laudo, identidade e CPF do paciente. O atendente cadastra o beneficiário e libera o estoque.",
          "<strong>Nas retiradas seguintes:</strong> em geral basta o CPF do paciente, enquanto o laudo estiver vigente.",
          "<strong>Renove o laudo antes do vencimento:</strong> laudos de uso contínuo costumam ter validade de 6 a 12 meses. Configure um lembrete com antecedência.",
        ],
      },
      {
        type: "callout",
        title: "R$ 4.200 a R$ 7.200 por ano — ou zero",
        body: "Uma família que usa 4 fraldas por dia gasta em média R$ 350/mês, ou R$ 4.200/ano. Para uso de 6 fraldas diárias, o custo chega a R$ 600/mês — R$ 7.200 anuais. Esse valor sai do bolso de quem não tem o laudo.",
        variant: "warning",
      },
      {
        type: "h2",
        text: "O laudo médico pode — e muitas vezes deve — ser feito online",
      },
      {
        type: "p",
        text: "A <a href=\"https://www.cfm.org.br/index.php?option=com_content&view=article&id=28329\" target=\"_blank\" rel=\"noopener\" class=\"text-sky-400 hover:underline\">Resolução CFM 2.314/2022</a> regulamenta a telemedicina no Brasil e equipara o laudo por teleconsulta ao laudo presencial em validade jurídica. O documento é assinado digitalmente com certificado ICP-Brasil, tem CRM do médico impresso e é aceito em qualquer farmácia credenciada ao Farmácia Popular.",
      },
      {
        type: "p",
        text: "Para um idoso acamado, com mobilidade reduzida ou que mora longe de médico especialista, a teleconsulta não é conveniência — é necessidade. O laudo é o mesmo. A diferença é que ninguém precisou carregar o paciente até o consultório. Se quiser entender mais sobre o que esse documento contém, veja o que é exatamente um <a href=\"/blog/laudo-medico-fralda-o-que-e\" class=\"text-sky-400 hover:underline\">laudo médico para fralda</a>.",
      },
      {
        type: "callout",
        title: "Precisa do laudo médico agora?",
        body: "Emitimos por telemedicina em até 24h úteis, com assinatura digital e validade legal em todo o Brasil. A consulta é feita de onde o seu familiar estiver. <a href=\"/funil\" class=\"text-sky-400 hover:underline font-semibold\">Solicitar laudo médico online →</a>",
        variant: "info",
      },
      {
        type: "h2",
        text: "O benefício existe. O que falta é alguém contar para a família",
      },
      {
        type: "p",
        text: "O Farmácia Popular cobre 97% da população brasileira em 4.812 municípios, com mais de 31.000 farmácias credenciadas. Mesmo assim, a maioria das famílias com idosos incontinentes compra fralda no próprio bolso. O problema não é acesso — é informação. Nenhum médico de posto, nenhuma UBS e nenhuma assistente social é obrigada a avisar. E sem aviso, a família simplesmente não sabe que tem direito.",
      },
      {
        type: "p",
        text: "Esse é, na prática, o benefício mais subutilizado do SUS: não por burocracia excessiva, não por falta de estoque — mas por falta de informação chegando a quem precisa. O <a href=\"/blog/fralda-geriatrica-gratis-sus\" class=\"text-sky-400 hover:underline\">guia completo sobre como retirar fralda pelo SUS</a> detalha cada etapa do processo, incluindo o que fazer se a farmácia dificultar o atendimento.",
      },
      {
        type: "h2",
        text: "O que fazer se a farmácia recusar o laudo ou negar a dispensação",
      },
      {
        type: "p",
        text: "Farmácias credenciadas ao Farmácia Popular têm obrigação contratual com o Ministério da Saúde. Recusar laudo válido — incluindo laudo por telemedicina — é infração contratual. Se isso acontecer:",
      },
      {
        type: "ul",
        items: [
          "Peça o motivo da recusa por escrito ou registre em vídeo.",
          "Ligue para a Central do Farmácia Popular: <strong>0800 722 4242</strong>.",
          "Registre reclamação no <a href=\"https://www.gov.br/ouvidorias/pt-br\" target=\"_blank\" rel=\"noopener\" class=\"text-sky-400 hover:underline\">portal de ouvidorias do governo federal</a>.",
          "Entre em contato com o CRM do seu estado caso o problema seja descredenciamento ou irregularidade do médico emissor.",
        ],
      },
      {
        type: "p",
        text: "Na maioria dos casos, a recusa vem de desconhecimento do atendente — não de má fé. Uma ligação para a supervisão da farmácia ou para o 0800 resolve em menos de 24 horas.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPostData | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3): BlogPostData[] =>
  blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
