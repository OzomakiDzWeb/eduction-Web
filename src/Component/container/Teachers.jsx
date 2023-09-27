import React from 'react'
import techer from '../../assets/teacher1.png'
import techer2 from '../../assets/teacher2.png'
import {accordions} from '../../Data'
import Accordin from './Accordin'
const Teachers = () => {
  return (
    <div className='section' id='teacher'>
      <div className='grid sm:grid-cols-2 place-items-center gap-8'>
        <div className='p-4 md:w-3/4 sm:row-start-1'>
          <img src={techer} alt=''/>
        </div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.825rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>An Instructor</span><br/>of Our Platform
          </div>
          <p className='text-s leading-7 text-gray mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ullam magnam aut facere, quisquam aliquid quaerat libero dolore unde reiciendis illum voluptatem. Atque voluptate deleniti error sed ea, facere fugiat!
          </p>
          <button className='rounded-lg py-3 px-4 bg-Teal tex-sm font-bold text-white'>
            Start Teaching
          </button>
        </div>
        
      </div>
       <div className='grid sm:grid-cols-2 place-items-center gap-8'>
          
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.825rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>An Instructor</span><br/>of Our Platform
          </div>
          <p className='text-s leading-7 text-gray mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ullam magnam aut facere, quisquam aliquid quaerat libero dolore unde reiciendis illum voluptatem. Atque voluptate deleniti error sed ea, facere fugiat!
          </p>
          <button className='rounded-lg py-3 px-4 bg-Teal tex-sm font-bold text-white'>
            Get Started
          </button>
        </div>
        <div className='p-4 md:w-3/4 '>
          <img src={techer2} alt=''/>
         </div>
        </div>
        <div className='text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]'>
          Frequently <span className='text-Teal'>Asked Questions</span>
        </div>
        <div>
          {accordions.map(accor=>{
            return <Accordin key={accor.id} {...accor}/>
          })}
        </div>
    </div>
  )
}

export default Teachers