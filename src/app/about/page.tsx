import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { instagramProfile } from "@/data/instagram";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story and mission of Bhaavam Foundation — mental health awareness through compassion and conversation.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink">About Us</h1>

      <p className="mt-6 text-lg leading-relaxed text-ink-muted">
        <strong className="font-medium text-ink">{siteConfig.name}</strong>{" "}
        {instagramProfile.missionLine.toLowerCase()}
      </p>

      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        {siteConfig.nameMeaning} Through our Instagram{" "}
        {siteConfig.instagramHandle}, we share mental health insights, book and
        film recommendations, and messages that remind people: healing takes
        time, and asking for help is a courageous step.
      </p>

      <blockquote className="mt-8 border-l-4 border-sage-300 pl-6 text-lg italic text-ink-muted">
        &ldquo;What mental health needs is more sunlight, more candor and more
        unashamed conversation.&rdquo;
      </blockquote>
      <p className="mt-2 text-sm text-ink-light">
        — Shared on @bhaavam_foundation
      </p>

      <h2 className="mt-12 font-display text-xl font-semibold text-ink">
        Core values
      </h2>
      <ul className="mt-4 space-y-3 text-ink-muted">
        <li>
          <strong className="text-ink">Empathy</strong> — Every emotion has a
          purpose.
        </li>
        <li>
          <strong className="text-ink">Confidentiality</strong> — Safe spaces
          for honest sharing.
        </li>
        <li>
          <strong className="text-ink">Accessibility</strong> — Free resources
          and approachable language.
        </li>
        <li>
          <strong className="text-ink">Community</strong> — Growing together on
          and beyond Instagram.
        </li>
      </ul>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <a
            href={instagramProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram
          </a>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
