# Spotify Clone

Ứng dụng nghe nhạc trực tuyến được xây dựng theo giao diện [Spotify Web](https://open.spotify.com/), sử dụng Next.js App Router và Tailwind CSS.

## Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|---|---|---|
| Next.js | 16.x | Framework (App Router, SSR, Static) |
| React | 19.x | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| pnpm | — | Package manager |

## Cấu trúc thư mục

```
spotify/
├── app/
│   ├── layout.tsx              # Root layout — gắn PlayerProvider
│   ├── globals.css             # Spotify colors, scrollbar, global reset
│   └── (main)/                 # Route group — áp dụng AppLayout
│       ├── layout.tsx
│       ├── page.tsx            # /  Home
│       ├── search/page.tsx     # /search
│       ├── album/[id]/         # /album/:id
│       ├── artist/[id]/        # /artist/:id
│       ├── playlist/[id]/      # /playlist/:id
│       └── collection/tracks/  # /collection/tracks  (Liked Songs)
│
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx       # Grid tổng: Header + Sidebar + Main + Player
│   │   ├── Header/             # Top nav: Logo, SearchBar, Premium/Login links
│   │   ├── Sidebar/            # Sidebar trái: Nav + Your Library
│   │   │   └── Library/        # Library header, filter chips, item list
│   │   ├── TopBar/             # Back/Forward + User menu (trong main content)
│   │   └── Player/             # Bottom player: NowPlaying, Controls, Volume
│   │
│   ├── features/               # UI theo từng trang
│   │   ├── Home/               # Greeting, QuickLinks, Section, SectionCard
│   │   ├── Search/             # CategoryGrid, CategoryCard
│   │   ├── Album/              # AlbumHeader, TrackList, TrackItem
│   │   ├── Artist/             # ArtistHeader, PopularTracks, DiscographySection
│   │   └── Playlist/           # PlaylistHeader, PlaylistTrackList
│   │
│   └── ui/                     # Atomic components
│       ├── Button.tsx
│       ├── IconButton.tsx
│       ├── Card.tsx            # Card với hover play button
│       ├── Avatar.tsx
│       └── Skeleton.tsx        # CardSkeleton, TrackSkeleton
│
├── context/
│   └── PlayerContext.tsx       # Global player state (play, pause, queue, volume...)
│
├── hooks/
│   ├── usePlayer.ts            # Re-export từ PlayerContext
│   └── useLibrary.ts           # Library items + filter state
│
├── types/
│   ├── music.ts                # Track, Album, Artist, Playlist, Category, LibraryItem
│   └── player.ts               # PlayerState, RepeatMode
│
└── lib/
    ├── utils.ts                # formatDuration, formatFollowers, getGreeting, cn
    └── constants.ts            # Spotify colors, CATEGORY_COLORS, LIBRARY_FILTERS
```

## Layout tổng quan

```
┌──────────────────────────────────────────────────────────────┐
│  Header: Logo | [Home] [Search bar | Browse] | Nav + Log in  │
├──────────────────┬───────────────────────────────────────────┤
│  Sidebar 280px   │  TopBar: Back/Fwd + User menu             │
│                  ├───────────────────────────────────────────┤
│  • Home          │                                           │
│  • Search        │  Main Content (cuộn độc lập)              │
│                  │                                           │
│  Your Library    │                                           │
│  (filter chips)  │                                           │
├──────────────────┴───────────────────────────────────────────┤
│  Player 72px: Now Playing | Controls + Progress | Volume      │
└──────────────────────────────────────────────────────────────┘
```

## Routes

| Route | Trang | Component |
|---|---|---|
| `/` | Home | `features/Home` |
| `/search` | Search | `features/Search` |
| `/album/:id` | Album | `features/Album` |
| `/artist/:id` | Artist | `features/Artist` |
| `/playlist/:id` | Playlist | `features/Playlist` |
| `/collection/tracks` | Liked Songs | `features/Playlist` |

## Player State

Player state được quản lý toàn cục qua `PlayerContext` (không cần thư viện ngoài):

```ts
// Truy cập từ bất kỳ client component nào
const { currentTrack, isPlaying, play, pause, skipNext, volume } = usePlayer();
```

| Action | Method |
|---|---|
| Phát bài | `play(track?)` |
| Tạm dừng | `pause()` |
| Toggle play/pause | `togglePlay()` |
| Bài tiếp theo | `skipNext()` |
| Bài trước | `skipPrev()` |
| Tua | `seek(0..1)` |
| Âm lượng | `setVolume(0..1)` |
| Shuffle | `toggleShuffle()` |
| Repeat | `cycleRepeat()` |

## Getting Started

```bash
# Cài dependencies
pnpm install

# Chạy dev server
pnpm dev

# Build production
pnpm build
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## Server vs Client Components

- **Server Components** (mặc định): pages, layout wrappers, data-only components
- **Client Components** (`'use client'`): Player, Sidebar, TopBar, Card, TrackItem — bất kỳ component nào dùng hooks hoặc event handlers
