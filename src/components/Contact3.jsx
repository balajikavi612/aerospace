import React from 'react'

const Contact3 = () => {
  return (
    <div className="mb-10 mt-20">
         <div className="container mx-auto border px-6 lg:px-12 py-8 bg-orange-500 rounded-xl flex flex-col md:flex-row gap-6 items-center ">
      <div className="md:w-1/2  text-white">
        <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold">Get in touch with us!</h1>
        <p className="mt-6  xl:text-xl text-lg md:text-sm  font-semibold">Whether you are in education, finance, transportation, retail or health care, we have a solution for you. We develop both large and small projects and our solutions are always tailored to your needs - both in terms of budget and scope.</p>
      </div>

       <div className="md:w-1/2 text-center ">
        <form>
            <div >
            <input className="px-4 py-2 text-sm md:w-[75%] w-full rounded-md" type="text" placeholder="Name"/>
            </div>
            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full rounded-md" type="text" placeholder="Company Name"/>
            </div>

            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full rounded-md" type="email" placeholder="Email"/>
            </div>

            
            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full rounded-md" type="mobile" placeholder="Mobile No"/>
            </div>

            <div className="mt-4">       
            <input className="px-4 py-2 text-sm md:w-[75%] w-full rounded-md" type="text" placeholder="Choose the product"/>
            </div>

            <div className="mt-4">       
            <textarea className="px-4 py-2 text-sm md:w-[75%] w-full rounded-md" rows="3" cols="80" placeholder="Special Note"></textarea>
            </div>
            <div className="mt-6 ">
              <button className="bg-white px-4 py-2 rounded-xl text-orange-600">Enquire Now</button>
            </div>
            
            </form>
        </div>      
      </div>
    </div>
  )
}

export default Contact3