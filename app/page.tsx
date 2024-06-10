import React from 'react';

export default function Home() {
  const name = 'hjlim';
  const result = 1 + 2;
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800">Hello World</h1>
      <p>{name}님, 반갑습니다..</p>
      <p>결과는 {result}</p>
    </div>
  );
}
