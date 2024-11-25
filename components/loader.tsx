import React from 'react';

const Loader = () => {
  const loaderStyles = {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
   
  };

  const spinnerStyles = {
    width: '50px',
    height: '50px',
    border: '6px solid #f3f3f3', // Light gray border
    borderTop: '6px solid #3498db', // Blue border for the rotating part
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={loaderStyles}>
      <div style={spinnerStyles}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
