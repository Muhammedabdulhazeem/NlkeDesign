import React from 'react'
import { Button } from './ui/Button'

const JoinUs = () => {
  return (
    <section className='bg-black text-white sm:pl-[20px] pl-[90px] relative mb-[100px]'>
        <div className='relative flex items-center justify-between'>
            <div className='sm:relative sm:top-[-30px] sm:left-10'>
                <h1 className='font-bold text-[65px] sm:text-[30px] leading-none sm:mb-[30px] mb-[60px] '>Start Your Exciting <br /> Journey With Nike</h1>

                <Button>Join Us</Button>
            </div>

            <div className='sm:w-[300px] sm:h-[400px] w-[590px] h-[600px] sm:-top-[10px] relative top-[-33px] z-10'>
                <img className='h-full w-full' src="/assets/images/shoe-leg2.png" alt="shoe" />
            </div>
        </div>
    </section>
  )
}

export default JoinUs