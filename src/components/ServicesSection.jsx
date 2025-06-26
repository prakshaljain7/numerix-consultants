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
    desc: 'Streamline your financial operations with our comprehensive accounting solutions, including bookkeeping, financial statements, tax compliance, and financial analysis.',
    icon: Service1Image,
  },
  {
    title: 'Financial Reporting & Analysis',
    desc: 'Enhance your business growth with our finance services, including budgeting, cash flow management, financial planning, and risk management.',
    icon: Service2Image,
  },
  {
    title: 'Internal Controls & Audit Support',
    desc: 'Safeguard your business with robust internal controls, including risk assessment, control design, compliance audits, and continuous monitoring.',
    icon: Service3Image,
  },
  {
    title: 'Business Registration & Setup',
    desc: 'Simplify the process of starting a business with our expert assistance in company formation, legal documentation, regulatory compliance, and consultation.',
    icon: Service4Image,
  },
  {
    title: 'Regulatory Compliance',
    desc: 'Ensure your business meets all regulatory requirements with our advisory, compliance programs, audit support, and training services.',
    icon: Service5Image,
  },
];

const ServicesSection = () => {
  return (
    <section
      id='services'
      className='w-full bg-[#183232] text-white py-16 px-4 flex flex-col items-center'
    >
      <h2 className='text-3xl md:text-4xl font-bold mb-2 text-[#E9EFE5]'>
        Our Services
      </h2>
      <p className='text-center max-w-[80%] mb-8 text-[#E9EFE5]'>
        Numbers don&apos;t have to be boring—we make finance fun (and flawless)!
        From crunching the books and decoding audits to setting up your dream
        business and keeping you on the right side of regulations, we&apos;ve
        got your back. Let us handle the spreadsheets while you handle the
        spotlight.
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
            className='bg-[#eaf3ef] text-[#183232] rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-200'
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
            className='bg-[#eaf3ef] text-[#183232] rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-200'
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
