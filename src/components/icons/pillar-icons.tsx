import {
  Accessibility,
  BookOpen,
  Clapperboard,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  LucideIcon,
  Presentation,
  UserCheck,
  Users,
  UsersRound,
} from "lucide-react";

const pillarIconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  "heart-handshake": HeartHandshake,
  accessibility: Accessibility,
  "hands-helping": HandHeart,
};

const statIconMap: Record<string, LucideIcon> = {
  users: Users,
  "user-check": UserCheck,
  presentation: Presentation,
  "users-round": UsersRound,
  book: BookOpen,
  film: Clapperboard,
};

export function PillarIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = pillarIconMap[name] ?? Lightbulb;
  return <Icon className={className} aria-hidden />;
}

export function StatIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = statIconMap[name] ?? Users;
  return <Icon className={className} aria-hidden />;
}
