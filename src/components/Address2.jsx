import React from 'react'

const Address2 = () => {
  return (
    <div className="px-4">
        <div className="container mx-auto mt-20 grid grid-cols-1  lg:grid-cols-4 gap-4 lg:gap-20 xl:gap-32 mb-10">
      <div className=" space-y-1 xl:space-y-2 border-b border-gray-600 xl:py-6 py-4 lg:border-none">
        <h1 className="text-base lg:text-xl xl:text-3xl font-bold text-orange-600 uppercase">Address</h1>
        <ul className="xl:mt-4 py-4">
            <li className=" text-lg lg:text-sm xl:text-xl font-bold text-orange-600">India</li>
            <li className="mt-2 font-semibold lg:text-sm xl:text-lg ">Thanjavur</li>
            <li className="font-semibold lg:text-sm xl:text-lg">6/12 Papa vaikal Street Ayyampettai</li>
            <li className="font-semibold lg:text-sm xl:text-lg">Papanasam Thanjavur</li>
            <li className="font-semibold lg:text-sm xl:text-lg">Tamilnadu India.</li>
        </ul>
        <ul>
            <li className="text-base lg:text-sm xl:text-xl font-bold text-orange-600">United Kingdom</li>
            <li className="mt-2 font-semibold lg:text-sm xl:text-lg ">London</li>
            <li className="font-semibold lg:text-sm xl:text-lg">71-75 Shelton Street, Covent Garden,</li>
            <li className="font-semibold lg:text-sm xl:text-lg">London, WC2H 9JQ, United Kingdom.</li>
            
        </ul>
        <ul>
            <li className="text-base lg:text-sm xl:text-xl font-bold text-orange-600">Contact us</li>
            <li className="font-semibold lg:text-sm xl:text-lg">contact@techbrainnetworks.com</li>
        </ul>
      </div>
      

      <div>
            <h1 className="text-base lg:text-xl xl:text-3xl font-bold text-orange-600 mt-4 lg:mt-4 uppercase">Industries</h1>
            <ul className="space-y-3 mt-4">
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Aerospace</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Agriculture</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Automotive</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Chemical</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Defence Technology</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Education</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Energy & Utilities</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg text-nowrap">Entertainment and Media</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Finance</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Food Technology</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Healthcare</li>
                <li className="text-base font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Infrastructure</li>
            </ul>
        </div>

        <div className=" border-b border-gray-600 py-4 lg:border-none">
            <ul className="space-y-3 mt-10 lg:mt-12 xl:mt-14">
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Logistics</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Manufacturing</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Ocean Technology</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Oil and Gas</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Pharmaceutical</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Retail</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Sports</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Technology</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Telecommunication</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Textile</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Transportation</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Travel</li>

            </ul>
        </div>

        <div>
        <h1 className="text-base lg:text-xl xl:text-3xl font-bold text-orange-600 mt-4 lg:mt-4 uppercase">Services</h1>
            <ul className="space-y-4 mt-2 lg:mt-4 xl:mt-4">
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg text-nowrap">Software Development</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg text-nowrap">Hardware Engineering</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg">Product Design</li>
                <li className="font-semibold cursor-pointer hover:text-orange-600 lg:text-sm xl:text-lg text-nowrap">Research & Development</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Address2