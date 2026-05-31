import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clapperboard, ExternalLink, MessageCircle } from "lucide-react";
import { instagramPosts, instagramProfile } from "@/data/instagram";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Mental health book and film recommendations from Bhaavam Foundation — curated on @bhaavam_foundation.",
};

const typeIcon = {
  book: BookOpen,
  film: Clapperboard,
  awareness: MessageCircle,
} as const;

export default function ResourcesPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink">
        Mental Health Hub
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
        Recommendations and reflections we&apos;ve shared on Instagram — books,
        films, and honest conversation starters for your mental health journey.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {instagramPosts.map((post) => {
          const Icon = typeIcon[post.type];
          return (
            <li key={post.id}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-sage-50 text-sage-500">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="capitalize">
                    {post.type === "awareness"
                      ? "Awareness"
                      : post.type === "book"
                        ? "Book"
                        : "Film"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  {post.hashtags.length > 0 && (
                    <p className="mt-3 text-xs text-ink-light">
                      {post.hashtags.map((t) => `#${t}`).join(" ")}
                    </p>
                  )}
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:underline"
                  >
                    View post
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 text-center">
        <Button asChild>
          <a
            href={instagramProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            See more on Instagram
          </a>
        </Button>
        <p className="mt-6">
          <Link href="/" className="text-sm text-sage-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </main>
  );
}
