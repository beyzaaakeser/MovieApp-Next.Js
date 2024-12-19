'use client';
import { BiSearch } from 'react-icons/bi';
import MenuItem from './MenuItem';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter()
  const menu = [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Sign In',
      url: '/login',
    },
  ];
  const searchMovie = (e) => { 
    if(e.key === "Enter" && keyword.length > 2 ) {
      router.push(`/search/${keyword}`)
    }
   }
  return (
    <div className="flex items-center gap-5 h-20 p-5">
      <Link href="/" className="bg-amber-600 rounded p-3 text-2xl font-bold">
        MovieApp
      </Link>
      <div className="flex flex-1 items-center gap-2 border p-4 rounded ">
        <input
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={searchMovie}
          type="text"
          className="outline-none flex-1 bg-transparent"
          placeholder="You can search here..."
        />
        <BiSearch size={25} />
      </div>
      <ThemeSwitcher />
      {menu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Header;
