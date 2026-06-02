import "./Card.css";

function Card({ title, description }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-btn">View Project</button>
    </div>
  );
}

export default Card;
