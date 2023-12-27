import React from 'react';
import './Footer.scss';
import {img14} from '../../assets'
import {img15} from '../../assets'

const Footer = () => {
  return (
      <div className="footer">
      <footer>
        <div className='quality'>
          <h1>Quality cleaning for <br /> your home</h1>
          <p>Lorem ipsum dolor sit amet cteturdo <br /> adipiscing elit, sed do eiusmo.</p>
          <img src={img14} alt="" />
        </div>
        <div className='quality'>
          <h1 className='us'>Contact us</h1>
          <p className='los'>1827 Nickel Road, Los Angeles,<br /> CA, 90017, United States</p>
          <p className='yil'>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
        </div>
        <div className='quality'>
          <h1 className='hour'>Hours</h1>
          <p className='sit'>Monday to Friday</p>
          <p className='for'>6:00 AM - 9:00 PM</p>
          <p className='sunday'>Saturday & Sunday</p>
          <p className='pm'>8:00 AM - 8:00 PM </p>
        </div>
        <div className='quality'>
          <h1 className='get'>Get a free estimate</h1>
          <img src={img15} alt="" />
          <p className='sed'>Lorem ipsum dolor sit amet ectetur <br /> adipiscing elit, sed do eiusmod.</p>
          <button className='free-btn'>Request a free quote</button>
        </div>
      </footer>
      </div>
  );
};

export default Footer;
