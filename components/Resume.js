import React from 'react'

function Resume() {
  return (
    <div>
        <div className="container m-auto py-6 md:py-24">
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10 select-none">Resume</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Resume</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:my-12 lg:my-24 mx-6 md:mx-14 lg:mx-24 my-16">
            <div className="flex flex-row justify-center md:justify-start max-w-xl mt-0">
                <div className="">
                    <h1 className="font-semibold text-sm md:text-base lg:text-lg md:text-left third-title text-text-primary">Education</h1>
                    <div className="timeline">
                        <div className="relative">
                            <div className="dot"></div>
                            <div className="pl-10">
                                <span className="timeline-date">2021</span>
                                <h3 className="timeline-title">CG Boost Academy</h3>
                                <h3 className="timeline-subtitle">Online Course:<br/> Blender and 3D art</h3>
                                <br/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="dot"></div>
                            <div className="pl-10">
                                <span className="timeline-date">2000-2001</span>
                                <h3 className="timeline-title">Master’s Degree<br/> in Programming</h3>
                                <h3 className="timeline-subtitle">Kherson State<br/> Technical University,<br/> Kherson, Ukraine</h3>
                                <br/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="dot"></div>
                            <div className="pl-10">
                                <span className="timeline-date">1991-1996</span>
                                <h3 className="timeline-title">Master’s Degree<br/> in Economics</h3>
                                <h3 className="timeline-subtitle">Kherson State<br/> Technical University,<br/> Kherson, Ukraine</h3>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-3 mt-32 flex">
                        <div className="pc"></div>
                        <div className="mac"></div>
                        <div className="mt-4 pl-4 text-center text-theme text-xs">MAC and PC<br/> Platforms</div>
                    </div>
                    <button className="px-8 py-3 border bg-theme text-white font-semibold mt-12 flex items-center space-x-3 hover:border hover:border-theme hover:text-text-primary group hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                        </svg>
                        <p>Download Resume</p>
                    </button>
                    </div>
                </div>
                <div className="md:flex md:flex-row justify-center md:justify-start max-w-xl mt-0 pt-36 md:pt-0">
                    <div className="">
                        <h1 className="font-semibold text-sm md:text-base lg:text-lg md:text-left third-title text-text-primary">Experience</h1>
                        <div className="timeline">
                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className="timeline-date">Feb 2015 – <span className="r-present">Present (Full time)</span></span>
                                    <h3 className="timeline-title">Media Graphic Designer</h3>
                                    <h3 className="timeline-subtitle">Hillman Group Canada,<br/> Toronto, ON</h3>
                                    <div className="grid grid-cols-2 text-theme text-xs mt-2">
                                        <div className="p-2">
                                            <p>– Advert Design</p> 
                                            <p>– Line Drawing</p> 
                                            <p>– Branding Design</p>
                                        </div>
                                        <div className="p-2">
                                            <p>– Labeling</p> 
                                            <p>– Product Packaging</p> 
                                            <p>– Product Photography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className="timeline-date">Sep 2014 – <span className="r-present">Present (Part time)</span></span>
                                    <h3 className="timeline-title">Graphic Designer</h3>
                                    <h3 className="timeline-subtitle">RJS Enterprises Inc. - Golfpassport,<br/> Toronto, ON</h3>
                                    <div className="grid grid-cols-2 text-theme text-xs mt-2">
                                        <div className="p-2">
                                            <p>– Book layout</p> 
                                            <p>– Digital Imaging</p> 
                                        </div>
                                        <div className="p-2">
                                            <p>– Logos and Maps</p> 
                                            <p>– Pre-press</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className="timeline-date">Jun 2008 – Sep 2013</span>
                                    <h3 className="timeline-title">Web Graphic Designer</h3>
                                    <h3 className="timeline-subtitle">Technovate Inc.,<br/> Toronto, ON</h3>
                                    <div className="grid grid-cols-2 text-theme text-xs mt-2">
                                        <div className="p-2">
                                            <p>– Branding Design</p> 
                                            <p>– Marketing Materials</p> 
                                            <p>– Marketing Materials</p>
                                        </div>
                                        <div className="p-2">
                                            <p>– Pre-press</p> 
                                            <p>– Websites Developing</p> 
                                            <p>– Infographics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className="timeline-date">Mar 2008 - Apr 2008</span>
                                    <h3 className="timeline-title">Web Editor</h3>
                                    <h3 className="timeline-subtitle">United Way Greater Toronto,<br/> Toronto, ON</h3>
                                    <div className="grid grid-cols-2 text-theme text-xs mt-2">
                                        <div className="p-2">
                                            <p>– Website Maintaining</p> 
                                            <p>– Graphic Content</p> 
                                        </div>
                                        <div className="p-2">
                                            <p>– Event Design</p> 
                                            <p>– Event Design</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center text-ce md:justify-start max-w-xl mt-32 lg:mt-0 pt-36 md:pt-0">
                    <h1 className="font-semibold text-sm md:text-base lg:text-lg md:text-left third-title text-text-primary">Expertise</h1>
                    <div className="flex flex-col pt-8">
                        <div className="space-x-2 flex text-center">
                            <div className="w-full">
                                <div className="ps"></div>
                                <p className="text-theme text-xs">Adobe Photoshop</p>
                            </div>
                            <div className="w-full">
                                <div className="ai"></div>
                                <p className="text-center text-theme text-xs">Adobe Illustrator</p>
                            </div>
                            <div className="w-full">
                                <div className="id"></div>
                                <p className="text-center text-theme text-xs">Adobe InDesign</p>
                            </div>
                            <div className="w-full">
                                <div className="lr"></div>
                                <p className="text-center text-theme text-xs">Adobe Lightroom</p>
                            </div>
                            <div className="w-full">
                                <div className="pr"></div>
                                <p className="text-center text-theme text-xs">Adobe Premiere Pro</p>
                            </div>
                        </div>
                        <div className="space-x-2 flex pt-8 text-center">
                            <div className="w-full">
                                <div className="dw"></div>
                                <p className="text-center text-theme text-xs">Adobe Dreamweaver</p>
                            </div>
                            <div className="w-full">
                                <div className="css"></div>
                                <p className="text-center text-theme text-xs">Adobe Acrobat Pro</p>
                            </div>
                            <div className="w-full">
                                <div className="acr"></div>
                                <p className="text-center text-theme text-xs">HTML5</p>
                            </div>
                            <div className="w-full">
                                <div className="html"></div>
                                <p className="text-center text-theme text-xs">CSS3</p>
                            </div>
                            <div className="w-full">
                                <div className="off"></div>
                                <p className="text-center text-theme text-xs">MS Office</p>
                            </div>
                        </div>
                        <div className="space-x-2 flex pt-8 text-center">
                            <div className="w-full">
                                <div className="bl"></div>
                                <p className="text-center text-theme text-xs">Blender (3D)</p>
                            </div>
                            <div className="w-full">
                                <div className="sw"></div>
                                <p className="text-center text-theme text-xs">Helicon Remote</p>
                            </div>
                            <div className="w-full">
                                <div className="nik"></div>
                                <p className="text-center text-theme text-xs">Control<br/>My Nikon</p>
                            </div>
                            <div className="w-full">
                                <div className="fig"></div>
                                <p className="text-center text-theme text-xs">Figma</p>
                            </div>
                            <div className="w-full">
                                <div className="nice"></div>
                                <p className="text-center text-theme text-xs">Nice Label</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="pt-10 font-semibold text-sm md:text-base lg:text-lg md:text-left third-title text-text-primary">Skills</h1>
                    <div className="">
                        <div className="pl-10">
                            <ul className="timeline-subtitle list-disc leading-7">
                                <li>Strong graphic design skills</li>
                                <li>Creativity & Flexibility</li>
                                <li>Attention to detail</li>
                                <li>Deadline-oriented</li>
                                <li>Well organized</li>
                                <li>Time-management skills</li>
                                <li>Analytical skills</li>
                                <li>Communication skills</li>
                                <li>Fast learner</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume