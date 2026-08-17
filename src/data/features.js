import { BoltIcon, ShieldCheckIcon, QrCodeIcon, SlidersIcon } from "./icons.jsx";

// Order matters: this is the order cards animate in, one by one, as the
// tablet settles on the right.
export const TAPGO_FEATURES = [
  {
    title: "Faster Ordering",
    description:
      "Guests order straight from the table. No app to download, no waiting on a server to swing by.",
    Icon: BoltIcon,
  },
  {
    title: "Secure Payments",
    description:
      "Every transaction runs through encrypted, PCI-compliant checkout — built for speed and trust.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "QR Menu",
    description:
      "One scan opens a live menu you control. Update prices or 86 an item in seconds, everywhere at once.",
    Icon: QrCodeIcon,
  },
  {
    title: "Easy Management",
    description:
      "Track orders, tables, and payouts from a single dashboard — no separate systems to reconcile.",
    Icon: SlidersIcon,
  },
];
