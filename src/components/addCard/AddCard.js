import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import FixedModal from "../fixedModal/FixedModal";

import "./AddCard.css";
import WeatherCard from "../weatherCard/WeatherCard";

const AddCard = () => {
    const [modalShow, setModalShow] = useState(false);
    const [cards, setCards] = useState([]);

    const drillHandler = (newCard) => {
      setCards([...cards, newCard]);
    
    };

  return (
    <>
      {cards.map((e, index) => <WeatherCard key={index} propCity={e}/>)}
        <div className="add-card">
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        +
      </Button>

      <FixedModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        propsHandler={drillHandler}
      />
      </div>
    </>
  );
};

export default AddCard;
