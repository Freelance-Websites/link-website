import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

import Main from '@/components/Main';
import { HeroProps } from '@/components/Hero';
import TextAndImage from '@/components/TextAndImage';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = React.useState<{ title?: string; timestamp?: string; hero: HeroProps; text?: string; } | null>(null);

  React.useEffect(() => {
    async function fetchContent() {
      const content = await import(`@/content/novedades/${slug || 'index'}.md`);
      setContent(content.attributes);
    }
    if (slug) {
      fetchContent();
    }
  }, [slug]);
  
  return (
    <Main
      tabTitle={`${content?.title ? content?.title : 'Inicio'} • Link`}
    >
      {content?.hero && (
        <TextAndImage
          media={`/${content.hero.media}`}
          byline={content.timestamp ? new Date(content.timestamp).toLocaleDateString('en-GB').replace(/\//g, '/') : undefined}
          title={content.hero.title}
          mediaSize='full'
          description={content.hero.description}
          decorations={content.hero.decorations}
          ctas={[]}
          colorScheme={content.hero.colorScheme || 'primary'}
        />
      )}
      {content?.text && (
        <div
          className={`
            prose rich-text max-w-3xl mx-auto
            px-4 py-8 md:py-16 lg:py-24
            grid gap-4
            text-dark font-serif
          `}
        >
          <ReactMarkdown>
            {content.text}
          </ReactMarkdown>
        </div>
      )}
    </Main>
  );
}
