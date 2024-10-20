import React from 'react'

const Contact = () => {
  return (
    <div className="px-4">
       <div className="text-3xl lg:text-5xl text-center font-bold flex justify-center py-10 lg:py-14 lg:mt-10 ">
            <h1 className="border-b-4 border-blue-600 py-2 w-[150px] lg:w-44 ">Contact</h1>
        </div>
       
       <div className="container mx-auto my-10 md:my-20 w-full lg:w-1/3  border border-blue-500 bg-white">
       <div className="p-5 space-y-5 shadow-xl">
        <h4 className="text-center text-3xl">Contact Us</h4>

        <form>
            <div className="grid grid-cols-2  gap-5">
                <input type="text" className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-600 shadow-lg" placeholder="First Name"/>
                <input type="text" className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-600 shadow-lg" placeholder="Last Name"/>
                <input type="text" className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-600 col-span-2 shadow-lg" placeholder="Email Address"/>
                <input type="text" className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-600 col-span-2 shadow-lg" placeholder="Phone No"/>
                <textarea rows="5" cols="10" className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-600 col-span-2 shadow-lg" placeholder="Write your message"></textarea>
                
            </div>
               
            <input type="submit" value="Send Message" className="focus:outline-none mt-5 bg-blue-600 px-4 py-2 text-white font-bold w-full"/>


        </form>

       </div>

       </div>

    </div>
  )
}

export default Contact