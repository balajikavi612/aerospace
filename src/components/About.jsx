import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
        <div className="text-3xl lg:text-5xl text-center font-bold flex justify-center py-14 ">
            <h1 className="border-b-4 border-blue-600 py-2 w-[150px] lg:w-56 ">About Us</h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 ">

            <img className="2xl:w-[1600px]  lg:w-[400px] rounded-xl" src="src/assets/about-image.avif" alt=""/>
            <p className="text-base md:text-xl  2xl:text-2xl font-semibold ">
                Welcome to Techbrain Networks Space 
                Technology division, where innovation 
                meets the cosmos. We are pioneers in 
                crafting solutions that redefine the 
                boundaries of space exploration. With a 
                relentless commitment to pushing the 
                limits of technology, our team of experts 
                drives progress in satellite command, 
                orbital dynamics simulation,and 
                spacecraft telemetry analysis.
            </p>
        </div>
    </div>
  )
}

export default About