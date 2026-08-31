type SealProps = {
  size?: number;
  className?: string;
};

// Élément de signature visuelle du site : un sceau circulaire dessiné à la
// main, en écho aux bagues-sigil et bols rituels de la boutique. Utilisé
// comme puce, séparateur de section, ou motif d'arrière-plan discret.
export default function Seal({ size = 20, className = "" }: SealProps) {
  return (
    <span className={`seal ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1" />
        <path
          d="M20 9 L29.5 27 H10.5 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="9" r="1.4" fill="currentColor" />
        <circle cx="29.5" cy="27" r="1.4" fill="currentColor" />
        <circle cx="10.5" cy="27" r="1.4" fill="currentColor" />
        <circle cx="20" cy="20" r="2.2" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    </span>
  );
}
