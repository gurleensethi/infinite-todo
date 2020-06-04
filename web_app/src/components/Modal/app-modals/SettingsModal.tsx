import React, { FunctionComponent } from "react";
import MobileFullScreenModal from "../modal-types/MobileFullScreenModal";
import Settings from "src/pages/settings/Settings";
import { RootState, SETTINGS_MODAL } from "src/data/types";
import { hideModal } from "src/data/redux/ui/ui.actions";
import { connect, ConnectedProps } from "react-redux";

/* State and Props */
interface OwnProps {}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {};
};

const mapDispatchToProps = {
  hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SettingsModal: FunctionComponent<OwnProps & PropsFromRedux> = ({
  hideModal,
}) => {
  const handleModalClose = () => {
    hideModal(SETTINGS_MODAL);
  };

  return (
    <MobileFullScreenModal onClose={handleModalClose}>
      <Settings onClose={handleModalClose} />
    </MobileFullScreenModal>
  );
};

export default connector(SettingsModal);
