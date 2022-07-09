import React from 'react'

function Hero() {
  return (
    <div id="home" className="hidden md:block bg-[url('../assets/cover.jpg')] w-full h-64 md:h-[30rem] bg-cover md:bg-center md:px-14">
        <div className="container m-auto">
            <div className="flex flex-wrap md:flex-nowrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0">
                <div className="text-white pt-12 md:pt-36">
                    <h1 className="text-5xl md:text-7xl font-bold drop-shadow-md ">Lana Kosogova</h1>
                    <h2 className="text-2xl md:text-4xl pb-12 drop-shadow-md">Media Graphic Designer</h2>
                    <button className="px-8 py-3 border bg-theme text-white font-semibold mt-2 flex items-center space-x-3 hover:border hover:border-theme hover:text-text-primary group hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                        </svg>
                        <p>Download Resume</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero