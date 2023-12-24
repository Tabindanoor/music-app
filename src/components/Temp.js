import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

const Temp = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTemperature(value);
  };

  const handleUnitChange = (e) => {
    const value = e.target.value;
    setUnit(value);
  };

  const convertTemperature = () => {
    if (!temperature || isNaN(temperature)) {
      alert('Please enter a valid number for temperature.');
      return;
    }

    const temp = parseFloat(temperature);

    switch (unit) {
      case 'celsius':
        setConvertedTemperature(`${(temp * 9) / 5 + 32} °F`);
        break;
      case 'fahrenheit':
        setConvertedTemperature(`${((temp - 32) * 5) / 9} °C`);
        break;
      case 'kelvin':
        setConvertedTemperature(`${temp + 273.15} K`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="converter-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter temperature"
          value={temperature}
          onChange={handleInputChange}
        />
        <select value={unit} onChange={handleUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>
      <button onClick={convertTemperature}>
        Convert 
        {/* <FontAwesomeIcon icon={faTemperatureHigh} /> */}
      </button>
      {convertedTemperature && (
        <div className="result-container">
          <h2>Converted Temperature:</h2>
          <p>{convertedTemperature}</p>
        </div>
      )}
    </div>
  );
};

export default Temp;
