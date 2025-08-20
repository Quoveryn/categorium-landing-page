import React, { Suspense } from 'react';
import styled from 'styled-components';

const CoverVideo = React.lazy(() => import('../components/CoverVideo'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const Logo = React.lazy(() => import('../components/Logo'));

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const CTAButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 20;
  
  background: linear-gradient(135deg, #000a99ff 0%, #0044ffff 100%);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #00027aff 0%, #0022b8ff 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const Home = () => {
  const scrollToSubscription = () => {
    // Método 1: Buscar por ID
    let targetElement = document.getElementById('fixed-target');
    
    // Método 2: Si no encuentra por ID, buscar por clase
    if (!targetElement) {
      targetElement = document.querySelector('.new-arrival');
    }
    
    if (targetElement) {
      // Scroll suave nativo del navegador
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      // Último fallback: scroll por posición estimada
      console.log('No se encontró la sección, intentando scroll manual...');
      window.scrollTo({
        top: window.innerHeight, // Asume que está después del primer viewport
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="home">
      <Suspense fallback={<></>}>
        <Logo />
        <Navbar />
        <CoverVideo />
      </Suspense>
      
      <CTAButton onClick={scrollToSubscription}>
        ¡Lo quiero!
      </CTAButton>
    </Section>
  );
};

export default Home;