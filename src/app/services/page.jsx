import Navbar from '@/components/Navbar';
import React from 'react';
import ServicesImage from '../../assets/services.png';
import Ellipse from '../../assets/Ellipse.png';
import Image from 'next/image';

const services = [
  {
    number: '01',
    title: 'Accounting Services',
    description:
      'Our accounting services are designed to give you full financial clarity and control. From daily bookkeeping to finalizing financial statements, we ensure your accounts are accurate, up-to-date, and fully compliant with regulatory standards. Whether you`re a startup or a growing enterprise, we provide structured financial data that helps you track performance, manage expenses, and prepare for strategic growth. We turn raw numbers into meaningful insights, so your business always stays financially sound.',
    bullets: [
      'Daily and monthly bookkeeping solutions',
      'Clean, organized ledger management',
      'Preparation of financial statements',
      'Year-end closing and report generation',
    ],
  },
  {
    number: '02',
    title: 'Finance Support & Analysis',
    description:
      'We go beyond basic accounting to offer deep financial insight that fuels better business decisions. Our team helps you plan budgets, forecast revenues, and analyze profitability to identify areas of opportunity and concern. With clear reporting and data-driven recommendations, we equip you to take proactive steps toward sustainability and growth. Our support brings both clarity and confidence to your financial decision-making process, backed by real numbers and real results.',
    bullets: [
      'Strategic budgeting and planning support',
      'In-depth cash flow analysis',
      'Revenue and expense forecasting',
      'Insightful business performance reports',
    ],
  },
  {
    number: '03',
    title: 'Internal Controls, SOX Compliance & Audit Support',
    description:
      "We strengthen your business framework with robust internal controls and audit preparedness. By identifying financial risks and inefficiencies, we help you set up effective policies and systems that ensure accuracy and accountability. When it's time for an audit, we organize your documentation, ensure regulatory compliance, and guide you through the process. Our support ensures you're never caught off guard, minimizing risk while improving operational transparency.",
    bullets: [
      'Internal financial control system setup',
      'Complete audit preparation and assistance',
      'Identification of operational financial risks',
      'Regular compliance and system reviews',
    ],
  },
  {
    number: '04',
    title: 'Business Registration & Setup',
    description:
      "Starting a business is exciting, but the paperwork doesn't have to be overwhelming. We help you navigate the legal and regulatory processes involved in launching your venture. From selecting the ideal business structure to registering for GST, PAN, and other licenses, we handle every step with precision. Our team ensures your business is set up on a solid foundation, compliant, efficient, and ready to grow from day one.",
    bullets: [
      'Guidance on ideal business structure',
      'PAN, TAN, and GST registration',
      'Business name and licensing support',
      'Documentation and filing assistance',
    ],
  },
  {
    number: '05',
    title: 'Regulatory Compliance',
    description:
      "Compliance isn't just about avoiding penalties. It's about building a credible and trustworthy business. We take charge of all your statutory obligations, from filing tax returns and maintaining registers to meeting ROC deadlines and updating regulatory documentation. With a proactive approach, we ensure nothing slips through the cracks, keeping your operations smooth, lawful, and worry-free.",
    bullets: [
      'Timely tax and GST filings',
      'ROC and MCA documentation management',
      'Maintenance of statutory registers',
      'Alerts for regulatory updates and deadlines',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-white pb-16'>
        <div className='flex flex-col md:flex-row justify-between py-12 px-12 relative'>
          <div className='flex flex-row items-center gap-4'>
            <Image
              src={ServicesImage}
              alt='Our Services'
              width={225}
              height={190}
              className='relative md:absolute w-[40%] md:w-[225px] h-[auto] md:top-12 md:left-12 z-0'
            />
            <h1 className='md:hidden text-4xl font-bold text-[#1F3A3D] mb-2 text-center md:text-left'>
              Our Services
            </h1>
          </div>

          <div className='flex-1 flex flex-col items-center justify-center text-center'>
            <h1 className='hidden md:block text-4xl font-bold text-[#1F3A3D] mb-2'>
              Our Services
            </h1>
            <p className='text-center text-gray-700 max-w-2xl'>
              We do the number crunching, so you can do the dreaming. From
              launching your business to keeping the books squeaky clean, we
              handle the money maze—taxes, audits, compliance, and more—without
              the boring bits. You focus on growing. We'll focus on the fine
              print.
            </p>
          </div>
        </div>
        <div className='max-w-5xl mx-auto px-4 pt-10'>
          {/* Services List */}
          <div className='flex flex-col gap-10'>
            {services.map((service, idx) => (
              <div
                key={service.number}
                className='border-2 border-gray-400 rounded-none bg-white p-0 relative'
              >
                <Image
                  src={Ellipse}
                  alt='ellipse'
                  width={225}
                  height={190}
                  className='absolute w-[90px] h-[auto] top-0 left-0'
                />
                <Image
                  src={Ellipse}
                  alt='ellipse'
                  width={225}
                  height={190}
                  className='absolute w-[90px] h-[auto] bottom-0 right-0 transform rotate-180'
                />
                <div className='flex flex-col md:flex-row items-stretch'>
                  <div className='flex-shrink-0 flex items-center justify-center md:w-48 w-full md:h-auto h-32'>
                    <span className='text-[64px] md:text-[96px] font-bold text-[#1F3A3D]'>
                      {service.number}
                    </span>
                  </div>
                  <div className='flex-1 p-8'>
                    <h2 className='text-2xl font-bold mb-2 text-[#1F3A3D]'>
                      {service.title}
                    </h2>
                    <p className='mb-3 text-gray-800'>{service.description}</p>
                    <div>
                      <span className='font-semibold text-[#1F3A3D]'>
                        Services Include:
                      </span>
                      <ul className='list-disc ml-6 mt-1 text-gray-700 text-sm'>
                        {service.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
