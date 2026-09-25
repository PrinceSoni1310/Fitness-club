import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#eee', padding: '60px 20px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px'
      }}>
        
        {/* About Us */}
        <div>
          <h2 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>About Fitness Club</h2>
          <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.7' }}>
            Fitness Club is your trusted partner in health and wellness. 
            We offer personalized workouts, expert diet plans, and community support to help you reach your goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>Quick Links</h2>
          <ul style={{ listStyle: 'none', padding: '0', color: '#aaa', fontSize: '15px' }}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/exercise" style={linkStyle}>Exercises</a></li>
            <li><a href="/diet-plans" style={linkStyle}>Diet Plans</a></li>
            <li><a href="/contact-us" style={linkStyle}>Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>Our Services</h2>
          <ul style={{ listStyle: 'none', padding: '0', color: '#aaa', fontSize: '15px' }}>
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Nutrition Guidance</li>
            <li>Online Coaching</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>Contact Us</h2>
          <p style={{ color: '#aaa', marginBottom: '10px' }}>Email: princestudent1310@gmail.com</p>
          {/* <p style={{ color: '#aaa', marginBottom: '20px' }}>Phone: +1 234 567 890</p> */}

          {/* Social Media */}
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <FaYoutube />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <FaTwitter />
            </a> */}
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div style={{ textAlign: 'center', color: '#777', fontSize: '13px', marginTop: '40px' }}>
        &copy; {new Date().getFullYear()} Fitness Club. All rights reserved.
      </div>
    </footer>
  );
};

const linkStyle = {
  display: 'block',
  marginBottom: '8px',
  color: '#aaa',
  textDecoration: 'none',
  transition: '0.3s',
  fontSize: '15px',
};

const iconStyle = {
  fontSize: '20px',
  color: '#aaa',
  transition: '0.3s',
};

export default Footer;
