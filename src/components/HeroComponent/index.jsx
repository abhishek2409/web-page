import { useRef } from "react";
import "./style.scss";
import Image from "../../assets/laptop.jpeg";
import PlayIcon from "../../assets/play-button_9326960.svg?react";
import ElectricIcon from "../../assets/electric..svg?react";
import AnalyticsIcon from "../../assets/analytics1.svg?react";
import LineChartIcon from "../../assets/line-chart.png";
import { convertWordIntoSpanElements } from "../../utils/common.jsx";

import useIntersectionObserver from "../../hooks/use-intersection-observer";

function Hero() {
  const heroSectionRef = useRef(null);
  const isHeroSectionVisible = useIntersectionObserver(heroSectionRef);
  return (
    <section
      className={`hero ${isHeroSectionVisible ? "active" : ""}`}
      ref={heroSectionRef}
    >
      <div className="hero-heading-section">
        <div className="hero-top-row">
          <p>
            <span className="icon-space">
              <span className="electric-icon">
                <ElectricIcon />
              </span>
              <span className="analytics-icon">
                <AnalyticsIcon />
              </span>
            </span>
            {convertWordIntoSpanElements("Analytics")}
            <br />
            {convertWordIntoSpanElements("that")}&nbsp;
            <font color="#CCCCCC">{convertWordIntoSpanElements("helps")}</font>
            &nbsp;
            {convertWordIntoSpanElements("you")}
          </p>
          <div className="hero-image-section">
            <div className="image-wrapper">
              <button className="play-btn">
                <PlayIcon />
              </button>
              <img src={Image} alt="Analytics on Laptop" />
            </div>
          </div>
        </div>

        <div className="hero-subheading">
          <p>
            {convertWordIntoSpanElements("shape")}
            <img src={LineChartIcon} />
            {convertWordIntoSpanElements("the")}
            {convertWordIntoSpanElements("future")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
