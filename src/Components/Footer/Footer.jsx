import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F8F8F8', padding: '20px', position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
      <p style={{ margin: '0' }}>Derechos reservados &copy; {new Date().getFullYear()} RD</p>
    </footer>
  );
}

export default Footer;