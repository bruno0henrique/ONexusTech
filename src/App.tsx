import { motion } from 'framer-motion';

const whatsappHref =
  'https://wa.me/5512991432188?text=Quero%20testar%20o%20Nexus%20Engine%20no%20meu%20negocio';

const problems = [
  {
    title: 'Estoque que não bate',
    text: 'Divergências aparecem tarde e viram retrabalho.',
  },
  {
    title: 'Produto parado ou zerado',
    text: 'Capital fica preso ou a venda se perde por falta de alerta.',
  },
  {
    title: 'Falta de histórico',
    text: 'A equipe ajusta dados sem deixar rastros claros.',
  },
  {
    title: 'Perdas invisíveis',
    text: 'Pequenas falhas se acumulam sem sinalizar prejuízo.',
  },
  {
    title: 'Decisões feitas no achismo',
    text: 'Sem painel confiável, a gestão depende de percepção.',
  },
];

const solutions = [
  {
    label: '01',
    title: 'Estoque inteligente',
    text: 'Controle entradas, saídas, ajustes e níveis críticos por loja e produto.',
  },
  {
    label: '02',
    title: 'Dashboard operacional',
    text: 'Acompanhe alertas, movimentações e indicadores úteis para a rotina.',
  },
  {
    label: '03',
    title: 'Auditoria de ações',
    text: 'Registre quem fez, quando fez e o que mudou em pontos importantes.',
  },
  {
    label: '04',
    title: 'IA Nexus',
    text: 'Apoio para identificar riscos, organizar dados e destacar prioridades.',
  },
];

const steps = [
  'Cadastre lojas e produtos',
  'Registre entradas, saídas e ajustes',
  'Veja alertas de estoque baixo',
  'Acompanhe tudo na Auditoria',
];

const readyModules = ['Estoque', 'Dashboard', 'Auditoria', 'IA Nexus'];

const buildingModules = [
  'Vendas',
  'Financeiro',
  'Clientes',
  'Fornecedores',
  'Produção',
  'Agendamentos',
];

