import './index.css';
import React from 'react';
import logo from './logo.svg';

function SpecialButton() {
  return <button type="button">Generate</button>;
}

/*export default function Form() {
  const [email, setEmail] = useState('');
variable

function handleChange (event) {
    setEmail(event.currentTarget.value);
  }

  return (
    <div>
      <label>
        Sign up for our newsletter
​
        <input
          type="email"
          value={email}

          onChange={handleChange}
        />
      </label>
​
      Email address entered: {email}
    </div>
  );
}*/

export default function App() {
  return (
    <div className="App">
      <h1 align="center">React Random Color Generator</h1>
      <SpecialButton />
    </div>
  );
}
