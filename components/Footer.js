import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer>
        <div className="w-full text-center pt-10 pb-10 lg:pt-10 lg:pb-10 bg-theme">
            <div className="text-white font-bold text-3xl md:text-5xl p-2 drop-shadow-md">
                Lana Kosogova
            </div>
            <div>
                <ul className="hidden lg:flex space-x-12 items-center justify-center text-white/80 py-12">
                    <Link activeClass="active2" className="hover:underline cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Home</Link>
                    <Link activeClass="active2" className="hover:underline cursor-pointer" to="about" spy={true} smooth={true} duration={500}>About</Link>
                    <Link activeClass="active2" className="hover:underline cursor-pointer" to="resume" spy={true} smooth={true} duration={500}>Resume</Link>
                    <Link activeClass="active2" className="hover:underline cursor-pointer" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
                    <Link activeClass="active2" className="hover:underline cursor-pointer" to="testimonials" spy={true} smooth={true} duration={500}>Testimonials</Link>
                    <Link activeClass="active2" className="hover:underline cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                </ul>
            </div>
            <hr className="w-1/2 m-auto p-2 opacity-50"/>
            <div className="text-white text-sm">
                © 2022 <span className="font-semibold">Lana Kosogova.</span> All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer