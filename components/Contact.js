import React from 'react'

function Contact() {
  return (
    <div id="contact" className="bg-slate-100">
		<div className="container m-auto items-center mx-auto px-8 md:px-14 lg:px-24 w-full py-6 md:py-24">
            <div className="">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10">Contact</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Contact</h1>
                {/* <p className="section-paragraph">Feel free to to contact me any time, through any method below.</p> */}
            </div>
			<section className="w-full">
				<div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
					<div className="space-y-12">
						<div>
							<label className="text-text-primary block mb-2 font-semibold">Name</label>
							<input className="w-full border border-input-border bg-input px-2 py-2 border-theme"/>
						</div>
						<div>
							<label className="text-text-primary block mb-2 font-semibold">Email</label>
							<input type="email" className="w-full border border-input-border bg-input px-2 py-2 border-theme"/>
						</div>
						<div>
							<label className="text-text-primary block mb-2 font-semibold">Message</label>
							<textarea type="email" className="w-full border border-input-border bg-input px-2 py-2 h-44 resize-none border-theme"></textarea>
						</div>
						<button className="px-6 py-2 border bg-theme text-white font-semibold mt-12 flex items-center space-x-3 hover:border hover:border-theme hover:text-text-primary group hover:bg-white">
                            <svg className="fill-white group-hover:fill-text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>								
                            <span><a href="#portfolio">Send it.</a></span>
                        </button>
					</div>

					<div className="">
                        <p className="font-semibold text-sm md:text-base lg:text-lg md:text-left text-text-primary">Feel free to to contact me any time, through any method.</p>
                        <a href="tel:+16473399019" className="flex mt-8 text-theme hover:font-bold">
                            <svg className="fill-theme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"/></svg>                            
                            <p className="text-theme ml-4">(647) 339 - 9019</p>
                        </a>
                        <a href="mailto:email@mydomain.com" className="flex mt-4 text-theme underline hover:font-bold">
                            <svg className="fill-theme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            <p className="ml-4">lana@mydomain.com</p>
                        </a>
						<a href="https://www.linkedin.com/in/lanakosogova/" target="_blank" rel="noreferrer" className="flex mt-4 text-theme underline hover:font-bold">
                            <svg className="fill-theme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                            <p className="ml-4">linkedin.com/in/lanakosogova</p>
                        </a>
                    </div>
					
				</div>
			</section>
		</div>
    </div>
  )
}

export default Contact