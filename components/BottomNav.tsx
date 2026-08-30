"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBasket } from "@/lib/basket-context";
import { whatsappHref } from "@/lib/whatsapp";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden>
      <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.5V21h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden>
      <path d="M4 7h16l-1.5 13h-13L4 7Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7a3 3 0 0 1 6 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BasketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden>
      <path d="M5 9h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 9Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9 12 4l3 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.1 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.8a11.4 11.4 0 0 1-4.6-4c-.3-.5-1-1.6-1-3s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.3c-.2.2-.3.4-.2.6.2.4.8 1.3 1.6 2 .9.9 1.8 1.2 2.2 1.3.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.5.3.1.3.1.7-.1 1.3Z" />
    </svg>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const { totalCount } = useBasket();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (active: boolean) =>
    `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs ${
      active ? "text-black" : "text-gray-500"
    }`;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)] sm:hidden"
      aria-label="Primary"
    >
      <Link href="/" className={linkClass(isActive("/"))}>
        <HomeIcon />
        Home
      </Link>
      <Link href="/products" className={linkClass(isActive("/products"))}>
        <ShopIcon />
        Shop
      </Link>
      <Link href="/basket" className={linkClass(isActive("/basket"))}>
        <span className="relative">
          <BasketIcon />
          {totalCount > 0 && (
            <span className="absolute -right-2 -top-1 rounded-full bg-black px-1.5 text-[10px] font-semibold text-white">
              {totalCount}
            </span>
          )}
        </span>
        Basket
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass(false)}
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </nav>
  );
}
