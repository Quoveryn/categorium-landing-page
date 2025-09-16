import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "./ModalSt";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #666;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    color: #333;
  }
`;

const SubscriptionCard = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    min-height: 500px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 30px;
`;

const PlanTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #1976d2;
  margin: 0 0 10px 0;
  font-family: 'Arial', sans-serif;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PlanSubtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PlanPrice = styled.div`
  margin-top: 20px;
  
  .price {
    font-size: 3rem;
    font-weight: 700;
    color: #1976d2;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .period {
    font-size: 1.2rem;
    color: #666;
    font-weight: 400;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 30px 0;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: rgba(25, 118, 210, 0.05);
  border-radius: 10px;
  border-left: 4px solid #1976d2;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(25, 118, 210, 0.15);
  }
`;

const CheckIcon = styled.div`
  width: 28px;
  height: 28px;
  background: #1976d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;

  &::after {
    content: '✓';
    color: white;
    font-weight: bold;
    font-size: 16px;
  }
`;

const FeatureText = styled.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
  line-height: 1.4;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e9ecef;
`;

const SubscribeButton = styled.a`
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  padding: 18px 60px;
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(25, 118, 210, 0.4);
    background: linear-gradient(135deg, #1565c0 0%, #0d47a1 100%);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 15px 40px;
    font-size: 1.1rem;
    width: 100%;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;


const planData = {
  planbasico: {
    title: "PLAN BÁSICO",
    price: "$70",
    period: "/mes",
    badge: "Más Popular",
    features: [
      "Soporte y Mantenimiento 24/7",
      "Gestión básica de torneos",
      "Hasta 100 jugadores registrados",
      "Estadísticas básicas",
      "Acceso a aplicación móvil",
      "Soporte por email",
      "Actualizaciones automáticas",
      "Panel de administración básico"
    ]
  },
  planpremium: {
    title: "PLAN PREMIUM",
    price: "$150",
    period: "/mes",
    badge: "Recomendado",
    features: [
      "Todo del plan básico incluido",
      "Soporte prioritario 24/7",
      "Jugadores ilimitados",
      "Análisis detallados y reportes",
      "Personalización completa de marca",
      "API para integraciones",
      "Múltiples administradores",
      "Backup automático diario",
      "Transmisiones en vivo",
      "Dashboard avanzado con métricas"
    ]
  }
};

const Modalnewarrival = () => {
  const { isOpen, modalContent, closeModal } = useModal();

  const renderSubscriptionModal = (planType) => {
    const plan = planData[planType];
    if (!plan) return null;

    return (
      <SubscriptionCard>
        <CloseButton onClick={closeModal}>×</CloseButton>
        {plan.badge && <Badge>{plan.badge}</Badge>}
        
        <Header>
          <PlanTitle>PLAN</PlanTitle>
          <PlanSubtitle>{plan.title.split(' ')[1]}</PlanSubtitle>
          <PlanPrice>
            <span className="price">{plan.price}</span>
            <span className="period">{plan.period}</span>
          </PlanPrice>
        </Header>

        <FeaturesGrid>
          {plan.features.map((feature, index) => (
            <FeatureItem key={index}>
              <CheckIcon />
              <FeatureText>{feature}</FeatureText>
            </FeatureItem>
          ))}
        </FeaturesGrid>

        <ButtonContainer>
          <SubscribeButton 
            href="https://zenrise.io" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Suscribirse Ahora
          </SubscribeButton>
        </ButtonContainer>
      </SubscriptionCard>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {}
            {(modalContent === 'planbasico' || modalContent === 'planpremium') ? 
              renderSubscriptionModal(modalContent) :
              modalContent && <img src={modalContent} alt="Modal Content" />
            }
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modalnewarrival;