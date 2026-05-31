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
        className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-sage-50/40 to-mist-50/50"
        aria-hidden
      />
      <div
        className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-sage-100/50 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-mist-100/60 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-sage-600 shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden />
              {siteConfig.tagline}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-8 font-display text-4xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl"
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
            className="mt-8 text-sm text-ink-light"
          >
            Book & film picks · Mental health insights ·{" "}
            {siteConfig.instagramHandle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
