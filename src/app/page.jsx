import React from 'react';
import Movies from './components/Movies';

const Page = async ({ searchParams }) => {
  const params = (await searchParams)?.genre || 'now_playing';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params}`,
    options
  );

  const data = await res.json();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 dark:bg-gray-800  items-center  m-auto px-5 pb-5  ">
      {data?.results?.map((item, index) => (
        <Movies key={index} item={item} />
      ))}
    </div>
  );
};
export default Page;
