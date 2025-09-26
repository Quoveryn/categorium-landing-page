import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import tituloabout from "../assets/Images/tituloabout.png";
import monitor from "../assets/Images/monitor.png";
import telefono from "../assets/Images/telefono.png";
import video1 from "../assets/Images/video1.mp4";
import video2 from "../assets/Images/video2.mp4";
import video3 from "../assets/Images/video3.mp4";
import video4 from "../assets/Images/video4.mp4";
import video5 from "../assets/Images/video5.mp4";
import pregunta from "../assets/Images/pregunta.png";

// Hook personalizado para la animación del contador
const useCountUp = (endValue, duration = 2000, startAnimation = false) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // easing (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * endValue));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [endValue, duration, startAnimation]);

  return count;
};

// Contenedor principal de la sección
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
    min-height: auto;
  }
`;

const Pregunta = styled.img`
  width: 70%;
  
`;
// Imagen del título
const TituloAbout = styled.img`
  width: 100%;
  max-width: 520px;
  height: auto;
  display: block;
  margin-bottom: 2rem;
  
  @media (max-width: 48em) {
    max-width: 400px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 30em) {
    max-width: 350px;
  }
`;

// Wrapper del contenido
const ContentWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 2;
  align-items: center;
  gap: 15rem;

  @media (max-width: 48em) {
    width: 90vw;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0;
  }

  @media (max-width: 30em) {
    width: 95vw;
  }
`;

// SECCIÓN DE TEXTO - Completamente independiente
const TextSection = styled.div`
  flex: 1;
  max-width: 500px;
  z-index: 5;
  
  @media (max-width: 48em) {
    max-width: 100%;
    text-align: center;
    order: 2; /* El texto aparece después de las imágenes en móviles */
  }
`;

const TextContent = styled.div`
  font-size: 1.2rem;
  font-weight: 105;
  line-height: 130%;
  color: #fff;
  

  @media (max-width: 64em) {
    font-size: 1.8rem;
    backdrop-filter: blur(2px);
  
    padding: 1.5rem;
    border-radius: 15px;
  }

  @media (max-width: 48em) {
    font-size: 1.8rem;
    padding: 1.2rem;
  }

  @media (max-width: 30em) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

// Estilos para los contadores animados
const CountersWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  
  @media (max-width: 48em) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const CounterContainer = styled.div`
  flex: 1;
  text-align: center;
  
  @media (max-width: 48em) {
    text-align: center;
  }
`;

const CounterNumber = styled.span`
  font-size: 2.8rem;
  font-weight: 900;
  color: #00ff88;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
  display: block;
  letter-spacing: 2px;
  
  @media (max-width: 64em) {
    font-size: 2.5rem;
  }

  @media (max-width: 48em) {
    font-size: 2.2rem;
  }

  @media (max-width: 30em) {
    font-size: 2rem;
  }
`;

const CounterLabel = styled.span`
  font-size: 1rem;
  color: #00ff88;
  display: block;
  margin-top: 0.5rem;
  font-weight: 500;
  
  @media (max-width: 48em) {
    font-size: 0.9rem;
  }

  @media (max-width: 30em) {
    font-size: 0.8rem;
  }
`;

// SECCIÓN DE DISPOSITIVOS - Completamente independiente
const DevicesSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: relative;
  min-height: 400px;

  @media (max-width: 48em) {
    order: 1; /* Los dispositivos aparecen primero en móviles */
    min-height: 300px;
  }
`;

const DeviceContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: 64em) {
    gap: 1rem;
    max-width: 600px;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
  }
`;

// ESTILOS DEL MONITOR - Independientes
const MonitorContainer = styled.div`
  position: relative;
  flex: 2;
  max-width: 900px;
  width: 190%;

  @media (max-width: 64em) {
    max-width: 400px;
  }

  @media (max-width: 48em) {
    max-width: 350px;
  }

  @media (max-width: 30em) {
    max-width: 300px;
  }
