import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor.randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const generateColor = randomColor({ hue: hue, luminosity: luminosity });
  return (
    <div className="App">
      <h1>Random Color</h1>
      <h2>React</h2>
      <div
        style={{
          backgroundColor: generateColor,
          width: '100%',
          height: '90px',
          display: 'flex',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Generated Color: {generateColor}
      </div>
      <br />
      <br />
      <button onClick={() => setColor(generateColor)}>Generate</button>
      <br />
      <br />
      <div>
        <h3>Hue:</h3>
        <input
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
        <br />
        <br />
        <h3>Luminosity:</h3>
        <input
          value={luminosity}
          onChange={(event) => setLuminosity(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}
