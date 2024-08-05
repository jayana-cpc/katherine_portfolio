"use client";
import React from "react";
import { LayoutGrid } from "./LayoutGrid";
import Skel1 from '../../../public/skel1.jpg';
import Skel2 from '../../../public/skel2.jpg';
import Skel3 from '../../../public/skel3.jpg';
import Skel4 from '../../../public/skel4.jpg';

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/QqId3sP.jpeg)' }}>
      <div className="relative z-10 p-4 md:p-10 bg-black bg-opacity-50 h-full flex flex-col justify-end rounded-lg">
        <p className="font-bold md:text-4xl text-xl text-white">
          House in the woods
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
        </p>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/NtzGlbJ.jpeg)' }}>
      <div className="relative z-10 p-4 md:p-10 bg-black bg-opacity-50 h-full flex flex-col justify-end rounded-lg">
        <p className="font-bold md:text-4xl text-xl text-white">
          House above the clouds
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and a
          unique living experience. It&apos;s a place where the sky meets home,
          and tranquility is a way of life.
        </p>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/eia22gi.jpeg)' }}>
      <div className="relative z-10 p-4 md:p-10 bg-black bg-opacity-50 h-full flex flex-col justify-end rounded-lg">
        <p className="font-bold md:text-4xl text-xl text-white">
          Greens all over
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/9eZASOS.jpeg)' }}>
      <div className="relative z-10 p-4 md:p-10 bg-black bg-opacity-50 h-full flex flex-col justify-end rounded-lg">
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Skel1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: Skel2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: Skel3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: Skel4,
  }
];
