import React from 'react';
import EmailIcon from '../assets/email.png';
import LinkedIcon from '../assets/linkedin_icon.png';
import PhoneIcon from '../assets/phone_icon.png';
import NumerixLogo from '../assets/numerix-logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <nav className='w-full bg-[#1F3A3D] border-b border-gray-200 flex items-center justify-between px-6 py-2 text-sm font-medium shadow-sm z-10 pr-[150px]'>
        <div className='hidden md:flex items-center gap-6 text-gray-700 w-full justify-end text-white '>
          <div className='flex items-center gap-2'>
            <Image
              src={PhoneIcon}
              alt='Phone Icon'
              className='w-auto h-[16px] object-cover'
              height={24}
              width={24}
            />
            <span>+91-8630876257</span>
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src={EmailIcon}
              alt='Email Icon'
              className='w-auto h-[24px] object-cover'
              height={24}
              width={24}
            />
            <span>Saavtika.Jain@NumerixConsultants.in</span>
          </div>
          <a href='#' className='flex items-center gap-1 hover:underline'>
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
      <nav className='w-full bg-[#E9EFE5] flex items-center justify-between px-6 py-2 text-sm font-medium'>
        <div className='flex items-center gap-2'>
          <span className='font-bold text-lg flex items-center gap-1'>
            <Image
              src={NumerixLogo}
              alt='Numerix Logo'
              className='w-auto h-[24px] object-cover mt-[-8px]'
              height={24}
              width={24}
            />
            <span className='text-black'>NUMERIX CONSULTANTS</span>
          </span>
        </div>
        <div>
          <a
            href='#'
            className='px-3 py-1 rounded hover:bg-gray-100 text-black'
          >
            Home
          </a>
          <a
            href='#about'
            className='px-3 py-1 rounded hover:bg-gray-100 text-black'
          >
            About Us
          </a>
          <a
            href='#services'
            className='px-3 py-1 rounded hover:bg-gray-100 text-black'
          >
            Our Services
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <button className='bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-gray-700 transition'>
            Contact us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
