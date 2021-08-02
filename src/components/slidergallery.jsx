import React, {useState} from 'react'

import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}, {
  photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];




function Slidergallery() {

    const [galleryOpened,setGalleryOpened] =  useState(false);
    return (
        <>
      <button onClick={()=>setGalleryOpened(!galleryOpened)}>Open photo gallery</button>
      <ReactBnbGallery
        show={galleryOpened}
        photos={photos}
        onClose={()=>setGalleryOpened(!galleryOpened)}
        showThumbnails={false} />
    </>
    )
}

export default Slidergallery;


