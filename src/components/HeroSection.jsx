import React from 'react';
import HeroBanner from '../assets/hero_banner.png';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full bg-[#E9EFE5] flex flex-col md:flex-row items-center justify-between px-12 py-12 md:py-20 gap-8'>
      <div className='flex flex-col gap-4 w-[60%]'>
        <h1 className='text-[60px] font-bold font-charis leading-tight text-gray-900'>
          Empowering Businesses
          <br />
          Through Numbers
        </h1>
        <h2 className='text-[90px] italic text-[#2b4747] font-medium mb-2 font-caveat'>
          You Grow - We Grow
        </h2>
        <p className='text-gray-700 mb-4'>
          Need a finance partner who gets your business and fuels your financial
          growth? Numerix Consultants delivers clarity and consistency, helping
          you move forward with confidence.
        </p>
        <div className='flex gap-4 w-[80%]'>
          <button className='flex-1 border border-gray-700 px-4 py-2 rounded bg-white transition text-gray-800'>
            Book a consultation
          </button>
          <button className='flex-1 bg-[#1F3A3D] text-white px-4 py-2 rounded transition'>
            Explore our services
          </button>
        </div>
      </div>
      <div className='flex items-center justify-end w-[40%]'>
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
