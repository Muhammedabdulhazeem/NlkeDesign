import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='relative top-[-100px] sm:px-5 px-[90px] '>
        <div>
            <div className='flex sm:flex-wrap justify-between text-[#5c5c5c] sm:px-0 px-[60px] mb-[40px]'>
                <div className='space-y-2 sm:text-[14px] sm:mb-4'>
                    <h3 className='font-bold pb-4 sm:text-[16px] sm:font-semibold text-[22px] text-black leading-none'>GET HELP</h3>
                    <p>Order Status</p>
                    <p>Shipping and Delivery</p>
                    <p>Returns</p>
                    <p>Payment Options</p>
                    <p>Contact Us</p>
                </div>
                <div className='space-y-2 sm:text-[14px] sm:mb-4'>
                    <h3 className='font-bold pb-4 sm:text-[16px] sm:font-semibold text-[22px] text-black leading-none'>ABOUT NIKE</h3>
                    <p>News</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p> Purpose</p>
                    <p>Sustainability</p>
                </div>
                <div className='space-y-2 sm:text-[14px] sm:mb-4'>
                    <h3 className='font-bold pb-4 sm:text-[16px] sm:font-semibold text-[22px] text-black leading-none'>SERVICE</h3>
                    <p>E-Commerce</p>
                    <p>News</p>
                    <p>24 Hours Shopping</p>
                    <p> Sustainability</p>
                    <p>Online Payment</p>
                </div>
            </div>

            <div className='flex justify-end space-x-8 mt-[70px]'>
                <div className='w-[25px] h-[25px] cursor-pointer'>
                    <BsLinkedin className='w-full h-full'/>
                </div>
                <div className='w-[25px] h-[25px] cursor-pointer'>
                    <BsTwitter className='w-full h-full'/>
                </div>
                <div className='w-[25px] h-[25px] cursor-pointer'>
                    <BsFacebook className='w-full h-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer