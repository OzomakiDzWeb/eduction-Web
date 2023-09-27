import React from 'react'
import {motion} from 'framer-motion'
const Categories = ({icon,category}) => {
  const item={
    hidden:{y:20,opacity:0},
    visible:{y:0,opacity:1}
  }
  return (
    <motion.div
    variants={item}
    whileHover={{scale:1.1}}
     className='bg-white flex flex-col items-center justify-center rounded-md gap-4 p-8'>
     <div className='text-4xl text-Teal'>
          {icon}
     </div>
     <div >
          {category}
     </div>
     <a className='text-sm text-gray' href={category}>View More</a>
    </motion.div>
  )
}

export default Categories