import {categories} from "../../Data"
import {courses} from "../../Data"
import Categories from "../Categories"
import Coureses from "./courses/Coureses"



const coures = () => {
  return (
    <div className='section' id='courses'>
      <div className='text-center'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Our Top <span className='text-Teal'>categories</span>
        </div>
        <p className='text:sm text-gray leading-7 max-w-[700px] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo consequuntur magni possimus nulla, velit libero voluptatem quibusdam laudantium impedit vero dolore molestiae quasi sint alias similique neque minus. </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 gap-8">
        {categories.map(category=>{
          return <Categories key={category.id} {...category}/>
        })}
      </div>
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