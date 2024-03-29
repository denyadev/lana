import React from 'react'
import Image from 'next/image'

const ImageComponent = ( { id, image } ) => {
  return (
    <div className="relative">
        <a className="absolute inset-0 z-10 bg-black text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-80 duration-300 cursor-pointer">
        <h1 className="text-theme font-bold text-4xl">{id}</h1>
        <p className="mx-auto text-white">View More.</p>
        </a>
        <a href="#" className="relative">
            <div className=" flex flex-wrap content-center">
                <Image src={ image } className="mx-auto" alt={id} width="500%" height="400%"/>
            </div>
        </a>
    </div>
  )
}

export default ImageComponent