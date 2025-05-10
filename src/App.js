import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const double = () => {
    setNumber(number * 2);
    console.log(number);
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={double}>Submit</button>
    </>
  )
}

export default App;


