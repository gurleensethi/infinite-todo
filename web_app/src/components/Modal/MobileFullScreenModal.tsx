import React, { FunctionComponent } from "react";
import styled from "styled-components";

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

  @media screen and (min-width: 600px) {
    height: unset;
    width: unset;
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
