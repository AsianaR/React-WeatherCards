import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import WeatherCard from "../weatherCard/WeatherCard";
import "./SelectorDb.css";

const SelectorDb = (props) => {
  const arOptions = ["Kiev", "Moscow", "Misnk", "Prague"];
  const [cardList, setInputList] = useState([]);
  const [value, setValue] = useState();

  const onAddBtnClick = () => {
    setInputList(cardList.concat(<WeatherCard propCity={value} />));
    props.OnHide();
  };

  const options = arOptions.map((text, index) => {
    return <option key={index}>{text}</option>;
  });


  return (
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
        {cardList}
      </Modal.Footer>
    </div>
  );
};

export default SelectorDb;
