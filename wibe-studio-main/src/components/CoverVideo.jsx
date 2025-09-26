import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/pruebaSeleccion.mp4";



// Wrapper que aísla la sección del fondo global y partículas
const CoverWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 10;
  
  /* Asegurar que la fuente esté disponible */
  * {
    font-family: inherit;
  }

  &::before,
  &::after {
    display: none; /* Oculta las partículas del body en esta sección */
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    /* Aplicar la fuente Pacifico con fallbacks */
    font-family: "Pacifico", "Kaushan Script", cursive !important;
    font-size: ${(props) => props.theme.fontBig};
    font-weight: 400; /* Peso específico de Pacifico */
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    letter-spacing: 1px; /* Espaciado ajustado para Pacifico */

    @media (max-width: 30em) {
      font-size: calc(3rem + 8vw);
      left: 5%;
    }
    @media (max-width: 48em) {
      font-size: calc(3rem + 8vw);
      left: 5%;
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil", sans-serif;
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: 1rem;
    }
    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: 1rem;
    }
      @media (max-width: 64em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: 1rem;
    }
  }

  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <CoverWrapper>
      <VideoContainer>
        <DarkOverlay />

        <Title variants={container} initial="hidden" animate="show">
          <div>
            <motion.h1 variants={item}>C</motion.h1>
            <motion.h1 variants={item}>a</motion.h1>
            <motion.h1 variants={item}>t</motion.h1>
            <motion.h1 variants={item}>e</motion.h1>
            <motion.h1 variants={item}>g</motion.h1>
            <motion.h1 variants={item}>o</motion.h1>
            <motion.h1 variants={item}>r</motion.h1>
            <motion.h1 variants={item}>i</motion.h1>
            <motion.h1 variants={item}>u</motion.h1>
            <motion.h1 variants={item}>m</motion.h1>
          </div>
          <motion.h2 style={{ alignSelf: "flex-end" }} variants={item}>
            Crea.    Gestiona.    Organiza.
          </motion.h2>
        </Title>

        <video src={MainVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
    </CoverWrapper>
  );
};

export default CoverVideo;