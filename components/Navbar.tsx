import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="text-2xl font-bold">
        Blog
      </Link>
      <Link href="/about" className="hover-font-bold hover:text-gray-300">
        About
      </Link>
      <Link href="/portfolio" className="hover-font-bold hover:text-gray-300">
        포트폴리오
      </Link>
      <Link href="/project" className="hover-font-bold hover:text-gray-300">
        프로젝트
      </Link>
      <Link href="/contact" className="hover-font-bold hover:text-gray-300">
        연락처
      </Link>
    </nav>
  );
}
