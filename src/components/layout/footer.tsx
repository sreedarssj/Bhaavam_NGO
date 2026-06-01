import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { assetUrls } from "@/data/assets";
import { navigation, siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blush-100 bg-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-display text-2xl font-semibold text-ink sm:text-3xl"
            >
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-blush-200 sm:h-14 sm:w-14">
                <Image
                  src={assetUrls.logo}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 48px, 56px"
                />
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              {siteConfig.description}
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blush-600 hover:text-blush-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 rounded-md"
              aria-label={`Follow us on Instagram ${siteConfig.instagramHandle}`}
            >
              <Instagram className="h-4 w-4" aria-hidden />
              {siteConfig.instagramHandle}
            </a>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted hover:text-blush-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Connect
            </h2>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-muted hover:text-blush-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 rounded"
                  >
                    {link.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-blush-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-light">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-light max-w-lg">
            This website provides information and support resources. It is not
            a substitute for professional medical advice or emergency services.
            If you are in immediate danger, please call your local emergency
            number.
          </p>
        </div>
      </div>
    </footer>
  );
}
