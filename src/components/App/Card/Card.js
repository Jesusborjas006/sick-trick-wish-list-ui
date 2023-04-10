import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p>
        {props.stance}: {props.name}
      </p>
      <p>Obstacle: {props.obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href="https://google.com">{props.tutorial}</a>
    </div>
  );
};

export default Card;
