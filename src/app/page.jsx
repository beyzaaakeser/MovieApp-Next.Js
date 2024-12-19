import React from 'react';

const Page = async ({ searchParams }) => {
  const params = await searchParams;
  console.log(params.genre);
  return (
    <div className="underline">
      <h1>Veri Çekme Alanı</h1>
    </div>
  );
};

export default Page;
