import React from 'react'

function Navigation() {
  return (
    <header className="py-2 sticky top-0 z-50 shadow-md bg-white">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <a href="#" className="text-xl font-bold text-text-primary">Lana.kosogova</a>
            <div className="hidden xl:flex space-x-12 items-center text-text-primary">
                <a href="#" className="hover:text-theme hover:fake-bold">Home</a>
                <a href="#about" className="hover:text-theme hover:fake-bold">About</a>
                <a href="#resume" className="hover:text-theme hover:fake-bold">Resume</a>
                <a href="#portfolio" className="hover:text-theme hover:fake-bold">Portfolio</a>
                <a href="#testimonials" className="hover:text-theme hover:fake-bold">Testimonials</a>
                <a href="#contact" className="px-6 py-2 bg-theme border text-white font-semibold hover:bg-white hover:border hover:border-theme hover:text-text-primary">Contact</a>
            </div>
            <div className="xl:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="black"/></svg>
            </div>
        </div>
    </header>
  )
}

export default Navigation