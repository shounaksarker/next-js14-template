import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className=" flex h-full items-center justify-between bg-black px-4 py-2 text-white">
      {/* logo */}
      <div className="w-2/12">
        <Link href="/">Pathao</Link>
      </div>
      <div className="flex w-8/12 items-center justify-center gap-x-4 ">
        <Link href="/home">Home</Link>
        <Link href="/home/2">Home 2</Link>
        <Link href="/home/3">Home 3</Link>
      </div>
      <div className="flex w-2/12 justify-end">
        <span className="rounded-lg border border-white px-2 py-1">User</span>
      </div>
    </div>
  );
};

export default Header;
