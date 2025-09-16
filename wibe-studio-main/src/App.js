import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";

import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import Marquee from "./sections/Marquee";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

// Modal imports
import { ModalProvider } from "./modals/ModalSt";
import Modal from "./modals/Modalnewarrival";

function App() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <ModalProvider>
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              smartphone: { smooth: true },
              tablet: { smooth: true },
            }}
            containerRef={containerRef}
          >
            <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <ScrollTriggerProxy />
              <AnimatePresence>
                {Loaded ? null : <Loader />}
                <Home key="home" />
                <About key="about" />
                <Shop key="Shop" />
                <Marquee key="marquee" />
                <NewArrival key="new-arrival" />
                <Footer key="Footer" />
              </AnimatePresence>
            </main>
          </LocomotiveScrollProvider>
          <Modal />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

export default App;