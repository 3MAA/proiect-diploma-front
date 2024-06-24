import React from 'react';

const footerStyle = {
  backgroundColor: '#135AE8',
  textAlign: 'center',
  padding: '3px 0',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} AVICSC - Asistent Virtual Inteligent pentru
      Cazarea Studenților în Cămine. Toate drepturile rezervate.
    </footer>
  );
};

export default Footer;
