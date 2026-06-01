"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-white/15 bg-brand-gradient shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-[5.5rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:gap-4"
          aria-label={`${siteConfig.name} — Home`}
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/30 ring-offset-2 ring-offset-plum sm:h-14 sm:w-14">
            <Image
              src="/icon.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 48px, 56px"
              priority
            />
          </span>
          <span className="font-display text-xl font-semibold text-white sm:text-2xl">
            Bhaavam
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  isActive
                    ? "bg-white/20 text-white font-semibold shadow-sm border border-white/10"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="default" variant="crisis">
            <Link href="/contact?intent=support">Get Support</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white/80 hover:bg-white/10 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-white/15 bg-brand-gradient md:hidden",
          !mobileOpen && "hidden"
        )}
        aria-label="Mobile navigation"
      >
        <ul className="space-y-1 px-4 py-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full" variant="crisis">
              <Link
                href="/contact?intent=support"
                onClick={() => setMobileOpen(false)}
              >
                Get Support Now
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
