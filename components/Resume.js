import React from 'react'

function Resume() {
  return (
    <div id="resume">
        <div className="container m-auto py-6 md:py-24">
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10">Resume</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Resume</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:my-24 mx-6 md:mx-24 my-16">
            <div className="flex flex-row justify-center md:justify-start max-w-xl mt-0">
                    <div className="">
                            <h1 className="font-semibold text-sm md:text-base lg:text-lg md:text-left third-title text-text-primary">Education</h1>
                            <div className="timeline">
                                <div className="relative">
                                    <div className="dot"></div>
                                    <div className="pl-10">
                                        <span className="timeline-date">2000-2001</span>
                                        <h3 className="timeline-title">Master’s Degree in Programming</h3>
                                        <h3 className="timeline-subtitle">Kherson State Technical University,<br/> Kherson, Ukraine</h3>
                                        <br/>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="dot"></div>
                                    <div className="pl-10">
                                        <span className="timeline-date">1991-1996</span>
                                        <h3 className="timeline-title">Master’s Degree in Economics</h3>
                                        <h3 className="timeline-subtitle">Kherson State Technical University,<br/> Kherson, Ukraine</h3>
                                        <br/>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="dot"></div>
                                    <div className="pl-10">
                                        <span className="timeline-date">2021</span>
                                        <h3 className="timeline-title">CG Boost Academy</h3>
                                        <h3 className="timeline-subtitle">Online Course:<br/> Blender and 3D art</h3>
                                        <br/>
                                    </div>
                                </div>
                            </div>
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
                                        <br/>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="dot"></div>
                                    <div className="pl-10">
                                        <span className="timeline-date">Sep 2014 – <span className="r-present">Present (Part time)</span></span>
                                        <h3 className="timeline-title">Graphic Designer</h3>
                                        <h3 className="timeline-subtitle">RJS Enterprises Inc. - Golfpassport,<br/> Toronto, ON</h3>
                                        <br/>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="dot"></div>
                                    <div className="pl-10">
                                        <span className="timeline-date">Jun 2008 – Sep 2013</span>
                                        <h3 className="timeline-title">Web Graphic Designer</h3>
                                        <h3 className="timeline-subtitle">Technovate Inc.,<br/> Toronto, ON</h3>
                                        <br/>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="dot"></div>
                                    <div className="pl-10">
                                        <span className="timeline-date">Mar 2008 - Apr 2008</span>
                                        <h3 className="timeline-title">Web Editor</h3>
                                        <h3 className="timeline-subtitle">United Way Greater Toronto,<br/> Toronto, ON</h3>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="justify-center md:justify-start max-w-xl mt-0 pt-36 md:pt-0">
                        <h1 className="font-semibold text-sm md:text-base lg:text-lg md:text-left third-title text-text-primary">Expertise</h1>
                        <div className="flex flex-col pt-5">
                            <div className="space-x-3">
                                <div className="ps"></div>
                                <div className="ai"></div>
                                <div className="id"></div>
                                <div className="lr"></div>
                                <div className="pr"></div>
                            </div>
                            <div className="space-x-3">
                                <div className="dw"></div>
                                <div className="css"></div>
                                <div className="acr"></div>
                                <div className="html"></div>
                                <div className="off"></div>
                            </div>
                            <div className="space-x-3">
                                <div className="bl"></div>
                                <div className="sw"></div>
                                <div className="pc"></div>
                                <div className="mac"></div>
                                <div className="nice"></div>
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