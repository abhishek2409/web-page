import { useRef } from "react";
import "./style.scss";
import Logo from "../../assets/image.png";
import useIntersectionObserver from "../../hooks/use-intersection-observer";

function Header() {
  const headerRef = useRef(null);
  const isHeaderVisible = useIntersectionObserver(headerRef);
  return (
    <header
      className={`header ${isHeaderVisible ? "active" : ""}`}
      ref={headerRef}
    >
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#reports">Reports</a>
          </li>
          <li>
            <a href="#documents">Documents</a>
          </li>
          <li>
            <a href="#history">History</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
        </ul>
      </nav>
      <button className="signup">Sign Up</button>
    </header>
  );
}

export default Header;