`;

const Monitor = styled.img`
  width: 100%;
  height: auto;
  z-index: 2;
  position: relative;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 19%;
  left: 10%;
  width: 82%;
  height: 45%;
  z-index: 1;
  overflow: hidden;
  border-radius: 3px;
  
  @media (max-width: 64em) {
    top: 6.8%;
    left: 11%;
    width: 71.5%;
    height: 40%;
  }

  @media (max-width: 48em) {
    top: 17%;
    left: 10%;
    width: 84%;
    height: 45%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  opacity: ${props => props.active ? 1 : 0};
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  border-radius: 2px;
`;

// ESTILOS DEL TELÉFONO - Independientes
const PhoneContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 200px;
  width: 100%;

  @media (max-width: 64em) {
    max-width: 120px;
    right: 11%;
  }

  @media (max-width: 48em) {
    max-width: 150px;
    margin-top: -1rem;
  }

  @media (max-width: 30em) {
    max-width: 120px;
  }
`;

const Phone = styled.img`
  width: 160%;
  height: auto;
  z-index: 3;
  position: relative;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
`;

const PhoneVideoContainer = styled.div`
  position: absolute;
  top: 8%;
  left: 45%;
  width: 70%;
  height: 84%;
  z-index: 2;
  overflow: hidden;
  border-radius: 15px;
  
  @media (max-width: 64em) {
    top: 8.5%;
    left: 10.5%;
    width: 79%;
    height: 83%;
    border-radius: 8px;
  }

  @media (max-width: 48em) {
    top: 8%;
    left: 46%;
    width: 68%;
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

const About = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const videoRefs = useRef([]);
  const phoneVideoRef = useRef(null);
  const sectionRef = useRef(null);
  
  const videos = [video1, video2, video3, video4];
  const phoneVideo = video5;

  // Hook para las animaciones de los tres contadores
  const animatedCount1 = useCountUp(4500, 3541, startCounter); // AQUÍ CAMBIA EL 4500 POR TU NÚMERO
  const animatedCount2 = useCountUp(80, 2800, startCounter);  // AQUÍ CAMBIA EL 1200 POR TU NÚMERO  
  const animatedCount3 = useCountUp(20, 1900, startCounter);   // AQUÍ CAMBIA EL 850 POR TU NÚMERO

  // Intersection Observer para detectar cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Sección visible, iniciando contador'); // Debug
          setStartCounter(true);
        }
      },
      {
        threshold: 0.5, // Se activa cuando el 50% de la sección es visible
        rootMargin: '-50px' // Añade un margen para activar la animación un poco antes
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []); // Removí la dependencia startCounter para que siempre observe

  useEffect(() => {
    const videoElements = videoRefs.current;

    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    if (videoElements[currentVideo]) {
      videoElements[currentVideo].addEventListener('ended', handleVideoEnd);
    }

    return () => {
      videoElements.forEach((video, index) => {
        if (video) {
          video.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, [currentVideo, videos.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });

    if (phoneVideoRef.current) {
      phoneVideoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <Section className="about" ref={sectionRef}>
      <ContentWrapper>
        <TextSection>
          <TituloAbout src={tituloabout} alt="Título About" />
          <TextContent>
            Somos la plataforma que digitaliza de punta a punta los torneos de vóley. Generamos fixtures en segundos, programamos partidos, 
            calculamos tablas, playoffs y publicamos todo en una web unificada para federaciones y clubes. <br />

           <Pregunta src={pregunta} alt="¡pregunta?" />

            <br />Porque elimina planillas y errores, se adapta a reglamentos distintos por federación, 
             maneja roles/permiso de usuarios y muestra resultados en tiempo real con una UI rápida y responsive.
          </TextContent>
          
          {/* Contadores animados */}
          <CountersWrapper>
            <CounterContainer>
              <CounterNumber>+{animatedCount1.toLocaleString()}</CounterNumber>
              <CounterLabel>Partidos jugados</CounterLabel>
            </CounterContainer>
            
            <CounterContainer>
              <CounterNumber>+{animatedCount2.toLocaleString()}</CounterNumber>
              <CounterLabel>torneos por categoria</CounterLabel>
            </CounterContainer>
            
            <CounterContainer>
              <CounterNumber>+{animatedCount3.toLocaleString()}</CounterNumber>
              <CounterLabel>usuarios activos</CounterLabel>
            </CounterContainer>
          </CountersWrapper>
        </TextSection>

        {/* SECCIÓN DE DISPOSITIVOS - Independiente y modificable */}
        <DevicesSection>
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
        </DevicesSection>
      </ContentWrapper>
    </Section>
  );
};

export default About;