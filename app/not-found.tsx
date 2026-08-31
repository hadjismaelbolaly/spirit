import Link from "next/link";
import Seal from "@/components/Seal";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-5 px-5 py-32 text-center">
      <Seal size={32} className="text-gold" />
      <h1 className="font-display text-3xl text-ivory">Page introuvable</h1>
      <p className="text-sm leading-relaxed text-ivory/60">
        Le chemin que vous cherchez n&apos;existe pas ou a été déplacé.
      </p>
      <Link href="/" className="btn-gold">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
