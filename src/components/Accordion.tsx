import React, { useState } from 'react';
import slugify from 'react-slugify';
import Image from 'next/image';
import { ControlledAccordion, AccordionItem, useAccordionProvider } from '@szhsin/react-accordion';

import Heading from '@/components/Heading';
import { ButtonProps } from '@/components/Button';

export interface AccordionProps {
  byline?: string;
  title?: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  accordion: AccordionPanelProps[];
}

export interface AccordionPanelProps {
  title: string;
  bullets?: {
    content: string;
  }[];
  media: string;
}

const AccordionPanel: React.FC<AccordionProps> = ({
  byline,
  title,
  description,
  colorScheme,
  ctas,
  accordion
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250
  });

  const toggleAccordion = (index: number) => {
    providerValue.toggleAll(false);
    providerValue.toggle(index);
    setActiveIndex(index);
  };

  const isVideo = (media: string) => {
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = media?.split('.').pop();
    return videoExtensions.includes(extension || '');
  };

  return (
    <section
      className={`
        ${colorScheme === 'primary'
          ? 'bg-primary text-dark'
          : colorScheme === 'light'
            ? 'bg-light text-dark'
            : colorScheme === 'secondary'
              ? 'bg-secondary text-dark'
              : 'bg-dark text-light'
        }
      `}
      id={slugify(byline || title)}
    >
      <div
        className={`
          container mx-auto
          px-4
          py-8 lg:py-16 xl:py-24
        `}
      >
        <div className='md:max-w-2xl'>
          <Heading
            title={title}
            titleHierarchy='h2'
            description={description}
            ctas={ctas}
            colorScheme={colorScheme}
            byline={byline}
          />
        </div>
        <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
          <div className='relative h-96 md:h-[480px]'>
            {isVideo(accordion[activeIndex].media) ?
              <video
                controls
                autoPlay
                muted
                loop
                className="object-cover w-full h-full z-0 absolute top-0 left-0 md:p-8 lg:p-12"
              >
                <source src={accordion[activeIndex].media} type={`video/${accordion[activeIndex].media.split('.').pop()}`} />
                Your browser does not support the video tag.
              </video>
              :
              <Image
                src={accordion[activeIndex].media}
                alt={title || 'Slider Image'}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className='md:p-8 lg:p-12'
              />
            }
          </div>
          <ControlledAccordion providerValue={providerValue}>
            {accordion.map((panel: AccordionPanelProps, index: number) => (
              <AccordionItem
                key={index}
                itemKey={index}
                header={panel.title}
                initialEntered={index === 0}
                buttonProps={{
                  className: 'p-4 hover:opacity-80 text-left'
                }}
                contentProps={{
                  className: "transition-height duration-200 ease-out"
                }}
                panelProps={{ className: "px-8 pb-4 md:pb-8" }}
                className={`
                  ${colorScheme === 'primary' || colorScheme === 'light' || colorScheme === 'secondary'
                    ? 'border-dark'
                    : 'border-primary'
                  }
                  border-t text-lg md:text-xl font-bold
                `}
                onClick={() => toggleAccordion(index)}
              >
                {panel.bullets &&
                  <div>
                    <ul className='list-disc'>
                      {panel.bullets.map((bullet, index: number) => (
                        <li
                          key={index}
                          className={`
                            md:text-lg font-serif font-normal
                            ${colorScheme === 'primary' || colorScheme === 'light' || colorScheme === 'secondary'
                              ? 'text-dark'
                              : 'text-light'
                            }
                          `}
                        >
                          {bullet.content}
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              </AccordionItem>
            ))}
          </ControlledAccordion>
        </div>
      </div>
    </section>
  );
}

export default AccordionPanel;