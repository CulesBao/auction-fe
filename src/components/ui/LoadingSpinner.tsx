// components/ui/LoadingSpinner.tsx
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-b-[#256af4] border-t-transparent border-l-transparent border-r-transparent',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
}

// Skeleton Loading Components
export function ItemCardSkeleton() {
  return (
    <div className="bg-[#242424] border border-gray-800 rounded-lg p-6 space-y-4">
      <div className="flex items-start justify-between gap-2">
        <Skeleton className="h-6 w-3/4 bg-gray-700" />
        <Skeleton className="h-6 w-16 bg-gray-700" />
      </div>
      <Skeleton className="h-4 w-full bg-gray-700" />
      <Skeleton className="h-4 w-2/3 bg-gray-700" />
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24 bg-gray-700" />
          <Skeleton className="h-4 w-20 bg-gray-700" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-16 bg-gray-700" />
          <Skeleton className="h-4 w-12 bg-gray-700" />
        </div>
      </div>
      <div className="flex gap-2 pt-4 border-t border-gray-800">
        <Skeleton className="h-10 flex-1 bg-gray-700" />
        <Skeleton className="h-10 flex-1 bg-gray-700" />
      </div>
    </div>
  );
}

export function ItemGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ItemCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-800">
      <Skeleton className="h-4 w-1/4 bg-gray-700" />
      <Skeleton className="h-4 w-1/6 bg-gray-700" />
      <Skeleton className="h-4 w-1/6 bg-gray-700" />
      <Skeleton className="h-4 w-1/6 bg-gray-700" />
      <Skeleton className="h-8 w-24 bg-gray-700 ml-auto" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-[#242424] border border-gray-800 rounded-lg overflow-hidden">
      <div className="flex items-center gap-4 p-4 border-b border-gray-800 bg-gray-800/50">
        <Skeleton className="h-4 w-1/4 bg-gray-600" />
        <Skeleton className="h-4 w-1/6 bg-gray-600" />
        <Skeleton className="h-4 w-1/6 bg-gray-600" />
        <Skeleton className="h-4 w-1/6 bg-gray-600" />
        <Skeleton className="h-4 w-24 bg-gray-600 ml-auto" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <TableRowSkeleton key={i} />
      ))}
    </div>
  );
}

export function ItemDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="container mx-auto py-8 px-4">
        <Skeleton className="h-10 w-32 bg-gray-700 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#242424] border border-gray-800 rounded-lg p-6 space-y-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-8 w-3/4 bg-gray-700" />
                  <Skeleton className="h-4 w-32 bg-gray-700" />
                </div>
                <Skeleton className="h-6 w-20 bg-gray-700" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-20 bg-gray-700" />
                    <Skeleton className="h-6 w-24 bg-gray-700" />
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-4">
                <Skeleton className="h-6 w-32 bg-gray-700" />
                <Skeleton className="h-4 w-full bg-gray-700" />
                <Skeleton className="h-4 w-full bg-gray-700" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-[#242424] border border-gray-800 rounded-lg p-6 space-y-4">
              <Skeleton className="h-6 w-32 bg-gray-700" />
              <Skeleton className="h-10 w-full bg-gray-700" />
              <Skeleton className="h-10 w-full bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
