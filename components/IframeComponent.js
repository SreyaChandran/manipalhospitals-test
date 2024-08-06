import React from 'react';

const IframeComponent = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28025.140684200258!2d77.069107!3d28.595499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3ae0cf4f6f%3A0xec55552f03c1526d!2sManipal%20Hospital%20Dwarka!5e0!3m2!1sen!2sin!4v1722920586416!5m2!1sen!2sin"
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default IframeComponent;