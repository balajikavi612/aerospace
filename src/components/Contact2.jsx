import React from 'react'

const Contact2 = () => {
  return (
    <div className="mb-10 px-4">
        
        <div className="text-3xl lg:text-5xl text-center font-bold flex  justify-center py-10 lg:py-14 lg:mt-10 ">
        <h1 className="border-b-4 border-blue-600 py-2 w-[150px] lg:w-44 ">Contact</h1>
      </div>
       <div className="container mx-auto border px-6 lg:px-12 py-8 bg-blue-400 rounded-xl flex flex-col md:flex-row gap-6 items-center ">
      <div className="md:w-1/2  text-white">
        <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold">Get in touch with us!</h1>
        <p className="mt-6  xl:text-xl text-lg md:text-base  font-semibold">Get ready to explore the cosmos with us! Whether you're in 
            satellite technology, orbital dynamics, spacecraft telemetry,
             or any aspect of space exploration, we have a solution for
             you. We specialize in developing projects of all sizes, 
             customizing solutions to meet your space technology needs, 
             ensuring they align seamlessly with your budget and scope.</p>
      </div>

       <div className="md:w-1/2 text-center ">
        <form>
            <div >
            <input className="px-4 py-2 text-sm md:w-[75%] w-full" type="text" placeholder="Name"/>
            </div>
            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full" type="text" placeholder="Company Name"/>
            </div>

            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full" type="email" placeholder="Email"/>
            </div>

            
            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full" type="mobile" placeholder="Mobile No"/>
            </div>

            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full" type="text" placeholder="Choose the product"/>
            </div>

            <div className="mt-4">       
            <textarea className="px-4 py-2 text-sm md:w-[75%] w-full" rows="3" cols="80" placeholder="Special Note"></textarea>
            </div>
            <div className="mt-6 ">
              <button className="bg-white px-4 py-2 rounded-xl text-blue-600">Enquire Now</button>
            </div>
            
            </form>
        </div>      
      </div>
    </div>
  )
}

export default Contact2