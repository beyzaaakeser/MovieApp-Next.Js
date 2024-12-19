import Image from 'next/image';
import React from 'react';

const getMovie = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
  const data = res.json();
  return data;
};

const MovieDetail = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(movieDetail);
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        fill
        alt={movieDetail.original_title}
        className="object-cover "
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />

      <div className="absolute text-white">
        <div className="text-4xl font-bold my-3">
          {movieDetail.original_title}
        </div>
        <div className="text-xl font-semibold my-3 w-2/3 ">
          {movieDetail.overview}
        </div>
        <div className=" text-gray-200 mt-3">
          <span className="bg-blue-600 py-1 px-2 rounded-full">
            {movieDetail?.vote_average.toFixed(1)}
          </span>{' '}
          <span className="bg-gray-600 py-1 px-2 rounded-full">
            {movieDetail?.release_date}
          </span>
        </div>
        <div className="border w-32 p-2 rounded-md text-center text-lg cursor-pointer mt-3 hover:bg-white hover:text-black transition">
          Trail
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
