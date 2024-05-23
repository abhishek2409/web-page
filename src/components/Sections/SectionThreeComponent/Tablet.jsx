import { useRef } from "react";
import "./tablet.scss";
import Logo from "../../../assets/image.png";
import SearchIcon from "../../../assets/search.svg?react";
import UpArrow from "../../../assets/up-arrow.svg?react";
import CustomLineChart from "../SectionOneComponent/LineChart";
import AnalyticsIcon from "../../../assets/analytics1.svg?react";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";

const data = Array.from({ length: 15 }).map(() => ({
  height: Math.floor(Math.random() * 70) + 30,
}));

const Tablet = () => {
  const tabletRef = useRef(null);
  const isTabletVisible = useIntersectionObserver(tabletRef);

  return (
    <div
      className={`tablet ${isTabletVisible ? "active" : ""}`}
      ref={tabletRef}
    >
      <div className="content">
        <div className="menu-bar">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="search-box">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
          <div className="dummy-div" />
        </div>
        <div className="graph-section">
          <p>Revenue amount</p>
          <p className="value">
            <span>$</span> 1342,567{" "}
            <sup>
              <UpArrow />
              +14%
            </sup>
          </p>
          <div className="dummy-graph">
            {data.map(({ height }, index) => (
              <div
                className="dummy-data"
                key={index}
                style={{
                  height: `${height}%`,
                }}
              />
            ))}
          </div>
        </div>
        <main>
          <div className="tabs-section">
            <div className="tab active">Dashboard</div>
            <div className="tab ">Reports</div>
            <div className="tab ">Documents</div>
            <div className="tab ">History</div>
            <div className="tab ">Settings</div>
          </div>
          <div className="statistics-section">
            <div className="sales-card">
              <h5>Sales statistic</h5>
              <div className="sales-sub-card-wrapper">
                <div className="sales-sub-card">
                  <div className="icon">
                    <AnalyticsIcon />
                  </div>
                  <div className="text">
                    <p>Total Profit</p>
                    <h3>
                      <span>$</span> 264,2K
                    </h3>
                  </div>
                </div>
                <div className="sales-sub-card yellow">
                  <div className="icon">
                    <AnalyticsIcon />
                  </div>
                  <div className="text">
                    <p>Sales revenue</p>
                    <h3>
                      <span>$</span> 132,4K
                    </h3>
                  </div>
                </div>
                <div className="sales-sub-card green">
                  <div className="icon">
                    <AnalyticsIcon />
                  </div>
                  <div className="text">
                    <p>Average bill</p>
                    <h3>
                      <span>$</span> 1090
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bar-wrapper">
                <div className="bar-content yellow">
                  <p>Amount Paid</p>
                  <p>$71,2K</p>
                  <div className="bar"></div>
                </div>
                <div className="bar-content green">
                  <p>CPC Paid</p>
                  <p>27% / $71,2K</p>
                  <div className="bar"></div>
                </div>
                <div className="bar-content purple">
                  <p>Organic</p>
                  <p>50% / $132K</p>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
            <div className="visits-card">
              <h5>Visit statistics</h5>
              <CustomLineChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tablet;
