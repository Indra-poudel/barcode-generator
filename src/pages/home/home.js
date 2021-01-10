import React, { useState } from 'react';

import Barcode from '../../components/barcode';
import InputHandler from '../../components/input-handler';

import './home.css';

const HomePage = () => {
  const [inputErrorMessage, setInputErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const binaryRegExp = /[0-1]$/;

  const onInputValueChange = (event) => {
    const value = event.target.value;
    const isBinaryNumber = binaryRegExp.test(value);

    if (isBinaryNumber || value === '') {
      setInputErrorMessage('');
      setInputValue(value);
    } else setInputErrorMessage('Please enter binary Number');
  };

  return (
    <div className="main-content-wrapper">
      <div className="homepage-header">Barcode Generator</div>
      <InputHandler errorMessage={inputErrorMessage} value={inputValue} onInputValueChange={onInputValueChange} />
      <Barcode binaryNumber={inputValue} />
    </div>
  );
};

export default HomePage;
