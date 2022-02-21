import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import WeatherCard from "../weatherCard/WeatherCard";

const FixedModal = (props) => {
  const arOptions = ["Choose option", "Kiev", "Moscow", "Misnk", "Prague"];
  const [value, setValue] = useState();

  const onAddBtnClick = () => {
    //setInputList(cardList.concat());
    setDrill(value);
  };

  const setDrill = (cardList) => {
    props.propsHandler(cardList);
  };

  const setValueWithCheck = (e) => {
    console.log(e, "e");
    console.log(value, "val");
    if (e === "Choose option" ) {
      alert("Please choose option");
    } else {
      setValue(e); 
    }
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
            // value={value}
            onChange={(event) => setValueWithCheck(event.target.value)}
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
