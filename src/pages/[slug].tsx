import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import MainPage, { SectionProps } from '@/components/MainPage';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const isIdentityEmail = router.asPath.includes('recovery_token') || router.asPath.includes('invite_token');
  const [attributes, setAttributes] = React.useState<{ title?: string; sections: SectionProps[] } | null>(null);

  useEffect(() => {
    async function fetchContent() {
      const content = await import(`@/content/${slug || 'index'}.md`);
      setAttributes(content.attributes);
    }
    if (slug) {
      fetchContent();
    }
  }, [slug]);

  useEffect(() => {
    if (isIdentityEmail) {
      const token = router.asPath.split('#')[1];
      router.push(`/admin#${token}`);
    }
  }, [isIdentityEmail, router.asPath]);
  
  return (
    <MainPage
      title={attributes?.title || ''}
      sections={attributes?.sections || []}
    />
  );
}
