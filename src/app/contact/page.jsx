import Navbar from '@/components/Navbar';
import React from 'react';
import NumerixLogo from '../../assets/numerix-logo.png';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-white flex items-center justify-center py-12'>
        <div className='w-full max-w-6xl flex flex-col md:flex-row gap-8'>
          {/* Left Side: Contact Info */}
          <div className='md:w-1/2 flex flex-col items-start justify-center px-8'>
            <Image
              src={NumerixLogo}
              alt='Numerix Consultants Logo'
              className='w-[100%] h-auto mb-6'
            />
            <h1 className='text-4xl font-bold mb-2 text-[#1F3A3D]'>
              Contact Us
            </h1>
            <p className='mb-6 text-gray-700'>
              Feel free to use the form or drop us an e-mail.
              <br />
              Old-fashioned phone calls work too.
            </p>
            <div className='flex items-center gap-3 mb-2 text-gray-800'>
              <span className='material-icons'>call</span>
              <span>+91-8630687257</span>
            </div>
            <div className='flex items-center gap-3 mb-2 text-gray-800'>
              <span className='material-icons'>email</span>
              <span>Saavtika.Jain@NumericConsultants.in</span>
            </div>
            <div className='flex items-center gap-3 mb-2 text-gray-800'>
              <span className='material-icons'>linkedin</span>
              <span>DEMO</span>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <div className='md:w-3/4 flex flex-col justify-center px-8'>
            <h2 className='text-2xl font-medium mb-6 text-gray-900'>
              Thank you for your interest. Please fill out the form below for
              enquiries.
            </h2>
            <form className='flex flex-col gap-4'>
              <div className='flex flex-col md:flex-row gap-4'>
                <input
                  type='text'
                  placeholder='Name'
                  className='flex-1 rounded-full border border-[#e6efe2] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none'
                />
                <input
                  type='email'
                  placeholder='E-mail'
                  className='flex-1 rounded-full border border-[#e6efe2] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none'
                />
              </div>
              <input
                type='text'
                placeholder='Organization'
                className='rounded-full border border-[#e6efe2] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none'
              />
              <input
                type='text'
                placeholder='Subject'
                className='rounded-full border border-[#e6efe2] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none'
              />
              <textarea
                placeholder='Describe briefly'
                rows={5}
                className='rounded-3xl border border-[#e6efe2] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none resize-none'
              />
              <div className='flex justify-end mt-2'>
                <button
                  type='submit'
                  className='bg-[#183232] text-white font-semibold px-10 py-3 rounded-2xl hover:bg-[#1a4343] transition'
                >
                  Let's get talking!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
