import type { Metadata } from "next";
import Link from "next/link";
import { InstagramSection } from "@/components/resources/instagram-section";
import { PostsArchive } from "@/components/resources/posts-archive";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Mental health book and film recommendations from Bhaavam Foundation — curated on @bhaavam_foundation.",
};

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          Mental Health Hub
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Browse our full library of posts, plus Instagram recommendations —
          books, films, and honest conversation for your mental health journey.
        </p>

        <PostsArchive />
      </div>

      <InstagramSection />

      <p className="mx-auto max-w-7xl px-4 pb-12 text-center sm:px-6">
        <Link href="/" className="text-sm text-blush-700 hover:underline">
          ← Back to Home
        </Link>
      </p>
    </main>
  );
}
