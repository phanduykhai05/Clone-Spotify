import { TopBar } from '@/components/layout/TopBar';
import { Greeting } from './Greeting';
import { QuickLinks } from './QuickLinks';
import { Section } from './Section';

const MOCK_SECTIONS = [
  {
    id: 'recently-played',
    title: 'Recently played',
    items: [
      { id: '1', type: 'playlist' as const, name: 'Daily Mix 1', subtitle: 'Based on Dua Lipa, The Weeknd and more' },
      { id: '2', type: 'album' as const, name: 'After Hours', subtitle: 'The Weeknd' },
      { id: '3', type: 'artist' as const, name: 'Drake', subtitle: 'Artist' },
      { id: '4', type: 'playlist' as const, name: 'Discover Weekly', subtitle: 'Your weekly mixtape of fresh music' },
      { id: '5', type: 'playlist' as const, name: 'Release Radar', subtitle: 'Catch all the latest music from artists you follow' },
      { id: '6', type: 'album' as const, name: 'Starboy', subtitle: 'The Weeknd' },
    ],
  },
  {
    id: 'recommended',
    title: 'Recommended for today',
    items: [
      { id: '7', type: 'playlist' as const, name: 'Chill Hits', subtitle: 'Kick back to the best new and recent chill hits' },
      { id: '8', type: 'playlist' as const, name: 'Pop Rising', subtitle: 'Tomorrow\'s stars, today' },
      { id: '9', type: 'album' as const, name: 'Happier Than Ever', subtitle: 'Billie Eilish' },
      { id: '10', type: 'artist' as const, name: 'Taylor Swift', subtitle: 'Artist' },
      { id: '11', type: 'playlist' as const, name: 'Hot Hits', subtitle: 'The hottest tracks right now' },
      { id: '12', type: 'album' as const, name: 'Donda', subtitle: 'Kanye West' },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <TopBar />
      <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-8">
        <div className="space-y-4 pt-2">
          <Greeting />
          <QuickLinks />
        </div>
        {MOCK_SECTIONS.map(section => (
          <Section key={section.id} title={section.title} items={section.items} href="#" />
        ))}
      </div>
    </>
  );
}
