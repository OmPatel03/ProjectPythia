import React from 'react';


const KpBar = ({ kpValue }) => {
  // Calculate the position of the indicator based on the kpValue
  const indicatorPosition = kpValue * 100; // Assuming kpValue is between 0 and 1

  const barStyle = {
    width: '40px', // Adjust the width of the gradient bar as needed
    height: '40vh', // Full height of the viewport
    background: `linear-gradient(to top, #ff0, #800)`, // Gradient colors
    // move bar to the middle of the left
    position: 'absolute',
    top: '35vh',

    // move bar slightly to the right
    left: '30px',
  };

  const textStyle = {
    position: 'absolute',
    bottom: '10px', // Adjust the position of the text at the bottom
    left: '50%', // Center the text horizontally
    transform: 'translateX(-50%)', // Center the text horizontally
    color: 'white', // Text color
  };

  const topTextStyle = {
    position: 'absolute',
    top: '10px', // Adjust the position of the text at the top
    left: '50%', // Center the text horizontally
    transform: 'translateX(-50%)', // Center the text horizontally
    color: 'white', // Text color
  };

  const indicatorStyle = {
    width: '40px', // Width of the indicator line
    height: '4px', // Height of the indicator line
    background: 'white', // Indicator color
    position: 'absolute',
    bottom: `${indicatorPosition}%`, // Position the indicator based on kpValue
    left: '50%', // Center the indicator horizontally within the bar
    transform: 'translateX(-50%)', // Center the indicator horizontally
  };


  return (
    <div style={barStyle}>
      <div style={textStyle}>0.0</div>
      <div style={indicatorStyle}>0.5</div>
        {/* <div style={indicatorText}>{kpValue}</div> */}
      <div style={topTextStyle}>8.0</div>
    </div>
  );
};

export default KpBar;
