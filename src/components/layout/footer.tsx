import Link from "next/link";
import { Heart, Instagram } from "lucide-react";
import { navigation, siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-100 bg-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-500">
                <Heart className="h-5 w-5" aria-hidden />
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
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sage-500 hover:text-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded-md"
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
                    className="text-sm text-ink-muted hover:text-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
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
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-sm text-ink-muted hover:text-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
                  >
                    {link.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-sage-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
