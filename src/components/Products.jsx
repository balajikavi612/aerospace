import React from 'react'

const Products = () => {
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className=" text-3xl lg:text-5xl text-center font-bold flex justify-center md:py-14 ">
                <h1 className="border-b-4 border-blue-600 py-2 w-[200px] lg:w-[300px] text-nowrap">Our Products</h1>
            </div>
            {/* product 1 */}
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-10">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl  md:text-3xl xl:text-5xl font-[700]">Satellite Command and Control Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Ensure optimal performance, execute precise maneuvers, and monitor mission-critical data in real-time.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2">
                    <img className="rounded-xl  md:h-[400px] md:w-[1600px] lg:w-[1000px] " src="assets/product-1.avif" alt="" />
                </div>
            </div>

            {/* product 2 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-2.avif" alt="" />
                </div>

                <div className=" lg:w-1/2 ">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Orbital Dynamics Simulation Tools</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Optimize mission planning, predict trajectories, and navigate the complexities of space with confidence.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 3 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Spacecraft Telemetry Analysis Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Gain real-time insights into your spacecraft's performance, troubleshoot issues, and ensure mission success through data-driven decision-making.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-3.avif" alt="" />
                </div>
            </div>

            {/* product 4 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className=" lg:w-1/2">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-4.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Astronomical Data Processing Applications</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Unlock the secrets of the universe by efficiently processing and analyzing vast datasets, empowering astronomers and researchers.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 5 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Space Mission Planning and Scheduling Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Optimize resource allocation, coordinate mission timelines, and ensure seamless execution of complex space exploration endeavors.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-5.avif" alt="" />
                </div>
            </div>

            {/* product 6 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className=" lg:w-1/2">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-6.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Satellite Image Processing and Analysis Tools</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Extract valuable information, monitor changes over time, and derive actionable intelligence from high-resolution satellite images.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 7 */}


            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Deep Space Communication Systems</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Ensure reliable connectivity for your spacecraft, even in the most challenging deep space environments.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-7.avif" alt="" />
                </div>
            </div>
            {/* product 8 */}
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-8.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Space Weather Forecasting Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Stay informed about space weather conditions, allowing you to optimize mission success and protect valuable assets.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 9 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Lunar Exploration Simulation Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Experience the challenges and opportunities of lunar exploration, preparing for future missions to Earth's celestial companion.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-9.avif" alt="" />
                </div>
            </div>

            {/* product 10 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-10.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Space-based Earth Observation Platforms</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Capture high-resolution imagery and data, supporting scientific research, environmental monitoring, and disaster management.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 11 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Rocket Propulsion System Design Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Enhance efficiency, reduce fuel consumption, and achieve breakthroughs in space travel propulsion.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-11.avif" alt="" />
                </div>
            </div>

            {/* product 12 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-12.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Autonomous Satellite Navigation Systems</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Ensure precise and adaptive navigation, even in dynamic and challenging space environments.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 13 */}
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Space Debris Tracking and Collision Avoidance Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Monitor space debris in real-time and implement collision avoidance strategies to protect your valuable assets.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-13.avif" alt="" />
                </div>
            </div>

            {/* product 14 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-14.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Microgravity Research Simulation Tools</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Create controlled environments that simulate weightlessness, facilitating experiments and discoveries in a unique space-like setting.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 15 */}
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Astrobiology Research and Data Analysis Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Analyze data and uncover insights that push the boundaries of our understanding of life's potential in the universe.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-15.avif" alt="" />
                </div>
            </div>

            {/* product 16 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-16.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Orbital Maneuvering Optimization Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Enhance mission efficiency and achieve precise control over spacecraft trajectories for successful space missions.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>
            {/* product 17 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Spacecraft Thermal Analysis and Design Tools</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Address the complexities of thermal management for spacecraft, optimizing performance in extreme environmental conditions.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-17.avif" alt="" />
                </div>
            </div>

            {/* product 18 */}
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-18.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Radiation Shielding Simulation Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Gain critical insights for effective shielding design, ensuring the safety of personnel and equipment during space missions.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>

            {/* product 19 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">
                <div className="order-2 lg:order-1 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Planetary GIS Mapping Applications</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Gain detailed insights into the geology and topography of celestial bodies, supporting planetary exploration and research.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-19.avif" alt="" />
                </div>
            </div>

            {/* product 20 */}

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32  lg:items-center mt-20">

                <div className="lg:w-1/2 ">
                    <img className="rounded-xl  md:h-[400px] w-[1600px] lg:w-[1000px] " src="src/assets/product-20.avif" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-[700]">Exoplanet Discovery and Characterization Software</h1>
                    <p className="text-base lg:text-base xl:text-2xl mt-4">Enable astronomers to discover and characterize planets beyond our solar system, expanding our understanding of distant planetary systems.</p>
                    <button className="mt-4 bg-blue-600 px-8 py-2 text-white rounded-full  hover:opacity-90">Learn More</button>
                </div>


            </div>


        </div>
    )
}

export default Products