const dashboardRows = [
  ['Arroz tipo 1', '42 un.', 'Normal'],
  ['Café 500g', '8 un.', 'Baixo'],
  ['Óleo 900ml', '0 un.', 'Zerado'],
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Nexus Engine">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-sm font-black text-white">
              NX
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-tight text-brand">
                Nexus Engine
              </span>
              <span className="hidden text-xs font-semibold text-muted sm:block">
                Controle operacional SaaS
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-muted md:flex">
            <a href="#problemas" className="transition hover:text-brand">
              Problemas
            </a>
            <a href="#solucao" className="transition hover:text-brand">
              Solução
            </a>
            <a href="#modulos" className="transition hover:text-brand">
              Módulos
            </a>
            <a href="#contato" className="transition hover:text-brand">
              Contato
            </a>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-brand px-4 py-2.5 text-sm font-black text-white shadow-soft transition hover:bg-leaf"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section className="relative min-h-[calc(100svh-80px)] overflow-hidden border-b border-line bg-mint/55 px-5 pb-12 pt-14 md:min-h-[calc(100svh-96px)] md:px-8 md:pb-14 md:pt-16">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-white/45" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-lg border border-brand/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand">
              Nexus Engine
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight tracking-normal text-ink md:text-6xl">
              Controle sua operação antes que o prejuízo apareça
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
              O Nexus Engine ajuda pequenos negócios a controlar estoque,
              acompanhar alertas e registrar ações importantes com auditoria.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="w-full rounded-lg bg-brand px-6 py-3.5 text-center text-sm font-black text-white shadow-soft transition hover:bg-leaf sm:w-auto"
              >
                Ver demonstração
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-lg border border-brand/25 bg-white px-6 py-3.5 text-center text-sm font-black text-brand transition hover:border-brand hover:bg-mint sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div
          id="demo"
          className="pointer-events-none absolute inset-x-4 bottom-5 z-0 mx-auto h-36 max-w-6xl overflow-hidden rounded-lg border border-line bg-white/95 opacity-50 shadow-card md:bottom-8 md:h-44 md:opacity-75"
        >
          <div className="grid border-b border-line bg-slate-50 px-4 py-3 md:grid-cols-[1fr_auto] md:items-center md:px-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand">
                Visão operacional
              </p>
              <p className="mt-1 text-sm font-semibold text-muted">
                Estoque, alertas e auditoria no mesmo fluxo de trabalho.
              </p>
            </div>
            <div className="mt-3 flex gap-2 md:mt-0">
              <span className="rounded-lg bg-mint px-3 py-2 text-xs font-black text-brand">
                3 alertas
              </span>
              <span className="rounded-lg bg-amber/10 px-3 py-2 text-xs font-black text-amber">
                1 zerado
              </span>
            </div>
          </div>

          <div className="grid gap-px bg-line md:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-white p-4 md:p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['Itens ativos', '128'],
                  ['Movimentos hoje', '36'],
                  ['Ajustes auditados', '9'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-line bg-paper p-4">
                    <p className="text-xs font-bold text-muted">{label}</p>
                    <p className="mt-2 text-2xl font-black text-brand">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 overflow-hidden rounded-lg border border-line">
                <div className="grid grid-cols-[1fr_90px_88px] bg-slate-50 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-muted">
                  <span>Produto</span>
                  <span>Saldo</span>
                  <span>Status</span>
                </div>
                {dashboardRows.map(([product, balance, status]) => (
                  <div
                    key={product}
                    className="grid grid-cols-[1fr_90px_88px] border-t border-line px-4 py-3 text-sm"
                  >
                    <span className="font-bold text-ink">{product}</span>
                    <span className="font-semibold text-muted">{balance}</span>
                    <span
                      className={
                        status === 'Normal'
                          ? 'font-black text-leaf'
                          : status === 'Baixo'
                            ? 'font-black text-amber'
                            : 'font-black text-red-700'
                      }
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-paper p-4 md:p-6">
              <p className="text-sm font-black text-brand">Auditoria recente</p>
              <div className="mt-4 space-y-3">
                {[
                  'Entrada registrada na Loja Centro',
                  'Ajuste de saldo aprovado por gestor',
                  'Alerta de estoque baixo gerado',
                ].map((item, index) => (
                  <div key={item} className="rounded-lg border border-line bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-muted">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-bold text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problemas" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand">
              Problemas
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              O prejuízo costuma começar pequeno.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {problems.map((problem) => (
              <motion.article
                key={problem.title}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="rounded-lg border border-line bg-white p-5 shadow-sm"
              >
                <div className="mb-4 h-1.5 w-10 rounded-full bg-brand" />
                <h3 className="text-lg font-black leading-snug text-ink">{problem.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{problem.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucao" className="border-y border-line bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand">
                Solução
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                Uma plataforma para ver, agir e rastrear.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
              O Nexus Engine organiza o controle operacional em módulos práticos,
              começando pelo estoque e pelo histórico das ações relevantes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-lg border border-line bg-paper p-6 shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-xs font-black text-white">
                  {solution.label}
                </span>
                <h3 className="mt-5 text-xl font-black text-ink">{solution.title}</h3>
                <p className="mt-3 leading-7 text-muted">{solution.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand">
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Da entrada do produto ao registro auditável.
            </h2>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step} className="bg-white p-6">
                <p className="text-sm font-black text-brand">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-black leading-snug text-ink">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modulos" className="border-y border-line bg-mint/45 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand">
                Módulos
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                Comece pelo que já está pronto.
              </h2>
              <p className="mt-5 leading-7 text-muted">
                A base inicial cobre controle operacional. Os próximos módulos
                seguem como evolução do produto.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-leaf">
                  Prontos
                </p>
                <div className="mt-5 grid gap-3">
                  {readyModules.map((module) => (
                    <span
                      key={module}
                      className="rounded-lg border border-leaf/20 bg-mint px-4 py-3 font-black text-brand"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-muted">
                  Em construção
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {buildingModules.map((module) => (
                    <span
                      key={module}
                      className="rounded-lg border border-line bg-paper px-4 py-3 font-bold text-muted"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand">
            Próximo passo
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            Quer testar o Nexus Engine no seu negócio?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">
            Converse sobre sua operação, seus produtos e o melhor caminho para
            validar o controle inicial.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-lg bg-brand px-7 py-3.5 text-sm font-black text-white shadow-soft transition hover:bg-leaf"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-line bg-white px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">Nexus Engine | Plataforma SaaS de controle operacional</p>
          <p>Estoque, Dashboard, Auditoria e IA Nexus.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
