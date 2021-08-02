import logo from "./logo.svg";
import "./App.css";
import "react-bnb-gallery/dist/style.css";
import Slidergallery from "./components/slidergallery";
import ReactBnbGallery from "react-bnb-gallery";
// import { Gallery } from './components/slidergallerywix';
import Gallery from "react-photo-gallery";
import photo1 from "./pictures/1.jpg";
import photo2 from "./pictures/2.jpg";
import photo3 from "./pictures/3.jpg";
import photo4 from "./pictures/4.jpg";
import photo5 from "./pictures/5.jpg";
import photo6 from "./pictures/6.jpg";
import photo7 from "./pictures/7.jpg";
import photo8 from "./pictures/8.jpg";
import photo9 from "./pictures/9.jpg";
import { useState } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import IGemGallery from "./components/IGemGallery";

const pictures = [
  {
    src: photo1,
    photo: photo1,
    width: "177",
    height: "221",
  },
  {
    src: photo2,
    photo: photo2,
    width: "1365",
    height: "2048",
  },
  {
    src: photo3,
    photo: photo3,
    width: "1365",
    height: "2048",
  },
  {
    src: photo4,
    photo: photo4,
    width: "1365",
    height: "2048",
  },
  {
    src: photo5,
    photo: photo5,
    width: "1365",
    height: "2048",
  },
  {
    src: photo6,
    photo: photo6,
    width: "177",
    height: "217",
  },
  {
    src: photo7,
    photo: photo7,
    width: "59",
    height: "62",
  },
  {
    src: photo8,
    photo: photo8,
    width: "177",
    height: "221",
  },
  {
    src: photo9,
    photo: photo9,
    width: "1365",
    height: "2048",
  },
];

const photos = [
  {
    photo: photo1,
  },
  {
    photo: photo2,
  },
  {
    photo: photo3,
  },
  {
    photo: photo4,
  },
  {
    photo: photo5,
  },
  {
    photo: photo6,
  },
  {
    photo: photo7,
  },
  {
    photo: photo8,
  },
  {
    photo: photo9,
  },
];

function App() {
  return (
    <div className="App">
      <Box bg={"igem.grey"} minH="100vh">
        <Box bg={"igem.green"} width="100%" height="4xs" marginBottom="8">
          <Box
            fontSize={['7xl',"8xl"]}
            textAlign={"center"}
            color={"igem.white"}
            width={"auto"}
            height={"auto"}
          >
            Gallery
          </Box>
            <Text as="i" fontSize={['xl',"2xl"]} color={"igem.white"}>
              "A picture is worth a thousand bucks."
            </Text>
            <Text as='cite' color={"igem.white"} fontSize="xl">-the photographer</Text>
        </Box>
        <IGemGallery photos={pictures} title={"Labs"} />
        <IGemGallery photos={pictures} title={"HR"} />
      </Box>
    </div>
  );
}

export default App;
