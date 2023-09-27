import {motion} from 'framer-motion'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
const Footer = () => {
  return (
    <motion.div 
    initial={{height:0}}
    whileInView={{height:'auto'}}
    transition={{duration:1}}
     className='bg-Teal p-10'>
      <div className='grid md:grid-cols-4 sm:grid-cols-6 xs:grid-cols-2 grid-cols-1 place-items-start  gap-8 text-white'>
        <div>
          <div className='font bold mb-6'>Get Stared</div>
          <p className='text-sm leading-7'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cupiditate facere eveniet. Nemo, debitis distinctio minima ratione rerum dolores neque vero a, cumque aliquam dicta rem provident, quibusdam error perspiciatis.
          </p>
        </div>
        <div>
          <div className='font-bold mb-6'>Services</div>
            <div className='flex flex-col gap-4'>
               <a href='' className='text-sm hover:underline'>Web Design</a>
               <a href='' className='text-sm hover:underline'>Web Development</a>
               <a href='' className='text-sm hover:underline'>Science</a>
               <a href='' className='text-sm hover:underline'>Digital Marketing</a>
             </div>
          </div>
          <div>
            <div className='font-bold mb-6'>Company</div>
            <div className='flex flex-col gap-4'>
               <a href='' className='text-sm hover:underline'>Privacy Policy</a>
               <a href='' className='text-sm hover:underline'>Sitemap</a>
               <a href='' className='text-sm hover:underline'>Careers</a>
               <a href='' className='text-sm hover:underline'>Termes & Condition</a>
             </div>
          </div>
           <div>
            <div className='font-bold mb-6'>Fllow us</div>
            <div className='flex flex-col gap-4'>
               <div className='tex-sm mb-4'>AyoubBouslama1994@gmail.com</div>
               <div className='tex-sm mb-4'>0794949451</div>
               <div className='flex justify-between'>
                <a href='' className='hover:scale-110 text-xl'><BsFacebook/></a>
                <a href='' className='hover:scale-110 text-xl'><BsInstagram/></a>
                <a href='' className='hover:scale-110 text-xl'><BsTwitter/></a>
               </div>
             </div>
          </div>

      </div>

    </motion.div>
  )
}

export default Footer