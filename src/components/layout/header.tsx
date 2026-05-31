"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-sage-100/60 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
          aria-label={`${siteConfig.name} — Home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-500">
            <Heart className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-display text-lg font-semibold text-ink">
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
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400",
                  isActive
                    ? "bg-sage-50 text-sage-600"
                    : "text-ink-muted hover:bg-cream-200 hover:text-ink"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact?intent=support">Get Support</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-muted hover:bg-cream-200 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
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
          "border-t border-sage-100/60 bg-cream md:hidden",
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
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-sage-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full">
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
