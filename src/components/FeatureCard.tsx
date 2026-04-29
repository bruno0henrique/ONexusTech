import { motion } from 'framer-motion';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="min-h-[218px] rounded-2xl border border-line bg-panel p-7"
    >
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-nexus/20 text-lg font-black text-glow">
        {icon}
      </div>
      <h3 className="text-lg font-black leading-snug">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </motion.article>
  );
}
