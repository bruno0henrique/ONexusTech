type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      <p className="mb-5 text-[11px] font-black uppercase tracking-[0.35em] text-glow">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black leading-tight md:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
