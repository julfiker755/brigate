import React from 'react'
import { IoCallOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <section className='bg-[#292828] footer'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto pt-9 pb-3">
            <div className='grid md:grid-cols-4 grid-cols-1 justify-center gap-10 pt-8'>
              <div className='flex flex-col'>
              <h1 className='text-3xl font-bold capitalize logo text-white'>furniture.</h1>
                <p className='text-md text-gray-300 md:mt-8 md:mb-20 my-4'>625 E Franklin Ave, Minneapolis, <br/>  MN 55404, USA</p>
                <p className='text-md text-gray-300'>@ 2021 <a className='underline' href="https://mahadidev7-portfolio.web.app/">Mahadidev7</a>. All rights reserved.</p>
              </div>
              <div>
                <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>About us</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li><a className='text-md text-gray-300 capitalize' href="./">Our story</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">designer</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">craftsmanship</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">sustainability</a></li>
                  </ul>
                </div>
              </div>
              <div>
              <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>Support</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li><a className='text-md text-gray-300 capitalize' href="./">FAQ's</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">shipping & returns</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">care guide</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">warranty</a></li>
                  </ul>
                </div>
              </div>
              <div>
              <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>Contact us</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li className='flex gap-5 text-md text-gray-300 items-center'>
                        <span><a href="tel:+880 1812217803"> <IoCallOutline className='text-2xl'/> </a></span>
                        <span><a href="tel:+880 1812217803">+880 1812217803</a></span>
                    </li>
                    <li className='flex gap-5 text-md text-gray-300 items-center'>
                        <span><a href="mailto:mahadidev7@gmail.com"> <HiOutlineMail className='text-2xl' /></a></span>
                        <span><a href="mailto:mahadidev7@gmail.com">mahadidev7@gmail.com</a></span>
                    </li>
                    <li className='flex gap-5 text-md text-gray-300 items-center my-6 ml-3'>
                        <span><a href="https://www.facebook.com/mahadidev77/"> <FaFacebookF className='text-2xl' /></a></span>
                        <span><a href="https://www.instagram.com/mahadidev7/"><BsInstagram className='text-2xl'/> </a></span>
                        <span><a href="https://twitter.com/mahadidev7"><AiOutlineTwitter className='text-2xl'/></a></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=' pt-36 flex items-center justify-between'>
              <p className='capitalize flex items-center gap-4'>
                <span><a href="https://mahadidev7-portfolio.web.app/" className='hover:text-white'>Privacy policy</a></span> | 
                <span><a href="https://mahadidev7-portfolio.web.app/" className='hover:text-white'>term of usw</a></span> | 
                <span><a href="https://mahadidev7-portfolio.web.app/" className='hover:text-white'>california code</a></span>
              </p>

              <p className=''>
              This is a Portfolio Demo Website. create by <a className="underline text-white" href="https://www.linkedin.com/in/mahadidev7/">Mahadidev7</a>
                </p>
            </div>

        </div>
      </section>
      
    </>
  )
}

export default Footer