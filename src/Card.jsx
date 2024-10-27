import './Card.css'

function Card({ title, text, image, buttonText, onButtonClick }) {
    return (
      <div className="card">
        <img className="card-image" src={image} alt="profile picture" />
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
        {buttonText && (
          <button className="card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    );
  }
  
  export default Card;