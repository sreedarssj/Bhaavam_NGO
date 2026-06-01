import { missionPillars } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";
import { PillarIcon } from "@/components/icons/pillar-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MissionSection() {
  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold uppercase tracking-wider text-blush-600 sm:text-lg">
            Our Mission
          </p>
          <h2
            id="mission-heading"
            className="mt-4 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl md:text-5xl"
          >
            More sunlight, more candor, more unashamed conversation
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-ink-muted">
            These pillars guide what we share on @bhaavam_foundation and the
            support we are building for our community.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {missionPillars.map((pillar, index) => (
            <FadeIn key={pillar.id} delay={index * 0.08}>
              <Card className="h-full border-blush-100/80 transition-shadow hover:shadow-md hover:shadow-blush-100/40">
                <CardHeader>
                  <div
                    className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blush-50 text-blush-500"
                    aria-hidden
                  >
                    <PillarIcon name={pillar.icon} className="h-6 w-6" />
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
