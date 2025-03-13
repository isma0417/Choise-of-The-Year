import React from 'react'
import Landing from '../../components/Landing/Landing'
import Partners from '../../components/Partners/Partners'
import About from '../../components/About/About'
import Faq from '../../components/Faq/Faq'
import Laureates from '../../components/Laureates/Laureates'

function Main() {
  return (
    <div className='text-3xl font-bold h-auto mx-auto'>
        <Landing/>
        <About/>
        <div className="w-[85%] mx-auto h-[2px] bg-gray-300 mt-8"></div>
        <Partners/>
        <div className="w-[85%] mx-auto h-[2px] bg-gray-300 mt-8 m-6"></div>
        <Faq/>
        <div className="w-[85%] mx-auto h-[2px] bg-gray-300 mt-8 m-6"></div>
        <Laureates/>
    </div>
  )
}

export default Main