import React from 'react'
import { shoes } from '../data/shoes'
import Slider from './Slider'

const Popular = () => {
  return (
    <section className='sm:px-5 px-[90px] mb-[70px] '>
        <div>
            <h3 className='font-extrabold sm:font-bold sm:text-[30px] text-[35px] leading-[47px] mb-[40px]'>Popular</h3>

            <div>
                <Slider images={shoes}/>
            </div>
        </div>
    </section>
  )
}

export default Popular