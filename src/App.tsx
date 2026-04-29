import { FeatureCard } from './components/FeatureCard';
import { MindMapDemo } from './components/MindMapDemo';
import { NeuralBackground } from './components/NeuralBackground';
import { SectionTitle } from './components/SectionTitle';

const stats = [
  'Processos automatizados',
  'Decisões mais claras',
  'Dados mais úteis',
  'Menos retrabalho',
];

const solutions = [
  {
    icon: 'IA',
    title: 'Sistemas com IA',
    description:
      'Criamos ferramentas inteligentes para automatizar tarefas, organizar informações e apoiar decisões.',
  },
  {
    icon: '<>',
    title: 'Integrações e automações',
    description:
      'Conectamos sistemas, APIs e fluxos internos para reduzir trabalho manual e erros operacionais.',
  },
  {
    icon: 'DB',
    title: 'Análise de dados aplicada',
    description:
      'Transformamos dados de operação, estoque, vendas ou produtividade em insights claros e acionáveis.',
  },
  {
    icon: 'UI',
    title: 'Dashboards e interfaces',
    description:
      'Criamos experiências simples e visuais para equipes acompanharem o que realmente importa.',
  },
  {
    icon: 'ON',
    title: 'Produtos próprios',
    description:
      'Desenvolvemos soluções como Synapse IA, Nexus Engine e Apex Kinetic para resolver dores específicas.',
  },
  {
    icon: '?',
    title: 'Consultoria prática com IA',
    description:
      'Ajudamos empresas a encontrar onde a IA pode gerar valor real sem complexidade desnecessária.',
  },
];

const products = [
  {
    title: 'Nexus Engine',
    description:
      'Analisa estoque e identifica oportunidades de lucro, perdas e capital parado.',
    cta: 'Conhecer Nexus Engine',
  },
  {
    title: 'Synapse IA',
    description:
      'Organiza ideias, estratégias e tarefas com IA para transformar objetivos em planos executáveis.',
    cta: 'Conhecer Synapse IA',
  },
  {
    title: 'Apex Kinetic',
    description:
      'Aplicação fitness em desenvolvimento focada em performance e evolução.',
    cta: 'Ver projeto',
  },
];

const steps = [
  'Entendemos o problema',
  'Mapeamos dados e processos',
  'Criamos a solução com IA',
  'Testamos com uso real',
  'Evoluímos com base no resultado',
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <NeuralBackground />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-3 font-black tracking-tight">
            <span className="block h-8 w-32 overflow-hidden md:h-10 md:w-56">
              <img
                src="/logo.png"
                alt="O Nexus"
                className="h-full w-full origin-left scale-[1.55] object-contain object-left md:scale-[2.1]"
              />
            </span>
          </a>

          <div className="hidden items-center gap-10 text-sm font-semibold text-slate-400 md:flex">
            <a href="#solucoes" className="transition hover:text-white">
              Soluções
            </a>
            <a href="#produtos" className="transition hover:text-white">
              Produtos
            </a>
            <a href="#como-funciona" className="transition hover:text-white">
              Como funciona
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </div>

          <a
            className="rounded-lg border border-white/25 px-3 py-3 text-center text-xs font-black transition hover:border-nexus hover:bg-nexus/10 md:px-5 md:text-sm"
            href="#contato"
          >
            Falar sobre meu projeto
          </a>
        </nav>
      </header>

      <section className="relative px-5 pb-16 pt-40 md:px-8 md:pb-24 md:pt-44">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-nexus/15 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-9 inline-flex rounded-full border border-nexus/50 bg-nexus/15 px-5 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-glow">
            Tecnologia · automação · IA
          </div>

          <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-normal text-white md:text-7xl">
            Criamos sistemas com IA para transformar processos em{' '}
            <span className="block bg-gradient-to-r from-[#38bdf8] to-nexus bg-clip-text text-transparent">
              resultado
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            A O Nexus desenvolve soluções inteligentes, automações e integrações com IA para empresas que querem decidir melhor, economizar tempo e crescer com mais eficiência.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-semibold leading-7 text-slate-400 md:text-base">
            Soluções sob medida e produtos próprios para aplicar IA de forma prática no dia a dia das empresas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="w-full rounded-lg border border-white/25 bg-white px-6 py-3.5 text-center text-sm font-black text-ink transition hover:bg-nexus hover:text-white sm:w-auto"
            >
              Falar sobre meu projeto
            </a>
            <a
              href="#produtos"
              className="w-full rounded-lg border border-white/25 px-6 py-3.5 text-center text-sm font-black transition hover:border-nexus hover:bg-nexus/10 sm:w-auto"
            >
              Conhecer produtos
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-px border-y border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat} className="bg-ink/95 px-4 py-8 text-center">
              <p className="text-xl font-black leading-tight md:text-2xl">{stat}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Mapa operacional"
          title="Da operação à decisão"
          subtitle="Conectamos dados, processos e IA para transformar informações soltas em ações claras."
        />
        <MindMapDemo />
      </section>

      <section id="solucoes" className="px-5 py-14 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Soluções"
          title="O que a O Nexus constrói"
          subtitle="Sistemas, automações e produtos pensados para reduzir ruído operacional e gerar resultado real."
        />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <FeatureCard key={solution.title} {...solution} />
          ))}
        </div>
      </section>

      <section id="produtos" className="px-5 py-14 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Produtos"
          title="Produtos do ecossistema O Nexus"
          subtitle="Soluções próprias para problemas específicos de operação, estratégia e performance."
        />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="rounded-2xl border border-line bg-panel/95 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-glow">
                {product.title}
              </p>
              <p className="min-h-[112px] leading-7 text-slate-300">{product.description}</p>
              <a
                href="#contato"
                className="mt-6 inline-flex rounded-lg border border-white/20 px-4 py-3 text-sm font-black transition hover:border-nexus hover:bg-nexus/10"
              >
                {product.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="px-5 py-14 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Processo"
          title="Como trabalhamos"
          subtitle="Criamos soluções com foco no problema real, no uso diário e no resultado que a empresa precisa acompanhar."
        />
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step} className="bg-panel/95 p-6">
              <p className="mb-5 text-sm font-black text-glow">0{index + 1}</p>
              <h3 className="text-lg font-black leading-snug">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl rounded-[24px] border border-nexus/40 bg-gradient-to-br from-nexus/20 via-panel to-panel px-6 py-16 text-center shadow-violet md:px-10">
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Tem um processo que poderia ser mais inteligente?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Vamos transformar uma dor operacional em uma solução simples, útil e conectada ao seu negócio.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-lg border border-white/25 bg-white px-6 py-3.5 text-sm font-black text-ink transition hover:bg-nexus hover:text-white sm:w-auto"
            >
              Falar sobre meu projeto
            </a>
            <a
              href="#produtos"
              className="w-full rounded-lg border border-white/25 px-6 py-3.5 text-sm font-black transition hover:border-nexus hover:bg-nexus/10 sm:w-auto"
            >
              Conhecer produtos
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>O Nexus · Tecnologia, automação e IA</p>
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
