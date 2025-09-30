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
  max-width: 700px;
  max-height: 85vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 85%;
    max-width: 500px;
    max-height: 80vh;
  }

  @media (max-width: 480px) {
    width: 90%;
    max-width: 400px;
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
  margin-bottom: 30px;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 20px;
`;

const PlanTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1976d2;
  margin: 0 0 8px 0;
  font-family: 'Arial', sans-serif;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const PlanSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const PlanPrice = styled.div`
  margin-top: 15px;
  
  .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1976d2;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  .period {
    font-size: 1.1rem;
    color: #666;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 25px 0;
  flex: 1;

  @media (max-width: 768px) {
    gap: 10px;
    margin: 20px 0;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: rgba(25, 118, 210, 0.05);
  border-radius: 8px;
  border-left: 3px solid #1976d2;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(25, 118, 210, 0.15);
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
  }
`;

const CheckIcon = styled.div`
  width: 24px;
  height: 24px;
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
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    
    &::after {
      font-size: 12px;
    }
  }
`;

const FeatureText = styled.div`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;

  @media (max-width: 480px) {
    margin-top: 20px;
    padding-top: 15px;
  }
`;

const SubscribeButton = styled.a`
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  padding: 15px 50px;
  font-size: 1.2rem;
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
    padding: 14px 40px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 1rem;
    width: 90%;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 5px 12px;
  }
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