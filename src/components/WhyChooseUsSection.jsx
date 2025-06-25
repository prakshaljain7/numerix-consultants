import React from 'react';
import WhyImage from '../assets/why_image.png';
import TickImage from '../assets/status_success.png';
import Image from 'next/image';

const reasons = [
  'Experienced & Qualified Team',
  'Multi-country Knowledge & Compliance Expertise',
  'Strong Data Security Practices',
  'Real-time Communication (Live-calls, Dashboards, Weekly Summaries)',
  'Cost-effective Solutions Without Compromising Quality',
];

const WhyChooseUsSection = () => {
  return (
    <section className='w-full bg-[#f3f6ef] flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-8'>
      <div className='flex-1 flex items-center justify-center'>
        <Image
          src={WhyImage}
          alt='Hero Image'
          className='w-[30%] h-auto object-cover'
          height={525}
          width={403}
        />
      </div>
      <div className='flex-1 flex flex-col gap-4 max-w-xl'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4 italic text-[#2b4747]'>
          Why NUMERIX CONSULTANTS?
        </h2>
        <ul className='flex flex-col gap-3'>
          {reasons.map((reason) => (
            <li
              key={reason}
              className='flex items-center gap-3 text-lg text-gray-800'
            >
              <Image
                src={TickImage}
                alt='Hero Image'
                className='object-cover'
                height={40}
                width={40}
              />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
