import { useState, useEffect } from 'react';
import Image from 'next/image';

import { attributes } from '@/content/index.md';

export default function Home() {
  const { title } = attributes;

  const [size, setSize] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [weight, setWeight] = useState(400);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const distanceToCenterX = Math.abs(clientX - innerWidth / 2);
    const distanceToCenterY = Math.abs(clientY - innerHeight / 2);
    const maxDistanceToCenter = Math.sqrt(Math.pow(innerWidth / 2, 2) + Math.pow(innerHeight / 2, 2));
    const distanceToCenter = Math.sqrt(Math.pow(distanceToCenterX, 2) + Math.pow(distanceToCenterY, 2));

    const newSize = Math.min(100, (distanceToCenter / maxDistanceToCenter) * 100);
    setSize(newSize);

    const angle = Math.atan2(clientY - innerHeight / 2, clientX - innerWidth / 2) * (180 / Math.PI);
    const newRotation = (angle + 360) % 360;
    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className='min-h-screen flex items-center justify-center bg-[#88FAA1]'>
      <h1
        className='font-circle text-[#009496] text-5xl md:text-8xl lg:text-9xl w-full text-center'
        style={{
          fontVariationSettings: `"SIZE" ${size}, "ROTA" ${rotation}, "wght" ${weight}`
        }}
      >
        link
      </h1>
    </main>
  );
}
