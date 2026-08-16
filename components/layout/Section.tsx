export function Section({
  id,
  index = 0,
  children,
  className = "",
}: {
  id: string;
  index?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      style={{ zIndex: index }}
      className={` scroll-mt-14 lg:scroll-mt-0 min-h-screen flex flex-col py-0 md:py-24 px-4 md:px-24 2xl:px-64 gap-8 md:gap-16 font-geist ${className}`}
    >
      {children}
    </section>
  );
}
