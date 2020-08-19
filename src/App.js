import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState("WORLD");

  useEffect(() => {
  // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    const interval = setInterval(gaj, 4000);
    return () => clearInterval(interval);
  });

  function gaj(){
    setState("GAJ MARIO");
    setTimeout(()=> { setState("WORLD"); }, 100);
  }

  return (
    <div className="App">
      <h1>{state}</h1>
    </div>
  );
}

export default App;
