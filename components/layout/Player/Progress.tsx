'use client';

import { usePlayer } from '@/hooks/usePlayer';
import { useLanguage } from '@/hooks/useLanguage';
import { formatDuration } from '@/lib/utils';

export function Progress() {
  const { currentTrack, progress, seek } = usePlayer();
  const { t } = useLanguage();
  const durationMs = currentTrack?.durationMs ?? 0;
  const currentMs = durationMs * progress;

  return (
    <div className="flex items-center gap-2 w-full max-w-[35rem]">
      <span className="text-[10px] text-[#a7a7a7] w-9 text-right tabular-nums">
        {formatDuration(currentMs)}
      </span>
      <div className="relative flex-1 group h-3 flex items-center">
        <div className="w-full h-1 bg-[#4d4d4d] rounded-full overflow-visible">
          <div
            className="h-full bg-white group-hover:bg-[#1db954] rounded-full relative transition-colors"
            style={{ width: `${progress * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 translate-x-1/2 transition-opacity" />
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={progress}
          onChange={e => seek(parseFloat(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          aria-label={t.player.progress}
        />
      </div>
      <span className="text-[10px] text-[#a7a7a7] w-9 tabular-nums">
        {formatDuration(durationMs)}
      </span>
    </div>
  );
}
