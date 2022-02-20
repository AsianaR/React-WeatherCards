import { Modal, Button} from "react-bootstrap";
import { useState } from "react";
import WeatherCard from "../weatherCard/WeatherCard";

const FixedModal = (props) => {
  const arOptions = ["Choose option","Kiev", "Moscow", "Misnk", "Prague"];
  const [cardList, setInputList] = useState([]);
  const [value, setValue] = useState();

  const onAddBtnClick = () => {
    setInputList(cardList.concat(<WeatherCard propCity={value} />));
    setDrill(cardList);
    
  };

  const setDrill = (cardList) => {
    props.propsHandler(cardList);
  console.log(cardList);
  };


  const options = arOptions.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

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
    <div>
      <Modal.Body>
        <select
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          {options}
        </select>
      </Modal.Body>
      <Modal.Footer>
        
        <Button onClick={onAddBtnClick}>Submit</Button>
      </Modal.Footer>
    </div>
    </Modal>
  );
};

export default FixedModal;
