import React, { useState } from 'react'
import { SiNike } from 'react-icons/si'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { SlMenu } from 'react-icons/sl'


const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const hello = () => {
        return(
            console.log('btn clicked')
        )
    }

  return (
    <div className=''>
        <div className='sm:hidden flex justify-between items-center text-white pt-4'>
            <div className='h-[60px] w-[70px]'>
                <SiNike className='h-full w-full '/>
            </div>

            <div className='flex items-center space-x-12'>
                <p className='hover:border-b-2 pb-2 cursor-pointer'>Popular</p>
                <p className='hover:border-b-2 pb-2 cursor-pointer'>Men</p>
                <p className='hover:border-b-2 pb-2 cursor-pointer'>Women</p>
                <p className='hover:border-b-2 pb-2 cursor-pointer'>Kids</p>
                <p className='hover:border-b-2 pb-2 cursor-pointer'>Collection</p>
            </div>

            <div className='flex items-center space-x-6'>
                <div className='w-[25px] h-[25px] hover:scale-125 cursor-pointer'>
                    <CiSearch className='w-full h-full' />
                </div>
                <div className='w-[25px] h-[25px] hover:scale-125 cursor-pointer'>
                    <AiOutlineHeart className='w-full h-full' />
                </div>
                <div className='w-[25px] h-[25px] hover:scale-125 cursor-pointer'>
                    <AiOutlineShopping className='w-full h-full' />
                </div>
            </div>
        </div>

        <div className='hidden relative sm:flex justify-between items-center py-2'>
            <div className='h-[60px] w-[70px] cursor-pointer'>
                <SiNike className='h-full w-full '/>
            </div>

            <div onClick={() => setShowNav(true)} className='h-[40px] w-[30px] cursor-pointer'>
                <SlMenu className='w-full h-full' />
            </div>
        </div>

        {showNav && (<div className='fixed top-0 h-full left-0 w-full bg-[#232323'>
            <div onClick={() => setShowNav(false)} className='w-full h-full'></div>
            <div 
                style={{transform: showNav? "translateX(0)" : "translateX(100%)"}} 
                className='absolute transition-all duration-1000 top-0 right-0 z-50 bg-[#323232] p-[30px]'
            >
                <div className='font-semibold text-[20px] text-center space-y-1 mb-2'>
                    <p className='hover:border-b-2 pb-2 cursor-pointer'>Popular</p>
                    <p className='hover:border-b-2 pb-2 cursor-pointer'>Men</p>
                    <p className='hover:border-b-2 pb-2 cursor-pointer'>Women</p>
                    <p className='hover:border-b-2 pb-2 cursor-pointer'>Kids</p>
                    <p className='hover:border-b-2 pb-2 cursor-pointer'>Collection</p>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[25px] h-[25px] cursor-pointer'>
                        <CiSearch className='w-full h-full' />
                    </div>
                    <div className='w-[25px] h-[25px] cursor-pointer'>
                        <AiOutlineHeart className='w-full h-full' />
                    </div>
                    <div className='w-[25px] h-[25px] cursor-pointer'>
                        <AiOutlineShopping className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>)}
    </div>
  )
}

export default Navbar