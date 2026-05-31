import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { instagramProfile } from "@/data/instagram";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Connect with Bhaavam Foundation on Instagram for support, volunteering, and partnerships.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink">
        Get Involved
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        {siteConfig.name} is actively growing on Instagram. For now, the best
        way to reach us, volunteer, donate, or partner is through a direct
        message on Instagram.
      </p>

      <div className="mt-10 rounded-2xl border border-sage-100 bg-sage-50/50 p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-600">
            <Instagram className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              Message us on Instagram
            </p>
            <p className="text-sm text-ink-muted">{siteConfig.instagramHandle}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          Share whether you&apos;re looking for support, want to volunteer, or
          hope to collaborate. We read every message with care.
        </p>
        <Button asChild className="mt-6">
          <a
            href={instagramProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Instagram
          </a>
        </Button>
      </div>

      {siteConfig.email ? (
        <p className="mt-8 flex items-center gap-2 text-sm text-ink-muted">
          <Mail className="h-4 w-4" aria-hidden />
          <a href={`mailto:${siteConfig.email}`} className="text-sage-600 hover:underline">
            {siteConfig.email}
          </a>
        </p>
      ) : (
        <p className="mt-8 text-sm text-ink-light">
          An official email will be added here once listed on our Instagram
          profile.
        </p>
      )}

      <Button asChild variant="ghost" className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
