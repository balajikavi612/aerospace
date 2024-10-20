import React from 'react'

const Hero = () => {
  return (
    
    <div className="min-h-[600px] bg-black/40 "  style={{ backgroundImage: "url(src/assets/banner.avif)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "100%", width: "100%" }}>
         <div className='text-center py-52 bg-black/50'>
        <h1 className="text-2xl font-semibold text-white uppercase">Techbrain Networks</h1>  
        <p className='text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold mt-4'>Advanced Aerospace Solutions for Precision and Performanc</p>
        <button className="bg-blue-600 px-8 py-2 text-white rounded-full mt-4 hover:opacity-90">Get started</button>
        </div>

    </div>

  )
}

export default Hero 