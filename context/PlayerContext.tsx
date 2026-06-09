'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import type { PlayerState, RepeatMode } from '@/types/player';
import type { Track } from '@/types/music';

interface PlayerContextType extends PlayerState {
  play: (track?: Track) => void;
  pause: () => void;
  togglePlay: () => void;
  skipNext: () => void;
  skipPrev: () => void;
  seek: (progress: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  addToQueue: (track: Track) => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PlayerState>({
    currentTrack: null,
    queue: [],
    isPlaying: false,
    progress: 0,
    volume: 0.7,
    isMuted: false,
    isShuffle: false,
    repeatMode: 'off',
  });

  const play = useCallback((track?: Track) => {
    setState(prev => ({
      ...prev,
      currentTrack: track ?? prev.currentTrack,
      isPlaying: true,
    }));
  }, []);

  const pause = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  const togglePlay = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  }, []);

  const skipNext = useCallback(() => {
    setState(prev => {
      const idx = prev.queue.findIndex(t => t.id === prev.currentTrack?.id);
      const next = prev.queue[idx + 1] ?? null;
      return { ...prev, currentTrack: next, progress: 0 };
    });
  }, []);

  const skipPrev = useCallback(() => {
    setState(prev => {
      if (prev.progress > 0.05) return { ...prev, progress: 0 };
      const idx = prev.queue.findIndex(t => t.id === prev.currentTrack?.id);
      const prevTrack = prev.queue[idx - 1] ?? null;
      return { ...prev, currentTrack: prevTrack, progress: 0 };
    });
  }, []);

  const seek = useCallback((progress: number) => {
    setState(prev => ({ ...prev, progress }));
  }, []);

  const setVolume = useCallback((volume: number) => {
    setState(prev => ({ ...prev, volume, isMuted: false }));
  }, []);

  const toggleMute = useCallback(() => {
    setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
  }, []);

  const toggleShuffle = useCallback(() => {
    setState(prev => ({ ...prev, isShuffle: !prev.isShuffle }));
  }, []);

  const cycleRepeat = useCallback(() => {
    const modes: RepeatMode[] = ['off', 'context', 'track'];
    setState(prev => {
      const next = modes[(modes.indexOf(prev.repeatMode) + 1) % modes.length];
      return { ...prev, repeatMode: next };
    });
  }, []);

  const addToQueue = useCallback((track: Track) => {
    setState(prev => ({ ...prev, queue: [...prev.queue, track] }));
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        ...state,
        play,
        pause,
        togglePlay,
        skipNext,
        skipPrev,
        seek,
        setVolume,
        toggleMute,
        toggleShuffle,
        cycleRepeat,
        addToQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
