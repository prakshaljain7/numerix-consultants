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
      text: 'Our vision is to redefine global finance outsourcing by delivering intelligent, high-impact accounting solutions tailored to your business’s unique needs, driven by innovation, precision, and an unshakeable focus on success.',
    },
    {
      title: 'Our Mission',
      image: OurMission,
      alt: 'Mission Rocket',
      text: 'Our mission is to make finance simple, reliable, and growth-focused, delivering accounting and compliance solutions with transparency, precision, and a relentless commitment to your success.',
    },
    {
      title: 'Our Story',
      image: OurStory,
      alt: 'Growth Story',
      text: 'It all started with one belief that finance should support ambition, not limit it. At Numerix, we simplify the complex, offering expert accounting solutions that help businesses save big, move faster, and grow with confidence in every decision they make.',
    },
    {
      title: 'Our Team',
      image: OurTeam,
      alt: 'Our Team',
      text: 'Behind every number is a team that cares. At Numerix, our seasoned professionals combine technical expertise with a client-first mindset, ensuring your financial goals are met with smart strategies, timely execution, and complete peace of mind.',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <div className='relative mt-5 md:mt-0'>
        <div className='flex flex-row items-center mx-6'>
          <Image
            src={AboutBannerLeft}
            alt='About Banner Left'
            width={200}
            height={200}
            className='absolute md:relative object-contain top-0 left-0 z-0'
          />
          <div className='position-relative z-10'>
            <h1 className='text-4xl font-bold mb-6 text-center text-[#1F3A3D] mt-6'>
              Who Are We
            </h1>
            <p className='text-gray-700 text-lg text-center mt-20 md:mt-0'>
              At Numerix Consultants, we understand that running a business is
              challenging, but your finances shouldn't be. Founded in 2025,
              Numerix is a finance boutique based in India committed to
              supporting businesses with dependable, end-to-end finance
              solutions. Our dedicated team of professionals simplify your
              financial operations, from routine bookkeeping to audit assistance
              and compliance, reducing risk, saving time, and fostering
              expansion so you can concentrate on growing your company. We
              assist you in leading with data rather than hypotheses owing to
              our extensive experience and strong systems. Therefore, we are
              here to make every number matter if you are prepared to lead with
              clarity and control.
            </p>
          </div>
          <Image
            src={AboutBannerRight}
            alt='About Banner Right'
            width={200}
            height={200}
            className='absolute md:relative object-contain top-0 right-0 z-0'
          />
        </div>
      </div>
      <div className='max-w-[1320px] mx-auto px-4 py-16 min-h-[280px]'>
        {infoSections.map((section, index) => (
          <div
            key={section.title}
            className={`mb-4 md:mb-16 last:mb-0 flex gap-8 p-8 border-4 border-[#1F3A3D] align-items-center relative flex md:flex-row flex-col`}
          >
            <div className='absolute top-0 right-0'>
              <Image
                src={AboutCorner}
                alt={'About Corner Decoration'}
                width={225}
                height={96}
                className='hidden md:block w-[70px] h-auto'
              />
            </div>

            <div className='flex flex-row items-center min-w-[225px] md:h-[190px] gap-4'>
              <Image
                src={section.image}
                alt={section.alt}
                width={65}
                height={65}
                className='w-[65px] md:w-[225px] h-[65px] md:h-[190px]'
              />
              <h2 className='block md:hidden text-3xl font-bold text-[#1F3A3D]'>
                {section.title}
              </h2>
            </div>

            <div className='flex flex-col justify-center'>
              <h2 className='hidden md:block text-3xl font-bold mb-4 text-[#1F3A3D]'>
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
