import React from 'react'

const Categories = ({icon,category}) => {
  return (
    <div className='bg-white flex flex-col items-center justify-center rounded-md gap-4 p-8'>
     <div className='text-4xl text-Teal'>
          {icon}
     </div>
     <div >
          {category}
     </div>
     <a className='text-sm text-gray' href={category}>View More</a>
    </div>
  )
}

export default Categories