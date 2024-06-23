"use client";

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const images = [
  '/about.jpg',
  '/land.jpg',
  '/mvp.jpg',
  // Add more image paths or URLs as needed
];

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <a href="/" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl hover:bg-slate-300 hover:dark:bg-slate-700 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  Back to home
</a>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/6x3.svg"
              alt="Vercel Logo"
              // className="dark:invert"
              width="0"
              height="0"
              sizes="10vw"
              className="w-24 h-auto"
              priority
            />
          </a>
        </div>
      </div>
      <div style={{ height: '20px' }}></div>
      <div className="embla max-w-4xl mb-12 text-2xl font-bold">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
        <img key={index} src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid auto-grid grid-rows-1 grid-flow-col">
          <button className="rounded-bl-2xl embla__prev text-left px-5 py-4 hover:text-white transition-colors hover:border-gray-300 hover:bg-purple-500 hover:dark:bg-purple-500 hover:dark:bg-neutral-800/30" onClick={scrollPrev}>
            &lt;-
          </button>
          <button className="rounded-br-2xl embla__next text-right px-5 py-4 hover:text-white transition-colors hover:border-gray-300 hover:bg-purple-500 hover:dark:bg-purple-500 hover:dark:bg-neutral-800/30" onClick={scrollNext}>
            -&gt;
          </button>
        </div>
      </div>
      <div style={{ height: '20px' }}></div>
    
      <div style={{ height: '40px' }}></div>
      <button className="bg-transparent font-mono hover:text-white transition-colors hover:border-gray-300 hover:bg-purple-500 hover:dark:bg-purple-500 hover:dark:bg-neutral-800/30 py-2 px-4 border border-slate-500 hover:border-transparent rounded">
        <a href="mailto:yoscima6h@mozmail.com">Write me an Email</a>
      </button>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
