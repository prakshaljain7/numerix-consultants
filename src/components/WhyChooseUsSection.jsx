import React from 'react';
import WhyImage from '../assets/why_image.png';
import TickImage from '../assets/status_success.png';
import Image from 'next/image';

const reasons = [
  'Cost-effective, high-quality solutions',
  'Complete accounting expertise',
  'Built for every stage of business',
  'Live calls for real-time support',
  'Robust data security measures',
  'Experienced and qualified team of chartered accountants',
];

const WhyChooseUsSection = () => {
  return (
    <section className='w-full bg-[#E9EFE5] flex flex-col md:flex-row items-center px-16 py-16 gap-[10%] justify-center mt-[100px]'>
      <div className='flex items-center justify-center w-[20%]'>
        <Image
          src={WhyImage}
          alt='Hero Image'
          className='w-[100%] h-auto object-cover'
          height={525}
          width={403}
        />
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-[48px] font-medium mb-4 text-[#2b4747] font-[Alkatra]'>
          Why NUMERIX CONSULTANTS?
        </h2>
        <ul className='flex flex-col gap-3'>
          {reasons.map((reason) => (
            <li
              key={reason}
              className='flex items-center gap-3 text-gray-800 mt-[10px]'
            >
              <Image
                src={TickImage}
                alt='Hero Image'
                className='object-cover'
                height={40}
                width={40}
              />
              <span className='text-[24px]'>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
