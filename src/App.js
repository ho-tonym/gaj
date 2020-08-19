import React, {useEffect, useState} from 'react';
import styles from './App.module.css';

function App() {
  const [state, setState] = useState("ZA WARUDO");
  const [squares, setSquares] = useState([])
  useEffect(() => {
    fetch('https://usercontribution.herokuapp.com/mcabrex/activity')
    .then(response => response.json())
    .then((d) => {
      const x = Object.values(d.data[2020])
      const tempArray = []
      x.forEach(e=>{
        tempArray.push(Object.values(e))
      })
      setSquares(tempArray.flat())
    })
    // const interval = setInterval(gaj, 4000);
    // return () => clearInterval(interval);
  }, []);

  function gaj(){
    setState("GAJ MARIO");
    setTimeout(()=> { setState("WORLD"); }, 100);
  }

  function cubes(){
    return squares.map((e, i) => <span key={i} className={styles.square} style={ e ? {backgroundColor: "#FFBD75"} : {backgroundColor: "white" }}></span>)
  }

  function contributionDays(){
    let count = 0
    for (var i = 0; i < squares.length; i++) {
      if(!squares[i]){
        count++
      }
    }
    return count
  }

  return (
    <div className={styles.App}>
      <h1>{state}</h1>
      <p className={styles.font}>Days of no contributions for MCABREX: {contributionDays()}</p>
      <div className={styles.activityContainer}>
        {cubes()}
      </div>
    </div>
  );
}

export default App;
