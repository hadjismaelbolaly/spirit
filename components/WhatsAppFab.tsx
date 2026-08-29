import { siteConfig } from "@/lib/site-config";

export default function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-ink shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-transform hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.87 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1H12a7.94 7.94 0 0 0 5.6-13.58ZM12.05 18.4a6.56 6.56 0 0 1-3.35-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 12.24-3.5 6.56 6.56 0 0 1-6.66 6.59Zm3.6-4.93c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1-.5.63-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.6-.98 5.98 5.98 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4s.2-.23.3-.35a1.36 1.36 0 0 0 .2-.34.37.37 0 0 0 0-.35c-.05-.1-.45-1.08-.62-1.48s-.33-.33-.45-.34h-.38a.74.74 0 0 0-.53.25 2.24 2.24 0 0 0-.7 1.67 3.9 3.9 0 0 0 .81 2.06 8.9 8.9 0 0 0 3.4 3.01c.48.2.85.33 1.14.42.48.15.91.13 1.26.08.38-.06 1.17-.48 1.34-.94s.17-.86.12-.94-.18-.13-.38-.22Z"
          fill="#D4AF37"
        />
      </svg>
    </a>
  );
}
