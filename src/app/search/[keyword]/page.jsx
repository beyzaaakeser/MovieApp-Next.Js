import React from 'react';
import Movies from '../../components/Movies';

const SearchMovie = async ({ params }) => {

  try {
    const { keyword } = await params;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    };

    // API'den veri çek
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            keyword
        )}`,
        options
    );

    // Hatalı yanıt kontrolü
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Sonuçları kontrol et
    const results = data?.results || [];

    return (
        <div>
          {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 dark:bg-gray-800 pb-5 px-5">
                {results.map((item) => (
                    <Movies key={item.id} item={item} />
                ))}
              </div>
          ) : (
              <div>Movie Not Found</div>
          )}
        </div>
    );
  } catch (error) {
    console.error('Error fetching movies:', error);
    return <div>Error fetching movies. Please try again later.</div>;
  }
};

export default SearchMovie;
