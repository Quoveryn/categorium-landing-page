import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import monitor from "../assets/Images/monitor.png";
import telefono from "../assets/Images/telefono.png";
import video1 from "../assets/Images/video1.mp4";
import video2 from "../assets/Images/video2.mp4";
import video3 from "../assets/Images/video3.mp4";
import video4 from "../assets/Images/video4.mp4";
import video5 from "../assets/Images/video5.mp4";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  position: relative;
  display: flex;
  color: #fff;
  overflow: hidden;
  
  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 2;

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

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: relative;

  @media (max-width: 64em) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const DeviceContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const MonitorContainer = styled.div`
  position: relative;
  max-width: 780px;
  width: 100%;

  @media (max-width: 64em) {
    max-width: 350px;
  }

  @media (max-width: 48em) {
    max-width: 300px;
  }
`;

const Monitor = styled.img`
  width: 100%;
  height: auto;
  z-index: 2;
  position: relative;
`;

const VideoContainer = styled.div`
  position: absolute;
  /* Coordenadas ajustadas para cubrir exactamente la pantalla del monitor */
  top: 19%; /* Más arriba para cubrir todo el área de la pantalla */
  left: 10%; /* Más a la izquierda */
  width: 82%; /* Más ancho para cubrir toda la pantalla */
  height: 45%; /* Más alto para cubrir toda la pantalla */
  z-index: 1;
  overflow: hidden;
  border-radius: 2px; /* Radio pequeño para coincidir con la pantalla */
  
  /* Ajustar para pantallas más pequeñas */
  @media (max-width: 64em) {
    top: 6.8%;
    left: 11.2%;
    width: 77.5%;
    height: 67%;
  }

  @media (max-width: 48em) {
    top: 7%;
    left: 11.5%;
    width: 77%;
    height: 66%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill; /* Fuerza el video a llenar todo el espacio, estirando si es necesario */
  opacity: ${props => props.active ? 1 : 0};
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  border-radius: 2px; /* Coincide con el border-radius del container */
`;

const PhoneContainer = styled.div`
  position: relative;
  max-width: 220px;
  width: 100%;

  @media (max-width: 64em) {
    max-width: 100px;
  }

  @media (max-width: 48em) {
    max-width: 150px;
    margin-top: -2rem;
  }
`;

const Phone = styled.img`
  width: 100%;
  height: auto;
  z-index: 3;
  position: relative;
`;

const PhoneVideoContainer = styled.div`
  position: absolute;
  /* Coordenadas ajustadas para la pantalla del teléfono */
  top: 8%; /* Desde la parte superior del teléfono */
  left: 27%; /* Desde la izquierda del teléfono */
  width: 45%; /* Ancho de la pantalla del teléfono */
  height: 84%; /* Alto de la pantalla del teléfono */
  z-index: 2;
  overflow: hidden;
  border-radius: 15px; /* Radio más grande para simular la pantalla curva del teléfono */
  
  @media (max-width: 64em) {
    top: 8.5%;
    left: 10.5%;
    width: 60%;
    height: 83%;
    border-radius: 8px;
  }

  @media (max-width: 48em) {
    top: 8%;
    left: 29%;
    width: 40%;
    height: 84%;
    border-radius: 12px;
  }
`;

const PhoneVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 15px;
  
  @media (max-width: 64em) {
    border-radius: 8px;
  }

  @media (max-width: 48em) {
    border-radius: 12px;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  position: absolute;
  top: 3rem;
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
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);
  const phoneVideoRef = useRef(null);
  
  const videos = [video1, video2, video3, video4];
  const phoneVideo = video5;

  useEffect(() => {
    const videoElements = videoRefs.current;

    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    // Agregar event listener al video actual
    if (videoElements[currentVideo]) {
      videoElements[currentVideo].addEventListener('ended', handleVideoEnd);
    }

    // Cleanup
    return () => {
      videoElements.forEach((video, index) => {
        if (video) {
          video.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, [currentVideo, videos.length]);

  useEffect(() => {
    // Reproducir el video actual y pausar los demás (monitor)
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; // Reiniciar el video
        }
      }
    });

    // Reproducir video del teléfono en loop
    if (phoneVideoRef.current) {
      phoneVideoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <Section className="about">
      <ContentWrapper>
        <Title></Title>
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
        </Left>

        <Right>
          <DeviceContainer>
            <MonitorContainer>
              <Monitor 
                src={monitor} 
                alt="Monitor mostrando la plataforma"
              />
              <VideoContainer>
                {videos.map((videoSrc, index) => (
                  <Video
                    key={index}
                    ref={el => videoRefs.current[index] = el}
                    src={videoSrc}
                    active={index === currentVideo}
                    muted
                    playsInline
                  />
                ))}
              </VideoContainer>
            </MonitorContainer>
            
            <PhoneContainer>
              <Phone 
                src={telefono} 
                alt="Teléfono con la aplicación móvil"
              />
              <PhoneVideoContainer>
                <PhoneVideo
                  ref={phoneVideoRef}
                  src={phoneVideo}
                  muted
                  loop
                  playsInline
                />
              </PhoneVideoContainer>
            </PhoneContainer>
          </DeviceContainer>
        </Right>
      </ContentWrapper>
    </Section>
  );
};

export default About;