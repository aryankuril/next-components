'use client';

import { useState, useEffect, useRef } from 'react';

const TabsPage = () => {
  const items = [
    {
      title: 'Tab 1',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
            earum illum qui similique architecto dolorum, minima enim quidem
            voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
            deleniti provident obcaecati rerum.
          </p>
        </div>
      ),
    },
    {
      title: 'Tab 2',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            aperiam asperiores dolo iti harum! Totam, mollitia quos voluptatem
            deleniti provident obcaecati rerum.
          </p>
        </div>
      ),
    },
    {
      title: 'Tab 3',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
            earum illum qui similique architecto dolorum, minima enim quidem
            voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
            deleniti provident obcaecati rerum.
          </p>
        </div>
      ),
    },
    {
      title: 'Tab 4',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 4</h1>
          <p>
            Lorem ipsum dolor sit ue architecto dolorum, minima enim quidem
            voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
            deleniti provident obcaecati rerum.
          </p>
        </div>
      ),
    },{
      title: 'Tab 5',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 5</h1>
          <p>
            Lorem ipsum dolor sit ue architecto dolorum, minima enim quidem
            voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
            deleniti provident obcaecati rerum.
          </p>
        </div>
      ),
    },
    {
      title: 'Tab 6',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 6</h1>
          <p>
            Lorem ipsum dolor sit ue architecto dolorum, minima enim quidem
            voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
            deleniti provident obcaecati rerum.
          </p>
        </div>
      ),
    },

  ];

  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    firstBtnRef.current?.focus();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

const scrollIntoView = (index: number) => {
  const container = scrollRef.current;
  if (!container) return;
  const buttons = container.querySelectorAll('button');
  const target = buttons[index];
  
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }
};


  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
      <h1 className='text-2xl font-bold mb-6'>Tabs Page</h1>

      <div className='bg-sky-100 flex justify-center items-center py-12'>
        <div className='max-w-md flex flex-col gap-y-2 w-full'>
  <div 
  className={`
    bg-blue-400 p-1 rounded-xl flex items-center font-bold text-white 
    sm:justify-between sm:flex-wrap sm:overflow-visible
    max-sm:gap-4 max-sm:overflow-x-auto max-sm:scrollbar-visible
  `}
  ref={scrollRef}
>
  {items.map((item, index) => (
    <button
      ref={index === 0 ? firstBtnRef : null}
      key={index}
      onClick={() => {
        setSelectedTab(index);
        scrollIntoView(index);
      }}
      className={`
        px-4 py-2 hover:bg-blue-300 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-blue-600 
        ${selectedTab === index ? 'ring-2 bg-white text-blue-600' : ''}
        max-sm:min-w-[100px] max-sm:flex-shrink-0
      `}
    >
      {item.title}
    </button>
  ))}
</div>




          <div className='bg-white p-2 rounded-xl'>
            {items.map((item, index) => (
              <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
