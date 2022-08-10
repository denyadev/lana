import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import ImageComponent from '../components/ImageComponent'

function Portfolio() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/api/projects').then((response) => {
            setCategories(response.data)
        }), (error) => {
            console.log(error)
        }
    }, [])

    return (
        <div className="bg-slate-100">
        <div className="container m-auto py-6 md:py-24">
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10 select-none">Portfolio</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Portfolio</h1>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mx-auto px-8 md:px-14 lg:px-24 w-full mt-4 md:mt-8 lg:mt-24 text-center">
                {categories.map(({id, title, collection}) => (
                    <div key={title} className="flex">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:my-8 lg:my-12 mx-6 md:mx-16 lg:mx-24">
                {categories.map(({ image, title, collection, id }) => (
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