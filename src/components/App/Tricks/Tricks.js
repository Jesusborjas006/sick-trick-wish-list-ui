import Card from "../Card/Card";
import "./Tricks.css";

const Tricks = (props) => {
  const cardElements = props.allTricks.map((card) => (
    <Card name={card.name} id={card.id} key={card.id} />
  ));
  return (
    <div className="tricks-container">
      {cardElements}
    </div>
  );
};

export default Tricks;
