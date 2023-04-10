import Card from "../Card/Card";
import "./Tricks.css";

const Tricks = (props) => {
  const cardElements = props.allTricks.map((card) => (
    <Card
      stance={card.stance}
      name={card.name}
      obstacle={card.obstacle}
      tutorial={card.tutorial}
      id={card.id}
      key={card.id}
    />
  ));

  return <div className="tricks-container">{cardElements}</div>;
};

export default Tricks;
