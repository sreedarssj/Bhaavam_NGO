import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Initiatives",
  description:
    "Counseling, support groups, workshops, and wellness programs from Bhaavam Foundation.",
};

export default function InitiativesPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink">
        Our Initiatives
      </h1>
      <p className="mt-4 text-lg text-ink-muted leading-relaxed">
        Service cards for counseling, support groups, workshops, and corporate
        wellness programs will appear here soon.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
