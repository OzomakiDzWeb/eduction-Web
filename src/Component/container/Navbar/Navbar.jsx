import {HiMenuAlt1,HiX} from 'react-icons/hi'
import NavLink from './NavLink'
import {navLinks} from '../../../Data'
import { useEffect, useState } from 'react'
import MobileNavLink from './MobileNavLink'
const Navbar = () => {
  const [toggol,setToggle]=useState(false)
  const [active,setactive]=useState(null)
  useEffect(()=>{
    const scrollActive =()=>{
      setactive(window.scrollY>20)
    }
    window.addEventListener("scroll",scrollActive)
    return ()=>window.removeEventListener("scroll",scrollActive)
  },[active])
  return (
    <div className={`${active?'shadow-lg bg-Solitude':''} fixed w-full top-0 left-0 z-20  `}>
      <div className='container py-4 mx-auto flex items-center justify-between px-2'>
        <div className='flex  items-center gap-4'>
          <HiMenuAlt1
             onClick={()=>setToggle(!toggol)} 
            className="text-3xl sm:hidden cursor-pointer"/>
          <div className='text-xl text-Teal uppercase tracking-wide font-bold '>
           Education
          </div>
        </div>
        <div className='sm:flex items-center hidden'>
          {navLinks.map((navlik,idx)=>{
            return <NavLink key={idx} {...navlik}/>
          })}
        </div>
        <button 
        className='py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray'>
          Sgin Un
        </button>
        {toggol && (<div className='fixed h-full w-96 top-0 left-0 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8  '>
          {navLinks.map((link,idx)=>{
          return  <MobileNavLink 
                    key={idx} 
                    {...link}
                    setToggle={setToggle}/>
          })}
          <HiX className="absolute right-12 top-12 text-3xl cursor-pointer"
               onClick={()=>setToggle(!toggol)}Hix/>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar