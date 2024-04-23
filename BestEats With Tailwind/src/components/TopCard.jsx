import React from 'react'

const TopCard = () => {
    return (
        <div className='max-w-[1040px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative'>
                {/* overly */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                   <p className='font-bold px-2 pt-4 text-2xl'>Sun's Out, BOGO Out </p>
                    <p className='font-bold text-2xl px-2 pt-4'>Through 8/26</p>
                    <button className=' border-white px-3 rounded-full bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* overly */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                   
                   <p className='font-bold px-2 pt-4 text-2xl'>Good indian food</p>
                    <p className='font-bold text-2xl px-2 pt-4'>Through 8/26</p>
                    <button className=' border-white px-3 rounded-full bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* overly */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold px-2 pt-4 text-2xl'>Great taste We deriver  </p>
                    <p className='font-bold text-2xl px-2 pt-4'>Added Daily</p>
                    <button className=' border-white px-3 rounded-full bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

        </div>
    )
}

export default TopCard