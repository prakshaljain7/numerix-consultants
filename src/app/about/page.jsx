import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AboutCorner from '../../assets/about_corner.png';
import AboutBannerLeft from '../../assets/about-banner-left.png';
import AboutBannerRight from '../../assets/about-banner-right.png';
import OurMission from '../../assets/our_mission.png';
import OurStory from '../../assets/our_story.png';
import OurTeam from '../../assets/our_team.png';
import OurVision from '../../assets/our_vision.png';

export default function AboutPage() {
  const infoSections = [
    {
      title: 'Our Vision',
      image: OurVision,
      alt: 'Vision Target',
      text: 'To be a trusted offshore partner delivering intelligent, scalable finance solutions that empower global businesses to grow with confidence. To be the leading global provider of Accounting & Finance services, recognized for our expertise, innovation, and commitment to client success.',
    },
    {
      title: 'Our Mission',
      image: OurMission,
      alt: 'Mission Rocket',
      text: 'To deliver exceptional Accounting & Finance solutions that empower our clients to achieve their business goals, while fostering a culture of integrity, excellence, and continuous improvement. To simplify finance for our clients by offering transparent, responsive, and high-quality accounting and compliance services that align with global standards.',
    },
    {
      title: 'Our Story',
      image: OurStory,
      alt: 'Growth Story',
      text: 'Numerix Consultants was founded with a vision to revolutionize the Accounting & Finance industry by offering innovative solutions tailored to the unique needs of our clients. Our journey began in India, where we quickly established ourselves as a leading KPO (Knowledge Process Outsourcing) provider. Today, we serve clients across multiple continents, leveraging our expertise to drive their success.',
    },
    {
      title: 'Our Team',
      image: OurTeam,
      alt: 'Our Team',
      text: 'Our team comprises seasoned professionals with over a decade of experience in the finance sector. We pride ourselves on our commitment to excellence, continuous learning, and client satisfaction. Each member of our team is dedicated to providing the highest level of service, ensuring that your financial needs are met with precision and efficiency.',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <div>
        <div className='flex flex-row items-center mx-6'>
          <Image
            src={AboutBannerLeft}
            alt='About Banner Left'
            width={200}
            height={200}
            className='object-contain'
          />
          <div>
            <h1 className='text-4xl font-bold mb-6 text-center text-[#1F3A3D] mt-6'>
              Who Are We
            </h1>
            <p className='text-gray-700 text-lg text-center'>
              <span className='font-semibold'>Numerix Consultants</span> is a
              boutique offshore Accounting & Finance KPO based in India, founded
              in 2024, a former Deloitte Global auditor. Our team of qualified
              Chartered Accountants and finance experts is committed to
              providing precise, timely, and tech-enabled solutions to
              international businesses seeking reliable financial support.
            </p>
          </div>
          <Image
            src={AboutBannerRight}
            alt='About Banner Right'
            width={200}
            height={200}
            className='object-contain'
          />
        </div>
      </div>
      <div className='max-w-[1320px] mx-auto px-4 py-16 min-h-[280px]'>
        {infoSections.map((section, index) => (
          <div
            key={section.title}
            className={`mb-16 last:mb-0 flex gap-8 p-8 border-4 border-[#1F3A3D] align-items-center relative`}
          >
            <div className='absolute top-0 right-0'>
              <Image
                src={AboutCorner}
                alt={'About Corner Decoration'}
                width={225}
                height={96}
                className='w-[70px] h-auto'
              />
            </div>

            <div className='min-w-[225px] h-[190px]'>
              <Image
                src={section.image}
                alt={section.alt}
                width={225}
                height={190}
                className='w-[225px] h-[190px]'
              />
            </div>

            <div className='flex flex-col justify-center'>
              <h2 className='text-3xl font-bold mb-4 text-[#1F3A3D]'>
                {section.title}
              </h2>
              <p className='text-gray-700'>{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
