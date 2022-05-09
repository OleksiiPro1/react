import { useState } from 'react';

export default function StyleProp() {
const [height, setHeight] = useState(100);
return(
<>
<div style={{backgroundColor: 'green'height: height}}>
  Green color
</div>
)

}




/*
const hue = process.argv[2];
const luminosity = process.argv[3];
const color = randomColor({ hue: hue, luminosity: luminosity });

console.log(chalk.hex(`${color}`));
function App() {
  return (
    <div
      style={{
        backgroundColor: ${color},
        width: '100%',
        height: '100px',
      }}
    />
  );
}
export default randomColor;
*/