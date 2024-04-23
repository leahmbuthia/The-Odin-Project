import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 flex  flex-col just bg-black/40'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-600'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-orange-600'>Foods</span></h1>
        </div>
        <img className='w-full max-h-[500px] object-cover ' src='https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='food'/>
        </div>  
    </div>
  )
}

export default Hero