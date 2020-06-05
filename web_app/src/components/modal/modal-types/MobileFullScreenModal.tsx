import React, { FunctionComponent } from "react";
import styled from "styled-components";
import fadeInDialogAnimation from "src/components/animatons/fade-in-dialog-animation";

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 0px;
  animation: ${fadeInDialogAnimation} 0.3s;

  @media screen and (min-width: 600px) {
    height: unset;
    width: 50%;
    max-width: 600px;
    border-radius: 8px;
  }
`;

interface Props {
  onClose: () => void;
}

const MobileFullScreenModal: FunctionComponent<Props> = ({
  children,
  onClose,
}) => {
  return (
    <OverlayContainer onClick={onClose}>
      <ContentContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </ContentContainer>
    </OverlayContainer>
  );
};

export default MobileFullScreenModal;
