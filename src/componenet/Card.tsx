'use client';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText }) => {
  return (
    <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg grid grid-rows-2 text-center text-zinc-600 text-lg font-bold hover:scale-105 transition-all duration-200">
      <div className="relative w-full">
        <Image
          alt={altText}
          loading="lazy"
          width={400}
          height={250}
          className="object-cover w-full"
          src={imageSrc}
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
  );
};

export default Card;
