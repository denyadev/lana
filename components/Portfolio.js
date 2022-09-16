import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ImageComponent from '../components/ImageComponent'
import { images } from '../public/images'

const Portfolio = () => {   

    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        setCategories(images)
    })

  return (
    <div className="bg-slate-100">
        <div className="container m-auto py-24">
            <div className="items-center mx-auto w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10 select-none">Portfolio</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Portfolio</h1>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mx-auto w-full py-24 text-center">
                {categories.map(({id, title}) => (
                    <div key={id} className="flex">
                        <Link href={{
                            pathname: "/work/[id]",
                            query: { 
                                id: id,
                             }, // the data
                            }}
                             as={`/work/${id}`}>
                            <a className="border-2 border-theme py-1 my-1 px-6 hover:bg-theme hover:text-white cursor-pointer mr-2">{title}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map(({ image, title, id }) => (
                    <div key={id}>
                        <Link href={{
                            pathname: "/work/[id]",
                            query: { 
                                title: id,
                             }, // the data
                            }}
                            as={`/work/${id}`}>
                            <button type="button" key={title}>
                            <ImageComponent 
                                key={title}
                                id={title}
                                image={image} 
                                />
                        </button></Link>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio