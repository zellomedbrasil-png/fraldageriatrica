import React from 'react';
import { SEO } from "@/components/SEO";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Adv = () => {
  const navigate = useNavigate();
  const date = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <SEO 
        title="Idosos têm direito a fralda geriátrica grátis pelo SUS | Portal dos Direitos"
        description="78% dos idosos e PCDs não sabem que têm direito a fraldas geriátricas gratuitas pela Farmácia Popular. Saiba como conseguir o laudo médico online em até 24h."
        canonicalPath="/adv"
        robots="noindex, nofollow"
      />
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">PORTAL DOS DIREITOS</div>
          <div className="text-sm font-medium hidden sm:block">Notícias, Benefícios e Cidadania</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-sm mt-4 md:mt-8 rounded-md">
        <article>
          <div className="mb-6 border-b pb-4">
            <span className="text-blue-700 font-bold uppercase tracking-wider text-sm mb-2 block">Direitos do Cidadão</span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
              Idosos e PCDs têm direito a fraldas geriátricas gratuitas todos os meses, mas 78% não sabem como resgatar
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              Programa do Governo garante até 120 fraldas por mês sem custo nas farmácias, mas exige um documento específico que poucos conhecem. Veja como conseguir o seu.
            </h2>
            <div className="flex items-center text-sm text-gray-500 font-medium">
              <span>Por Redação Portal dos Direitos</span>
              <span className="mx-2">•</span>
              <span>{date} – Atualizado há duas horas</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Quem cuida de um idoso ou de uma pessoa com deficiência (PCD) sabe o impacto que a compra de fraldas geriátricas causa no orçamento familiar. Com pacotes custando cada vez mais caro, o gasto mensal pode ultrapassar facilmente a marca de R$ 400.
            </p>
            <p>
              O que poucas famílias sabem é que <strong>não é necessário pagar por isso</strong>. Através do programa Farmácia Popular, do Ministério da Saúde, cidadãos com 60 anos ou mais e PCDs têm o direito garantido por lei de retirar fraldas geriátricas gratuitamente todos os meses.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-l-4 border-blue-700 pl-3">As regras são simples, mas há um obstáculo</h3>
            <p>
              Para ter acesso ao benefício, basta ir a qualquer farmácia credenciada (aquelas com o selo "Aqui tem Farmácia Popular") apresentando um documento de identidade com CPF. O limite de retirada é generoso: até 40 fraldas a cada 10 dias.
            </p>
            <p>
              <strong>Porém, é aqui que a maioria das pessoas desiste:</strong> a farmácia só libera as fraldas mediante a apresentação de um <em>Laudo Médico (ou Receita Médica) atualizado</em>, com validade de até 180 dias, contendo o CID (Classificação Internacional de Doenças) que justifique a necessidade do uso.
            </p>

            <img 
              src="/idosos_felizes.png" 
              alt="Idosos felizes com seus direitos garantidos" 
              className="w-full rounded-lg my-8 shadow-md"
            />
            <p className="text-sm text-gray-500 text-center -mt-6 mb-8 italic">Famílias que descobrem como obter o laudo economizam centenas de reais todos os meses.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-l-4 border-blue-700 pl-3">A dificuldade de conseguir o Laudo Médico</h3>
            <p>
              Muitos brasileiros tentam marcar uma consulta no SUS (Posto de Saúde) apenas para pegar essa receita. O problema é que a espera por uma vaga pode levar meses. Por outro lado, agendar uma consulta particular apenas para solicitar o papel pode custar entre R$ 250 e R$ 400, o que inviabiliza a economia.
            </p>

            <img 
              src="/medico.jpg" 
              alt="Telemedicina facilita a emissão de laudos" 
              className="w-full max-w-md mx-auto block rounded-lg my-8 shadow-md object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
              }}
            />
             <p className="text-sm text-gray-500 text-center -mt-6 mb-8 italic">Com a nova lei da telemedicina, médicos agora podem avaliar e emitir o laudo digitalmente em poucas horas.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-l-4 border-blue-700 pl-3">A Solução: Laudo Médico Online por Telemedicina</h3>
            <p>
              Foi para resolver esse "gargalo" que surgiram serviços de emissão de <strong>Laudos Médicos via Telemedicina</strong>. Através de uma avaliação rápida pelo celular, médicos capacitados analisam o caso e emitem a receita médica digital oficial, com QR Code de validação e assinatura digital.
            </p>
            <p>
              Com o documento em PDF no celular, basta a família ir até a farmácia popular, mostrar a tela do aparelho e retirar as fraldas.
            </p>
            <ul className="list-disc pl-6 my-6 space-y-2 font-medium">
              <li>Não precisa sair de casa para passar no médico;</li>
              <li>Avaliação e emissão do laudo em até 24 horas;</li>
              <li>Receita com validade de 180 dias (garante fraldas por 6 meses);</li>
              <li>Válido em qualquer Farmácia Popular do Brasil.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-l-4 border-blue-700 pl-3">Como solicitar o seu laudo hoje mesmo?</h3>
            <p>
              Investigamos os serviços disponíveis e encontramos uma plataforma especializada que realiza todo o processo de triagem e avaliação médica de forma online, cobrando apenas uma <strong>taxa única de R$ 49</strong>.
            </p>
            <p>
              Lembrando: pagando apenas 49 reais uma única vez, você garante o laudo que permite retirar fraldas de graça durante os próximos 6 meses. É uma economia gigantesca.
            </p>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 my-10 text-center">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">COMO EMITIR SEU LAUDO</h4>
              <p className="text-blue-700 mb-6 font-medium">
                Clique no botão abaixo para ser direcionado ao WhatsApp da central de triagem médica. O atendimento é imediato e seguro.
              </p>
              <Button 
                onClick={() => window.location.href = '/funil'}
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-6 px-10 rounded-full w-full md:w-auto shadow-lg transform transition hover:scale-105 animate-pulse"
              >
                SOLICITAR LAUDO NO WHATSAPP
              </Button>
            </div>

            <p className="text-sm text-gray-500 italic mt-8 border-t pt-4">
              Aviso: O serviço oferece apenas a avaliação e emissão do laudo médico particular. A aprovação e entrega das fraldas são de responsabilidade do programa Farmácia Popular do Governo Federal mediante cumprimento dos requisitos exigidos.
            </p>
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Comentários (5)</h3>
          <div className="space-y-6">
            <Comment author="Maria das Graças" time="há 1 hora" text="Eu não sabia disso! Todo mês eu gastava quase 300 reais com as fraldas da minha mãe. Pedi o laudo ontem pelo zap deles e hoje de manhã já fui na Pague Menos aqui da rua e peguei as fraldas sem pagar nada. Deus abençoe!" />
            <Comment author="Carlos Eduardo Souza" time="há 3 horas" text="Alguém sabe se a receita digital é aceita mesmo? A mulher da farmácia disse que tinha que ser impressa." />
            <Comment author="Juliana Costa" time="há 2 horas" text="Carlos, a digital vale sim! Tem uma lei federal sobre isso. Mas se a farmácia for chata, é só você ir numa papelaria e imprimir o PDF que eles mandam. Eu imprimi por precaução." />
            <Comment author="José Roberto" time="há 5 horas" text="Muito prático. O atendimento no whatsapp foi super rápido. Paguei o pix de 49 e me enviaram a receita assinada pelo médico. Vale cada centavo." />
            <Comment author="Ana Lúcia" time="há 1 dia" text="Eu sou cadeirante e o pessoal do posto de saúde me tratou super mal quando fui pedir a receita. Fiz por esse site e em 3 horas tava na minha mão." />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-8 mt-12 text-sm">
        <div className="max-w-4xl mx-auto px-4 opacity-70">
          <p>© {new Date().getFullYear()} Portal dos Direitos. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">Este site tem caráter informativo. Não somos representantes do Governo Federal ou do programa Farmácia Popular.</p>
        </div>
      </footer>
    </div>
  );
};

const Comment = ({ author, time, text }: { author: string, time: string, text: string }) => (
  <div className="flex gap-4 border-b pb-4">
    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg shrink-0">
      {author.charAt(0)}
    </div>
    <div>
      <div className="flex items-baseline gap-2">
        <h4 className="font-bold text-gray-900 text-[15px]">{author}</h4>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-gray-700 mt-1 text-sm">{text}</p>
      <div className="flex gap-4 mt-2 text-xs text-gray-500 font-semibold cursor-pointer">
        <span className="hover:text-blue-700 transition">Curtir</span>
        <span className="hover:text-blue-700 transition">Responder</span>
      </div>
    </div>
  </div>
);

export default Adv;
