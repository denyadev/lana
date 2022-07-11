import { React, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";

import ImageComponent from  './ImageComponent.js'

const category = ["Signage, POP", "Flyers", "Labeling", "Books", "Sell Sheets", "3D Modeling", "Stock Photography", "Product Photography", "Stationery"]

const projects = [
    {
        image: require('../assets/Signage.jpg'),
        title: 'Signage, POP',
        description: 'Signage Description',
        collection: [ 
            {
                src: require('../assets/img/book-open.jpg'),
                width: 3300,
                height: 2550
            },
            {
                src: require('../assets/img/business-stationery-mock-up.jpg'),
                width: 3000,
                height: 1980
            },
            {
                src: require('../assets/img/collection of boxes.jpg'),
                width: 2000,
                height: 1622
            },
            {
                src: require('../assets/img/donut.jpg'),
                width: 3000,
                height: 819
            },
            {
                src: require('../assets/img/donut010.png'),
                width: 3666,
                height: 2988
            },
            {
                src: require('../assets/img/glass cup 01.jpg'),
                width: 6287,
                height: 5219
            },
            {
                src: require('../assets/img/fur.jpg'),
                width: 3000,
                height: 819
            },
            {
                src: require('../assets/img/Packages.jpg'),
                width: 3000,
                height: 1325
            },
            {
                src: require('../assets/img/Packages2.jpg'),
                width: 3000,
                height: 1325
            },
         ],
    },
    {
        image: require('../assets/Flyers.jpg'),
        title: 'Flyers',
        description: 'Flyers Description',
        collection: [ require('../assets/Flyers.jpg'), require('../assets/Flyers.jpg'), require('../assets/Flyers.jpg'), require('../assets/Flyers.jpg'),],
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
        title: '3D Modeling',
        description: '3D Description',
        collection: [],
    },
    {
        image: require('../assets/Stock_Photo.jpg'),
        title: 'Stock Photography',
        description: 'Stock Photo Description',
        collection: [],
    },
    {
        image: require('../assets/Product_Photo.jpg'),
        title: 'Product Photography',
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
    let [Title, setTitle] = useState("")
    let [Description, setDescription] = useState("")
    let [Collection, setCollection] = useState([])

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal(title, description, collection) {
      setIsOpen(true)
      setTitle(title)
      setDescription(description)
      setCollection(collection)
    }

  return (
    <div id="portfolio" className="bg-slate-100">
        <div className="container m-auto py-6 md:py-24">
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="hidden md:block font-bold text-5xl md:text-7xl lg:text-9xl md:text-left absolute left-24 text-text-primary/10 select-none">Portfolio</h1>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">Portfolio</h1>
            </div>
            <div className="mx-auto px-8 md:px-14 lg:px-24 w-full space-x-2 mt-24">
                {projects.map(({title, description, collection, index}) => (
                    <a className="border-2 border-theme py-2 px-5 hover:bg-theme hover:text-white cursor-pointer" key={index} onClick={() => openModal(title, description, collection)}>{title}</a>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:my-24 mx-6 md:mx-16 lg:mx-24 my-16">
                {projects.map(({ image, title, description, collection, index }) => (
                    <button type="button" onClick={() => openModal(title, description, collection)} key={title}>
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
                                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">{Title}</h1>
                            </div>
                            {/* Description */}
                            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                                <h1 className="text-xs md:text-sm lg:text-base md:text-left text-text-secondary">{Description}</h1>
                            </div>
                            {/* Gallery */}
                            <div className="md:my-24 mx-6 md:mx-16 lg:mx-24 my-16">
                                <PhotoAlbum layout="rows" photos={Collection} renderPhoto={NextJsImage} targetRowHeight={550}/>
                            </div>
                            {/* Close */}
                            <div className="absolute h-8 w-8 top-0 right-0 mr-32 mt-12 cursor-pointer hover:scale-110 fill-theme" onClick={closeModal}>  
                                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
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