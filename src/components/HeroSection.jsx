import React from 'react';
import HeroBanner from '../assets/hero_banner.png';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full bg-[#f3f6ef] flex flex-col md:flex-row items-center justify-between px-12 py-12 md:py-20 gap-8'>
      <div className='flex-1 flex flex-col gap-4 max-w-xl'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight text-gray-900'>
          Empowering Businesses
          <br />
          Through Numbers
        </h1>
        <h2
          className='text-2xl md:text-3xl italic text-[#2b4747] font-medium mb-2'
          style={{ fontFamily: 'cursive' }}
        >
          You Grow - We Grow
        </h2>
        <p className='text-gray-700 mb-4'>
          Whether you&apos;re a growing startup or a well-established
          enterprise, we become your extended finance team — driving value,
          accuracy, and efficiency in every transaction.
        </p>
        <div className='flex gap-4'>
          <button className='border border-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition text-gray-800'>
            Book a consultation
          </button>
          <button className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition'>
            Explore our services
          </button>
        </div>
      </div>
      <div className='flex-1 flex items-center justify-end'>
        <span className='text-gray-500'>
          <Image
            src={HeroBanner}
            alt='Hero Image'
            className='w-full h-full object-cover'
            height={451}
            width={676}
          />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
