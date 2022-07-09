import React from 'react'

function About() {
  return (
    <div id="about" className="bg-slate-100">
        <div className="container m-auto py-6 md:py-24">
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10">About me</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary ">About me</h1>
            </div>
            <div className="flex justify-between items-center md:my-24 mx-6 md:mx-12 my-16">
                 
                <div className="block md:flex md:flex-row">
                    <div className="flex flex-col justify-center md:justify-start max-w-3xl mt-0 md:my-24">
                        
                        <h2 className="font-semibold text-sm md:text-base lg:text-lg  md:text-left text-text-primary">A Talented Web Designer / Developer Located In Our Lovely Earth</h2>
                        <br/>
                        <p className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <div className="w-full flex md:justify-start">
                            <button className="px-8 py-3 border bg-theme text-white font-semibold mt-12 flex items-center space-x-3 hover:border hover:border-theme hover:text-text-primary group hover:bg-white">
                                <div>
                                <svg className="fill-white group-hover:fill-text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>								
                                </div>
                                <span><a href="#portfolio">View my work.</a></span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center md:justify-start max-w-xl mt-0 md:my-24 md:ml-24 pt-12 md:py-0">
                        <div className="border-l-4 border-theme pl-5 md:pl-10">
                            <h2 className="font-semibold text-sm md:text-base lg:text-lg md:text-left text-text-primary">Developed a system to manage and organize files.</h2>
                            <p className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary">Implemented a database software with the support of IT to easily search for companies artwork. Decreased the time required to search by <b className="text-theme">70%</b></p>
                        </div>
                        <br/>
                        <div className="border-l-4 border-theme pl-5 md:pl-10">
                            <h2 className="font-semibold text-sm md:text-base lg:text-lg md:text-left text-text-primary">Product Photography for Home Depot.</h2>
                            <p className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary">Shot and published thousands of professional photographs of products for Home Depot website which led to an increase in traffic by <b className="text-theme">75%</b> and online sales by <b className="text-theme">25%</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About