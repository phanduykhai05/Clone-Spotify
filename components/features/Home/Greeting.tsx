import { getGreeting } from '@/lib/utils';

export function Greeting() {
  const greeting = getGreeting();
  return (
    <h1 className="text-2xl font-bold text-white">{greeting}</h1>
  );
}
