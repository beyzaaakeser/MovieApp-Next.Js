import React from 'react';
import Movies from './components/Movies';

const Page = async ({ searchParams }) => {
  const params = searchParams.genre || 'now_playing';
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
    <div className="flex items-center justify-center m-auto flex-wrap gap-3  ">
      {data?.results?.map((item, index) => (
        <Movies key={index} item={item} />
      ))}
    </div>
  );
};
export default Page;
