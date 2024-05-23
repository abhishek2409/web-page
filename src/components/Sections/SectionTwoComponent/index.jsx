import "./styles.scss";
import PulseIcon from "../../../assets/pulse.svg?react";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";
import { useRef } from "react";
import { convertWordIntoSpanElements } from "../../../utils/common";

const SectionTwo = () => {
  const headingRef = useRef(null);
  const isHeadingVisible = useIntersectionObserver(headingRef);

  const screenSectionRef = useRef(null);
  const isScreenSectionVisible = useIntersectionObserver(screenSectionRef);

  const ctaSectionRef = useRef(null);
  const isCtaSectionVisible = useIntersectionObserver(ctaSectionRef);
  return (
    <section className="section-second-content">
      <h1
        className={`main-title ${isHeadingVisible ? "active" : ""}`}
        ref={headingRef}
      >
        {convertWordIntoSpanElements("Maximize")}&nbsp;
        <font color="#CCCCCC">
          {convertWordIntoSpanElements("efficiency")}&nbsp;
        </font>
        <br />
        {convertWordIntoSpanElements("with")}&nbsp;
        {convertWordIntoSpanElements("our")}&nbsp;
        {convertWordIntoSpanElements("intuitive")}
      </h1>
      <div
        className={`icons-and-screener ${
          isScreenSectionVisible ? "active" : ""
        }`}
        ref={screenSectionRef}
      >
        <div className="icons">
          <div className="icon">
            <div className="dashed-line" />
            <PulseIcon className="pulse-icon" />
          </div>
          <div className="icon">
            <h5>45%</h5>
            <p>
              System grow
              <br />
              faster
            </p>
          </div>
        </div>
        <div className="screener-container">
          <div className="marquee">
            This is a long text that will move to the left infinitely. Keep
            watching it scroll!
          </div>
        </div>
      </div>
      <div
        className={`cta-section ${isCtaSectionVisible ? "active" : ""}`}
        ref={ctaSectionRef}
      >
        <div className="left-section">
          <p>
            Explore traffic sources, page behavior, conversations and more to
            gain deep insight
            <br /> into your audience. With us, your business doesn&apos;t just
            adopt - it evolves adapt
          </p>
        </div>
        <div className="right-section">
          <button className="btn secondary">Request a demo</button>
          <button className="btn primary">Start for free</button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
