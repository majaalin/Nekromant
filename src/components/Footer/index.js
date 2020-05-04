import React from 'react';
import './footer.css';
import facebook from './../../assets/images/facebook.png';
import instagram from './../../assets/images/instagram.png';
import Button from '../Button';

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="SocialMedia" id="contact">
        <img className="Facebook" src={facebook} alt="facebook" />
        <img className="Instagram" src={instagram} alt="instagram" />
        <img className="Instagram" src={instagram} alt="instagram" />
        <img className="Instagram" src={instagram} alt="instagram" />
      </div>
      <Button href="mailto:nekromant@gmail.com" title="Contact us" />
    </div>
  );
};

export default Footer;
