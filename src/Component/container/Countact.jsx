import {motion} from 'framer-motion'
const Countact = () => {
  return (
    <div className='section' id='contact'>
      <div className='text-center max-w-[600px] mx-auto'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
           Subscribe NewsLetter
        </div>
        <p className='text-sm leading-7 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla veritatis delectus eius consectetur neque voluptatum, rem officia, unde aut culpa facere laboriosam quam, ut ipsam deleniti hic? Autem nostrum accusamus repudiandae ex corrupti quam porro veritatis debitis odit quisquam qui fugit, laudantium dicta ipsa suscipit libero quasi natus nemo
        </p>
        <motion.form
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.3}}
        className='mt-5'>
          <input type='text'
                  placeholder='Entre your Email Address'
                  className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60'/>
          <button className='text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold '>Subscribe</button>        
        </motion.form>
      </div>
    </div>
  )
}

export default Countact