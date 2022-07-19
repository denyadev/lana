import { React, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";

import ImageComponent from  './ImageComponent.js'

const category = ["Signage, POP", "Flyers", "Labeling", "Books", "Sell Sheets", "3D Modeling", "Stock Photography", "Product Photography", "Stationery"]

const projects = [
    // Signage, POP
    {
        image: require('../assets/Signage.jpg'),
        title: 'Signage, POP',
        description: 'Signage Description',
        collection: [ 
            {
                src: require('../assets/Signage_pop/pop_01.jpg'),
                width: 1467,
                height: 2665
            },
         ],
    },
    // Flyers
    {
        image: require('../assets/Flyers.jpg'),
        title: 'Flyers',
        description: 'Flyers Description',
        collection: [ 
            {
                src: require('../assets/Flyers_sell_sheets/flyer_01.jpg'),
                width: 2500,
                height: 2400
            },
            {
                src: require('../assets/Flyers_sell_sheets/flyer_02.jpg'),
                width: 2500,
                height: 2400
            },
            {
                src: require('../assets/Flyers_sell_sheets/flyer_03.jpg'),
                width: 2500,
                height: 2400
            },
            {
                src: require('../assets/Flyers_sell_sheets/flyer_04.jpg'),
                width: 2500,
                height: 2400
            },
            {
                src: require('../assets/Flyers_sell_sheets/flyer_05.jpg'),
                width: 2500,
                height: 2400
            },
         ],
    },
    // Labeling
    {
        image: require('../assets/Labeling.jpg'),
        title: 'Labeling',
        description: 'Labeling Description',
        collection: [ 
            {
                src: require('../assets/Labeling/labels_01.jpg'),
                width: 3300,
                height: 2550
            },
            {
                src: require('../assets/Labeling/labels_02.jpg'),
                width: 3300,
                height: 2400
            },
            {
                src: require('../assets/Labeling/labels_03.jpg'),
                width: 9940,
                height: 3707
            },
         ],
    },
    // Books
    {
        image: require('../assets/Books.jpg'),
        title: 'Books',
        description: 'Books Description',
        collection: [ 
            {
                src: require('../assets/Books_catalogues/book_01.jpg'),
                width: 3300,
                height: 2550
            },
            {
                src: require('../assets/Books_catalogues/book_02.jpg'),
                width: 3300,
                height: 2550
            },
            {
                src: require('../assets/Books_catalogues/book_03.jpg'),
                width: 3300,
                height: 2550
            },
            {
                src: require('../assets/Books_catalogues/catalogues_01.jpg'),
                width: 3000,
                height: 2000
            },
            {
                src: require('../assets/Books_catalogues/catalogues_02.jpg'),
                width: 4500,
                height: 3000
            },
            {
                src: require('../assets/Books_catalogues/catalogues_03.jpg'),
                width: 3300,
                height: 2550
            },
            {
                src: require('../assets/Books_catalogues/manual_01.jpg'),
                width: 3065,
                height: 2038
            },
         ],
    },
    // Sell Sheets
    {
        image: require('../assets/Sell_Sheets.jpg'),
        title: 'Sell Sheets',
        description: 'Sell Sheets Description',
        collection: [ 
            {
                src: require('../assets/Flyers_sell_sheets/ss_01.jpg'),
                width: 2560,
                height: 2320
            },
            {
                src: require('../assets/Flyers_sell_sheets/ss_02.jpg'),
                width: 2560,
                height: 2320
            },
            {
                src: require('../assets/Flyers_sell_sheets/ss_03.jpg'),
                width: 2560,
                height: 2320
            },
            {
                src: require('../assets/Flyers_sell_sheets/ss_04.jpg'),
                width: 2560,
                height: 2320
            },

         ],
    },
    // 3D
    {
        image: require('../assets/3D.jpg'),
        title: '3D Modeling',
        description: '3D Description',
        collection: [ 
            {
                src: require('../assets/3D/3d_01.jpg'),
                width: 3000,
                height: 1359
            },
            {
                src: require('../assets/3D/3d_02.jpg'),
                width: 3000,
                height: 819
            },
            {
                src: require('../assets/3D/3d_03.jpg'),
                width: 3000,
                height: 819
            },
            {
                src: require('../assets/3D/3d_04.png'),
                width: 3666,
                height: 2988
            },
            {
                src: require('../assets/3D/3d_05.jpg'),
                width: 6287,
                height: 5219
            },
            {
                src: require('../assets/3D/3d_06.jpg'),
                width: 3000,
                height: 2177
            },
            {
                src: require('../assets/3D/3d_07.jpg'),
                width: 3000,
                height: 1325
            },
            {
                src: require('../assets/3D/3d_08.jpg'),
                width: 3000,
                height: 1325
            },
            {
                src: require('../assets/3D/3d_09.jpg'),
                width: 3000,
                height: 889
            },
            {
                src: require('../assets/3D/3d_10.jpg'),
                width: 2000,
                height: 1622
            },
            {
                src: require('../assets/3D/3d_11.jpg'),
                width: 2921,
                height: 2000
            },
            {
                src: require('../assets/3D/3d_12.jpg'),
                width: 3000,
                height: 3000
            },
            {
                src: require('../assets/3D/3d_13.jpg'),
                width: 3000,
                height: 819
            },
        ]
    },
    // Stock Photography
    {
        image: require('../assets/Stock_Photo.jpg'),
        title: 'Stock Photography',
        description: 'Stock Photo Description',
        collection: [
            {
                src: require('../assets/Stock_photography/stock_11.jpg'),
                width: 6000,
                height: 4000
            },
            {
                src: require('../assets/Stock_photography/stock_12.jpg'),
                width: 6000,
                height: 4000
            },
            {
                src: require('../assets/Stock_photography/stock_13.jpg'),
                width: 5095,
                height: 4245
            },
            {
                src: require('../assets/Stock_photography/stock_21.jpg'),
                width: 2852,
                height: 1906
            },
            {
                src: require('../assets/Stock_photography/stock_22.jpg'),
                width: 2962,
                height: 1980
            },
            {
                src: require('../assets/Stock_photography/stock_23.jpg'),
                width: 2988,
                height: 1996
            },
            {
                src: require('../assets/Stock_photography/stock_31.jpg'),
                width: 5692,
                height: 2921
            },
            {
                src: require('../assets/Stock_photography/stock_32.jpg'),
                width: 5633,
                height: 2736
            },
            {
                src: require('../assets/Stock_photography/stock_33.jpg'),
                width: 4268,
                height: 5755
            },
            {
                src: require('../assets/Stock_photography/stock_41.jpg'),
                width: 2990,
                height: 1998
            },
            {
                src: require('../assets/Stock_photography/stock_42.jpg'),
                width: 2990,
                height: 1998
            },
            {
                src: require('../assets/Stock_photography/stock_43.jpg'),
                width: 2990,
                height: 1998
            },
            {
                src: require('../assets/Stock_photography/stock_51.jpg'),
                width: 6378,
                height: 6378
            },
            {
                src: require('../assets/Stock_photography/stock_52.jpg'),
                width: 5378,
                height: 5378
            },
            {
                src: require('../assets/Stock_photography/stock_53.jpg'),
                width: 3298,
                height: 3298
            },
            {
                src: require('../assets/Stock_photography/stock_61.jpg'),
                width: 3860,
                height: 5798
            },
            {
                src: require('../assets/Stock_photography/stock_62.jpg'),
                width: 3387,
                height: 6053
            },
            {
                src: require('../assets/Stock_photography/stock_63.jpg'),
                width: 3994,
                height: 5527
            },
        ],
    },
    // Product Photography
    {
        image: require('../assets/Product_Photo.jpg'),
        title: 'Product Photography',
        description: 'Product Photo Description',
        collection: [ 
            {
                src: require('../assets/Product_photography/photo_01.jpg'),
                width: 4214,
                height: 5051
            },
            {
                src: require('../assets/Product_photography/photo_02.jpg'),
                width: 4521,
                height: 4522
            },
            {
                src: require('../assets/Product_photography/photo_03.jpg'),
                width: 6000,
                height: 3996
            },
            {
                src: require('../assets/Product_photography/photo_04.jpg'),
                width: 5569,
                height: 5569
            },
            {
                src: require('../assets/Product_photography/photo_05.jpg'),
                width: 5698,
                height: 5698
            },
            {
                src: require('../assets/Product_photography/photo_06.jpg'),
                width: 4345,
                height: 4345
            },
            {
                src: require('../assets/Product_photography/photo_07.jpg'),
                width: 4152,
                height: 4152
            },
            {
                src: require('../assets/Product_photography/photo_08.jpg'),
                width: 5148,
                height: 3857
            },
            {
                src: require('../assets/Product_photography/photo_9.jpg'),
                width: 2781,
                height: 1990
            },
            {
                src: require('../assets/Product_photography/photo_10.jpg'),
                width: 2496,
                height: 4160
            },
            {
                src: require('../assets/Product_photography/photo_11.jpg'),
                width: 4678,
                height: 3362
            },
            {
                src: require('../assets/Product_photography/photo_12.jpg'),
                width: 5900,
                height: 3932
            },
            {
                src: require('../assets/Product_photography/photo_13.jpg'),
                width: 5212,
                height: 5212
            },
            {
                src: require('../assets/Product_photography/photo_14.jpg'),
                width: 5116,
                height: 2732
            },
            {
                src: require('../assets/Product_photography/photo_15.jpg'),
                width: 2255,
                height: 2255
            },
            {
                src: require('../assets/Product_photography/photo_16.jpg'),
                width: 5514,
                height: 5514
            },
            {
                src: require('../assets/Product_photography/photo_17.jpg'),
                width: 1556,
                height: 3761
            },
            {
                src: require('../assets/Product_photography/photo_18.jpg'),
                width: 4499,
                height: 3682
            },
            {
                src: require('../assets/Product_photography/photo_19.jpg'),
                width: 5287,
                height: 4088
            },
            {
                src: require('../assets/Product_photography/photo_20.jpg'),
                width: 5200,
                height: 4642
            },
         ],
    },
    // Stationery
    {
        image: require('../assets/Stationery.jpg'),
        title: 'Stationery',
        description: 'Stationery Description',
        collection: [ 
            {
                src: require('../assets/Stationery/stationery_01.jpg'),
                width: 3000,
                height: 1980
            },
         ],
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
    <div className="bg-slate-100">
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
                            {/* Gallery */}
                            <div className="md:my-12 mx-6 md:mx-16 lg:mx-24 my-16">
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