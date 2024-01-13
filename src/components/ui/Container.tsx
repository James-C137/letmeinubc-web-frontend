import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode
}) {
  return (
    <div className={cn('px-4 md:px-12 lg:px-36 xl:px-[15svw] w-full flex flex-col items-start', className)}>
      {children}
    </div>
  );
}
