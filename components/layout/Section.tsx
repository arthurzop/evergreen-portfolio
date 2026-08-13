export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 lg:scroll-mt-0 min-h-screen ${className}`}
    >
      {children}
    </section>
  );
}
