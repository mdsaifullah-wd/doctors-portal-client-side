import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className='pt-16'>
      <div class='footer p-10 text-base-content justify-around mb-20'>
        <div>
          <span class='footer-title text-xl'>Services</span>
          <Link to='/' className='link link-hover text-base'>
            Emergency Checkup
          </Link>
          <Link to='/' className='link link-hover text-base'>
            Monthly Checkup
          </Link>
          <Link to='/' className='link link-hover text-base'>
            Weekly Checkup
          </Link>
          <Link to='/' className='link link-hover text-base'>
            Deep Checkup
          </Link>
        </div>
        <div>
          <span class='footer-title text-xl'>Oral Health</span>
          <Link to='/' className='link link-hover text-base'>
            Fluoride Treatment
          </Link>
          <Link to='/' className='link link-hover text-base'>
            Cavity Filling
          </Link>
          <Link to='/' className='link link-hover text-base'>
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span class='footer-title text-xl'>Our Address</span>
          <address>New York- 1010, Hudson</address>
        </div>
      </div>

      <p className='text-center mb-11'>
        Copyright {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
