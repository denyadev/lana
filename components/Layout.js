import Hero from './Hero'
import Header from './Header'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <section id="home">
            <Hero/>
        </section>
        <Header/>
        <section id="about">
            <About/>
        </section>
        <section id="resume">
            <Resume/>
        </section>
        <section id="portfolio">
            <Portfolio/>
        </section>
        <section id="testimonials">
            <Testimonials/>
        </section>
        <section id="contact">
            <Contact/>
        </section>
        <Footer/>
    </>
  )
}

export default Layout