import type { SVGProps } from "react";

/**
 * Line icons ringan — sengaja minimal agar sesuai guide (hindari ikon
 * ramai dalam lingkaran warna polos).
 */

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const WhatsappIcon = (p: P) => (
  <svg {...base} {...p}>
    {/* bubble */}
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.42A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
    {/* phone handset */}
    <path
      fill="currentColor"
      stroke="none"
      d="M9.06 8.4c.17-.4.4-.47.63-.47h.48c.18 0 .4.01.57.42l.65 1.54c.1.24 0 .48-.16.63l-.4.4c-.16.16-.24.33-.08.57.42.74 1.12 1.44 1.86 1.86.24.16.41.08.57-.08l.4-.4c.15-.16.39-.26.63-.16l1.54.65c.41.17.42.39.42.57v.48c0 .23-.07.46-.47.63-.56.17-1.6.56-2.8-.16-1.52-.88-3.04-2.4-3.92-3.92-.72-1.2-.33-2.24-.16-2.8Z"
    />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

export const BedIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 17v-5a3 3 0 0 1 3-3h8a4 4 0 0 1 4 4v4M3 17h18M3 17v3M21 17v3M7 12a2 2 0 1 1 0-.01" />
  </svg>
);

export const BathIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4Z" />
    <path d="M6 12V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2M6 20l-1 2M18 20l1 2" />
  </svg>
);

export const CarIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5M3 13v5h2v-2h14v2h2v-5M3 13h18" />
    <circle cx="7" cy="16" r="1" />
    <circle cx="17" cy="16" r="1" />
  </svg>
);

export const RulerIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 15l12-12 6 6-12 12-6-6Z" />
    <path d="M7 11l1 1M10 8l2 2M13 5l1 1M6 14l2 2" />
  </svg>
);

export const LeafIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 4c-8 0-14 4-14 12a4 4 0 0 0 4 4c8 0 12-6 12-14 0-.7 0-1.4-.1-2h-1.9ZM5 21c2-6 7-10 14-12" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const KeyIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M12 13l8-8M17 8l3 3M15 10l2 2" />
  </svg>
);

export const SofaIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" />
    <path d="M6 12V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3M4 18v2M20 18v2" />
  </svg>
);

export const ChevronDownIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ArrowRightIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const MapPinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12l4 4 10-10" />
  </svg>
);
