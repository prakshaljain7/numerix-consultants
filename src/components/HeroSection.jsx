import React from 'react';
import HeroBanner from '../assets/hero_banner.png';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full bg-[#E9EFE5] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-4 md:py-12 md:py-20 gap-8'>
      <div className='flex flex-col gap-4 w-full md:w-[60%]'>
        <h1 className='text-[36px] md:text-[60px] font-bold font-charis leading-tight text-gray-900'>
          Empowering Businesses
          <br />
          Through Numbers
        </h1>
        <h2 className='text-[36px] md:text-[90px] italic text-[#2b4747] font-medium mb-2 font-caveat'>
          You Grow - We Grow
        </h2>
        <p className='text-gray-700 mb-4'>
          Need a finance partner who gets your business and fuels your financial
          growth? Numerix Consultants delivers clarity and consistency, helping
          you move forward with confidence.
        </p>
        <div className='flex gap-4 w-full md:w-[80%] flex-col md:flex-row'>
          <a href='/contact' className='flex-1'>
            <button className='border border-gray-700 px-4 py-2 rounded bg-white transition text-gray-800 w-full'>
              Book a consultation
            </button>
          </a>
          <a href='/services' className='flex-1'>
            <button className='border border-gray-700 px-4 py-2 rounded bg-[#1F3A3D] text-white transition w-full'>
              Explore our services
            </button>
          </a>
        </div>
      </div>
      <div className='hidden md:flex items-center justify-end w-[40%]'>
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
