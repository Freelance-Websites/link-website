import React from 'react';
import { useRouter } from 'next/router';

import MainPage, { SectionProps } from '@/components/MainPage';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const [attributes, setAttributes] = React.useState<{ title?: string; sections: SectionProps[] } | null>(null);

  React.useEffect(() => {
    async function fetchContent() {
      const content = await import(`@/content/servicios/${slug || 'index'}.md`);
      setAttributes(content.attributes);
    }
    if (slug) {
      fetchContent();
    }
  }, [slug]);
  
  return (
    <MainPage
      title={attributes?.title || ''}
      sections={attributes?.sections || []}
      referral='servicios'
    />
  );
}
