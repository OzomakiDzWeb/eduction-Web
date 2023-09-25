import {Home,About,Contact,Coures,Navbar,Footer, Teachers} from './Component/container/index.js'

const App = () => {
  return (
    <div className='font-Poppins bg-Solitude '>
    <Home/>
    <About/>
    <Coures/>
    <Teachers/>
    <Contact/>
    <Navbar/>
    <Footer/>
    </div>
  )
}

export default App