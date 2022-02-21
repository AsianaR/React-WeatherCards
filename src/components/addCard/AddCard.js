import { Button } from "react-bootstrap";
import { useState } from "react";
import FixedModal from "../fixedModal/FixedModal";
import WeatherCard from "../weatherCard/WeatherCard";
import "./AddCard.css";

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
