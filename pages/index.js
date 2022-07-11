import Head from 'next/head'

import Hero from '../components/Hero.js'
import Navigation from '../components/Navigation.js'
import About from '../components/About.js'
import Resume from '../components/Resume.js'
import Portfolio from '../components/Portfolio.js'
import Testimonials from '../components/Testimonials.js'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lana Kosogova</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="font-poppins scroll-smooth">
        <div className="fixed right-0 bottom-0 p-12 z-50">
            <a href="#" className="px-1 py-1 border rounded-full bg-gray-500 text-white font-semibold mt-2 flex items-center space-x-3 hover:border hover:border-theme hover:text-text-primary group hover:bg-white">
                <svg className="h-8 w-8" fill="currentColor" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterLimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z" fillRule="nonzero"/></svg>
            </a>
        </div>
        {/* Hero Section */}
        <Hero/>

        {/* Navigation */}
        <Navigation/>

        {/* About Me */}
        <About/>

        {/* Resume */}
        <Resume/>

        {/* Portfolio */}
        <Portfolio/>

        {/* Testimonials */}
        <Testimonials/>

        {/* Contact */}
        <Contact/>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}