import { cn } from "@/client/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted bg-black/70", className)}
      {...props}
    />
  )
}

export { Skeleton }
