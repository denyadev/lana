
import { React, useState, useEffect, Fragment } from 'react'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useRouter } from "next/router";
import Link from 'next/link'

import PhotoAlbum from "react-photo-album";
import NextJsImage from "../NextJsImage"

// import NextJsImage from "../components/NextJsImage";


import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";



function Work(props) {

    const [index, setIndex] = useState(-1);
    
    return (
        
        <div className="items-center justify-center p-4 text-center mt-8">
            {/* Title */}
            <div className="items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-left secondary-title text-text-primary">{props.title}</h1>
            </div>
            {/* Gallery */}
            <div className="md:my-12 mx-6 md:mx-16 lg:mx-24 my-16">
                <PhotoAlbum layout="rows" photos={props?.collection} renderPhoto={NextJsImage} targetRowHeight={600} onClick={(event, photo, index) => setIndex(index)}/>
                <Lightbox
                    slides={props.collection}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>
            {/* Close */}
            <Link href="/#portfolio">
                <div className="fixed top-0 h-8 w-8 right-0 mr-12 mt-12 cursor-pointer hover:scale-110 fill-theme">  
                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                </div>
            </Link>
        </div>
  )
}



export async function getServerSideProps(context) {
    console.log(context.query);
    return {
      props: {
        title: context.query.title || null,
        collection: JSON.parse(context.query.collection) || null
      },
    }
  }

export default Work
