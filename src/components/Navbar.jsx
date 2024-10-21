import React,{useState} from 'react'
import { Link } from "react-router-dom";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
     const[nav,setNav]=useState(false)

     const handleNav=()=>{
        setNav(!nav)
     }

    return (
        <nav className="shadow-lg sticky top-0 z-50  px-4 bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 ">
                <div className="text-base lg:text-xl font-bold text-center">
                    <a href="#">Techbrain Network</a>
                    <p>Aerospace</p>
                </div>

                <div>
                    <ul className="hidden lg:flex gap-6">
                        <li><Link className="hover:border-b-2 border-blue-600 font-semibold " to="/">Home</Link></li>
                        <li><Link className="hover:border-b-2 border-blue-600 font-semibold " to="/about">About</Link></li>
                        <li><Link className="hover:border-b-2 border-blue-600 font-semibold " to="/products">Products</Link></li>
                        <li><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Blog</a></li>
                        <li><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Contact</a></li>

                    </ul>
                    
                    <div onClick={handleNav} className='block lg:hidden'>
                        {!nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
                        
                    </div>

                    <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-orange-500 ease-in-out duration-500':'fixed left-[-100%]'}>
                    <ul className="pt-4 uppercase">
                        <li className="p-4 border-b border-gray-600"><Link className="hover:border-b-2 border-blue-600 font-semibold " to="/">Home</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link className="hover:border-b-2 border-blue-600 font-semibold " to="/about">About</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link className="hover:border-b-2 border-blue-600 font-semibold " to="/products">Products</Link></li>
                        <li className="p-4 border-b border-gray-600"><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Blog</a></li>
                        <li className="p-4"><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Contact</a></li>

                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar