import React from 'react';

import MainPage, { SectionProps } from '@/components/MainPage';

export default function PagePreview({ entry, widgetFor } : any) {
  const title = entry.getIn(['data', 'title'])
  const sections = entry.getIn(['data', 'sections']).toJS() as SectionProps[];
  return (
    // <MainPage
      // title={title}
      // sections={sections}
    // />
    <p>test</p>
  );
}
