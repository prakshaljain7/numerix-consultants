import Image from 'next/image';
import React from 'react';
import EmailIcon from '../assets/email.png';
import LinkedIcon from '../assets/linkedin_icon.png';
import PhoneIcon from '../assets/phone_icon.png';

const Footer = () => {
  return (
    <div>
      <footer className='hidden md:block w-full bg-[#183232] text-white text-center py-4 text-sm mt-auto'>
        &copy; {new Date().getFullYear()} Numerix Consultants. All rights
        reserved.
      </footer>
      <nav className='block md:hidden w-full bg-[#1F3A3D] border-b border-gray-200 flex items-center justify-between px-2 py-2 text-sm font-medium shadow-sm z-10'>
        <div className='flex items-center text-gray-700 w-full justify-between text-white text-[10px]'>
          <div className='flex items-center gap-2 '>
            <Image
              src={PhoneIcon}
              alt='Phone Icon'
              className='w-auto h-[16px] object-cover'
              height={24}
              width={24}
            />
            <span>+91-8630687257</span>
          </div>
          <a href='mailto:Administrator@numerixconsultants.in' className=''>
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
            className='flex  items-center gap-1 hover:underline'
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
    </div>
  );
};

export default Footer;
