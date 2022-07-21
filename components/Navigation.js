import React from 'react'
import { Link } from 'react-scroll'

function Navigation() {
  return (
    <header className="py-2 sticky top-0 z-50 shadow-md bg-white">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <Link activeClass="active2" className="text-xl font-bold text-text-primary cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Lana.kosogova</Link>
                <ul className="hidden xl:flex space-x-12 items-center text-text-primary py-4">
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="resume" spy={true} smooth={true} duration={500}>Resume</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="testimonials" spy={true} smooth={true} duration={500}>Testimonials</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                </ul> 
                <div className="xl:hidden">
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="black"/></svg>
                </div>
            </div>
    </header>
  )
}

export default Navigation