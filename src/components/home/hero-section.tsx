"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroContent, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-blush-50/40 to-mist-50/50"
        aria-hidden
      />
      <div
        className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blush-100/50 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-mist-100/60 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-20">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mt-4">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-blush-200 bg-white/80 px-5 py-2.5 text-base font-medium text-blush-700 shadow-sm sm:text-lg sm:px-6 sm:py-3">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
              {siteConfig.tagline}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-10 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-xl leading-relaxed text-ink-muted sm:text-2xl"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {"external" in heroContent.secondaryCta &&
                heroContent.secondaryCta.external ? (
                <a
                  href={heroContent.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {heroContent.secondaryCta.label}
                </a>
              ) : (
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </Link>
              )}
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 text-base text-ink-light sm:text-lg"
          >
            Book & film picks · Mental health insights ·{" "}
            {siteConfig.instagramHandle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
