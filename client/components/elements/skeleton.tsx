import { cn } from "@/client/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-black/30", className)}
      {...props}
    />
  )
}

export { Skeleton }
