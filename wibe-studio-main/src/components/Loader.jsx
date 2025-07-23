import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

// Importa tu logo
import logoCategorium from '../assets/Images/logo_categorium.png';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    img {
      width: 20vw;
    }
  }

  img {
    width: 10vw;
    height: auto;
    object-fit: contain;
  }
`;

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.img
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        src={logoCategorium}
        alt="Categorium"
      />
      <Text variants={textVariants} initial="hidden" animate="visible">
      </Text>
    </Container>
  );
};

export default Loader;