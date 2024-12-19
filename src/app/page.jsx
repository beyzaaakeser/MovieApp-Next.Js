import React from 'react';
import Movies from './components/Movies';

const Page = async ({ searchParams }) => {
  console.log(searchParams.genre);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? 'movie/' + searchParams.genre : 'trending/all/day'
    }`,
    options
  );

  const data = await res.json();
  console.log(data);

  return (
    <div>
      {data?.results?.map((item, index) => (
        <Movies key={index} item={item} />
      ))}
    </div>
  );
};
export default Page;
