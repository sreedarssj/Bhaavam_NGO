"use client";

import { useState } from "react";
import Image from "next/image";
import { allPosts, type FeedPost } from "@/data/posts";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function PostsArchive() {
  const [selectedPost, setSelectedPost] = useState<FeedPost | null>(null);

  // Renders the detailed text inside the modal beautifully (handling lists and headers)
  const renderModalContent = (text: string) => {
    return text.split("\n\n").map((block, idx) => {
      // Headers
      if (block.startsWith("### ")) {
        return (
          <h4
            key={idx}
            className="mt-6 font-display text-lg font-semibold text-ink sm:text-xl"
          >
            {block.replace("### ", "")}
          </h4>
        );
      }
      
      // Unordered Lists
      if (block.startsWith("* ") || block.startsWith("- ")) {
        const items = block.split(/\n[\*\-]\s/);
        return (
          <ul
            key={idx}
            className="mt-3 list-disc pl-5 space-y-2 text-ink-muted leading-relaxed"
          >
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>{item.replace(/^[\*\-]\s/, "")}</li>
            ))}
          </ul>
        );
      }

      // Ordered Lists
      if (/^\d+\.\s/.test(block)) {
        const items = block.split(/\n\d+\.\s/);
        return (
          <ol
            key={idx}
            className="mt-3 list-decimal pl-5 space-y-2 text-ink-muted leading-relaxed"
          >
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>{item.replace(/^\d+\.\s/, "")}</li>
            ))}
          </ol>
        );
      }

      // Standard Paragraph
      return (
        <p
          key={idx}
          className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {block}
        </p>
      );
    });
  };

  return (
    <section
      id="all-posts"
      className="scroll-mt-24 border-t border-blush-100 py-16 sm:py-20"
      aria-labelledby="archive-heading"
    >
      <FadeIn>
        <div>
          <h2
            id="archive-heading"
            className="font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            All posts & resources
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Browse our growing library of blogs, movie/book recommendations, 
            self-care toolkits, and mental health resources.
          </p>
        </div>
      </FadeIn>

      {/* Posts grid */}
      <div className="relative mt-10">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.04}>
              <li className="h-full">
                <Card 
                  className="group h-full flex flex-col overflow-hidden cursor-pointer border border-blush-100/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blush-100/40"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-blush-50">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex rounded-full bg-blush-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-blush-700">
                        {post.category === "Article" ? "Blog Article" : post.category}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-lg leading-snug group-hover:text-blush-700 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <CardDescription className="text-base text-ink-muted line-clamp-3">
                      {post.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center justify-between text-xs text-ink-light pt-3 border-t border-cream-200">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="font-semibold text-blush-600 group-hover:underline">
                        Read {post.category === "Article" ? "Article" : "Resource"} →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>

      {/* Premium Full Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cream border border-blush-100 shadow-2xl p-6 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-ink-muted shadow-sm transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400"
                aria-label="Close reader"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-blush-100 bg-blush-50 shadow-sm">
                <Image
                  src={selectedPost.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Meta tags */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-blush-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blush-800">
                  {selectedPost.category === "Article" ? "Blog Article" : selectedPost.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-ink-light">
                  <Calendar className="h-4 w-4" />
                  {new Date(selectedPost.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Title */}
              <h3
                id="modal-title"
                className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl leading-snug"
              >
                {selectedPost.title}
              </h3>

              {/* Divider */}
              <hr className="my-6 border-blush-100" />

              {/* Reading Body */}
              <div className="prose max-w-none text-ink">
                {selectedPost.content ? (
                  renderModalContent(selectedPost.content)
                ) : (
                  <p className="text-lg leading-relaxed text-ink-muted">
                    {selectedPost.description}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
