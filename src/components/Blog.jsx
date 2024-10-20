import React from 'react'

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
        
        
        <div className="text-3xl lg:text-5xl text-center font-bold flex justify-center py-10 md:py-14 lg:mt-10 ">
            <h1 className="border-b-4 border-blue-600 py-2 w-[150px] lg:w-32 ">Blog</h1>
        </div>

       <div className="lg:my-8">
       <div className="flex flex-wrap justify-center gap-5">
        {/* card 1 */}
       <div className=" w-full lg:w-1/4 p-2 shadow-2xl space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src="src/assets/blog-1.avif" alt="img" />
            <h1 className="text-lg text-center font-semibold">Exoplanet Discovery and Characterization Software</h1>
            <p className="text-center text-sm"> Techbrain Networks specializes in satellite software development, mission control systems, data analysis for space missions, and solutions for satellite communication.</p>
        </div>
           
           {/* card 2 */}
            
           <div className=" w-full lg:w-1/4 p-2 shadow-2xl space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src="src/assets/blog-2.avif" alt="img" />
            <h1 className="text-lg text-center font-semibold">Planetary GIS Mapping Applications</h1>
            <p className="text-center text-sm"> Gain detailed insights into the geology and topography of celestial bodies, supporting planetary exploration and research.</p>
        </div>

        {/* card 3 */}
        <div className=" w-full lg:w-1/4 p-2 shadow-2xl space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src="src/assets/blog-3.avif" alt="img" />
            <h1 className="text-lg text-center font-semibold">Orbital Maneuvering Optimization Software</h1>
            <p className="text-center text-sm"> Techbrain Networks actively contributes to space exploration by developing advanced software solutions that enhance communication, data analysis, and overall efficiency in space missions.</p>
        </div>

        {/* card 4 */}

        <div className=" w-full lg:w-1/4 p-2 shadow-2xl space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src="src/assets/blog-4.avif" alt="img" />
            <h1 className="text-lg text-center font-semibold">Microgravity Research Simulation Tools</h1>
            <p className="text-center text-sm"> Techbrain Networks offers services such as satellite software development, mission control systems, data analysis for space missions, and solutions for satellite communication.</p>
        </div>
         {/* card 5 */}

         <div className=" w-full lg:w-1/4 p-2 shadow-2xl space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src="src/assets/blog-5.avif" alt="img" />
            <h1 className="text-lg text-center font-semibold">Space-based Earth Observation Platforms</h1>
            <p className="text-center text-sm">Our team actively participates in industry events, collaborates with experts, and engages in ongoing research to stay updated with the latest trends and innovations in space technology.</p>
        </div>

         {/* card 6 */}
          
         <div className=" w-full lg:w-1/4 p-2 shadow-2xl space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src="src/assets/blog-6.avif" alt="img" />
            <h1 className="text-lg text-center font-semibold">Space Weather Forecasting Software</h1>
            <p className="text-center text-sm">Absolutely. Techbrain Networks specializes in developing solutions for satellite communication, ensuring reliable and efficient communication in space-related initiatives.</p>
        </div>

        </div>
       </div>
    </div>
  )
}

export default Blog