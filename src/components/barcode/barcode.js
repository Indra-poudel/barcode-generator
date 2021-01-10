import React from 'react';

import './barcode.css';

const Barcode = (props) => {
  const { binaryNumber = '' } = props;

  const BARCODE_CONTAINER_WIDTH = 600;

  return (
    <div className="barcode-wrapper">
      <div className="barcode-view-header">Generated Barcode View</div>
      <div
        className="barcode-view"
        style={{
          width: BARCODE_CONTAINER_WIDTH,
        }}>
        {binaryNumber.split('').map((binaryDigit) => {
          const calculatedWidth = BARCODE_CONTAINER_WIDTH / binaryNumber.length;
          return (
            <div className="barcode-square-wrapper">
              <p
                style={{
                  fontSize: calculatedWidth > 48 ? 48 : calculatedWidth,
                }}>
                {binaryDigit}
              </p>
              <div
                style={{
                  display: 'inline-block',
                  height: calculatedWidth,
                  width: calculatedWidth,
                  backgroundColor: Boolean(parseInt(binaryDigit)) ? 'black' : 'white',
                }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Barcode;
