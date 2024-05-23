import Card from "./Card";
import "./styles.scss";
import PhoneImg from "../../../assets/phone-mock.png";
import Tablet from "./Tablet";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";
import { useRef } from "react";
import { convertWordIntoSpanElements } from "../../../utils/common";

const cards = ["Instant Insights", "AI Technology", "Easy Integration"];
const SectionThree = () => {
  const titleRef = useRef(null);
  const isTitleVisible = useIntersectionObserver(titleRef);

  const phoneRef = useRef(null);
  const isPhoneVisible = useIntersectionObserver(phoneRef);

  const largeTitleRef = useRef(null);
  const isLargeTitleVisible = useIntersectionObserver(largeTitleRef);
  return (
    <section className="section-three-content">
      <div className="content">
        <div className="top-section">
          <div className="left-section">
            <h1 className={`${isTitleVisible ? "active" : ""}`} ref={titleRef}>
              <span>Turning data into real</span>
              <br />
              <span>action and ideas</span>
            </h1>
            <div className="card-container">
              {cards.map((card) => (
                <Card text={card} key={card} />
              ))}
            </div>
          </div>
          <div className="right-section">
            <div
              className={`phone ${isPhoneVisible ? "active" : ""}`}
              ref={phoneRef}
            >
              <img src={PhoneImg} alt="phone" />
            </div>
            <Tablet />
          </div>
        </div>
        <div
          className={`large-title ${isLargeTitleVisible ? "active" : ""}`}
          ref={largeTitleRef}
        >
          <h1>{convertWordIntoSpanElements("Ramos")}</h1>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
