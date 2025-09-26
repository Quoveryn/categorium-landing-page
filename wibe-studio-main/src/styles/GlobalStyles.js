import { createGlobalStyle, keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% { background-position: 0% 0%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
  100% { background-position: 0% 0%; }
`;

const float = keyframes`
  0%,100% { transform: translateY(0) rotate(0deg); opacity:0.7; }
  50% { transform: translateY(-20px) rotate(180deg); opacity:1; }
`;

const pulse = keyframes`
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family: "Arial";
    overflow-x:hidden;
    min-height:100vh;

    /* Fondo animado global */
    background: linear-gradient(
      45deg,
      #000e4dff 0%,
      #060058ff 25%,
      #00154eff 50%,
      #002646ff 75%,
      #00013bff 100%
    );
    background-size:400% 400%;
    animation:${gradientAnimation} 15s ease infinite;
    color:#fff;
    position:relative;
  }

  body::before {
    content:'';
    position:fixed;
    top:0;left:0;right:0;bottom:0;
    background-image:
      radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 2px, transparent 2px),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 1px, transparent 1px),
      radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size:80px 80px,120px 120px,60px 60px;
    animation:${float} 6s ease-in-out infinite;
    pointer-events:none;
    z-index:0;
  }

  body::after {
    content:'';
    position:fixed;
    top:0;left:0;right:0;bottom:0;
    background-image:
      radial-gradient(circle at 60% 90%, rgba(255,255,255,0.05) 3px, transparent 3px),
      radial-gradient(circle at 90% 60%, rgba(255,255,255,0.08) 2px, transparent 2px);
    background-size:100px 100px,140px 140px;
    animation:${pulse} 8s ease-in-out infinite;
    pointer-events:none;
    z-index:0;
  }
`;

export default GlobalStyles;
