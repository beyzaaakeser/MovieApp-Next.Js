'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Movies = ({ item }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${item?.id}`)}
      className="min-w-[470px] object-cover relative cursor-pointer"
    >
      <Image
        width={470}
        height={300}
        alt={item.original_title}
        className="object-cover"
        src={`https://image.tmdb.org/t/p/original/${
          item?.backdrop_path || item?.poster_path
        }`}
      />

      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end bg-gray-50/50 opacity-0 hover:opacity-100 transition-opacity ">
        <div className="text-2xl text-amber-600 font-bold underline underline-offset-4 ">
          {item?.original_title}
        </div>
        <div className=" text-gray-200 mt-2">
          <span className="bg-blue-600 py-1 px-2 rounded-full">
            {item?.vote_average.toFixed(1)}
          </span>{' '}
          <span className="bg-gray-600 py-1 px-2 rounded-full">
            {item?.release_date}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Movies;
