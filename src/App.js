//Используем App.css
import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor.randomColor());

  return (
    <div className="App">
      <h1>Random Color</h1>
      <h2>React</h2>
      <div
        style={{
          backgroundColor: color,
          width: '100%',
          height: '400px',
          display: 'flex',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button onClick={() => setColor(randomColor.randomColor())}>
          Generated Color: {color}
        </button>
      </div>
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate
      </button>
      <h2>Push!</h2>
    </div>
  );
}
