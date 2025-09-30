import React, { useState, useEffect, useRef } from "react";
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

const About = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const videoRefs = useRef([]);
  const phoneVideoRef = useRef(null);
  const sectionRef = useRef(null);
  
  const videos = [video1, video2, video3, video4];
  const phoneVideo = video5;

  const animatedCount1 = useCountUp(4500, 3541, startCounter);
  const animatedCount2 = useCountUp(80, 2800, startCounter);
  const animatedCount3 = useCountUp(20, 1900, startCounter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-50px'
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
  }, []);

  useEffect(() => {
    const videoElements = videoRefs.current;

    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    if (videoElements[currentVideo]) {
      videoElements[currentVideo].addEventListener('ended', handleVideoEnd);
    }

    return () => {
      videoElements.forEach((video) => {
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
    <section 
      ref={sectionRef}
      className="about"
      style={{
        minHeight: '100vh',
        width: '100vw',
        margin: 0,
        position: 'relative',
        display: 'flex',
        color: '#fff',
        overflow: 'hidden',
        padding: '4rem 0'
      }}
    >
      <div style={{
        width: '90vw',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '3rem',
        alignItems: 'start',
        position: 'relative',
        zIndex: 2
      }}>
        {/* COLUMNA IZQUIERDA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <img 
            src={tituloabout}
            alt="Título About"
            style={{
              width: '100%',
              maxWidth: '420px',
              height: 'auto',
              display: 'block'
            }}
          />
          <div style={{
            fontSize: '2.1rem',
            fontWeight: 400,
            lineHeight: '150%',
            color: '#fff'
          }}>
            Somos la plataforma que digitaliza de punta a punta los torneos de vóley. 
            Generamos fixtures en segundos, programamos partidos, calculamos tablas, 
            playoffs y publicamos todo en una web unificada para federaciones y clubes.
          </div>
          
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            
          </div>
        </div>

        {/* COLUMNA CENTRAL */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px'
          }}>
            <img 
              src={monitor}
              alt="Monitor mostrando la plataforma"
              style={{
                width: '100%',
                height: 'auto',
                zIndex: 2,
                position: 'relative',
                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '19%',
              left: '10%',
              width: '82%',
              height: '45%',
              zIndex: 1,
              overflow: 'hidden',
              borderRadius: '3px'
            }}>
              {videos.map((videoSrc, index) => (
                <video
                  key={index}
                  ref={el => videoRefs.current[index] = el}
                  src={videoSrc}
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    opacity: index === currentVideo ? 1 : 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'opacity 0.5s ease-in-out',
                    borderRadius: '2px'
                  }}
                />
              ))}
            </div>
          </div>
          
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '200px'
          }}>
            <img 
              src={telefono}
              alt="Teléfono con la aplicación móvil"
              style={{
                width: '200%',
                height: 'auto',
                zIndex: 3,
                position: 'relative',
                left: '-50%',  
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '5.2%',
              left: '2.9%',
              width: '149.8%',
              height: '87.6%',
              zIndex: 2,
              overflow: 'hidden',
              borderRadius: '19px'
            }}>
              <video
                ref={phoneVideoRef}
                src={phoneVideo}
                muted
                loop
                playsInline
                style={{
                  width: '60%',
                  height: '100%',
                  objectFit: 'fill',
                  borderRadius: '15px',
                
                }}
              />
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <img 
            src={pregunta}
            alt="¿Por qué?"
            style={{
              width: '120%',
              maxWidth: '350px',
              height: 'auto'
            }}
          />
          <div style={{
            fontSize: '1.8rem',
            fontWeight: 400,
            lineHeight: '150%',
            color: '#fff'
          }}>
            Porque elimina planillas y errores, se adapta a reglamentos distintos 
            por federación, maneja roles/permiso de usuarios y muestra resultados 
            en tiempo real con una UI rápida y responsive.
          </div>
          <div style={{ textAlign: 'left' }}>
              <span style={{
                top: '19%',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#00ff88',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                display: 'block',
                letterSpacing: '2px'
              }}>
                +{animatedCount1.toLocaleString()}
              </span>
              <span style={{
                fontSize: '0.95rem',
                color: '#00ff88',
                display: 'block',
                marginTop: '0.5rem',
                fontWeight: 500
              }}>
                Partidos jugados
              </span>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#00ff88',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                display: 'block',
                letterSpacing: '2px'
              }}>
                +{animatedCount2.toLocaleString()}
              </span>
              <span style={{
                fontSize: '0.95rem',
                color: '#00ff88',
                display: 'block',
                marginTop: '0.5rem',
                fontWeight: 500
              }}>
                torneos por categoria
              </span>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#00ff88',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                display: 'block',
                letterSpacing: '2px'
              }}>
                +{animatedCount3.toLocaleString()}
              </span>
              <span style={{
                fontSize: '0.95rem',
                color: '#00ff88',
                display: 'block',
                marginTop: '0.5rem',
                fontWeight: 500
              }}>
                usuarios activos
              </span>
            </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 64em) {
          .about > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            width: 85vw !important;
          }
          .about {
            flex-direction: column !important;
            min-height: auto !important;
            padding: 3rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;