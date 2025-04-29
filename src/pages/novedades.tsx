import React from 'react';

import ArticleCard, { ArticleProps } from '@/components/ArticleCard';
import { HeroProps } from '@/components/Hero';
import Main from '@/components/Main';
import TextAndImage from '@/components/TextAndImage';

import { getAllCollections } from '@/lib/collections';

export default function Page({
  allBlogPostData,
  }: {
    allBlogPostData: {
      id: string;
      title?: string;
      timestamp?: string;
      hero: HeroProps;
      text?: string;
    }[];
  }
) {
  const sortedBlogPosts = allBlogPostData.sort((a, b) => {
    const dateA = new Date(a.timestamp || 0);
    const dateB = new Date(b.timestamp || 0);
    return dateB.getTime() - dateA.getTime();
  });
  const { timestamp, hero } = sortedBlogPosts[0];

  const articleCount = sortedBlogPosts.length -1;

  const gridLayout = articleCount === 1
    ? 'grid-cols-1'
    : articleCount < 3
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  return (
    <Main
      tabTitle={`${hero.title ? hero.title : 'Inicio'} • Link`}
    >
      <div className='pt-12'>
        <TextAndImage
          byline={new Date(timestamp || '').toLocaleDateString('en-GB').replace(/\//g, '/')}
          title={hero.title}
          description={hero.description}
          media={hero.media}
          mediaPlacement='right'
          colorScheme={hero.colorScheme || 'primary'}
          ctas={hero.ctas}
          decorations={false}
          layout='boxed'
          mediaSize={hero.mediaSize}
        />
        <ul
          className={`
            relative container mx-auto
            px-4 md:px-0
            grid gap-8 md:gap-4
            ${gridLayout}
            py-4 md:py-4
            mt-0 md:-mt-16 lg:-mt-24
          `}
        >
            {sortedBlogPosts.slice(1).map((article: ArticleProps, index: number) => (
              <ArticleCard 
                key={index}
                {...article}
              />
            ))}
        </ul>
      </div>
    </Main>
  );
}

export async function getStaticProps() {
  const allBlogPostData = getAllCollections("novedades").map((post: any) => ({
    ...post,
    timestamp: post.timestamp ? post.timestamp.toISOString() : null,
  }));
  return {
    props: {
      allBlogPostData,
    },
  };
}