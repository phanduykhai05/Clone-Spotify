import Image from 'next/image';
import Link from 'next/link';

export interface ChartInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  coverUrl?: string;
  arrowIcon?: boolean;
}

interface ChartCardProps {
  chart: ChartInfo;
}

export function ChartCard({ chart }: ChartCardProps) {
  return (
    <Link
      href={`/playlist/${chart.id}`}
      className="flex-shrink-0 w-[200px] snap-start cursor-pointer group"
    >
      <div
        className="relative w-[200px] h-[200px] rounded-lg overflow-hidden p-4 flex flex-col justify-between"
        style={{ background: chart.gradient }}
      >
        {chart.coverUrl && (
          <div className="absolute inset-0 opacity-20">
            <Image src={chart.coverUrl} alt={chart.title} fill className="object-cover" sizes="200px" />
          </div>
        )}

        <div className="relative z-10">
          {chart.arrowIcon && (
            <span className="inline-flex items-center justify-center w-7 h-7 bg-white/20 rounded text-white font-bold text-sm mb-2">
              ↗
            </span>
          )}
          <p className="text-white text-sm font-medium opacity-90">{chart.subtitle}</p>
        </div>

        <div className="relative z-10">
          <p className="text-white text-2xl font-black leading-tight">{chart.title}</p>
        </div>
      </div>
      <p className="text-[#a7a7a7] text-xs mt-2 line-clamp-2 leading-relaxed">{chart.description}</p>
    </Link>
  );
}
