import React from 'react';

import './input-handler.css';

const InputHandler = (props) => {
  const { errorMessage = '', onInputValueChange = () => {}, value = '' } = props;
  return (
    <div className="barcode-input-wrapper">
      <input className="barcode-input" placeholder="Enter Binary Number" onChange={onInputValueChange} value={value} />
      <div className="barcode-input-error">{errorMessage}</div>
    </div>
  );
};

export default InputHandler;
