import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery';
import Gallery from 'react-photo-gallery';

export default function IGemGallery(props) {
    const [galleryOpened, setGalleryOpened] = useState(false);
  const [index, setIndex] = useState(0);
    return (
        <Box padding='4'>
            <Box maxW='1400px' mx="auto"  textAlign={['center','center','left']}><Text color='igem.white' as="u" fontSize='2em' >{props.title}</Text></Box>
        <Box maxW="1200px" mx="auto" >
            <Gallery
              photos={props.photos}
              direction={"column"}
              onClick={(e, obj) => {
                setIndex(obj.index);
                setGalleryOpened(true);
              }}
              columns={4}
              limitNodeSearch={1}
            />
          <ReactBnbGallery
          show={galleryOpened}
          photos={props.photos}
          activePhotoIndex={index}
          onClose={() => setGalleryOpened(!galleryOpened)}
          showThumbnails={false}
          opacity={0.8}
        />
        </Box>
        </Box>
    )
}
