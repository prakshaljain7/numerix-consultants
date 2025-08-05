'use client';
import React, { useState } from 'react';
import EmailIcon from '../assets/email.png';
import LinkedIcon from '../assets/linkedin_icon.png';
import PhoneIcon from '../assets/phone_icon.png';
import NumerixLogo from '../assets/numerix-logo.png';
import Hamburger from '../assets/hamburger.png';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='sticky top-0 left-0 right-0 z-50'>
      <nav className='hidden md:block w-full bg-[#1F3A3D] border-b border-gray-200 flex items-center justify-between px-6 py-2 text-sm font-medium shadow-sm z-10 pr-[150px]'>
        <div className='hidden md:flex items-center gap-6 text-gray-700 w-full justify-end text-white '>
          <div className='flex items-center gap-2'>
            <Image
              src={PhoneIcon}
              alt='Phone Icon'
              className='w-auto h-[16px] object-cover'
              height={24}
              width={24}
            />
            <span>+91-8630687257</span>
          </div>
          <a href='mailto:Administrator@numerixconsultants.in'>
            <div className='flex items-center gap-2'>
              <Image
                src={EmailIcon}
                alt='Email Icon'
                className='w-auto h-[24px] object-cover'
                height={24}
                width={24}
              />
              <span>Administrator@numerixconsultants.in</span>
            </div>
          </a>
          <a
            href='https://www.linkedin.com/company/numerix-consultants/'
            className='flex items-center gap-1 hover:underline'
            target='_blank'
          >
            <Image
              src={LinkedIcon}
              alt='LinkedIn Icon'
              className='w-auto h-[20px] object-cover'
              height={24}
              width={24}
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </nav>
      <nav className='w-full bg-[#FFFFFF] md:bg-[#E9EFE5] flex items-center justify-between px-6 py-2 text-sm font-medium'>
        <div className='flex items-center gap-2'>
          <a href='/' className='px-3 py-1 rounded text-black'>
            <span className='font-bold text-lg flex items-center gap-1'>
              <Image
                src={NumerixLogo}
                alt='Numerix Logo'
                className='w-auto h-[24px] object-cover mt-[-8px]'
                height={24}
                width={24}
              />
              <span className='text-black' style={{ fontFamily: 'Roboto' }}>
                NUMERIX CONSULTANTS
              </span>
            </span>
          </a>
        </div>
        <div
          className='block md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={Hamburger}
            alt='Numerix Logo'
            className='w-auto h-[24px] object-cover mt-[-8px]'
            height={24}
            width={24}
          />
        </div>
        <div className='hidden md:block'>
          <a
            href='/'
            className='px-3 py-1 rounded hover:bg-gray-100 text-black'
          >
            Home
          </a>
          <a
            href='/about'
            className='px-3 py-1 rounded hover:bg-gray-100 text-black'
          >
            About
          </a>
          <a
            href='/services'
            className='px-3 py-1 rounded hover:bg-gray-100 text-black'
          >
            Our Services
          </a>
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <a
            className='bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-gray-700 transition'
            href='/contact'
          >
            Contact us
          </a>
        </div>
      </nav>
      {isMenuOpen && (
        <nav className='block md:hidden '>
          <div className='block w-full bg-[#FFFFFF] flex items-center justify-between px-6 py-2 text-sm font-medium border-t-2'>
            <a
              href='/about'
              className='px-3 py-1 rounded hover:bg-gray-100 text-black'
            >
              About
            </a>
            <a
              href='/services'
              className='px-3 py-1 rounded hover:bg-gray-100 text-black'
            >
              Our Services
            </a>
            <a
              href='/contact'
              className='px-3 py-3 rounded-[10px] bg-[#188038] text-white'
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
