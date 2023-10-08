import React from 'react';

const kpStyle = {
  position: 'absolute',
  top: '50%', // Adjust the top position as needed
  right: '10px', // Adjust the right position as needed
  backgroundColor: 'green',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '50%',
  fontSize: '16px',
  transform: 'translateY(-50%)',
};

function KpActual({ number }) {
  return (
    <div style={kpStyle}>
      {number}
    </div>
  );
}

export default KpActual;