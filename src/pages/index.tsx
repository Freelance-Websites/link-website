import { attributes } from '@/content/index.md';

export default function Home() {
  const { title } = attributes;
  return (
    <p>{title}</p>
  );
}
