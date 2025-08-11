'use client';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import NumerixLogo from '../../assets/numerix-logo.png';
import Image from 'next/image';
import EmailIcon from '../../assets/email-dark.png';
import LinkedIcon from '../../assets/LinkedIn-dark.png';
import PhoneIcon from '../../assets/call-dark.png';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  // const [state, handleSubmit] = useForm('mjkoyejp');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    const data = {
      name,
      email,
      organization,
      subject,
      message,
    };
    console.log(data);
    await fetch(
      'https://script.google.com/macros/s/AKfycbwRDpM0COCLFvthw9g0GaAA1sriL4V1HJ3srGtX_MlN1M6q5HAtv2BZ0Cs5IDqytrIg/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ ...data }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    alert('Thank you for your message! We will get back to you soon.');
  };

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
              <span className='material-icons'>
                <Image
                  src={PhoneIcon}
                  alt='Phone Icon'
                  className='w-auto h-[24px] object-cover'
                  height={32}
                  width={32}
                />
              </span>
              <span>+91-8630687257</span>
            </div>
            <div className='flex items-center gap-3 mb-2 text-gray-800'>
              <span className='material-icons'>
                <Image
                  src={EmailIcon}
                  alt='Email Icon'
                  className='w-auto h-[24px] object-cover'
                  height={32}
                  width={32}
                />
              </span>
              <span>Administrator@numerixconsultants.in</span>
            </div>
            <div className='flex items-center gap-3 mb-2 text-gray-800'>
              <span className='material-icons'>
                <Image
                  src={LinkedIcon}
                  alt='LinkedIn Icon'
                  className='w-auto h-[24px] object-cover'
                  height={32}
                  width={32}
                />
              </span>
              <span>
                <a
                  href='https://www.linkedin.com/company/numerix-consultants/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.linkedin.com/company/numerix-consultants/
                </a>
              </span>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <div className='md:w-3/4 flex flex-col justify-center px-8'>
            <h2 className='text-2xl font-medium mb-6 text-gray-900'>
              Thank you for your interest. Please fill out the form below for
              enquiries.
            </h2>
            <div
              className='flex flex-col gap-4'
              // action={
              //   'https://script.google.com/macros/s/AKfycbwvcdD5lOBsS6N9yorxufNTvZWxr56vKGFNROCw3C4xXfp7aCd4Kx0ivZ-TG0wqrnID/exec'
              // }
              // method='POST'
            >
              <div className='flex flex-col md:flex-row gap-4'>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                  className='flex-1 rounded-full border border-[#E9EFE5] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none text-black'
                />
                <input
                  type='email'
                  placeholder='E-mail'
                  value={email}
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  className='flex-1 rounded-full border border-[#E9EFE5] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none text-black'
                />
              </div>
              <input
                type='text'
                name='organization'
                placeholder='Organization'
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className='rounded-full border border-[#E9EFE5] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none text-black'
              />
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='rounded-full border border-[#E9EFE5] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none text-black'
              />
              <textarea
                placeholder='Describe briefly'
                rows={5}
                value={message}
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                className='rounded-3xl border border-[#E9EFE5] px-6 py-3 bg-transparent placeholder-gray-400 focus:outline-none resize-none text-black'
              />
              <div className='flex justify-center mt-2'>
                <button
                  onClick={handleSubmit}
                  // type='submit'
                  className='bg-[#183232] text-white font-semibold px-10 py-3 rounded-2xl hover:bg-[#1a4343] transition'
                >
                  Let's get talking!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
