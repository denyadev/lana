import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="w-full text-center pt-10 pb-10 lg:pt-10 lg:pb-10 bg-theme">
            <div className="text-white font-bold text-3xl md:text-5xl p-2 drop-shadow-md">
                Lana Kosogova
            </div>
            <div className="hidden lg:flex space-x-12 items-center justify-center text-white/80 py-12">
                <a href="#" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#resume" className="hover:underline">Resume</a>
                <a href="#portfolio" className="hover:underline">Portfolio</a>
                <a href="#testimonials" className="hover:underline">Testimonials</a>
                <a href="#contact" className="hover:underline">Contact</a>
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