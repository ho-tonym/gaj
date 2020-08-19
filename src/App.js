import React, {useEffect, useState} from 'react';
import styles from './App.module.css';

function App() {
  const [state, setState] = useState("WORLD");
  useEffect(() => {
    const interval = setInterval(gaj, 4000);
    return () => clearInterval(interval);
  }, []);

  function gaj(){
    setState("GAJ MARIO");
    setTimeout(()=> { setState("WORLD"); }, 100);
  }

  return (
    <div className={styles.App}>
      <h1>{state}</h1>
    </div>
  );
}

export default App;
