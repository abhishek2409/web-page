import "./style.scss";
import QrCode from "../../assets/qr-code.png";
import { useRef } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";
import { convertWordIntoSpanElements } from "../../utils/common";

function Footer() {
  const footerRef = useRef(null);
  const isFooterVisible = useIntersectionObserver(footerRef);
  return (
    <footer
      className={`footer-section ${isFooterVisible ? "active" : ""}`}
      ref={footerRef}
    >
      <div className="menu-items">
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <a href="mailto:hello@ramos.com">hello@ramos.com</a>
        </div>
      </div>
      <div className="contact-section">
        <div className="locations">
          <div className="location">
            <h3>Warrensville Heights</h3>
            <p>
              14418 Vineyard Drive, NC
              <br />
              44128
            </p>
          </div>
          <div className="location">
            <h3>Saint Louis</h3>
            <p>
              1366 Penn Street
              <br />
              63101
            </p>
          </div>
        </div>
        <div className="social-media">
          <a href="#">Linkedin</a>
          <a href="#">Instgaram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <div className="bottom-section">
        <div className="logo">
          <h1>
            {convertWordIntoSpanElements("Ramos")}
            <sup>®</sup>
          </h1>
        </div>
        <div className="policies">
          <a href="#">Privacy policy</a>
          <a href="#">License agreement</a>
        </div>
        <div className="qr-code">
          <img src={QrCode} alt="QR Code" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
