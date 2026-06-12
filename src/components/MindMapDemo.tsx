import { motion } from 'framer-motion';

const nodes = [
  {
    label: 'Dados',
    text: 'Informações que já existem no negócio.',
    className: 'left-[7%] top-[46%]',
  },
  {
    label: 'Processos',
    text: 'Fluxos, tarefas e pontos de atrito.',
    className: 'left-[38%] top-[16%]',
  },
  {
    label: 'IA',
    text: 'Automação aplicada ao contexto real.',
    className: 'right-[10%] top-[30%]',
  },
  {
    label: 'Oportunidades',
    text: 'Onde existe ganho de tempo ou dinheiro.',
    className: 'right-[7%] top-[48%]',
  },
  {
    label: 'Ações',
    text: 'Próximos passos claros para executar.',
    className: 'right-[18%] bottom-[15%]',
  },
  {
    label: 'Resultado',
    text: 'Evolução acompanhada no uso real.',
    className: 'left-[16%] bottom-[16%]',
  },
];

export function MindMapDemo() {
  return (
    <div className="mx-auto max-w-7xl rounded-[24px] border border-line bg-panel/95 p-5 shadow-violet md:p-8">
      <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-2 text-sm font-bold text-slate-400">
          O Nexus · Mapa de solução
        </span>
      </div>

      <div className="relative mx-auto h-[560px] overflow-hidden rounded-2xl bg-[#0a0918] md:h-[560px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,140,255,0.2),transparent_44%)]" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g stroke="#38bdf8" strokeDasharray="5 8" strokeWidth="2" opacity="0.68">
            <path d="M500 280 L160 285" />
            <path d="M500 280 L500 105" />
            <path d="M500 280 L770 170" />
            <path d="M500 280 L850 290" />
            <path d="M500 280 L690 455" />
            <path d="M500 280 L270 455" />
          </g>
          <g fill="#38bdf8">
            <circle cx="160" cy="285" r="5" />
            <circle cx="500" cy="105" r="5" />
            <circle cx="770" cy="170" r="5" />
            <circle cx="850" cy="290" r="5" />
            <circle cx="690" cy="455" r="5" />
            <circle cx="270" cy="455" r="5" />
          </g>
        </svg>

        <div className="absolute left-1/2 top-[28%] z-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-nexus/70 bg-gradient-to-br from-[#38bdf8] via-nexus to-glow px-4 py-4 text-center shadow-violet md:top-1/2 md:w-56 md:px-6 md:py-5">
          <div className="mx-auto mb-2 grid h-7 w-7 place-items-center rounded-full border border-white/60 text-sm">
            ON
          </div>
          <p className="text-xs font-black leading-tight md:text-sm">Problema do negócio</p>
        </div>

        {nodes.map((node, index) => (
          <motion.div
            key={node.label}
            animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
            transition={{ duration: 5 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute z-10 hidden w-48 rounded-xl border border-glow/50 bg-nexus/10 p-4 md:block ${node.className}`}
          >
            <p className="text-xs font-black">{node.label}</p>
            <p className="mt-1 text-[11px] leading-4 text-slate-400">{node.text}</p>
          </motion.div>
        ))}

        <div className="absolute inset-x-4 bottom-4 z-20 grid gap-3 md:hidden">
          {nodes.slice(0, 4).map((node) => (
            <div key={node.label} className="rounded-xl border border-glow/40 bg-nexus/10 p-3">
              <p className="text-xs font-black">{node.label}</p>
              <p className="mt-1 text-[11px] leading-4 text-slate-400">{node.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
