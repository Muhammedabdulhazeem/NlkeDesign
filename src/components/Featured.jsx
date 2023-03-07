import React from 'react'
import { Button } from './ui/Button'

const Featured = () => {
  return (
    <section className='sm:px-5 px-[90px] mb-[140px] relative overflow-hidden'>
        <div>
          <h3 className='font-extrabold sm:font-bold sm:text-[30px] text-[35px] leading-[47px] mb-[40px]'>Featured Shoes</h3>
          <div className='flex relative justify-end sm:px-0 bg-[#cfcfcf] px-[90px] text-white'>
              <div className='sm:top-0 sm:left-10 z-10 absolute top-[60px] left-[150px]  pt-[40px]'>
                <div className=''>
                  <h1 className='font-extrabold text-[75px] sm:text-[55px] leading-1'>Air Force 1</h1>
                  <p className='font-medium text-[23px] leading-[32px] sm:mb-[22px] sm:mt-[5px] mt-[10px] mb-[35px]'>Born a legend</p>
                  <Button>SHOP</Button>
                </div>
              </div>

              <div className='sm:w-[283px] z-0 sm:h-[355px] w-[883px] h-[510px] relative'>
                  <img className='w-full h-full' src="/assets/images/shoe-leg.png" alt="shoe" />
              </div>
          </div>
        </div>
    </section>
  )
}

export default Featured