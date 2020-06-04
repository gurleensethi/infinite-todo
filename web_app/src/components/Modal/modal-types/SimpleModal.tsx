import React, { FunctionComponent } from "react";
import styled from "styled-components";

/* State and Props */
interface OwnProps {
  onClose?: () => void;
}

/* Styles */
const OverlayContainer = styled.div`
  position: fixed;
  background-color: rgba(1, 1, 1, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
`;

const SimpleModal: FunctionComponent<OwnProps> = ({ onClose, children }) => {
  return (
    <OverlayContainer onClick={onClose}>
      <ContentContainer>{children}</ContentContainer>
    </OverlayContainer>
  );
};

export default SimpleModal;
