import React from 'react';
import Movies from '../../components/Movies';

const SearchMovie = async ({ params }) => {
  const keyword = params.keyword;
  console.log(keyword);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
    options
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      {data?.results ? (
        <div className="grid grid-cols-3 gap-2 place-items-center max-h-[300px] object-contain ">
          {data?.results?.map((item, index) => (
            <Movies key={index} item={item} />
          ))}
        </div>
      ) : (
        <div>Movie Not Found</div>
      )}
    </div>
  );
};

export default SearchMovie;
