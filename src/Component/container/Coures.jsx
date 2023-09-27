import {categories} from "../../Data"
import {courses} from "../../Data"
import Categories from "../Categories"
import Coureses from "./courses/Coureses"
import {motion} from 'framer-motion'


const coures = () => {
  const container={
     hidden:{
      opacity:0,
      scale:0
     },
     visible:{
       opacity:1,
      scale:1,
      transition:{
        delayChildren:0.3,
        staggerChildren:0.2
      }
     }
  }
  return (
    <div className='section' id='courses'>
      <div className='text-center'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Our Top <span className='text-Teal'>categories</span>
        </div>
        <p className='text:sm text-gray leading-7 max-w-[700px] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo consequuntur magni possimus nulla, velit libero voluptatem quibusdam laudantium impedit vero dolore molestiae quasi sint alias similique neque minus. </p>
      </div>
      <motion.div
        variants={container} 
        initial="hidden"
        whileInView='visible'
        className="grid  sm:grid-cols-2 md:grid-cols-4 mt-12 gap-8">
        {categories.map(category=>{
          return <Categories key={category.id} {...category}/>
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Popular Coureses</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map(coures=>{
            return <Coureses key={coures.id} {...coures}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default coures