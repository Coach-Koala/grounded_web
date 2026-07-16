export function Section({
  eyebrow,
  title,
  children,
  tone = "bone",
  id,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  tone?: "bone" | "mist" | "white" | "spruce";
  id?: string;
}) {
  const tones: Record<string, string> = {
    bone: "bg-bone text-ink",
    mist: "bg-mist text-ink",
    white: "bg-white text-ink",
    spruce: "bg-spruce text-white",
  };
  const eyebrowColor = tone === "spruce" ? "text-white" : "text-spruce";
  return (
    <section id={id} className={tones[tone]}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {eyebrow ? <p className={`eyebrow ${eyebrowColor} mb-3`}>{eyebrow}</p> : null}
        {title ? (
          <h2 className="mb-8 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
