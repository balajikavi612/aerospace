import React from 'react'

const Address = () => {
  return (
    <div className="mb-10 px-4">
         <div className="text-3xl lg:text-5xl text-center font-bold flex  justify-center py-10 lg:py-14 lg:mt-10 ">
        <h1 className="border-b-4 border-blue-600 py-2 w-[150px] lg:w-44 ">Address</h1>
      </div>
      <div className="container mx-auto mt-6 grid grid-cols-1  lg:grid-cols-3">
      <div className=" space-y-1 xl:space-y-2 border-b border-gray-600 xl:py-6 py-4 lg:border-none">
        <h1 className="text-base lg:text-xl xl:text-3xl font-bold text-blue-600">Address</h1>
        <ul className="xl:mt-4 py-4">
            <li className=" text-lg lg:text-sm xl:text-xl font-bold text-blue-600">India</li>
            <li className="mt-2 font-semibold lg:text-sm xl:text-lg ">Thanjavur</li>
            <li className="font-semibold lg:text-sm xl:text-lg">6/12 Papa vaikal Street Ayyampettai</li>
            <li className="font-semibold lg:text-sm xl:text-lg">Papanasam Thanjavur</li>
            <li className="font-semibold lg:text-sm xl:text-lg">Tamilnadu India.</li>
        </ul>
        <ul>
            <li className="text-base lg:text-sm xl:text-xl font-bold text-blue-600">United Kingdom</li>
            <li className="mt-2 font-semibold lg:text-sm xl:text-lg ">London</li>
            <li className="font-semibold lg:text-sm xl:text-lg">71-75 Shelton Street, Covent Garden,</li>
            <li className="font-semibold lg:text-sm xl:text-lg">London, WC2H 9JQ, United Kingdom.</li>
            
        </ul>
        <ul>
            <li className="text-base lg:text-sm xl:text-xl font-bold text-blue-600">Contact us</li>
            <li className="font-semibold lg:text-sm xl:text-lg">contact@techbrainnetworks.com</li>
        </ul>
      </div>


        <div>
            <h1 className="text-base lg:text-xl xl:text-3xl font-bold text-blue-600 mt-4 lg:mt-4">Products</h1>
            <ul className="space-y-3 mt-4">
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Satellite Command and Control Software</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Orbital Dynamics Simulation Tools</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Spacecraft Telemetry Analysis Software</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Astronomical Data Processing Applications</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Space Mission Planning and Scheduling Software</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Satellite Image Processing and Analysis Tools</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Deep Space Communication Systems</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Space Weather Forecasting Software</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Lunar Exploration Simulation Software</li>
                <li className="text-base font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Space-based Earth Observation Platforms</li>
            </ul>
        </div>

        <div>
            <ul className="space-y-3 mt-10 lg:mt-14 xl:mt-16">
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Rocket Propulsion System Design Software</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Autonomous Satellite Navigation Systems</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Space Debris Tracking and Collision Avoidance Software</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Microgravity Research Simulation Tools</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Astrobiology Research and Data Analysis Software</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Orbital Maneuvering Optimization Software</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Spacecraft Thermal Analysis and Design Tools</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Radiation Shielding Simulation Software</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Planetary GIS Mapping Applications</li>
                <li className="font-semibold cursor-pointer hover:text-blue-600 lg:text-sm xl:text-lg">Exoplanet Discovery and Characterization Software</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Address