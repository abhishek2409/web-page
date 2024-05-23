import { useEffect, useRef, useState } from "react";
import "./style.scss";

import ProfitIcon from "../../../assets/profit-icon.png";
import UpArrow from "../../../assets/up-arrow.svg?react";
import PolygonIcon from "../../../assets/polygon_2708358.svg?react";
import LayersIcon from "../../../assets/layers.svg?react";
import AvatarIcon from "../../../assets/avatar.svg?react";
import AvatarIcon2 from "../../../assets/avatar2.svg?react";
import LineChart from "./LineChart";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";

function SectionOne() {
  const [visitors, setVisitors] = useState(30);
  const [visitorsRate, setVisitorsRate] = useState(0);

  const headingSectionRef = useRef();
  const isHeadingSectionVisible = useIntersectionObserver(headingSectionRef);

  const cardWrapperRef = useRef();
  const isCardWrapperVisible = useIntersectionObserver(cardWrapperRef);

  const efficiencyRef = useRef();
  const isEfficiencyVisible = useIntersectionObserver(efficiencyRef);

  useEffect(() => {
    let interval1, interval2;
    if (isCardWrapperVisible) {
      interval1 = setInterval(() => {
        setVisitors((prev) => {
          if (prev === 70) {
            clearInterval(interval1);
            return 70;
          } else {
            return prev + 1;
          }
        });
      }, 50);
      interval2 = setInterval(() => {
        setVisitorsRate((prev) => {
          if (prev === 58) {
            clearInterval(interval2);
            return 58;
          } else {
            return prev + 1;
          }
        });
      }, 50);
    } else {
      setVisitors(30);
      clearInterval(interval1);
      setVisitorsRate(0);
      clearInterval(interval2);
    }
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [isCardWrapperVisible]);

  return (
    <section className="section-one-content">
      <div className="heading-section" ref={headingSectionRef}>
        <div className="left-section">
          <h2 className={isHeadingSectionVisible ? "active" : ""}>
            <span>Your key to strategic </span>
            <br />
            <span>success through analytics</span>
          </h2>
        </div>
        <div className="right-section">
          <h3 className={isHeadingSectionVisible ? "active" : ""}>
            Ready for exciting, instantaneous,
            <br />
            all-accessible insight in real time?
          </h3>
        </div>
      </div>
      <div className="card-wrapper" ref={cardWrapperRef}>
        <div className="card">
          <div className="text-section">
            <div className="top-section">
              <button className={isCardWrapperVisible ? "active" : ""}>
                Setting up reports
              </button>
            </div>
            <div
              className={`bottom-section ${
                isCardWrapperVisible ? "active" : ""
              }`}
            >
              <h3>Fast and easy access to analytics</h3>
              <p>
                One platform is a comprehensive system of solutions that will be
                the first step towards digitalization of your business
              </p>
            </div>
          </div>
          <div className="stats-section">
            <h3>Sales statistic</h3>
            <div
              className={`profit-and-visitors-section ${
                isCardWrapperVisible ? "active" : ""
              }`}
            >
              <div className="profit-section">
                <img src={ProfitIcon} alt="Profit icon" />
                <div className="text">
                  <p className="title">Total profit</p>
                  <p className="value">
                    <span style={{ fontSize: "1.3rem" }}>$</span>264.2K
                  </p>
                </div>
              </div>
              <div className="visitors-section">
                <p className="title">Visitors</p>
                <div className="bar">
                  <div
                    className={`bar-progress ${
                      isCardWrapperVisible ? "active" : ""
                    }`}
                  />
                </div>
                <p className="value">
                  <span>{visitors}K</span>
                  <sup className={isCardWrapperVisible ? "active" : ""}>
                    <UpArrow />
                    +14%
                  </sup>
                </p>
              </div>
            </div>
            <div
              className={`graph-section ${
                isCardWrapperVisible ? "active" : ""
              }`}
            >
              <h5>Visit statistics</h5>
              {isCardWrapperVisible && <LineChart />}
              <div className="static-rate-card">
                <div className="left-section">
                  <p>Rate</p>
                  <h3>+{visitorsRate}%</h3>
                </div>
                <div className="right-section">
                  <PolygonIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card dark" style={{ maxWidth: "40%" }}>
          <div className="sub-card-wrapper">
            <div
              className={`sub-card one ${isCardWrapperVisible ? "active" : ""}`}
            >
              <LayersIcon className="layers-icon" />
              <div className="avatar-section">
                <AvatarIcon className="avatar-icon" />
                <AvatarIcon2 className="avatar-icon" />
              </div>
            </div>
            <div
              className={`sub-card two ${isCardWrapperVisible ? "active" : ""}`}
            >
              <p>Transactions</p>
              <h2>
                43K{" "}
                <sup>
                  <UpArrow />
                  +14%
                </sup>
              </h2>
            </div>
          </div>
          <div className="title-section">
            <h3>Widget control</h3>
            <p>
              Reports provide a comprehensive overview
              <br /> of important aspects of web analytics
            </p>
          </div>
        </div>
      </div>
      <div className="efficiency" ref={efficiencyRef}>
        <p className="title">
          Up to <span className="percentage">45%</span>
        </p>
        <p className={`description ${isEfficiencyVisible ? "active" : ""}`}>
          Increase your analytics efficiency by upto 45%. Unique
          <br /> algorithms provide insights from data, reduce time for analysis
          <br /> and save time for making important decisions
        </p>
      </div>
    </section>
  );
}

export default SectionOne;
