// import { motion } from 'framer-motion';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useModal } from "../modals/ModalSt";

const PlanBasicoCard = styled.div`
  width: 280px;
  height: 420px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 10px;
  border: 2px solid #dee2e6;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 48em) {
    width: 240px;
    height: 380px;
    padding: 20px 18px;
  }

  @media (max-width: 30em) {
    width: 220px;
    height: 360px;
    padding: 18px 15px;
  }
`;

const PlanHeader = styled.div`
  text-align: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dee2e6;
`;

const PlanTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1976d2;
  margin: 0;
  font-family: "Arial", sans-serif;
  letter-spacing: -1px;

  @media (max-width: 48em) {
    font-size: 1.6rem;
  }

  @media (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

const PlanSubtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #000000;
  margin: 5px 0 0 0;
  font-family: "Arial", sans-serif;

  @media (max-width: 48em) {
    font-size: 1.2rem;
  }

  @media (max-width: 30em) {
    font-size: 1.1rem;
  }
`;

const PlanFeatures = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;

  @media (max-width: 30em) {
    gap: 8px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #495057;
  font-weight: 500;

  @media (max-width: 48em) {
    font-size: 0.85rem;
    gap: 8px;
  }

  @media (max-width: 30em) {
    font-size: 0.8rem;
  }
`;

const CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "✓";
    color: white;
    font-weight: bold;
    font-size: 12px;
  }

  @media (max-width: 30em) {
    width: 18px;
    height: 18px;

    &::after {
      font-size: 11px;
    }
  }
`;

const PlanBasicoComponent = ({ onClick, title = "BÁSICO", features }) => (
  <PlanBasicoCard onClick={onClick}>
    <PlanHeader>
      <PlanTitle>PLAN</PlanTitle>
      <PlanSubtitle>{title}</PlanSubtitle>
    </PlanHeader>

    <PlanFeatures>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <CheckIcon />
          {feature}
        </FeatureItem>
      ))}
    </PlanFeatures>
  </PlanBasicoCard>
);

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Arial", sans-serif;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    top: 0.8rem;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    top: 0.5rem;
  }
`;

// const Text = styled.div`
//   width: 20%;
//   font-size: ${(props) => props.theme.fontlg};
//   font-weight: 300;
//   position: absolute;
//   padding: 2rem;
//   top: 0;
//   right: 0;
//   z-index: 11;
//   color: #fff;
//   text-shadow: 1px 1px 2px rgba(0,0,0,0.3);

//   @media (max-width: 48em) { display: none; }
// `;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  h2 {
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;
    margin-top: 1rem;

    @media (max-width: 48em) {
      font-size: 1.3rem;
    }

    @media (max-width: 30em) {
      font-size: 1.1rem;
    }
  }
`;

const Photos = ({
  img,
  name,
  onClick,
  isPlan = false,
  planType,
  planFeatures,
}) => (
  <Item>
    {isPlan ? (
      <PlanBasicoComponent
        onClick={onClick}
        title={planType}
        features={planFeatures}
      />
    ) : (
      <img
        width="280"
        height="420"
        src={img}
        alt={name}
        onClick={onClick}
        style={{
          cursor: "pointer",
          zIndex: 5,
          borderRadius: "10px",
          transition: "transform 0.3s",
        }}
      />
    )}
    <h2>{name}</h2>
  </Item>
);

const NewArrival = () => {
  const { openModal } = useModal();
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 2.5}px)`;

      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=50% top-=100%",
          scroller: ".App",
          scrub: 1,
          pin: true,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        { y: "0" },
        {
          y: "-50%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: 1,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Suscripcion
      </Title>
      <Container ref={ScrollingRef}>
        <Photos
          name="Plan Básico"
          onClick={() => openModal("planbasico")}
          isPlan={true}
          planType="BÁSICO"
          planFeatures={[
            "Soporte y Mantenimiento",
            "Característica dos",
            "Característica tres",
            "Característica cuatro",
            "Característica cinco",
          ]}
        />
        <Photos
          name="Plan Premium"
          onClick={() => openModal("planpremium")}
          isPlan={true}
          planType="PREMIUM"
          planFeatures={[
            "Todo del plan básico",
            "Soporte prioritario 24/7",
            "Funciones avanzadas",
            "Análisis detallados",
            "Personalización completa",
          ]}
        />
      </Container>
    </Section>
  );
};

export default NewArrival;
