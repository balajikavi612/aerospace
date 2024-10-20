import React from 'react'
import Navbar from '../components/Navbar'

const Aboutpage = () => {
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto">
        <div className="text-center mt-40 ">
            <h1 className="text-7xl font-bold text-orange-600">About Us</h1>
            <p className="text-6xl font-bold mt-6 ">Techbrain Networks is a leading <span className="text-orange-600">Software Product</span> <span className="text-pink-600">Development</span> company that specializes in <span className="text-orange-600">AI, IoT, Big </span> <span className="text-pink-600"> data,</span> <span className="text-orange-600">Blockchain, Cloud </span> <span className="text-pink-600">Computing,</span> <span className="text-orange-600">Quantum Computing and </span> <span className="text-pink-600"> Digital Marketing.</span></p>
        </div>
        </div>
        
    </div>
  )
}

export default Aboutpage