import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram } from "lucide-react";
import { instagramProfile } from "@/data/instagram";
import { siteConfig } from "@/data/site";

/** Closing call-to-action before footer */
export function CtaSection() {
  return (
    <section
      className="py-16 sm:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-14 text-center shadow-lg sm:px-16 sm:py-16">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]"
              aria-hidden
            />
            <h2
              id="cta-heading"
              className="relative font-display text-3xl font-semibold text-white text-balance sm:text-4xl md:text-5xl"
            >
              Ready to take the first step?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-blush-50">
              Connect with us on {siteConfig.instagramHandle} for mental health
              insights, book and film recommendations, and updates on our journey.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="crisis"
                className="w-full sm:w-auto text-blush-600"
              >
                <a
                  href={instagramProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  Follow {siteConfig.instagramHandle}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              >
                <Link href="/contact?intent=partner">
                  Inquire / Partner
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
