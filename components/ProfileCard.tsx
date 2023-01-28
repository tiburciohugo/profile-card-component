import React from "react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="m-auto bg-white rounded-lg w-[20.375rem] md:w-[21.875rem] h-[23.375rem]">
      <div className="h-[8.75rem]">
        <Image
          src="/bg-pattern-card.svg"
          alt="background pattern"
          width={100}
          height={140}
          className="relative w-full rounded-t-lg"
        />
      </div>
      <div className="relative">
        <Image
          src="/image-victor.jpg"
          alt="profile picture"
          width={100}
          height={160}
          className="absolute z-10 transform -translate-x-1/2 border-4 border-white rounded-full -top-[7.5rem] left-1/2"
        />
        <div className="flex justify-center mt-16 align-center">
          <h1 className="text-xl font-bold">Victor Crest</h1>
          <p className="ml-2 text-xl font-normal text-gray-400">26</p>
        </div>
        <p className="pb-4 mt-2 font-normal text-center text-gray-400 border-gray-200 border-b-[1px] text-md">
          London
        </p>
        <div className="flex mt-4 space-x-6 justify-evenly">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">80K</p>
            <p className="text-sm font-normal text-gray-400">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">803K</p>
            <p className="text-sm font-normal text-gray-400">Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">1.4K</p>
            <p className="text-sm font-normal text-gray-400">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
