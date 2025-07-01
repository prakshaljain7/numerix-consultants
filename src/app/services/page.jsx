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
      "We offer end-to-end accounting services, including bookkeeping, reconciliations, general ledger maintenance, and month-end closings. Whether you're using Odoo, QuickBooks, Tally, or Xero — our team ensures accuracy, consistency, and compliance with local and international accounting standards.",
    bullets: [
      'Bookkeeping & Ledger Management',
      'Bank, Credit Card, & Inter-company Reconciliations',
      'Accounts Payable/Receivable Management',
      'Month-End & Year-End Closings',
      'Financial Reporting',
    ],
  },
  {
    number: '02',
    title: 'Finance Support & Analysis',
    description:
      'We help you interpret your numbers, not just record them. Our financial analysis and management reporting services enable you to make smarter decisions with confidence.',
    bullets: [
      'Budgeting & Forecasting',
      'Management Reporting (MIS)',
      'Cash Flow Analysis',
      'KPI Dashboards',
      'Virtual CFO Support',
    ],
  },
  {
    number: '03',
    title: 'Internal Controls & Audit Support',
    description:
      'Establish a strong control environment with our support in designing and implementing internal controls. We also assist in audit preparation and readiness to ensure smooth external and internal audits.',
    bullets: [
      'SOP Documentation',
      'Internal Controls Design & Testing',
      'Risk Assessment Frameworks',
      'Audit Trail Creation & Reconciliations',
      'External Audit Liaison & Readiness Reports',
    ],
  },
  {
    number: '04',
    title: 'Business Registration & Setup',
    description:
      'Expanding or launching a business in a new jurisdiction? We assist with company formation, documentation, and compliance support for entities in India and offshore jurisdictions like UAE, BVI, and beyond.',
    bullets: [
      'Company Incorporation',
      'Trade License & VAT Registration (UAE)',
      'Bank Account Opening Assistance',
      'Registered Office Services',
      'Post-Incorporation Compliance Setup',
    ],
  },
  {
    number: '05',
    title: 'Regulatory Compliance',
    description:
      "Stay ahead of changing regulations. Our compliance experts ensure that your business meets all statutory requirements — whether it's tax filings, financial disclosures, or international compliance mandates.",
    bullets: [
      'Tax Filings (VAT, TDS, Corporate Tax)',
      'Compliance Calendars & Reminders',
      'Annual Returns & Statutory Filings',
      'Regulatory Reporting (as per UAE, Italy, BVI laws)',
      'Document Management & Recordkeeping',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-white pb-16'>
        <div className='flex flex-row justify-between py-12 px-12 relative'>
          <Image
            src={ServicesImage}
            alt='Our Services'
            width={225}
            height={190}
            className='absolute w-[225px] h-[auto] top-12 left-12'
          />
          <div className='flex-1 flex flex-col items-center justify-center text-center'>
            <h1 className='text-4xl font-bold text-[#1F3A3D] mb-2'>
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
