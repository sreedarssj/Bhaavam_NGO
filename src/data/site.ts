/**
 * Centralized site content for Bhaavam Foundation.
 * Instagram-sourced details: see src/data/instagram.ts
 */

import { instagramProfile } from "./instagram";

export const siteConfig = {
  name: "Bhaavam Foundation",
  /** Aligns with messaging on @bhaavam_foundation */
  tagline: "Building a society with better mental health",
  description:
    "Bhaavam Foundation (भावम्) shares mental health awareness, thoughtful book and film recommendations, and compassionate conversation. Follow our journey on Instagram @bhaavam_foundation.",
  /** “Bhaav” — emotion, feeling; “-am” — a sense of belonging */
  nameMeaning:
    "Rooted in the idea that emotions (bhaav) deserve space, understanding, and care.",
  instagram: instagramProfile.url,
  instagramHandle: `@${instagramProfile.handle}`,
  /** Add when listed on Instagram or website */
  email: null as string | null,
  phone: null as string | null,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Get Involved", href: "/contact" },
  { label: "About", href: "/about" },
] as const;

export const missionPillars = [
  {
    id: "awareness",
    title: "Awareness",
    description:
      "More sunlight, more candor, and more unashamed conversation — we share insights through books, films, and everyday mental health dialogue.",
    icon: "lightbulb" as const,
  },
  {
    id: "destigmatization",
    title: "De-stigmatization",
    description:
      "Healing takes time, and asking for help is a courageous step. We normalize emotions and stories that society too often silences.",
    icon: "heart-handshake" as const,
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description:
      "Free, thoughtful resources on Instagram — book and movie recommendations that make mental health learning approachable for everyone.",
    icon: "accessibility" as const,
  },
  {
    id: "aid",
    title: "Aid",
    description:
      "Growing toward hands-on support — counseling, safe spaces, and community programs — while we build a compassionate movement online and offline.",
    icon: "hands-helping" as const,
  },
] as const;

/** Metrics aligned with public @bhaavam_foundation profile (update as you grow) */
export const impactStats = [
  {
    label: "Instagram Community",
    value: `${instagramProfile.followers}+`,
    icon: "users" as const,
  },
  {
    label: "Awareness Posts",
    value: String(instagramProfile.postsCount),
    icon: "presentation" as const,
  },
  {
    label: "Book Picks Shared",
    value: "2+",
    icon: "book" as const,
  },
  {
    label: "Film Insights Shared",
    value: "2+",
    icon: "film" as const,
  },
] as const;

export const heroContent = {
  headline: "You are not alone. Every emotion has a purpose.",
  subheadline:
    "Bhaavam Foundation is on a journey to building a society with better mental health — through candid conversation, book and film recommendations, and a growing community on Instagram.",
  primaryCta: {
    label: "Get Support Now",
    href: "/contact?intent=support",
  },
  secondaryCta: {
    label: "Follow on Instagram",
    href: instagramProfile.url,
    external: true,
  },
};

export const socialLinks = [
  {
    platform: "Instagram",
    href: instagramProfile.url,
    handle: `@${instagramProfile.handle}`,
  },
] as const;
