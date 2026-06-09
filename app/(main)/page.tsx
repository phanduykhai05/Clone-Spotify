import { HomePage } from '@/components/features/Home';
import type { ChartInfo } from '@/components/features/Home/ChartCard';
import {
  MOCK_TRENDING_TRACKS,
  MOCK_POPULAR_ARTISTS,
  MOCK_NEW_RELEASES,
  MOCK_FEATURED_PLAYLISTS,
} from '@/lib/mockData';

const CHART_CONFIG: ChartInfo[] = [
  {
    id: '37i9dQZEVXbNG2KDcFEKkx',
    title: 'Top Songs Global',
    subtitle: 'Weekly Music Charts',
    description: 'Your weekly update of the most played tracks right now.',
    gradient: 'linear-gradient(135deg, #5038a0 0%, #1e0f4a 100%)',
    arrowIcon: true,
    coverUrl: 'https://picsum.photos/seed/chart-global/300/300',
  },
  {
    id: '37i9dQZEVXbJPgIem9SYE6',
    title: 'Top Songs Vietnam',
    subtitle: 'Weekly Music Charts',
    description: 'Your weekly update of the most played tracks right now.',
    gradient: 'linear-gradient(135deg, #2d6db5 0%, #0a2a5e 100%)',
    arrowIcon: true,
    coverUrl: 'https://picsum.photos/seed/chart-vn/300/300',
  },
  {
    id: '37i9dQZEVXbMDoHDwVN2tF',
    title: 'Top 50',
    subtitle: 'Global',
    description: 'Your daily update of the most played tracks right now.',
    gradient: 'linear-gradient(135deg, #4a54b5 0%, #2d3a8c 100%)',
    arrowIcon: false,
    coverUrl: 'https://picsum.photos/seed/top50-global/300/300',
  },
  {
    id: '37i9dQZEVXbLdGSmz6xilI',
    title: 'Top 50',
    subtitle: 'Vietnam',
    description: 'Your daily update of the most played tracks right now.',
    gradient: 'linear-gradient(135deg, #e84c4c 0%, #c0392b 100%)',
    arrowIcon: false,
    coverUrl: 'https://picsum.photos/seed/top50-vn/300/300',
  },
];

export default function Page() {
  return (
    <HomePage
      trendingTracks={MOCK_TRENDING_TRACKS}
      popularArtists={MOCK_POPULAR_ARTISTS}
      newReleases={MOCK_NEW_RELEASES}
      featuredPlaylists={MOCK_FEATURED_PLAYLISTS}
      chartPlaylists={CHART_CONFIG}
    />
  );
}
