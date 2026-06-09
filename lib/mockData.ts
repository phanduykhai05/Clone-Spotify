import type { Track, Artist, Album, Playlist } from '@/types/music';

const img = (seed: string | number) =>
  `https://picsum.photos/seed/${seed}/300/300`;

// ─── Artists ─────────────────────────────────────────────────────────────────

const ARTISTS: Record<string, Artist> = {
  sontungmtp:   { id: 'sontungmtp',   name: 'Sơn Tùng M-TP',   imageUrl: img('sontung'),  followers: 8_200_000,  verified: true },
  soobin:       { id: 'soobin',       name: 'SOOBIN',           imageUrl: img('soobin'),   followers: 2_500_000,  verified: true },
  hieuthuhai:   { id: 'hieuthuhai',   name: 'HIEUTHUHAI',       imageUrl: img('hieu11'),   followers: 1_900_000,  verified: true },
  dalab:        { id: 'dalab',        name: 'Da LAB',           imageUrl: img('dalab22'),  followers: 1_200_000,  verified: true },
  buitruonglinh:{ id: 'btlinh',       name: 'buitruonglinh',   imageUrl: img('btlinh3'),  followers: 900_000,    verified: true },
  vu:           { id: 'vudot',        name: 'Vũ.',             imageUrl: img('vudot4'),   followers: 1_100_000,  verified: true },
  tlinh:        { id: 'tlinh',        name: 'tlinh',            imageUrl: img('tlinh5'),   followers: 1_400_000,  verified: true },
  vct:          { id: 'vct',          name: 'VCT',              imageUrl: img('vct66'),    followers: 820_000,    verified: true },
  greyd:        { id: 'greyd',        name: 'GREY D',           imageUrl: img('greyd7'),   followers: 680_000,    verified: false },
  binz:         { id: 'binz',         name: 'Binz',             imageUrl: img('binz8'),    followers: 1_500_000,  verified: true },
  toction:      { id: 'toction',      name: 'Tóc Tiên',        imageUrl: img('toction9'), followers: 720_000,    verified: false },
  kieuchi:      { id: 'kieuchi',      name: 'Kiều Chi',        imageUrl: img('kieuchi0'), followers: 420_000,    verified: false },
  jungkook:     { id: 'jungkook',     name: 'Jung Kook',        imageUrl: img('jk300'),    followers: 14_000_000, verified: true },
  taylorswift:  { id: 'taylorswift',  name: 'Taylor Swift',     imageUrl: img('taylor11'), followers: 90_000_000, verified: true },
  arianagrande: { id: 'arianagrande', name: 'Ariana Grande',    imageUrl: img('ariana2'),  followers: 78_000_000, verified: true },
  obito:        { id: 'obito',        name: 'Obito',            imageUrl: img('obito3'),   followers: 1_100_000,  verified: true },
  shiki:        { id: 'shiki',        name: 'Shiki',            imageUrl: img('shiki4'),   followers: 750_000,    verified: true },
  huyvac:       { id: 'huyvac',       name: 'Huy Vặc',         imageUrl: img('huyvac5'),  followers: 300_000,    verified: false },
  vietz:        { id: 'vietz',        name: 'VietZ',            imageUrl: img('vietz6'),   followers: 500_000,    verified: false },
  wdm:          { id: 'wdm',          name: 'WDM',              imageUrl: img('wdm77'),    followers: 250_000,    verified: false },
  hananhTuan:   { id: 'haanhtuan',    name: 'Hà Anh Tuấn',     imageUrl: img('hat8'),     followers: 2_100_000,  verified: true },
  dangrangto:   { id: 'dangrangto',   name: 'Dangrangto',       imageUrl: img('drt9'),     followers: 980_000,    verified: true },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function mkArtist(id: string): Artist {
  return ARTISTS[id] ?? { id, name: id };
}

function mkAlbum(
  id: string,
  name: string,
  artistIds: string[],
  year: number,
  type: 'album' | 'single' = 'album',
): Album {
  return {
    id,
    name,
    artists: artistIds.map(mkArtist),
    coverUrl: img(id),
    year,
    type,
    tracks: [],
  };
}

function mkTrack(
  id: string,
  name: string,
  artistIds: string[],
  album: Album,
  durationMs: number,
): Track {
  return { id, name, artists: artistIds.map(mkArtist), album, durationMs };
}

// ─── Albums ──────────────────────────────────────────────────────────────────

const ALBUMS: Record<string, Album> = {
  mtpAlbum:    mkAlbum('mtp-mtp',      'm-tp M-TP',                         ['sontungmtp'],             2024),
  aicung:      mkAlbum('aicung',       'Ai Cũng Phải Bắt Đầu Từ Đâu Đó',   ['hieuthuhai'],             2024),
  golden:      mkAlbum('golden-jk',    'GOLDEN',                            ['jungkook'],               2023),
  wxrdies:     mkAlbum('wxrdies',      'THE WXRDIES',                       ['vct'],                    2024),
  danhDoi:     mkAlbum('danh-doi',     'Đánh Đổi',                          ['obito', 'shiki'],         2024, 'single'),
  batNolen:    mkAlbum('bat-no-len',   'BẠT NÔ LÊN',                       ['soobin'],                 2024),
  tungNgay:    mkAlbum('tung-ngay',    'Từng Ngày Như Mãi Mãi',             ['buitruonglinh'],          2024, 'single'),
  lang:        mkAlbum('lang-vct',     'Lắng',                              ['vct'],                    2025, 'single'),
  ttpd:        mkAlbum('ttpd',         'The Tortured Poets Department',      ['taylorswift'],            2024),
  eternalSun:  mkAlbum('eternal-sun',  'Eternal Sunshine',                  ['arianagrande'],           2024),
  bongHoa:     mkAlbum('bong-hoa',     'BÔNG HOA CHẲNG TỒN TẠI Remix',     ['huyvac', 'vietz', 'wdm'], 2024, 'single'),
  emSoobin:    mkAlbum('em-soobin',    'Em',                                ['binz', 'soobin'],         2023, 'single'),
  sauNay:      mkAlbum('sau-nay',      'Sau Này Em Cưới Ai Rồi',            ['kieuchi'],                2024, 'single'),
  toidaidot:   mkAlbum('toidaidot-ep', 'toidaidot',                         ['greyd'],                  2025, 'single'),
  nguoiCon:    mkAlbum('nguoi-con',    'người còn thương em không',         ['toction'],                2023, 'single'),
};

// ─── Public Exports ───────────────────────────────────────────────────────────

export const MOCK_TRENDING_TRACKS: Track[] = [
  mkTrack('t1',  'toidaidot',                              ['greyd'],                         ALBUMS.toidaidot,  214_000),
  mkTrack('t2',  'hate that i made you love me',           ['arianagrande'],                  ALBUMS.eternalSun, 158_000),
  mkTrack('t3',  'người còn thương em không',              ['toction'],                       ALBUMS.nguoiCon,   256_000),
  mkTrack('t4',  'I Knew It, I Knew You',                  ['taylorswift'],                   ALBUMS.ttpd,       198_000),
  mkTrack('t5',  'Em (feat. SOOBIN)',                      ['binz', 'soobin'],               ALBUMS.emSoobin,   213_000),
  mkTrack('t6',  'BÔNG HOA CHẲNG TỒN TẠI (Remix)',       ['huyvac', 'vietz', 'wdm'],        ALBUMS.bongHoa,    196_000),
  mkTrack('t7',  'Sau Này Em Cưới Ai Rồi - Zeko Remix',  ['kieuchi'],                       ALBUMS.sauNay,     204_000),
  mkTrack('t8',  'Ai Cũng Phải Bắt Đầu Từ Đâu Đó',      ['hieuthuhai'],                    ALBUMS.aicung,     243_000),
  mkTrack('t9',  'Lạc Trôi',                               ['sontungmtp'],                   ALBUMS.mtpAlbum,   267_000),
  mkTrack('t10', 'GOLDEN',                                 ['jungkook'],                     ALBUMS.golden,     182_000),
  mkTrack('t11', 'Đánh Đổi',                              ['obito', 'shiki'],               ALBUMS.danhDoi,    198_000),
  mkTrack('t12', 'BẠT NÔ LÊN',                           ['soobin'],                        ALBUMS.batNolen,   221_000),
];

export const MOCK_POPULAR_ARTISTS: Artist[] = [
  ARTISTS.sontungmtp,
  ARTISTS.soobin,
  ARTISTS.hieuthuhai,
  ARTISTS.dalab,
  ARTISTS.buitruonglinh,
  ARTISTS.vu,
  ARTISTS.tlinh,
  ARTISTS.vct,
  ARTISTS.binz,
  ARTISTS.hananhTuan,
];

export const MOCK_NEW_RELEASES: Album[] = [
  ALBUMS.mtpAlbum,
  ALBUMS.aicung,
  ALBUMS.golden,
  ALBUMS.wxrdies,
  ALBUMS.danhDoi,
  ALBUMS.batNolen,
  ALBUMS.tungNgay,
  ALBUMS.lang,
  ALBUMS.ttpd,
  ALBUMS.eternalSun,
];

export const MOCK_FEATURED_PLAYLISTS: Playlist[] = [
  {
    id: 'vn-top50', name: 'Top 50 Việt Nam', description: 'Những bài hát được nghe nhiều nhất Việt Nam',
    coverUrl: img('top50vn'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 1_200_000, totalTracks: 50,
  },
  {
    id: 'vpop-mix', name: 'VPop Mix', description: 'Tổng hợp nhạc Việt hay nhất hiện nay',
    coverUrl: img('vpopmix'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 800_000, totalTracks: 40,
  },
  {
    id: 'vpop-rap', name: 'VPop Rap Việt', description: 'Rap Việt chất nhất',
    coverUrl: img('rapviet'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 650_000, totalTracks: 35,
  },
  {
    id: 'vpop-chill', name: 'Chill Vibes Vietnam', description: 'Nhạc thư giãn nhẹ nhàng',
    coverUrl: img('chill-vn'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 420_000, totalTracks: 30,
  },
  {
    id: 'kpop-mix', name: 'K-Pop Mix', description: 'Những bài K-Pop hot nhất',
    coverUrl: img('kpop-mix'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 2_100_000, totalTracks: 50,
  },
  {
    id: 'vpop-radio1', name: 'Vũ. Radio',description: 'With VCT, Chillies, Da LAB and more',
    coverUrl: img('vu-radio'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 310_000, totalTracks: 50,
  },
  {
    id: 'vpop-radio2', name: 'Hà Anh Tuấn Radio', description: 'With Bùi Anh Tuấn, Vũ. and more',
    coverUrl: img('hat-radio'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 480_000, totalTracks: 50,
  },
  {
    id: 'soobin-radio', name: 'SOOBIN Radio', description: 'With JustaTee, Vũ., Da LAB and more',
    coverUrl: img('soobin-r'), owner: { id: 'spotify', name: 'Spotify' },
    tracks: [], public: true, followers: 560_000, totalTracks: 50,
  },
];
