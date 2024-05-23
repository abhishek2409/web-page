import "./card.scss";
import { useRef } from "react";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";

const Card = ({ text }) => {
  const cardRef = useRef(null);

  const isCardVisible = useIntersectionObserver(cardRef);
  return (
    <div className={`card-item ${isCardVisible ? "active" : ""}`} ref={cardRef}>
      <p>{text}</p>
      <button>+</button>
    </div>
  );
};

export default Card;
