import React from 'react';
import Service1Image from '../assets/service-1.png';
import Service2Image from '../assets/service-2.png';
import Service3Image from '../assets/service-3.png';
import Service4Image from '../assets/service-4.png';
import Service5Image from '../assets/service-5.png';
import Image from 'next/image';

const services = [
  {
    title: 'Accounting & Book-keeping',
    desc: 'Accurate and timely bookkeeping will help you stay organized and stress-free. We handle your financial documentation so you can focus on running and growing your business with confidence.',
    icon: Service1Image,
  },
  {
    title: 'Financial Reporting & Analysis',
    desc: 'Enhance your business growth by transforming raw data into insightful reports with our services like budgeting, cash flow management, financial planning and risk management.',
    icon: Service2Image,
  },
  {
    title: 'Internal Controls, SOX  & Audit Support',
    desc: 'Strengthen your financial integrity with robust internal controls, ensuring compliance, minimizing risks, and maximizing operational transparency.',
    icon: Service3Image,
  },
  {
    title: 'Business Registration & Setup',
    desc: 'Starting up? We simplify the setup process, assisting you through company formation, legal documentation, regulatory compliance, and consultation. ',
    icon: Service4Image,
  },
  {
    title: 'Regulatory Compliance',
    desc: 'Stay ahead of evolving regulations. We make sure your company complies with all legal and tax requirements, lowering risks and maintaining complete compliance all year long. ',
    icon: Service5Image,
  },
];

const ServicesSection = () => {
  return (
    <section
      id='services'
      className='w-full bg-[#183232] text-white py-16 px-4 flex flex-col items-center mt-[100px]'
    >
      <h2 className='text-3xl md:text-4xl font-bold mb-2 text-[#E9EFE5]'>
        Our Services
      </h2>
      <p className='text-center max-w-[80%] mb-8 text-[#E9EFE5]'>
        From a growing startup to a well-established enterprise, we offer
        complete, customized accounting solutions to help you lead with numbers
        by transforming complicated data into understandable insights and useful
        results.
      </p>
      <div className='flex items-center justify-center mb-8 w-[90%] gap-8'>
        <div className='w-[45%] h-[1px] bg-[#ACBDB3]' />
        <div className='w-[30px] h-[30px] bg-[#ACBDB3] rounded-[50%]' />
        <div className='w-[45%] h-[1px] bg-[#ACBDB3]' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[85%]'>
        {services.slice(0, 3).map((service) => (
          <div
            key={service.title}
            className='bg-[#E9EFE5] text-[#183232] rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-200'
          >
            <div className='flex items-center gap-4 mb-2'>
              <Image
                src={service.icon}
                alt='Hero Image'
                className='w-[40px] h-auto'
                height={40}
                width={40}
              />
              <h3 className='font-bold text-lg underline underline-offset-2'>
                {service.title}
              </h3>
            </div>

            <p className='text-sm text-gray-700'>{service.desc}</p>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[50%] mt-6'>
        {services.slice(3).map((service) => (
          <div
            key={service.title}
            className='bg-[#E9EFE5] text-[#183232] rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-200'
          >
            <div className='flex items-center gap-4 mb-2'>
              <Image
                src={service.icon}
                alt='Hero Image'
                className='w-[40px] h-auto'
                height={40}
                width={40}
              />
              <h3 className='font-bold text-lg underline underline-offset-2'>
                {service.title}
              </h3>
            </div>
            <p className='text-sm text-gray-700'>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
