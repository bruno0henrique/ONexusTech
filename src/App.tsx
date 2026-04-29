import { motion } from 'framer-motion';
import { FeatureCard } from './components/FeatureCard';
import { MindMapDemo } from './components/MindMapDemo';
import { SectionTitle } from './components/SectionTitle';

const stats = [
  'Decisões em segundos',
  'Automação real',
  'Menos retrabalho',
  'Clareza estratégica',
];

const features = [
  {
    icon: '⚡',
    title: 'Automação de tarefas reais',
    description:
      'Transforme objetivos em ações, responsáveis e próximos passos sem perder tempo em trabalho manual.',
  },
  {
    icon: '◈',
    title: 'Geração estruturada de ideias',
    description:
      'Organize caminhos, hipóteses e prioridades a partir de um tema simples e do contexto do negócio.',
  },
  {
    icon: '●●',
    title: 'Alinhamento automático de equipe',
    description:
      'Conecte decisões, tarefas e prioridades para manter o time trabalhando na mesma direção.',
  },
  {
    icon: '▣',
    title: 'Análise orientada a resultado',
    description:
      'Converta informações soltas em sínteses claras para decidir com mais segurança.',
  },
  {
    icon: '↔',
    title: 'Fluxos conectados',
    description:
      'Estruture ideias, planos e execuções em uma visão única para reduzir ruído operacional.',
  },
  {
    icon: '🔒',
    title: 'Contexto protegido',
    description:
      'Mantenha o foco no que importa para a empresa, com uma experiência simples e controlada.',
  },
];

const useCases = [
  {
    title: 'Gestão',
    text: 'Priorize decisões, desdobre planos e transforme objetivos em execução acompanhável.',
  },
  {
    title: 'Comercial',
    text: 'Organize oportunidades, objeções e próximos passos para acelerar negociações.',
  },
  {
    title: 'Operações',
    text: 'Reduza retrabalho criando fluxos claros para processos, tarefas e responsáveis.',
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-3 font-black tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-nexus/40 bg-white/5 text-sm text-nexus shadow-violet">
              ON
            </span>
            <span className="text-xl">
              Synapse <span className="text-nexus">IA</span>
            </span>
          </a>

          <div className="hidden items-center gap-10 text-sm font-semibold text-slate-400 md:flex">
            <a href="#produto" className="transition hover:text-white">
              Produto
            </a>
            <a href="#demo" className="transition hover:text-white">
              Demonstração
            </a>
            <a href="#times" className="transition hover:text-white">
              Para times
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </div>

          <a className="rounded-lg border border-white/25 px-5 py-3 text-sm font-black transition hover:border-nexus hover:bg-nexus/10" href="#contato">
            Começar grátis
          </a>
        </nav>
      </header>

      <section id="produto" className="relative px-5 pb-16 pt-40 md:px-8 md:pb-24 md:pt-44">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-nexus/20 blur-[110px]" />
        <motion.div animate={{ y: [8, 0] }} transition={{ duration: 0.55 }} className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-9 inline-flex rounded-full border border-nexus/50 bg-nexus/15 px-5 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-glow">
            IA aplicada · estratégia
          </div>

          <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-normal text-white md:text-7xl">
            Transforme ideias em decisões com{' '}
            <span className="block bg-gradient-to-r from-nexus to-glow bg-clip-text text-transparent">
              IA
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Crie, organize e execute estratégias com inteligência artificial aplicada ao seu contexto real.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-semibold leading-7 text-slate-400 md:text-base">
            O Synapse faz parte do ecossistema O Nexus — soluções com IA para melhorar decisões e resultados de empresas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contato" className="w-full rounded-lg border border-white/25 bg-white px-6 py-3.5 text-center text-sm font-black text-ink transition hover:bg-nexus hover:text-white sm:w-auto">
              Começar grátis →
            </a>
            <a href="#demo" className="w-full rounded-lg border border-white/25 px-6 py-3.5 text-center text-sm font-black transition hover:border-nexus hover:bg-nexus/10 sm:w-auto">
              Ver demonstração
            </a>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-px border-y border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat} className="bg-ink px-4 py-8 text-center">
              <p className="text-xl font-black leading-tight md:text-2xl">{stat}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="px-5 py-14 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Veja em ação"
          title="Da ideia à decisão executável"
          subtitle="A IA transforma um objetivo simples em caminhos claros, conectados e acionáveis."
        />
        <MindMapDemo />
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Funcionalidades"
          title="Tudo que seu time precisa"
          subtitle="Do planejamento à execução — o Synapse em cada etapa."
        />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section id="times" className="px-5 py-14 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Para empresas"
          title="Clareza para áreas que precisam decidir"
          subtitle="Use IA para reduzir ruído, organizar contexto e transformar intenção em plano."
        />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-panel p-7">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-glow">{item.title}</p>
              <p className="leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl rounded-[24px] border border-nexus/40 bg-gradient-to-br from-nexus/20 via-panel to-panel px-6 py-16 text-center shadow-violet md:px-10">
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Pronto para transformar sua próxima ideia em decisão?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Comece gratuitamente. Sem cartão de crédito. Cancele quando quiser.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="w-full rounded-lg border border-white/25 bg-white px-6 py-3.5 text-sm font-black text-ink transition hover:bg-nexus hover:text-white sm:w-auto">
              Criar conta grátis →
            </a>
            <a href="#demo" className="w-full rounded-lg border border-white/25 px-6 py-3.5 text-sm font-black transition hover:border-nexus hover:bg-nexus/10 sm:w-auto">
              Ver demonstração
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Synapse IA · O Nexus · 2026</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacidade
            </a>
            <a href="#" className="hover:text-white">
              Termos
            </a>
            <a href="#" className="hover:text-white">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
