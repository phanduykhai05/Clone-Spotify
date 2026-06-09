import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded bg-[#282828]', className)} />
  );
}

export function CardSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-md bg-[#181818]">
      <Skeleton className="w-full aspect-square rounded" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}

export function TrackSkeleton() {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <Skeleton className="w-4 h-4" />
      <Skeleton className="w-10 h-10 flex-shrink-0" />
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
      </div>
      <Skeleton className="h-3 w-10" />
    </div>
  );
}
