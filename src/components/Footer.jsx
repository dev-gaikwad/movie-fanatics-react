import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <h3 className='footer-title'>Get in Touch</h3>
        <div className='footer-link'>
          <ul>
            <li>
              <Link to='/about'>About Page</Link>
            </li>
            <li>
              <a href='https://www.github.com/dev-gaikwad'>Github</a>
            </li>
            <li>
              <a href='/'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
