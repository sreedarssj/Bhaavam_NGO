"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CAROUSEL_MAX, carouselPosts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

const visiblePosts = carouselPosts.slice(0, CAROUSEL_MAX);

export function PostsCarousel() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const count = visiblePosts.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  if (count === 0) return null;

  const post = visiblePosts[index];

  return (
    <section
      className="border-y border-blush-100/80 bg-brand-gradient-soft py-16 sm:py-24"
      aria-labelledby="carousel-heading"
      aria-roledescription="carousel"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold uppercase tracking-wider text-blush-600 sm:text-lg">
              Latest updates
            </p>
            <h2
              id="carousel-heading"
              className="mt-4 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl md:text-5xl"
            >
              Stories & resources for your wellbeing
            </h2>
          </div>
          <p className="text-sm text-ink-muted" aria-live="polite">
            {index + 1} of {count}
          </p>
        </FadeIn>

        <div className="relative mt-10">
          <div className="overflow-hidden rounded-2xl border border-blush-100 bg-white shadow-lg shadow-blush-100/40">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={post.id}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, x: 24 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid md:grid-cols-2"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}: ${post.title}`}
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-blush-900/30 to-transparent md:bg-gradient-to-r"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="inline-flex w-fit rounded-full bg-blush-50 px-3 py-1 text-xs font-medium text-blush-700">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {post.description}
                  </p>
                  <time
                    dateTime={post.date}
                    className="mt-4 text-sm text-ink-light"
                  >
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-blush-700 shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 md:left-4"
                aria-label="Previous post"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-blush-700 shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 md:right-4"
                aria-label="Next post"
              >
                <ArrowRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}

          <div
            className="mt-4 flex justify-center gap-2"
            role="tablist"
            aria-label="Carousel slides"
          >
            {visiblePosts.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}: ${p.title}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400",
                  i === index
                    ? "w-8 bg-brand-gradient"
                    : "w-2 bg-blush-200 hover:bg-blush-300"
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="default">
            <Link href="/resources#all-posts">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
