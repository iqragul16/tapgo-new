// Starting state (invisible, shifted left) is authored here in CSS so the
// card looks correct even before the GSAP timeline attaches. The timeline
// only ever tweens it TO autoAlpha: 1, x: 0.
export default function FeatureCard({ feature, refCallback }) {
  const { title, description, Icon } = feature;

  return (
    <li
      ref={refCallback}
      className="invisible flex -translate-x-10 items-start gap-4 opacity-0"
    >
      <span className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-neutral-900 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-lg font-medium text-neutral-900 sm:text-xl">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {description}
        </p>
      </div>
    </li>
  );
}
