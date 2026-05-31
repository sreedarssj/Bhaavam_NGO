import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clapperboard, ExternalLink, Instagram, MessageCircle } from "lucide-react";
import {
  instagramPosts,
  instagramProfile,
  type InstagramPostType,
} from "@/data/instagram";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const typeLabels: Record<InstagramPostType, string> = {
  book: "Book pick",
  film: "Film insight",
  awareness: "Awareness",
};

function PostTypeIcon({ type }: { type: InstagramPostType }) {
  if (type === "book") {
    return <BookOpen className="h-4 w-4" aria-hidden />;
  }
  if (type === "film") {
    return <Clapperboard className="h-4 w-4" aria-hidden />;
  }
  return <MessageCircle className="h-4 w-4" aria-hidden />;
}

/** Highlights from @bhaavam_foundation — sourced from public Instagram posts */
export function InstagramSection() {
  const latestPosts = instagramPosts.slice(0, 4);

  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start">
          <FadeIn>
            <div className="rounded-2xl border border-sage-100 bg-gradient-to-br from-sage-50/80 to-cream p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-sage-200 ring-offset-2 ring-offset-cream">
                  <Image
                    src={instagramProfile.profileImageUrl}
                    alt={`${instagramProfile.displayName} profile`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-ink">
                    {instagramProfile.displayName}
                  </p>
                  <p className="text-sm font-medium text-sage-600">
                    {siteConfig.instagramHandle}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-ink-muted">
                {instagramProfile.missionLine}
              </p>

              <dl className="mt-6 flex gap-6 text-center text-sm">
                <div>
                  <dt className="text-ink-light">Posts</dt>
                  <dd className="font-display text-lg font-semibold text-ink">
                    {instagramProfile.postsCount}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-light">Followers</dt>
                  <dd className="font-display text-lg font-semibold text-ink">
                    {instagramProfile.followers}+
                  </dd>
                </div>
              </dl>

              <Button asChild className="mt-8 w-full">
                <a
                  href={instagramProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${siteConfig.instagramHandle} on Instagram`}
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-sage-500">
                From our Instagram
              </p>
              <h2
                id="instagram-heading"
                className="mt-3 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl"
              >
                Mental health insights, books & films we love
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
                Our posts share thoughtful recommendations and honest
                conversation — the same spirit we bring to this website.
              </p>
            </FadeIn>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {latestPosts.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.06}>
                  <li>
                    <Card className="h-full transition-shadow hover:shadow-md hover:shadow-sage-100/40">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                              post.type === "book" &&
                                "bg-mist-100 text-mist-400",
                              post.type === "film" &&
                                "bg-warm-100 text-warm-400",
                              post.type === "awareness" &&
                                "bg-sage-100 text-sage-600"
                            )}
                          >
                            <PostTypeIcon type={post.type} />
                            {typeLabels[post.type]}
                          </span>
                          <time
                            dateTime={post.date}
                            className="text-xs text-ink-light"
                          >
                            {new Date(post.date).toLocaleDateString("en-IN", {
                              month: "short",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                        <Link
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
                        >
                          View on Instagram
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      </CardContent>
                    </Card>
                  </li>
                </FadeIn>
              ))}
            </ul>

            <p className="mt-6 text-center sm:text-left">
              <Link
                href="/resources"
                className="text-sm font-medium text-sage-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
              >
                See all resources →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
