import { img2 } from "../../assets";
import { img3 } from "../../assets";
import { img4 } from "../../assets";
import { img5 } from "../../assets";
import { img6 } from "../../assets";
import { img7 } from "../../assets";
import { img8 } from "../../assets";
import { img9 } from "../../assets";
import { img10 } from "../../assets";
import { img11 } from "../../assets";
import { img12 } from "../../assets";
import { img13 } from "../../assets";

import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-about">
        <h2>About Us</h2>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed{" "}
          <br /> neque nisi felis non ultrices massa id egestas quam velit
          pretium nu.
        </p>

        <div className="flex">
          <div className="hero-online">
            <img src={img2} />
            <h3>1. Schedule online</h3>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            </p>
          </div>
          <div className="hero-online">
            <img src={img3} />
            <h3>2. Pay online easily</h3>
            <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida</p>
          </div>
          <div className="hero-online">
            <img src={img4} />
            <h3>3. Get your house cleaned</h3>
            <p>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>

        <div className="heroo-btn">
          <button>Get a free quote</button>
          <button className="ikki">Explore services</button>
        </div>
      </div>

      <div className="hero-Services">
        <div className="title">
          <h2>Our Services</h2>
          <button>Explore services</button>
        </div>
        <div className="places">
          <div className="house">
            <img src={img5} alt="" />
            <h3>House cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consecte tur adipiscing elit{" "}
              <br /> semper dalaracc lacus vel <br /> facilisis volutpat est.
            </p>
          </div>
          <div className="house">
            <img src={img6} alt="" />
            <h3>Office cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consecte tur adipiscing elit{" "}
              <br /> semper dalaracc lacus vel <br /> facilisis volutpat est.
            </p>
          </div>
          <div className="house">
            <img src={img7} alt="" />
            <h3>Industrial cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consecte tur adipiscing elit{" "}
              <br /> semper dalaracc lacus vel <br /> facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>

      <div className="follow">
        <div className="follow-img">
          <img src={img8} alt="" />
        </div>

        <div className="follow-text">
          <p className="covid">Covid-19 sanitization</p>
          <p className="we">
            We follow guidelines <br /> to keep you safe from <br /> the
            COVID-19 virus
          </p>
          <p className="leo">
            Lobortis mattis odio leo eget mauris met aliquet <br /> semper
            molestie sollicitudin congue massa <br /> mauris lectus.
          </p>
          <div className="yon">
            <button>Get a free quote</button>
            <img src={img9} alt="" />
          </div>
        </div>
      </div>

      <div className="Articles">
        <div className="articles-title">
          <h2>Articles & resources</h2>
          <div className="btn">
            <button className="bir">Get a free quote</button>
            <button className="ikki">Browse articles</button>
          </div>
        </div>

        <div className="mess nma">
          <div className="best">
            <img src={img10} alt="" />
            <div className="text">
              <p className="ol">
                8 best vacuum cleaners to clean any mess for your home in 2022
              </p>
              <p className="ac">
                Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit
                justo quis odio sit <br /> sit ac port titor sit males.
              </p>
              <b className="jan">Jan 28, 2022</b>
              <img className="img-two" src={img11} alt="" />
            </div>
          </div>
          <div className="best">
            <img src={img12} alt="" />
            <div className="text">
              <p className="ol">
                How to properly disinfect your phone <br /> and other
                electronics
              </p>
              <p className="ac">
                Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit
                justo quis odio sit <br /> sit ac port titor sit males.
              </p>
              <b className="jan">Feb 1, 2022</b>
              <img className="img-two" src={img11} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="Contact-us">
          <h1>Contact Us</h1>
          <p>
            In dignissim euismod pretium amet enim a eu nam <br /> ut urna
            accumsan pellentesque lacus duis pharetra <br /> eutortor.
          </p>
          <img src={img13} alt="" />
          <h2>Not convinced yet?</h2>
          <p className="massa">
            Massa bibendum consectetur maurisid gravida <br /> purus, dolor dui
            amet morbi non nunc urna <br /> purus diam.
          </p>
          <button>Browse our packages</button>
        </div>

        <div className="addres">
          <div className="flex">
            <div className="bir">
              <h3>Full name</h3>
              <div className="div"></div>

              <div className="">
                <h3>Address</h3>
                <div className="div"></div>
              </div>
              <div className="">
                <h3>Requested service</h3>
                <div className="div"></div>
              </div>
            </div>
            <div className="bir">
              <h3>Phone number</h3>
              <div className="div"></div>

              <div className="">
                <h3>Email</h3>
                <div className="div"></div>
              </div>
              <div className="">
                <h3>Day of service</h3>
                <div className="div"></div>
              </div>
            </div>
          </div>
          <h3 className="uch">Day of service</h3>
          <div className="teg"></div>
          <button className="btn">Submit message</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
