import { Modal} from "react-bootstrap";

import SelectorDb from "../selectorDb/SelectorDb";

const FixedModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose city
        </Modal.Title>
      </Modal.Header>

      <SelectorDb props={props}></SelectorDb>
    </Modal>
  );
};

export default FixedModal;
