import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">포트폴리오</Link>
      <Link href="/project">프로젝트</Link>
      <Link href="/contact">연락처</Link>
    </nav>
  );
}
