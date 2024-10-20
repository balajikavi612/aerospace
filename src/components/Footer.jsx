import React from 'react'

const Footer = () => {
  return (
    <div className="container mx-auto">
        <div className="border-t border-blue-300">

        </div>
        <div className="flex justify-center mt-6 ">
            <h1 className="text-xl lg:text-5xl font-bold text-center text-blue-600">TECHBRAIN NETWORKS</h1>
        </div>

        <div className="text-center flex justify-center gap-2 mt-2 lg:mt-6">
        <i className='bx bxl-linkedin-square text-2xl lg:text-6xl hover:text-blue-600'></i>
        <i className='bx bxl-facebook-square text-2xl lg:text-6xl hover:text-blue-600' ></i>
        <i className='bx bxl-twitter text-2xl lg:text-6xl hover:text-blue-600'></i>
        <i className='bx bxl-instagram text-2xl lg:text-6xl hover:text-blue-600' ></i>
        </div>

        <ul className="hidden lg:flex justify-center gap-6 mt-6 ">
            <li className="text-xl border-r-2 border-blue-600 px-4 font-semibold hover:text-blue-600 cursor-pointer">Home</li>
            <li className="text-xl border-r-2 border-blue-600 px-4 font-semibold hover:text-blue-600 cursor-pointer">About</li>
            <li className="text-xl border-r-2 border-blue-600 px-4 font-semibold hover:text-blue-600 cursor-pointer">Services</li>
            <li className="text-xl border-r-2 border-blue-600 px-4 font-semibold hover:text-blue-600 cursor-pointer">Industries</li>
            <li className="text-xl border-r-2 border-blue-600 px-4 font-semibold hover:text-blue-600 cursor-pointer">Contact Us</li>
            <li className="text-xl border-r-2 border-blue-600 px-4 font-semibold hover:text-blue-600 cursor-pointer">Privacy</li>
            <li className="text-xl font-semibold  hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
        </ul>

        <div className="flex justify-center mt-2 lg:mt-6 text-center font-medium lg:text-xl ">
            <p>© 2024 Techbrain Networks. All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer