import React from 'react'
import Navbar from '../components/Navbar'
import Contact2 from '../components/Contact2'

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mt-40 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-600">About Us</h1>
          <p className="text-lg md:text-3xl lg:text-4xl xl:text-6xl font-bold mt-6 ">Techbrain Networks is a leading <span className="text-orange-600">Software Product</span> <span className="text-pink-600">Development</span> company that specializes in <span className="text-orange-600">AI, IoT, Big </span> <span className="text-pink-600"> data,</span> <span className="text-orange-600">Blockchain, Cloud </span> <span className="text-pink-600">Computing,</span> <span className="text-orange-600">Quantum Computing and </span> <span className="text-pink-600"> Digital Marketing.</span></p>

        </div>

        {/* our page */}
        <div className="flex flex-col lg:flex-row">
          <div className="xl:w-[80%] w-full order-2  lg:order-1">
            <div className=" flex items-center gap-4 lg:mt-96">
              <h1 className=" text-[100px] md:text-[170px] xl:text-[230px] font-bold text-pink-600">O</h1>
              <p className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl font-semibold">" <span className="text-orange-600"> Vision:</span> We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.</p>
            </div>

            <div className=" flex items-center gap-4 mt-4">
              <h1 className="text-[100px] md:text-[170px] xl:text-[200px] font-bold text-pink-600">U</h1>
              <p className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl font-semibold">" <span className="text-orange-600">Mission:</span> We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.</p>

            </div>

            <div className="flex items-center  gap-4 mt-4">
              <h1 className="text-[100px] md:text-[170px] xl:text-[200px] font-bold text-pink-600">R</h1>
              <p className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl font-semibold">" <span className="text-orange-600">Passion:</span> Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless." </p>
            </div>

          </div>

          <div className="mt-96 order-1 lg:order-2">
            <img className="w-[100%] h-[100%]" src="assets/our-image.png" alt="" />
          </div>

        </div>
           
           {/* Founder page */}

           <div className="text-center mt-20">
            <img className="w-[70%] md:w-[40%] xl:w-[15%] mx-auto " src="assets/founder.png" alt=""/>
            <p className="mt-6 xl:text-xm 2xl:text-2xl md:text-lg  text-sm font-semibold">We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.</p>
            <h1 className="mt-4 xl:text-2xl text-base md:text-lg lg:text-xl font-bold text-orange-600">Ramkumar Arunachalam</h1>
            <p className="font-medium 2xl:text-sm  text-xs">Founder of Techbrain Networks</p>
           </div>
         
         {/* contact page */}

         <Contact2/>
      </div>

    </div>
  )
}

export default Aboutpage