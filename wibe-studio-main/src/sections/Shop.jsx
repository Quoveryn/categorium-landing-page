import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled(motion.section)`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width:64em){display:none;}
  @media (max-width:48em){display:none;}
`;

const Left = styled.div`
  width: 35%;
  background-color: rgba(2,46,61,0.8);
  color:#fff;
  min-height:100vh;
  z-index:10;
  position:fixed;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  backdrop-filter:blur(10px);

  p{
    font-size:${(p)=>p.theme.fontlg};
    font-weight:300;
    width:80%;
    margin:0 auto;
    text-shadow:1px 1px 2px rgba(0,0,0,0.3);
  }
  @media (max-width:64em){
    p{font-size:${(p)=>p.theme.fontmd};}
  }
  @media (max-width:48em){display:none;}
`;

const Right = styled.div`
  position:absolute;
  left:35%;
  padding-left:30%;
  min-height:100vh;
  display:flex;
  justify-content:flex-start;
  align-items:center;

  @media (max-width:48em){
    left:0;
    padding-left:5%;
    width:100%;
    justify-content:flex-start;
  }
`;

const Item = styled(motion.div)`
  display:inline-block;
  width:20rem;
  margin-right:6rem;
  z-index:2;

  @media (max-width:48em){
    width:15rem;
    margin-right:3rem;
  }
  @media (max-width:30em){
    width:12rem;
    margin-right:2rem;
  }
`;

const FeatureCard = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #1565c0 0%, #0d47a1 100%);
  border-radius: 15px;
  border: 3px solid #ffc107;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 45px rgba(0,0,0,0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 40%, rgba(255, 193, 7, 0.1) 50%, transparent 60%);
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 60px;
    background: rgba(255, 193, 7, 0.2);
    border-radius: 50%;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  z-index: 2;
  position: relative;
  
  @media (max-width: 48em) {
    font-size: 1.1rem;
  }
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 193, 7, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 2px solid #ffc107;
  z-index: 2;
  position: relative;

  &::after {
    content: '🏐';
    font-size: 2rem;
    color: #ffc107;
  }

  @media (max-width: 48em) {
    width: 60px;
    height: 60px;
    
    &::after {
      font-size: 1.5rem;
    }
  }
`;

const AccentDot = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 12px;
  height: 12px;
  background: #ffc107;
  border-radius: 50%;
  z-index: 2;
`;

const AccentLine = styled.div`
  position: absolute;
  top: 50px;
  left: 15px;
  width: 30px;
  height: 2px;
  background: rgba(255, 193, 7, 0.6);
  z-index: 2;
`;

const Product = ({ title }) => (
  <Item
    initial={{ filter: "grayscale(100%)", opacity: 0.7 }}
    whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: "all" }}
  >
    <FeatureCard>
      <AccentDot />
      <AccentLine />
      <CardIcon />
      <CardTitle>{title}</CardTitle>
    </FeatureCard>
  </Item>
);

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">

      <Right data-scroll ref={Horizontalref}>
        <Product title="AGREGAR EQUIPOS, DIVISIONES Y ESTADIOS" />
        <Product title="ROUND ROBIN" />
        <Product title="GRAND PRIX" />
        <Product title="CONFIGURACIÓN DE ENFRENTAMIENTOS" />
        <Product title="CARGA DE RESULTADOS" />
        <Product title="ETAPA FINAL" />
      </Right>
    </Section>
  );
};

export default Shop;