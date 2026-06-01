import { impactStats } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";
import { StatIcon } from "@/components/icons/pillar-icons";

export function ImpactStats() {
  return (
    <section
      className="border-y border-blush-100/80 bg-gradient-to-b from-blush-50/50 to-cream py-16 sm:py-20"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2
            id="impact-heading"
            className="font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            Our impact, together
          </h2>
          <p className="mt-2 text-ink-muted">
            Public metrics from our Instagram community — updated as we grow.
          </p>
        </FadeIn>

        <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {impactStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.06}>
              <div className="flex flex-col items-center rounded-2xl bg-white/80 px-4 py-8 text-center shadow-sm ring-1 ring-blush-100/60">
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blush-100 text-blush-500"
                  aria-hidden
                >
                  <StatIcon name={stat.icon} className="h-5 w-5" />
                </div>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-blush-700 sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm font-medium text-ink-muted">
                  {stat.label}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
