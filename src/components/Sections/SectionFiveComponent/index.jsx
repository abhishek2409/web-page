import { useRef } from "react";
import "./style.scss";
import LinkIcon from "../../../assets/link.svg?react";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";
import { convertWordIntoSpanElements } from "../../../utils/common";

const SectionFive = () => {
  const sectionRef = useRef(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      className={`section-five-content ${isSectionVisible ? "active" : ""}`}
      ref={sectionRef}
    >
      <div className={`link-icon `}>
        <LinkIcon />
      </div>
      <h2 className={`main-title `}>
        {convertWordIntoSpanElements("Get")}{" "}
        {convertWordIntoSpanElements("Started")}
      </h2>
      <p>
        Turn information into advantage! Start using
        <br /> Ramos today. Sign up for a free trail.
      </p>
      <div className="cta-buttons">
        <button className="btn secondary">Request a demo</button>
        <button className="btn primary">Start for free</button>
      </div>
    </section>
  );
};

export default SectionFive;
