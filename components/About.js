import React from 'react'

function About() {
  return (
    <div className="bg-slate-100">
        <div className="container m-auto py-6 md:py-24 lg:py-40">
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10 select-none">About me</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">About me</h1>
            </div>
            <div className="md:grid grid-cols-3 gap-4 justify-between lg:items-center md:mt-24 mx-8 md:mx-14 lg:mx-24 my-10 lg:mt-32">
                <div className="lg:mr-24">
                    <h2 className="font-semibold text-sm md:text-base lg:text-2xl md:text-left text-text-primary md:mb-8 mb-4">A talented</h2>
                    <h1 className="font-semibold text-3xl md:text-3xl lg:text-5xl md:text-left text-theme md:mb-2">Media</h1>
                    <h1 className="font-semibold text-3xl md:text-3xl lg:text-5xl md:text-left text-theme md:mb-2">Graphic</h1>
                    <h1 className="font-semibold text-3xl md:text-3xl lg:text-5xl md:text-left text-theme md:mb-8 mb-4">Designer</h1>
                    <h2 className="font-semibold text-sm md:text-base lg:text-2xl md:text-left text-text-primary mb-4 md:mb-8 lg:mb-4">Located in Toronto</h2>
                    <p className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary mb-12">Provide a diverse range of services including custom design of printed materials and branding to an array of clients from a variety of industries.</p>
                </div>
                <div className="col-span-2">
                    <div className="border-l-4 border-theme pl-5 md:pl-10">
                        <h2 className="font-semibold text-sm md:text-base lg:text-xl md:text-left text-text-primary third-title lg:mb-4">Achievements</h2>
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-text-primary -mt-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="px-6 py-4">
                                        <h1 className="font-semibold text-sm md:text-base lg:text-2xl md:text-left text-text-primary lg:mb-4">Developed a system to manage and organize files.</h1>
                                        <p className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary">Implemented a database software with the support of IT to easily search for companies artwork.<br/><span className="text-theme font-semibold">Decreased the time required to search by 70%</span></p>
                                        <div className="hidden lg:block rounded-full py-2 px-6 bg-gray-300 text-center mt-4 text-2xl w-1/3 m-auto">
                                            <div className="">
                                                <p>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-text-primary -mt-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="px-6 py-4">
                                        <h1 className="font-semibold text-sm md:text-base lg:text-2xl md:text-left text-text-primary lg:mb-12">Product Photography for Home Depot website.</h1>
                                        <p className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary">Shot and published thousands of professional photographs of products for Home Depot website.<br/><span className="text-theme font-semibold">This led to an increase in traffic by 75% and online sales by 25%</span></p>
                                        <div className="hidden lg:block rounded-full py-2 px-6 bg-gray-300 text-center mt-4 text-2xl w-1/3 m-auto">
                                            <div className="">
                                                <p>25%</p>
                                            </div>
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About