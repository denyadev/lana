import React from 'react'
import Image from 'next/image'

import Lisa from '../assets/lisa.jpg'
import Marcel from '../assets/marcel.jpg'
import Daniel from '../assets/daniel.jpg'

function Testimonials() {
  return (
    <div id="testimonials" className="">
		<div className="container m-auto py-6 md:py-24 items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10">Testimonials</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Testimonials</h1>
                {/* <p className="section-paragraph">I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.</p> */}
            </div>

			<section className="w-full">
				<div className="space-y-12 my-16">
                    <div className="overflow-hidden md:relative max-w-full mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl md:flex items-center gap-6 dark:bg-slate-100 dark:highlight-white/5">
                        <img className="md:absolute -left-24 w-32 h-32 md:w-64 md:h-64 rounded-full shadow-lg mx-auto mt-5" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                        <div className="md:flex md:flex-col p-5 md:p-10 md:pl-60">
                            <strong className="text-theme text-sm font-semibold">– Lisa Hayes<span className="font-normal text-xs">, on Sabbaticalon Sabbatical</span></strong>
                            <span className="text-gray-500 text-sm pt-5">Svitlana is a dedicated team member with a keen eye for detail
                                and an excellent problem solver. She stepped into my position for
                                six weeks and managed to pick up the loose threads with minimal
                                supervision, keeping our content fresh and our code clean. Her
                                design and build of the Rat Race Event Site is an improvement
                                over last year&apos;s site. I highly recommend her!</span>
                        </div>
                    </div>
					<div className="overflow-hidden md:relative max-w-full mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl md:flex items-center gap-6 dark:bg-slate-100 dark:highlight-white/5">
                        <img className="md:absolute -left-24 w-32 h-32 md:w-64 md:h-64 rounded-full shadow-lg mx-auto mt-5" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                        <div className="md:flex md:flex-col p-5 md:p-10 md:pl-60">
                            <strong className="text-theme text-sm font-semibold">– Marcel Vilanez<span className="font-normal text-xs">, CEO at Technovate Translations</span></strong>
                            <span className="text-gray-500 text-sm pt-5">Lana is a very creative web designer. She has a wide array of
                                knowledge with design programs and figures things out even
                                when working with new technologies and always figures things out
                                nicely. She has a flair for design that is uniquely her own. 
                                Her passion for delivering colourful and eye catching designs is evident in
                                her work. I would recommend Lana as a Web Designer or for
                                anyone looking to hire a freelancer to deliver great work!</span>
                        </div>
                    </div>
                    <div className="overflow-hidden md:relative max-w-full mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl md:flex items-center gap-6 dark:bg-slate-100 dark:highlight-white/5">
                        <img className="md:absolute -left-24 w-32 h-32 md:w-64 md:h-64 rounded-full shadow-lg mx-auto mt-5" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                        <div className="md:flex md:flex-col p-5 md:p-10 md:pl-60">
                            <strong className="text-theme text-sm font-semibold">– Daniel Riber<span className="font-normal text-xs">, Account Executive at Intiveo</span></strong>
                            <span className="text-gray-500 text-sm pt-5">Lana is a great designer with an eye for detail! She works well with
                                others and is always available to incorporate suggestions into her
                                work. I would recommend Lana to anyone looking for a good
                                graphic designer. Lana is a great designer with an eye for detail!
                                She works well with others and is always available to incorporate
                                suggestions into her work. I would recommend Lana to anyone
                                looking for a good graphic designer.</span>
                        </div>
                    </div>
				</div>

			</section>
		</div>
    </div>
  )
}

export default Testimonials