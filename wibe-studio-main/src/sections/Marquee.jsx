// import React from 'react';
import styled from "styled-components";

const Section = styled.section`
-  min-height: 100vh;
-  width: 80vw;
-  margin: 0 auto;
+  min-height: 100vh;
+  width: 100vw;         /* ocupar todo el ancho de la ventana */
+  margin: 0;            /* eliminar márgenes laterales */
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const Banner = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  span {
    display: block;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
          >
            LA VIDA ME DIO DOS PIERNAS
          </span>
        </Banner>
        <Banner
          data-scroll
          data-scroll-speed="-2"
          data-scroll-target="#direction"
        >
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            PARA JUGAR AL FUTBOL
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            NO PARA ESTAR DETRAS DE UNA CHICA
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
            A LA QUE
          </span>
        </Banner>
        <Banner
          data-scroll
          data-scroll-speed="6"
          data-scroll-target="#direction"
        >
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            NO LE INTERESO.
          </span>
        </Banner>
      </Container>
    </Section>
  );
};

export default Marquee;
