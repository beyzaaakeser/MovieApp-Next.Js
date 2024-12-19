'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  const tabs = [
    {
      name: 'Popular',
      url: 'popular',
    },
    {
      name: 'Latest',
      url: 'latest',
    },
    {
      name: 'Upcoming Movies',
      url: 'upcoming',
    },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-800 dark:text-white flex items-center justify-center gap-7">
      {tabs.map((item, index) => (
        <Link
          href={`/?genre=${item.url}`}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            item.url === genre
              ? 'underline underline-offset-8 text-amber-600 '
              : ''
          } `}
        >
          {' '}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
