import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [])

    const handleClick = () => setOpen(!open)

    return (
        <header className={navbar ? 'header-active' : 'header'}>
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <Link activeClass="active2" className="text-xl font-bold text-text-primary cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Lana.kosogova</Link>
                <ul className="hidden xl:flex space-x-12 items-center text-text-primary py-4">
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="resume" spy={true} smooth={true} duration={500}>Resume</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="testimonials" spy={true} smooth={true} duration={500}>Testimonials</Link></li>
                    <li><Link activeClass="active" className="hover:text-theme hover:fake-bold cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                </ul> 
                <div className="xl:hidden" onClick={handleClick}>
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="black"/></svg>
                </div>
            </div>
            { open &&             
            <div>
                <ul className="xl:hidden flex flex-col items-center text-text-primary py-4 space-y-4">
                    <li><Link activeClass="active" className="cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link activeClass="active" className="cursor-pointer" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                    <li><Link activeClass="active" className="cursor-pointer" to="resume" spy={true} smooth={true} duration={500}>Resume</Link></li>
                    <li><Link activeClass="active" className="cursor-pointer" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                    <li><Link activeClass="active" className="cursor-pointer" to="testimonials" spy={true} smooth={true} duration={500}>Testimonials</Link></li>
                    <li><Link activeClass="active" className="cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                </ul> 
            </div> 
            }
            {/* <div className="fixed right-0 bottom-0 p-12 z-50">
                <Link activeClass="active" className="hover:text-theme hover:fake-bold" to="home" spy={true} smooth={true} duration={500} offset={-50}><a className="px-1 py-1 border rounded-full bg-gray-500 text-white font-semibold mt-2 flex items-center space-x-3 hover:border hover:border-theme hover:text-text-primary group hover:bg-white">
                    <svg className="h-8 w-8" fill="currentColor" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterLimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z" fillRule="nonzero"/></svg>
                </a></Link>
            </div> */}
    </header>
    )
}

export default Header