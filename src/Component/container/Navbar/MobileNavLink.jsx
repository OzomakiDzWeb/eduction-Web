import { Link } from "react-scroll"
const MobileNavLink = ({setToggle,href,link}) => {
  return (
    <li className='list-none cursor-pointer mr-8'>
     <Link 
       to={href} 
       spy={true} 
       smooth={true} 
       duration={500} 
       offset={-50} 
       className='font-bold transition-all duration-300'
       onClick={(p)=>setToggle(!p)} >
          {link}
     </Link>
    </li>
  )
}

export default MobileNavLink