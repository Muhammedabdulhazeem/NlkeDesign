import { motion } from 'framer-motion'
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
import Navbar from './Navbar'
import { Button } from './ui/Button'

const buttonVariant = {
    final: {
        scale: 1.1,
        transition: {
            duration: 0.5,
            repeatType: "mirror",
            repeat: Infinity,
        }
    }
}
const arrowVariants = {
    final: {
        y: 4,
        transition: {
            duration: 0.5,
            repeatType: "mirror",
            repeat: Infinity,
        },
    },
    
}

const Hero = () => {
  return (
    <section className='relative sm:px-5 hero-bg text-white px-[90px] overflow-hidden'>
        <div className='sm:hidden absolute z-10 bottom-0 right-0 w-[900px] h-[800px]'>
            <img className='h-full w-full' src="/assets/icons/lines1.svg" alt="lines" />
        </div>
        <div className='absolute z-10 top-[-300px] left-[-500px] w-[900px] h-[800px]'>
            <img className='h-full w-full' src="/assets/icons/lines1.svg" alt="lines" />
        </div>
        <div className='relative z-20 pb-[80px]'>
            <Navbar />

            <div className='my-[70px]  flex items-center'>
                <div>
                    <h1 className='font-extrabold text-[80px] sm:text-[60px] sm:leading-tight leading-1 tracking-tighter '>Nike Air Max 270</h1>

                    <p className='sm:hidden mb-[50px] mt-[20px] text-[24px] leading-[38px]'>Experience the power of Nike Air <br /> Max 270 with all the thing to help <br /> get ready for your day.</p>
                    <p className='sm:text-[18px] sm:leading-normal mb-[50px] mt-[20px] text-[24px] leading-[38px]'>Experience the power of Nike <br /> Air Max 270 with all the thing <br /> to help get ready for your day.</p>

                    <Button>SHOP NOW</Button>
                </div>

                <div className='sm:hidden h-[575px] w-[575px] '>
                    <img className='w-full h-full' src="/assets/images/shoe1.png" alt="shoe" />
                </div>
            </div>

            <div className='flex justify-center'>
                <motion.div 
                    className='flex justify-center items-center p-5 border-2 rounded-lg '
                    variants={buttonVariant}
                    animate="final"
                >
                    <motion.div
                        variants={arrowVariants}
                        animate="final"
                    >
                        <BsArrowDown />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero