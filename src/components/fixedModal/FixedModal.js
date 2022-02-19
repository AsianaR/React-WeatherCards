import { Modal, Button} from "react-bootstrap";
import { useState } from "react";
import WeatherCard from "../weatherCard/WeatherCard";
import SelectorDb from "../selectorDb/SelectorDb";

const FixedModal = (props) => {

  const [cardList, setInputList] = useState([]);

  const onAddBtnClick = () => {
    setInputList(cardList.concat(<WeatherCard propCity=''/>));
    props.OnHide();
  };




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
          <Modal.Body>

            <SelectorDb></SelectorDb>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onAddBtnClick}>Submit</Button>
            {cardList}
          </Modal.Footer>
        </Modal>
      );
}

export default FixedModal;