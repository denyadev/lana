import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Contact = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    async function onSubmitForm(values) {
        let config = {
          method: 'post',
          url:  `/api/contact`, // `${process.env.NEXT_PUBLIC_API_URL}/api/contact` ||
          headers: {
            'Content-Type': 'application/json',
          },
          data: values,
        };
    
        try {
          const response = await axios(config);
          console.log(response);
          if (response.status == 200) {
            reset();
          }
        } catch (err) {}
      }

  return (
    <div className="bg-slate-100 h-full">
        <div className="container m-auto items-center mx-auto py-24">
            <div className="">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10 select-none">Contact</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Contact</h1>
            </div>
            <div className="w-full">
                <div className="w-full grid lg:grid-cols-2 gap-8 py-24">
                    <div className="space-y-12">
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            <label htmlFor="name" className="text-text-primary block mb-2 font-semibold">Name</label>
                            <input
                                id="name"
                                type="text"
                                {...register('name', { required: true, message: 'You must enter your name' })}
                                className="w-full border border-input-border bg-input px-2 py-2 border-theme mb-8"
                            />
                            <span>{errors?.name?.message}</span>
                            <label htmlFor="email" className="text-text-primary block mb-2 font-semibold">Email</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', { 
                                    required: {value: true, message: 'You must enter your email address' },
                                    minLength: {value: 5, message: 'You must enter a valid email address' },
                                    maxLength: {value: 254, message: 'You must enter a valid email address' },})}
                                className="w-full border border-input-border bg-input px-2 py-2 border-theme mb-8"
                            />
                            <span>{errors?.email?.message}</span>
                            <label htmlFor="message" className="text-text-primary block mb-2 font-semibold">Message</label>
                            <textarea
                                id="message"
                                type="text"
                                {...register('message', { 
                                    required: {value: true, message: 'You must enter a message' },
                                    maxLength: {value: 1000, message: 'Your message cannot exceed 1000 characters' }})}
                                rows="6"
                                className="w-full border border-input-border bg-input px-2 py-2 border-theme"
                            />
                            <span>{errors?.message?.message}</span>
                            <button type="submit" className="px-6 py-2 border bg-theme text-white font-semibold mt-12 flex items-center space-x-3 hover:border hover:border-theme hover:text-text-primary group hover:bg-white">
                                <svg className="fill-white group-hover:fill-text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>								
                                <span><a>Send it.</a></span>
                            </button>
                        </form>
                    </div>
                    <div className="">
                        <p className="font-semibold text-sm md:text-base lg:text-lg md:text-left text-text-primary">Feel free to to contact me any time, through any method.</p>
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
            </div>
        </div>
    </div>
  )
}

export default Contact