import Link from "next/link";
import type { Service } from "@/lib/services";
import Seal from "./Seal";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="surface group flex flex-col gap-3 p-6 transition-colors"
    >
      <Seal size={22} className="text-gold/70 group-hover:text-gold" />
      <h3 className="font-display text-base text-ivory group-hover:text-gold">{service.title}</h3>
      <p className="text-sm leading-relaxed text-ivory/60">{service.shortDescription}</p>
      <span className="mt-auto pt-3 font-mono text-[11px] uppercase tracking-widest text-gold/80">
        {service.format}
      </span>
    </Link>
  );
}
