import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.name}</p>
      {/* <p></p>
      <p></p>
      <p></p> */}
    </div>
  );
};

export default Card;
