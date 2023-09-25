import React from 'react'
import hero from '../../assets/hero.png'
import {logos} from '../../Data'
const Home = () => {
  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div>
          <div className='font-bold text-xs text-Teal mb-4'>
            {''}
            your e-learning partner
          </div>
          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
            This is <br/>The New way<br/>to learn online
          </div>
          <p className='text-sm leading-7 text-gray max-w-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quidem similique iure corrupti? Vero tempora reiciendis consectetur dolorum minus, totam magni non, dolorem voluptatum sequi nesciunt rem aperiam molestiae. Autem.</p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm'>
              get Started
            </button>
            <button className='px-6 py-3 border border-solid border-gray rounded-lg text-sm'>Discover</button>
          </div>
        </div>
        <div className='md:w-[60%]'>
          <img src={hero} alt=''/>
        </div>
      </div>
      <div>
        <p className='text-center text-xl'> we collaborate with {''}
          <span className='text-Teal'>
            100+ leading universities and companise
          </span>
        </p>
        <div className='flex items-center justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo,idx)=>(
            <div key={idx} className='w-28'>
              <img src={logo} alt='' className='w-full object-cover'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home