import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { FilterData } from '../data'
import { ItemCard } from './ui/Card'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { useModal } from '../hooks/useModal'

const Filters = ({images}) => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29,30]
    const [trans, setTrans] = useState(0)
    const [track, setTrack] = useState('')
    const [allowPrevClick, setAllowPrevClick] = useState(true)
    const [allowNextClick, setAllowNextClick] = useState(true)
    const { showModal } = useModal()

    console.log(trans)

    const handlePrev = () => {
        if(trans > 280 ) {
            setTrans(prevTrans => prevTrans - 280) 
            setAllowNextClick(true)
        } else {
            setTrans(0)
            setAllowPrevClick(false)
        }
    }
    const handleNext = () => {
        if(trans < 1320) {
            setTrans(prevTrans => prevTrans + 280) 
            setAllowPrevClick(true)
        } else {
            setTrans(1500)
            setAllowNextClick(false)
        }
    }



    return (
        <div className=' flex justify-center bg-white overflow-hidden'>
            <div className=''>
                <div className=' relative overflow-hidden'>

                    {/* {trans !== 0 && (<div className='absolute top-0 bottom-0 left-0 w-[43px] opacity-[0.7] bg-white z-[10]'></div>)}
                    {trans !== 5500 && (<div className='absolute top-0 bottom-0 right-0 w-[43px] opacity-[0.7] bg-white z-[10]'></div>)} */}

                    {/* {trans !== 0 && (<div className='absolute left-0 top-0 bottom-0 h-[74px] flex items-center z-[300]'>
                        <div onClick={handlePrev} className='h-[30px] w-[30px] border-2 border-gray-400 relative top-[-7px] cursor-pointer z-[400] rounded-[50%] flex items-center justify-center bg-white'>
                            <svg viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible" }}><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                        </div>
                    </div>)} */}

                    <div className='w-screen sm:px-0 px-[100px] flex relative overflow-hidden '>
                        <div style={{ transform: `translateX(-${trans}px)`}} className={`flex space-x-[40px] pr-[7px] transition-all duration-[2000]`}>
                            {images.map((image, index) => (
                                <div key={index} onClick={() => setTrack(index)} className='cursor-pointer shrink-0 '>
                                    <ItemCard price={image.price} src={image.src} />
                                    <p className='font-semibold text-[22px]'>Nike Air Force 1 React</p>
                                    <p className='font-semibold text-[22px] text-[#cfcfcf]'>Men's Shoe</p>
                                    {/* <span 
                                        className={index === track? ` text-[14px] active-link leading-[16px] font-[600] mt-[7px] pb-[8px]` : `text-[#717171] text-[14px] leading-[16px] font-[600] mt-[7px] pb-[8px]`}
                                    >{filter.text}</span> */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* {trans !== 5500 && (<div className='absolute right-0 top-0 bottom-0 h-[74px] z-[300] flex items-center'>
                        <div onClick={handleNext} className='h-[30px] w-[30px] relative left-[-10px] top-[-7px] border-2 border-gray-400 cursor-pointer rounded-[50%] flex items-center justify-center bg-white'>
                            <svg viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible" }}><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
                        </div>
                    </div>)} */}
                </div>

                <div className='flex sm:mr-[20px] justify-end mr-[100px] text-white space-x-3 mt-3'>
                    <div style={{opacity: allowPrevClick? "1" : "0.5"}} onClick={handlePrev} className='flex justify-center items-center h-[45px] w-[45px] bg-[#000] rounded-[50%]'>
                        <div className="">
                            <HiOutlineArrowLeft />
                        </div>
                    </div>

                    <div style={{opacity: allowNextClick? "1" : "0.5"}} onClick={handleNext} className='flex justify-center items-center h-[45px] w-[45px] bg-[#000] rounded-[50%]'>
                        <div className=''>
                            <HiOutlineArrowRight />
                        </div>
                    </div>
                </div>

                {/* <div className='flex items-center h-[40px] w-[95px] border relative left-[-3px] border-gray-400 rounded-[12px] ml-[10px] px-[10px] py-[7px]'>
                    <div className='space-x-[10px] flex items-center'>
                        <div>
                            <svg viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: "block", height: "14px", width: "14px", fill: "currentColor" }}
                                aria-hidden="true" role="presentation" focusable="false">
                                <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 
                                1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 
                                2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                        </div>
                        <span>Filter</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Filters
