import React from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../assets/Images/videoejemploabout.mp4";

// Gradient animation
const gradient = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

// Wave animation
const wave = keyframes`
  2% {
    transform: translateX(1);
  }
  25% {
    transform: translateX(-25%);
  }
  50% {
    transform: translateX(-50%);
  }
  75% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(1);
  }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  position: relative;
  display: flex;
  background: linear-gradient(315deg, rgba(255, 217, 0, 1) 3%, rgba(0, 46, 92, 1) 38%, rgba(0, 71, 153, 1) 68%, rgba(0, 15, 228, 1) 98%);
  animation: ${gradient} 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
  color: #fff;
  overflow: hidden;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

// Wave components
const Wave = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: ${wave} 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;

  &:nth-of-type(2) {
    bottom: -1.25em;
    animation: ${wave} 18s linear reverse infinite;
    opacity: 0.8;
  }

  &:nth-of-type(3) {
    bottom: -2.5em;
    animation: ${wave} 20s -1s reverse infinite;
    opacity: 0.9;
  }
`;

const ContentWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 2; /* Above the animated lines */

  @media (max-width: 48em) {
    width: 90vw;
    flex-direction: column;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: 1.9rem;
  font-weight: 300;
  z-index: 5;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  color: #fff;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 90%;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;

  li {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    &::before {
      content: "✔️";
      margin-right: 0.5rem;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3; /* Above the animated lines */

  video {
    width: 100%;
    max-width: 700px;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  @media (max-width: 64em) {
    width: 100%;
    margin-top: 2rem;

    video {
      max-width: 90%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
  color: #fff;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const About = () => {
  return (
    <Section className="about">
      {/* Animated waves background */}
      <Wave />
      <Wave />
      <Wave />
      
      <ContentWrapper>
        <Title>
        </Title>
        <Left>
          <br />
          <p>
            Plataforma digital para la gestión, visibilidad y desarrollo de torneos
            y ligas de vóley.
            <br />
            <br />
            Ofrecemos soluciones para federaciones, clubes y
            deportistas, facilitando estadísticas, programación de partidos, fichaje
            de jugadores y mucho más.
          </p>
          <br />
          <List>
            <li>Gestioná fichajes, calendarios, torneos, arbitrajes, estadísticas y mucho más.</li>
            <li>Centralizá toda la información de tus jugadores, equipos y entrenadores.</li>
            <li>Ahorrá tiempo con herramientas pensadas específicamente para el vóley.</li>
            <li>Accedé a soporte técnico y actualizaciones constantes.</li>
          </List>
        </Left>

        <Right>
          <video 
            src={img1}
            autoPlay
            muted
            loop
            playsInline
          />
        </Right>
      </ContentWrapper>
    </Section>
  );
};

export default About;