'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { TopBar } from '@/components/layout/TopBar';
import { Greeting } from './Greeting';
import { HScrollSection } from './HScrollSection';
import { TrackCard } from './TrackCard';
import { ArtistCard } from './ArtistCard';
import { AlbumCard } from './AlbumCard';
import { PlaylistCard } from './PlaylistCard';
import { ChartCard, type ChartInfo } from './ChartCard';
import type { Track, Artist, Album, Playlist } from '@/types/music';

interface HomePageProps {
  trendingTracks: Track[];
  popularArtists: Artist[];
  newReleases: Album[];
  featuredPlaylists: Playlist[];
  chartPlaylists: ChartInfo[];
}

export function HomePage({
  trendingTracks,
  popularArtists,
  newReleases,
  featuredPlaylists,
  chartPlaylists,
}: HomePageProps) {
  const { t } = useLanguage();

  return (
    <>
      <TopBar />
      <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-8">
        <div className="pt-2">
          <Greeting />
        </div>

        {trendingTracks.length > 0 && (
          <HScrollSection title={t.home.trendingSongs} href="#">
            {trendingTracks.map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </HScrollSection>
        )}

        {popularArtists.length > 0 && (
          <HScrollSection title={t.home.popularArtists} href="#">
            {popularArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} artistLabel={t.home.artist} />
            ))}
          </HScrollSection>
        )}

        {newReleases.length > 0 && (
          <HScrollSection title={t.home.popularAlbums} href="#">
            {newReleases.map(album => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </HScrollSection>
        )}

        {featuredPlaylists.length > 0 && (
          <HScrollSection title={t.home.featuredPlaylists} href="#">
            {featuredPlaylists.map(playlist => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </HScrollSection>
        )}

        {chartPlaylists.length > 0 && (
          <HScrollSection title={t.home.featuredCharts} href="#">
            {chartPlaylists.map(chart => (
              <ChartCard key={chart.id} chart={chart} />
            ))}
          </HScrollSection>
        )}
      </div>
    </>
  );
}
