import Seal from "./Seal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          <Seal size={14} className="text-gold" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="max-w-2xl text-3xl leading-tight text-ivory sm:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-xl text-base leading-relaxed text-ivory/60">{subtitle}</p>}
    </div>
  );
}
