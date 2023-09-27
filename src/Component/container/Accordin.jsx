import React, { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import {motion,AnimatePresence} from 'framer-motion'
const Accordin = ({title,id}) => {
     const [activeIndex,setactivIndex]=useState(null)
     const handelClick=(id)=>{
          setactivIndex(id===activeIndex?null:id)
     }
  return (
    <div className='pb-8'>
     <div className='flex items-center justify-between'>
        <div className='sm:text-xl text-base font-bold'>
          {title}
       </div>
     <BsChevronDown 
         className={`${id===activeIndex?'rotate-180':'rotate-0'} cursor-pointer transition-all duration-300`} 
         onClick={()=>handelClick(id)}/>
     </div>
     <AnimatePresence>
          {id===activeIndex &&
           (<motion.div
               initial={{height:0}} 
               animate={{height:'auto'}} 
               exit={{height:0}} 
               transition={{duration:0.3}} 
               style={{overflow:"hidden"}} 
               className='pt-4'>
           <p className='text-sm leading-7 text-gray'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, libero modi. Ut eum in iure saepe quidem necessitatibus beatae et error magnam, veniam molestiae qui facere quis veritatis eligendi totam, maiores delectus dicta placeat cupiditate quisquam consequatur. Optio nostrum, quos, ipsa consequatur velit fugiat eum sequi rem voluptatem nesciunt ut!
          </p>
          </motion.div>)}
     </AnimatePresence>
    </div>
  )
}

export default Accordin