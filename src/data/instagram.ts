/**
 * Content sourced from @bhaavam_foundation on Instagram (public posts).
 * Update this file when new posts or profile details are published.
 */

export const instagramProfile = {
  handle: "bhaavam_foundation",
  displayName: "Bhaavam Foundation",
  url: "https://www.instagram.com/bhaavam_foundation/",
  followers: 34,
  postsCount: 6,
  following: 0,
  /** Public profile image (Instagram CDN — may expire; replace with local asset in production) */
  profileImageUrl:
    "https://scontent.cdninstagram.com/v/t51.2885-19/472259486_3833065950278041_2646340039007686539_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=9ImqLbK-lTgQ7kNvwGMeQ70&_nc_oc=AdqGnHJuhPq36uHCPJ9IaEqyvHPS13n3YyfhuUGtUDU4SFpm_EY7Vlgw4H4TQKtPVR9PhY6iTlS8tXnnojt6Koj3&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b689&oh=00_Af-ox2ep-kAbmh_s8Gz1jPeIhO8OGM2f_CI_PpsQmluNkQ&oe=6A21CB1A",
  /** Recurring mission line from their posts */
  missionLine:
    "On a journey to building a society with better mental health.",
  /** Profile bio is currently empty on Instagram */
  bio: null as string | null,
} as const;

export type InstagramPostType = "film" | "book" | "awareness";

export interface InstagramPost {
  id: string;
  url: string;
  date: string;
  likes: number;
  type: InstagramPostType;
  title: string;
  excerpt: string;
  hashtags: string[];
}

/** Latest posts from @bhaavam_foundation (newest first) */
export const instagramPosts: InstagramPost[] = [
  {
    id: "DIkznDSSijw",
    url: "https://www.instagram.com/bhaavam_foundation/p/DIkznDSSijw/",
    date: "2025-04-17",
    likes: 1,
    type: "film",
    title: "Inside Out",
    excerpt:
      "A gentle reminder that every emotion has a purpose. Sometimes, sadness is the bridge that brings us closer to healing, connection, and understanding.",
    hashtags: ["MentalHealthMatters", "MovieRecommendation", "InsideOut"],
  },
  {
    id: "DIDj6h8iLJd",
    url: "https://www.instagram.com/bhaavam_foundation/p/DIDj6h8iLJd/",
    date: "2025-04-04",
    likes: 1,
    type: "book",
    title: "An Unquiet Mind",
    excerpt:
      "A powerful memoir exploring life with bipolar disorder, resilience, and the journey toward acceptance.",
    hashtags: [
      "mentalhealthmatters",
      "BookRecommendation",
      "AnUnquietMind",
    ],
  },
  {
    id: "DH_bqx1y5My",
    url: "https://www.instagram.com/bhaavam_foundation/p/DH_bqx1y5My/",
    date: "2025-04-03",
    likes: 2,
    type: "awareness",
    title: "Sunlight, candor & conversation",
    excerpt:
      "What mental health needs is more sunlight, more candor and more unashamed conversation.",
    hashtags: [],
  },
  {
    id: "DH_bHveSAiX",
    url: "https://www.instagram.com/bhaavam_foundation/p/DH_bHveSAiX/",
    date: "2025-04-03",
    likes: 2,
    type: "film",
    title: "Good Will Hunting",
    excerpt:
      "You'll have bad times, but it'll always wake you up to the good stuff you weren't paying attention to. Healing takes time, and growth comes from struggle.",
    hashtags: [
      "MentalHealthMatters",
      "MovieRecommendation",
      "GoodWillHunting",
    ],
  },
  {
    id: "DHqpsmVS81L",
    url: "https://www.instagram.com/bhaavam_foundation/p/DHqpsmVS81L/",
    date: "2025-03-26",
    likes: 4,
    type: "book",
    title: "The Perks of Being a Wallflower",
    excerpt:
      "We accept the love we think we deserve — a heartfelt coming-of-age story about friendship, love, and self-discovery.",
    hashtags: [
      "mentalhealthmatters",
      "BookRecommendation",
      "PerksOfBeingAWallflower",
    ],
  },
  {
    id: "DGii-dZys3F",
    url: "https://www.instagram.com/bhaavam_foundation/p/DGii-dZys3F/",
    date: "2025-02-26",
    likes: 8,
    type: "awareness",
    title: "Asking for help is courageous",
    excerpt:
      "Healing takes time, and asking for help is a courageous step.",
    hashtags: [],
  },
];

/** Curated book & film recommendations featured on Instagram */
export const mediaRecommendations = [
  {
    title: "Inside Out",
    type: "film" as const,
    theme: "Every emotion has a purpose",
  },
  {
    title: "Good Will Hunting",
    type: "film" as const,
    theme: "Light can be found even in dark moments",
  },
  {
    title: "An Unquiet Mind",
    type: "book" as const,
    theme: "Resilience and acceptance with bipolar disorder",
  },
  {
    title: "The Perks of Being a Wallflower",
    type: "book" as const,
    theme: "Friendship, love, and self-discovery",
  },
] as const;
