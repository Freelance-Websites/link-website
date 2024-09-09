import { attributes } from '@/content/index.md';

export default function Home() {
  const { heading } = attributes;
  return (
    <p>{heading}</p>
  );
}
