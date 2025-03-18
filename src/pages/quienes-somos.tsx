import React from 'react';

import Main from '@/components/Main';

import { attributes } from '@/content/quienes-somos.md';

interface SectionProps {
  type: string;
}

export default function Home() {
  return (
    <Main
      tabTitle='Quienes somos • Link'
    >
      {attributes.sections.map((section: SectionProps, index: number) => {
        switch(section.type) {
          case 'hero':
            return (
              <p key={index}>test</p>
            )
        }
      })}
    </Main>
  );
}
