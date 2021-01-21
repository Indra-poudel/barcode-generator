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
          display: 'flex',
          justifyContent: 'center',
        }}>
        <div
          className="barcode-square-wrapper"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          <div
            style={{
              marginRight: (BARCODE_CONTAINER_WIDTH / (binaryNumber.length / 2)) * 0.1,
              display: 'flex',
              alignSelf: 'flex-end',
              justifyContent: 'center',
              alignItems: 'center',
              height: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.5,
              width: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.5,
              backgroundColor: 'black',
            }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.25,
                width: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.25,
                backgroundColor: 'white',
              }}>
              <div
                style={{
                  margin: 'auto',
                  display: 'inline-block',
                  height: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.125,
                  width: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.125,
                  backgroundColor: 'black',
                }}
              />
            </div>
          </div>
          {binaryNumber.split('').map((binaryDigit) => {
            const calculatedWidth = (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.5;
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
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
                  }}
                />
              </div>
            );
          })}
          <div
            style={{
              marginLeft: (BARCODE_CONTAINER_WIDTH / (binaryNumber.length / 2)) * 0.1,
              display: 'flex',
              alignSelf: 'flex-end',
              justifyContent: 'center',
              alignItems: 'center',
              height: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.5,
              width: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.5,
              backgroundColor: 'black',
            }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.25,
                width: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.25,
                backgroundColor: 'white',
              }}>
              <div
                style={{
                  margin: 'auto',
                  display: 'inline-block',
                  height: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.125,
                  width: (BARCODE_CONTAINER_WIDTH / binaryNumber.length) * 0.125,
                  backgroundColor: 'black',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barcode;
