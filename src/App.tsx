import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Carousel } from "./components/Carousel" 
import { Services } from "./components/Services" 

export const App = () => (
  <ChakraProvider theme={theme}>
     <Navbar/>
     <Carousel/>
     <Services/>
     <Footer/>
  </ChakraProvider>
)
