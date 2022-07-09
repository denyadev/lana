import { React, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import ImageComponent from  './ImageComponent.js'

const projects = [
    {
        image: require('../assets/Signage.jpg'),
        title: 'Signage',
        description: 'Signage Description',
        collection: [ require('../assets/Signage.jpg'),  require('../assets/Signage.jpg'),  require('../assets/Signage.jpg'),  require('../assets/Signage.jpg'),  require('../assets/Signage.jpg')],
    },
    {
        image: require('../assets/Flyers.jpg'),
        title: 'Flyers',
        description: 'Flyers Description',
        collection: [],
    },
    {
        image: require('../assets/Labeling.jpg'),
        title: 'Labeling',
        description: 'Labeling Description',
        collection: [],
    },
    {
        image: require('../assets/Books.jpg'),
        title: 'Books',
        description: 'Books Description',
        collection: [],
    },
    {
        image: require('../assets/Sell_Sheets.jpg'),
        title: 'Sell Sheets',
        description: 'Sell Sheets Description',
        collection: [],
    },
    {
        image: require('../assets/3D.jpg'),
        title: '3D',
        description: '3D Description',
        collection: [],
    },
    {
        image: require('../assets/Stock_Photo.jpg'),
        title: 'Stock Photo',
        description: 'Stock Photo Description',
        collection: [],
    },
    {
        image: require('../assets/Product_Photo.jpg'),
        title: 'Product Photo',
        description: 'Product Photo Description',
        collection: [],
    },
    {
        image: require('../assets/Stationery.jpg'),
        title: 'Stationery',
        description: 'Stationery Description',
        collection: [],
    }];



function Portfolio() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  return (
    <div id="portfolio" className="bg-slate-100">
        <div className="container m-auto py-6 md:py-24">
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10">Portfolio</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Portfolio</h1>
            </div>
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full space-x-5 mt-24">
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">All</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Signage</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Flyers</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Labeling</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Books</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Sell Sheets</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">3D</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Stock Photo</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Product Photo</a>
                <a className="border-2 border-theme py-2 px-6 hover:bg-theme hover:text-white cursor-pointer">Stationery</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:my-24 mx-6 md:mx-16 lg:mx-24 my-16">
                {projects.map(({ image, title, description, collection, index }) => (
                    <button type="button" onClick={openModal}>
                        <ImageComponent 
                            key={index}
                            image={image} 
                            title={title}
                            description={description}
                            collection={collection}/>
                    </button>
                ))}
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-screen h-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            {/* Title */}
                            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Portfolio</h1>
                            </div>
                            {/* Description */}
                            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                                <h1 className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</h1>
                            </div>
                            {/* Gallery */}
                            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:my-24 mx-6 md:mx-16 lg:mx-24 my-16">
                                {projects.map(({ image, title, index }) => (
                                    <button type="button" onClick={openModal}><ImageComponent key={index}
                                        image={image} 
                                        title={title}/></button>
                                ))}
                                {projects.map(({ image, title, index }) => (
                                    <button type="button" onClick={openModal}><ImageComponent key={index}
                                        image={image} 
                                        title={title}/></button>
                                ))}
                            </div>
                            {/* Close */}
                            <div className="absolute h-8 w-8 top-0 right-0 mr-32 mt-12 cursor-pointer hover:scale-110 fill-theme" onClick={closeModal}>  
                                <svg clip-rule="evenodd" fillRule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </div>
    </div>
  )
}

export default Portfolio