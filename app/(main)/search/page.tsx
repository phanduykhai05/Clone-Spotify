import { SearchPage } from '@/components/features/Search';
import { searchCategories } from '@/lib/spotify';

export default async function Page() {
  const categories = await searchCategories(20).catch(() => []);
  return <SearchPage categories={categories} />;
}
