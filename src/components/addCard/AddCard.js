import { Button } from "react-bootstrap";
import { useState } from "react";
import FixedModal from "../fixedModal/FixedModal";

import "./AddCard.css";

const AddCard = () => {
    const [modalShow, setModalShow] = useState(false);

  return (
    <>
        <div className="add-card">
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        +
      </Button>

      <FixedModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </>
  );
};

export default AddCard;
