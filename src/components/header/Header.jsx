import React from "react";
import { logo } from "../../assets";
import "./Header.scss";
import { img } from "../../assets";
import { img1 } from "../../assets";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <img src={logo} alt="" />
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="header-btn">
            <h3>Cart (0)</h3>
            <button>Get a free quote</button>
          </div>
        </nav>

        <div className="header-hero">
          <div className="header-hero_text">
            <h1>
              Quality cleaning <br /> for your home
            </h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra <br />{" "}
              nulla ornare sed facilisis senectus dapibus nibh ultrices eget{" "}
              <br /> suscipit aliquet et nulla magna lacus penatibus.
            </p>
            <div className="header-hero_number">
              <button>Get a free quote</button>
              <img className="img" src={img} alt="" />
            </div>
          </div>
          <div className="header-hero_img">
            <img src={img1} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
