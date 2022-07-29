import Hero from './Hero'
import Navbar from './Navigation'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <section id="home">
            <Hero/>
        </section>
        {/* Navigation */}
        <Navbar/>
        {/* About Me */}
        <section id="about">
            <About/>
        </section>
        {/* Resume */}
        <section id="resume">
            <Resume/>
        </section>
        {/* Portfolio */}
        <section id="portfolio">
            <Portfolio/>
        </section>
        {/* Testimonials */}
        <section id="testimonials">
            <Testimonials/>
        </section>
        {/* Contact */}
        <section id="contact">
            <Contact/>
        </section>
        <Footer />
    </>
  )
}

export default Layout