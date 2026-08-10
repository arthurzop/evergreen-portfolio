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
    <section id={id} className={`min-h-screen ${className}`}>
      {children}
    </section>
  );
}
