'use client';
import React, { useEffect } from 'react';

const textBlock1 = [
  'There’s lots of ways to be, as a person.',
  'And some people express their deep',
  'appreciation in different ways.',
  '',
  'But one of the ways that I believe',
  'people express their appreciation',
  'to the rest of humanity is to',
  'make something wonderful and',
  'put it out there.',
  '',
  'And you never meet the people.',
  'You never shake their hands.',
  'You never hear their story or tell yours.',
  'But somehow, in the act of making',
  'something with a great deal of care',
  'and love, something’s transmitted there.',
  '',
  'And it’s a way of expressing to the rest',
  'of our species our deep appreciation.',
  'So we need to be true to who we are and',
  'remember what’s really important to us.',
  '',
  '—Steve Jobs, 2007',
];

const textBlock2 = [
  'This is a new paragraph block.',
  'Scroll through and watch the magic.',
  'Each line turns red at the center.',
  'Just like the one before — but gray to red!',
  'Fun with scroll-based animation!',
];

export default function TextScroll() {
useEffect(() => {
  const handleScroll = () => {
    const allDivs = document.querySelectorAll('.textDiv, .grayTextDiv');
    const viewportHeight = window.innerHeight;
    const centerY = viewportHeight / 2;

    allDivs.forEach((div) => {
      const htmlDiv = div as HTMLElement;
      const rect = htmlDiv.getBoundingClientRect();
      const divCenterY = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(divCenterY - centerY);

      const nearCenter = distanceFromCenter < 100; // within 100px of center

      // Text effects
      const opacity = Math.max(0, 1 - distanceFromCenter / centerY);
      const weight = 100 + (1 - distanceFromCenter / centerY) * 800;
      const size = 3 + (1 - distanceFromCenter / centerY); // 3vw to 4vw

      htmlDiv.style.opacity = opacity.toFixed(2);
      htmlDiv.style.fontWeight = weight.toFixed(0);
      htmlDiv.style.fontSize = `${size.toFixed(2)}vw`;

      // Change color if it's the gray block
      if (htmlDiv.classList.contains('grayTextDiv')) {
        htmlDiv.style.color = nearCenter ? 'red' : '#6b7280'; // red near center, else gray-500
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  window.dispatchEvent(new Event('scroll'));
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="text-center font-[Mulish] text-[#191919] py-[30vw] space-y-6">
      {/* First Block */}
      {textBlock1.map((line, index) =>
        line === '' ? (
          <br key={`b1-${index}`} />
        ) : (
          <div
            key={`t1-${index}`}
            className="textDiv transition-transform duration-150 px-[7vw] whitespace-nowrap cursor-default"
          >
            {line}
          </div>
        )
      )}

      {/* Second Block (gray to red on scroll) */}
      <div className="mt-20">
        {textBlock2.map((line, index) =>
          line === '' ? (
            <br key={`b2-${index}`} />
          ) : (
            <div
              key={`t2-${index}`}
              className="grayTextDiv text-gray-500 transition-transform duration-150 px-[7vw] whitespace-nowrap cursor-default"
            >
              {line}
            </div>
          )
        )}
      </div>
    </div>
  );
}
