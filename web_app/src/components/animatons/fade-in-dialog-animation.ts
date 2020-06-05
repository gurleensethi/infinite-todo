import { keyframes } from "styled-components";

export default keyframes`
  from {
    opacity: 0.5;
    transform: translateY(50px) scale(0.8);
  }

  to {
    opacity: 1.0;
    transform: translateY(0px) scale(1.0);
  }
`;
