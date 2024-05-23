import "./style.scss";
import AvatarIcon from "../../../assets/avatar.svg?react";
import Avatar2Icon from "../../../assets/avatar2.svg?react";
import AnalyticsIcon from "../../../assets/analytics1.svg?react";
import GraphIcon from "../../../assets/graph.svg?react";
import TreeIcon from "../../../assets/tree.svg?react";
import ComposedLineChart from "./ComposedLineChart";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { convertMultipleWordsIntoSpanElements } from "../../../utils/common";

const SectionFour = () => {
  const [revenue, setRevenue] = useState(0);
  const lineChartRef = useRef(null);
  const isLineChartVisible = useIntersectionObserver(lineChartRef);

  const titleRef = useRef(null);
  const isTitleVisible = useIntersectionObserver(titleRef);

  const featureCardsRef = useRef(null);
  const isFeatureCardsVisible = useIntersectionObserver(featureCardsRef);

  useEffect(() => {
    let interval;
    if (isLineChartVisible) {
      interval = setInterval(() => {
        setRevenue((prev) => {
          if (prev === 500) {
            clearInterval(interval);
            return 500;
          } else {
            return prev + 10;
          }
        });
      }, 50);
    } else {
      clearInterval(interval);
      setRevenue(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isLineChartVisible]);

  return (
    <section className="features">
      <h1
        className={`main-title ${isTitleVisible ? "active" : ""}`}
        ref={titleRef}
      >
        {convertMultipleWordsIntoSpanElements("We give you full ")}
        <br />
        <font color="#CCCCCC">control</font>{" "}
        {convertMultipleWordsIntoSpanElements("over your data")}
      </h1>
      <div className="feature-cards">
        <div
          className={`feature-card ${isFeatureCardsVisible ? "active" : ""}`}
          ref={featureCardsRef}
        >
          <div className="content">
            <div className="top-section">
              <div className="conversion-card sub-card">
                <h4>Conversion rate</h4>
                <div className="conversion-rate-card">
                  <span className="graph-icon">
                    <GraphIcon />
                  </span>
                  <h4>2,3%</h4>
                </div>
                <p>
                  Percentage of
                  <br />
                  website visitors
                </p>
              </div>
              <div className="revenue-card sub-card">
                <h4>Sales Revenue</h4>
                <h2>
                  <span>$</span>
                  {revenue}K
                </h2>
                <div className="revenue-bars">
                  <span className="green" />
                  <span className="yellow" />
                  <span className="green" />
                </div>
                <div className="revenue-table">
                  <div className="revenue-row">
                    <div className="left-section">
                      <AvatarIcon />
                      <p>Min. Price</p>
                    </div>
                    <div className="right-section">
                      <p>1,200 $</p>
                    </div>
                  </div>

                  <div className="revenue-row">
                    <div className="left-section">
                      <Avatar2Icon />
                      <p>Max. Price</p>
                    </div>
                    <div className="right-section">
                      <p>2,320 $</p>
                    </div>
                  </div>
                  <div className="revenue-total">
                    <div className="left-section">
                      <p>Engagement rate</p>
                    </div>
                    <div className="right-section">
                      <p>47.84%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-section">
              <h3>Improved customer service</h3>
              <p>
                Analytics helps optimize service processes by
                <br />
                providing information on how to improve interactions
                <br />
                with customers and increase their satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="content">
            <div className="top-section" style={{ height: "360px" }}>
              <div className="cards-stack">
                <div className="sub-card" />
                <div className="sub-card">
                  <div className="left-section">
                    <div className="title-section">
                      <span className="icon">
                        <TreeIcon />
                      </span>
                      <p>Finance reports</p>
                    </div>
                  </div>
                </div>

                <div className="sub-card">
                  <div className="left-section">
                    <div className="title-section">
                      <span className="icon">
                        <AnalyticsIcon />
                      </span>
                      <p>Insights</p>
                    </div>
                    <div className="text-section">
                      <h4>Total profit</h4>
                      <h3>
                        <font>$</font>264,2K
                      </h3>
                      <button className="btn">Data visualization</button>
                    </div>
                  </div>
                  <div className="right-section" ref={lineChartRef}>
                    {isLineChartVisible && <ComposedLineChart />}
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-section">
              <h3>Monitoring key indicators</h3>
              <p>
                Analytics platforms allow businesses to track
                <br /> KPIs, and important tool for measuring success <br /> and
                achieving goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
