import { cn } from "@/lib/cn";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  if (inverted) {
    return (
      <img
        src="/images/logo-seal.jpg"
        alt="DOCROOM"
        className={cn("size-16 rounded-full md:size-[4.5rem]", className)}
      />
    );
  }
  return (
    <img
      src="/images/logo-lockup.png"
      alt="DOCROOM"
      className={cn("h-11 w-auto md:h-12", className)}
    />
  );
}

export function HorizonWave({ className }: { className?: string; thick?: number }) {
  return (
    <img
      src="/images/logo-lockup.png"
      alt=""
      aria-hidden="true"
      className={cn("h-10 w-auto opacity-90", className)}
    />
  );
}
