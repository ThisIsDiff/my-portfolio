'use client';
// import { useEffect, useState} from 'react';

export default function Header() {
    return (
    <header className="flex justify-items-around space-x-10 absolute top-0 left-0 w-full p-6 z-20">
        <h1 className="text-3xl font-bold text-black drop-shadow-lg">
          Home
        </h1>
        <h1 className="text-3xl font-bold text-black drop-shadow-lg">
          About
        </h1>
        <h1 className="text-3xl font-bold text-black drop-shadow-lg">
          Projects
        </h1>
        <h1 className="text-3xl font-bold text-black drop-shadow-lg">
          Skills
        </h1>
        <h1 className="text-3xl font-bold text-black drop-shadow-lg">
          Contact
        </h1>
    </header>
    )
}